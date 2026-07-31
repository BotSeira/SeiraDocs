# 配置文件

Seira 固定从工作目录读取 `config.yml`。首次运行会复制示例并退出。

## 完整示例

```yaml
seira:
  sqlitePath: "./data/seira.db"
  directUrl: "https://example.com/direct"
  queueMessageInGroup: false
  debugMode: false
  watchIntervalMinutes: 5
  adminIds: []

binding:
  listenPort: 8722
  listenPath: "/callback"
  clientId: 12345
  clientSecret: "replace-me"

ostella:
  endpoint: "http://localhost:8721"

qq:
  selfId: "bot-openid"
  appId: "qq-app-id"
  appSecret: "replace-me"

cos:
  secretId: "replace-me"
  secretKey: "replace-me"
  region: "ap-shanghai"
  bucket: "example-1234567890"
  baseUrl: ""
  keyPrefix: "seira"
```

## `seira`

| 字段                   | 类型       | 作用                                               |
|------------------------|------------|----------------------------------------------------|
| `sqlitePath`           | 字符串     | SQLite 数据库路径；父目录应可写                    |
| `directUrl`            | 字符串     | 消息按钮的跳转服务根地址，用于谱面、玩家和房间链接 |
| `queueMessageInGroup`  | 布尔       | 是否在群聊显示普通异步任务的“已加入队列”提示       |
| `debugMode`            | 布尔       | 启用 DEBUG 日志和 `/debug.*` 路由                  |
| `watchIntervalMinutes` | 整数       | 监视间隔时间，单位为分钟                           |
| `adminIds`             | 字符串列表 | 允许使用调试路由的 QQ 用户 OpenID                  |

`debugMode` 和 `adminIds` 必须同时满足才能使用调试指令。管理员 ID 可先通过 `/inspect` 取得。

## `binding`

| 字段           | 类型   | 作用                             |
|----------------|--------|----------------------------------|
| `listenPort`   | 整数   | 本地 OAuth 回调 HTTP 监听端口    |
| `listenPath`   | 字符串 | OAuth 回调路径，例如 `/callback` |
| `clientId`     | 整数   | osu! OAuth 应用 Client ID        |
| `clientSecret` | 字符串 | osu! OAuth 应用密钥              |

当前授权链接没有显式传入 `redirect_uri`，回调可达性和应用端设置必须与实际部署一致。外网部署时还需通过反向代理、端口映射或其他方式让 osu! 授权流程能访问回调。

## `ostella`

| 字段       | 类型   | 作用                                           |
|------------|--------|------------------------------------------------|
| `endpoint` | 字符串 | oStella API 根地址，不要在末尾附加具体接口路径 |

默认示例为 `http://localhost:8721`。Seira 启动不一定会立即验证全部接口，建议通过 `/stat`、`/rs` 和 `/m` 做完整检查。

## `qq`

| 字段        | 类型   | 作用                                                  |
|-------------|--------|-------------------------------------------------------|
| `selfId`    | 字符串 | 机器人 OpenID，用于识别并移除群消息开头的 @机器人标记 |
| `appId`     | 字符串 | QQ 开放平台 AppID，也参与每日人品初始化               |
| `appSecret` | 字符串 | QQ 开放平台 AppSecret，用于取得访问 Token             |

`selfId` 配错可能导致群聊消息中的 @前缀无法被清理，从而使合法指令无法解析。

## `cos`

| 字段                     | 类型   | 作用                                         |
|--------------------------|--------|----------------------------------------------|
| `secretId` / `secretKey` | 字符串 | 腾讯云 COS 凭据                              |
| `region`                 | 字符串 | 存储桶地域                                   |
| `bucket`                 | 字符串 | 完整存储桶名称                               |
| `baseUrl`                | 字符串 | 可选自定义访问域名；空值时组合腾讯云默认域名 |
| `keyPrefix`              | 字符串 | 对象键前缀；空值时回退为 `seira`             |

Seira 会把 oStella 返回的图片上传到 COS，再把可访问 URL 放入 QQ Markdown 消息。

## 安全建议

- 永远不要把 `config.yml`、Token 或数据库上传到公开仓库。
- 为 COS 使用最小权限密钥，并限制到所需存储桶和操作。
- 生产环境保持 `debugMode: false`；需要排查时短时开启，用完立即关闭。
- `/debug.db` 能任意读写数据库，只把管理员权限授予可信维护者。
- 修改凭据后重启 Seira，使所有服务使用新配置。
