# 调试指令

::: danger 危险区域
调试指令可能执行任意 SQL、上传外部媒体、批量访问 osu! API 或发送主动消息。只应在受控环境短时启用，不保证向后兼容。
:::

## 启用条件

`config.yml` 必须同时满足：

```yaml
seira:
  debugMode: true
  adminIds:
    - "当前维护者的QQ用户OpenID"
```

`debugMode` 关闭时，调试指令表现为未知指令；开启但发送者不在 `adminIds` 时会提示没有权限。可先用 `/inspect` 获取 OpenID。

## `/debug.upload`

```text
/debug.upload <type> <cos> <url>
```

调用 QQ 私聊或群聊媒体上传接口：

- `type`：直接解析为整数媒体类型；非法整数会导致指令处理错误。
- `cos`：只有字面值 `true` 才启用对应布尔选项。
- `url`：待上传媒体 URL。

此命令会让服务端访问给定 URL。不要对不可信地址使用。

## `/debug.test`

```text
/debug.test
```

发送一条固定测试 Markdown，用于验证消息格式。

## `/debug.message`

```text
/debug.message <base64>
```

把命令后的全部文本作为 Base64 解码，并把结果直接当作 Markdown 发送。可生成按钮以外的格式测试，但不要解码和展示敏感数据。

## `/debug.db`

```text
/debug.db <SQL>
```

把命令后的全部文本交给数据库层执行，可查询也可修改。错误时尽量返回底层 SQLite 错误消息。

::: danger
该命令没有只读限制。执行修改前先备份 `seira.sqlitePath` 指向的数据库。
:::

## `/debug.update-user-info`

```text
/debug.update-user-info
```

取得数据库中所有已知 osu! UID，批量向上游查询，并更新本地用户名。用户较多时会产生显著 API 负载。

## `/debug.get-all-friends`

```text
/debug.get-all-friends
```

遍历数据库中全部 osu! Token，刷新每个用户的关注和互相关注关系，同时更新用户名。无效 Token 或单个异常可能影响整批任务。

## `/debug.validate-token`

```text
/debug.validate-token
```

遍历所有已保存 Token。过期 Token 会尝试刷新；刷新失败时从数据库移除，并汇报更新数和移除数。

## `/debug.active-message`

```text
/debug.active-message
```

仅在群聊上下文中直接发送内容为 `111` 的主动消息测试。当前处理器随后不再回复确认消息。

## 关闭调试

验证完成后将 `debugMode` 改回 `false` 并重启。若曾执行数据库修改或批量任务，应检查日志、数据库状态以及 `/stat` 输出。
