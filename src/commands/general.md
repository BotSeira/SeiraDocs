# 状态与帮助

## `/stat`：服务状态 {#stat}

```text
/stat
```

显示 Seira、oStella 与 osu! 服务状态，并包含：

- 总运行时长与本次连续运行时长。
- 累计处理指令数和近 30 分钟指令数。
- 累计回放渲染数。
- 已记录群聊数和已绑定用户数。

## `/inspect`：查看上下文 ID {#inspect}

```text
/inspect
```

显示当前发送者 OpenID、群 OpenID 和消息 ID。私聊中群 ID 为 `null`。

这些 ID 常用于部署配置和问题排查。不要在公开场合泄露不必要的用户标识。

## `/help`：内置帮助 {#help}

```text
/help
```

机器人内置的简要命令清单。

## `/faq`：常见问题 {#faq}

```text
/faq
```

显示部分常见问题。详情请见 [常见问题](/overview/faq)。