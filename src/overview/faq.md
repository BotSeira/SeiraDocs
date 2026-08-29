# 常见问题

如果在使用过程中遇到了问题，或者有新功能/改进建议，
可以在 [GitHub 仓库](https://github.com/BotSeira/SeiraCore) 中提交 Issue 和 PR，
也可以加入~~闲聊吹水~~ QQ 群与群主对线：[905832095](https://qm.qq.com/cgi-bin/qm/qr?k=2u4UsEFsZvxK6dREc0truRihiueLrR4j&jump_from=webapi&authKey=D/P+KSGmk+1kNjtU8gVcXJ0IsdztPSDN6tBNFWlw8iPynlTzDSicT1w2n0/D7qh9)。

以下是一些常见的问题，及其对应的（可能的）解决方案。

### 为什么群聊中发送指令没有反应

机器人在默认权限下只能接收到群聊中@机器人的消息，所以在群聊中使用需要在开头加上@机器人的操作。

### 被误绑定其他玩家的档案了怎么办

使用 `/unbind` 解绑即可重新使用 `/bind` 绑定。建议在单聊中绑定以防止此类情况的发生。

### 为什么我的很多成绩都没有回放

受限于 osu! 机制，部分成绩的回放不会上传。可以尝试手动将回放文件私聊发送给机器人来手动上传。

对于详细的成绩与回放上传规则，可以参见[成绩与回放](/guide/score-replay)。

### 为什么回放渲染提交后一直没有结果

可尝试用 `/rstat` 查询当前状态。 由于服务器机能限制，回放渲染较为耗时，
有可能会出现消息回复超时的情况，所以请尽量不要渲染过长的回放~

### 为什么部分数据和游戏里不一样

Seira使用lazer的数据源，所以和stable中现实的可能会有一定差异。
此外，成绩处理的一些流程也可能无法完全还原游戏的处理操作。
若遇到了结果差异过大导致无法正常使用的情况，可在 [GitHub Issues](https://github.com/BotSeira/SeiraCore/issues) 提交复现信息。
