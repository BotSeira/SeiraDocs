# 交互与娱乐

## `/rg`：猜 Rank 游戏 {#rg}

`/rg` 仅支持群聊，每个群同时只能进行一轮游戏。

```text
/rg start
/rg group
/rg #123456
/rg end
/rg wish
```

- `/rg start`：随机选择一条成绩，匿名渲染其高光。视频发送后即可开始猜测。
- `/rg group`：随机选择一条 **群友** 的成绩进行游戏。
- `/rg #123456`：猜该玩家的全球 Rank；同一成员再次提交会更新自己的猜测。
- `/rg end`：结束本轮，在一条消息中揭晓玩家 Rank、成绩 PP 和所有成员的猜测排行榜。开始猜测后的 3 分钟内仅发起者和机器人管理员可以结束，之后群内成员均可结束。
- `/rg wish`：进行许愿。许愿后，你被 `/rg group` 选作目标的权重会有所提升。

排行榜使用对数误差计分：

```text
error = |log10(猜测 Rank) - log10(实际 Rank)|
得分 = max(0, 1000 × (1 - error))
```

因此，相同比例的偏差会得到相近评价；完全猜中可得 1000 分。



## `/watch`：成绩监视 {#watch}

`/watch` 可以在群聊中监视指定玩家的成绩更新。监视的成绩会在群里自动发送。

### `/watch add`：添加监视

```text
/watch add <UID/用户名/@用户> [时间]
```

添加监视。参数中 `时间` 是可选的，表示监视的时长，单位为分钟，可用范围为 1-120 分钟。若省略则默认 10 分钟。

### `/watch del`：移除监视

```text
/watch del [UID/用户名/@用户]
```

删除监视。若省略目标，则删除当前群中所有监视。

### `/watch list`：列出监视

```text
/watch list
```

列出当前群中生效的所有监视任务。

## `/mpwatch`：多人房间监视 {#mpwatch}

`/mpwatch` 仅支持群聊。它可以监视 osu!stable 或 osu!lazer 多人房间，在每张谱面完成后向群内推送一张 oStella 结果图；房间结束后会发送提示并自动停止。

```text
/mpwatch
/mpwatch [start] <房间ID> [stable|lazer]
/mpwatch [start] <房间链接>
/mpwatch status
/mpwatch stop
/mpwatch stop all
```

- 无参：相当于 `/mpwatch start`，会尝试获取当前用户绑定的玩家所在的 lazer 房间。
- `start`：可省略，`/mpwatch <参数>` 与 `/mpwatch start <参数>` 等价。
启动前已经完成的谱面不会补发；每名用户在同一群中可以启动一个监视，再次启动只会替换自己的任务。
同一房间在同一群中只能由一名用户监视，但不同群互不影响。
- 房间 ID：可在 ID 后指定 `stable` 或 `lazer`；省略版本时默认为 `lazer`。
- 房间链接：lazer 的 `/multiplayer/rooms/<ID>` 和 stable 的 `/community/matches/<ID>`（以及旧式 `/mp/<ID>`）会自动识别 ID 与版本。
- `status`：查看自己在当前群启动的房间监视。
- `stop`：停止自己在当前群启动的房间监视；`stop all` 会停止当前群的全部房间监视。

结果图包含本轮谱面信息、加谱玩家，以及每位玩家选择的难度、MOD、ACC、combo、分数、PP、名次和评价等级。多人监视依赖机器人的群主动消息权限。
