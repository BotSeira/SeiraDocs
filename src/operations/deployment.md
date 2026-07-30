# 安装与启动

本页面向希望自行运行 SeiraCore 的维护者。普通用户只需阅读[开始使用机器人](/overview/use)。

## 环境要求

- JDK 25。
- Maven 3.x。
- QQ 开放平台机器人应用及 `AppID`、`AppSecret`、机器人 OpenID。
- 可由 Seira 访问的 oStella API。
- osu! OAuth 应用，用于 `/bind`、好友和多人房间。
- 腾讯云 COS 存储桶，用于机器人发送图片和媒体。

当前项目版本为 `1.8.0`，主类为 `xyz.zcraft.seira.Seira`。

## 获取并编译

```powershell
git clone https://github.com/ZayrexDev/Seira.git
cd Seira/SeiraCore
mvn -U clean package
```

打包成功后会生成包含依赖的可执行 JAR，名称类似：

```text
target/SeiraCore-1.8.0-jar-with-dependencies.jar
```

也可以直接从源码启动：

```powershell
mvn -U clean compile exec:java
```

## 首次启动

工作目录中没有 `config.yml` 时，Seira 会从资源内复制示例配置，然后立即退出：

```powershell
mvn -U clean compile exec:java
```

编辑新生成的 `config.yml`，补齐所有凭据，再次执行启动命令。使用 JAR 时：

```powershell
java -jar target/SeiraCore-1.8.0-jar-with-dependencies.jar
```

`config.yml`、SQLite 数据库和日志等相对路径都以启动时的工作目录为基准。建议始终从固定目录启动。

## 启动顺序

程序启动时会：

1. 读取 `config.yml`。
2. 在 `debugMode` 开启时把根日志级别调整为 DEBUG。
3. 初始化 SQLite 数据库。
4. 启动 osu! OAuth 回调监听器。
5. 初始化 QQ Token、COS、统计和每日人品数据。
6. 连接 QQ Gateway；断线后等待约 3 秒并自动重连。

因此应先确保 oStella、数据库目录、OAuth 回调网络和外部凭据均可用。

## 部署检查

启动后依次验证：

```text
/stat
/inspect
/bind
/rs
/m rs1
```

- `/stat` 能确认 Seira、oStella 和 osu! 的连通性。
- `/inspect` 可取得管理员配置所需的发送者 OpenID。
- `/bind` 验证 OAuth 回调。
- `/rs` 和 `/m rs1` 验证上游数据与 COS 图片发送。

## 更新

更新源码后重新执行：

```powershell
git pull
mvn -U clean test
mvn -U clean package
```

停止旧进程后再启动新 JAR。保留 `config.yml` 和数据库文件，并在升级前备份 SQLite 数据库。不要把真实密钥提交到 Git。
