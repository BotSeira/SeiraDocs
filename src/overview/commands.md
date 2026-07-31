# 完整指令列表

## 账号、好友与群体功能

| 指令                                                     | 用法                       | 作用                       | 备注                             |
|----------------------------------------------------------|----------------------------|----------------------------|----------------------------------|
| [`/bind`](/commands/account-social#bind)                 | `/bind`                    | 开始 osu! OAuth 绑定       | 授权链接 20 分钟内有效           |
| [`/unbind`](/commands/account-social#unbind)             | `/unbind`                  | 解除当前 QQ 用户的绑定     | 无                               |
| [`/clearhistory`](/commands/account-social#clearhistory) | `/clearhistory`            | 清除自己在群聊中的成员记录 | 会影响群筛选和群排行             |
| [`/f`](/commands/account-social#f)                       | `/f`                       | 获取好友关系               | 需绑定；群聊中只显示群内相关玩家 |
| [`/fall`](/commands/account-social#fall)                 | `/fall`                    | 获取完整好友关系           | 需绑定                           |
| [`/fclear`](/commands/account-social#fclear)             | `/fclear`                  | 清除已同步的好友记录       | 需绑定                           |
| [`/lb`](/commands/account-social#lb)                     | `/lb [谱面目标] [UID列表]` | 表现分排行或谱面排行       | 无参数时使用当前群成员           |
| [`/mp`](/commands/account-social#mp)                     | `/mp`                      | 查看当前多人房间           | 需绑定且 OAuth Token 有效        |

详见[绑定、好友与排行](/commands/account-social)。

## 成绩与玩家

| 指令                               | 用法                             | 作用                                               |
|------------------------------------|----------------------------------|----------------------------------------------------|
| [`/bo`](/commands/scores#bo)       | `/bo [n] [UID/用户名/@用户]`     | 无参数查最佳成绩详情；有 n 时生成最好 n 条汇总     |
| [`/bp`](/commands/scores#bo)       | 与 `/bo` 相同                    | `/bo` 的完整别名                                   |
| [`/rs`](/commands/scores#rs)       | `/rs [n] [UID/用户名/@用户]`     | 无参数查最近一条；有 n 时生成最近 n 条，包含失败   |
| [`/rp`](/commands/scores#rp)       | `/rp [n] [UID/用户名/@用户]`     | 无参数查最近一条通过；有 n 时生成最近 n 条通过成绩 |
| [`/s`](/commands/scores#s)         | `/s [成绩ID/快捷查询]`           | 获取单条成绩图；可使用最近目标                     |
| [`/sa`](/commands/scores#sa)       | `/sa [成绩ID/快捷查询]`          | 获取成绩分析图；可使用最近目标                     |
| [`/ma`](/commands/scores#ma)       | `/ma [成绩ID/快捷查询] [n/#n]` ` | 列出 Miss 或可视化第 n 个 Miss                     |
| [`/u`](/commands/scores#u)         | `/u <UID/用户名/@用户>`          | 获取玩家资料和最好成绩摘要                         |
| [`/watch`](/commands/scores#watch) | `/watch <add/del/list> [目标]`   | 开始/移除/列出当前群中的成绩监视                   |

详见[成绩查询与分析](/commands/scores)。

## 谱面与谱面集

| 指令                                 | 用法                    | 作用                                          |
|--------------------------------------|-------------------------|-----------------------------------------------|
| [`/m`    ](/commands/beatmaps#m)     | `/m [谱面目标] [Mod]`   | 获取谱面信息；可使用最近目标                  |
| [`/ap`   ](/commands/beatmaps#ap)    | `/ap [谱面目标]`        | 获取谱面音频预览；可使用最近目标              |
| [`/bgp`  ](/commands/beatmaps#bgp)   | `/bgp [谱面目标]`       | 获取谱面背景预览；可使用最近目标              |
| [`/ms`   ](/commands/beatmaps#ms)    | `/ms [谱面集目标]`      | 获取谱面集信息；可使用最近目标                |
| [`/dl`   ](/commands/beatmaps#dl)    | `/dl [谱面集目标]`      | 获取谱面集镜像下载入口；可使用最近目标或 `mp` |
| [`/sms`  ](/commands/beatmaps#sms)   | `/sms [#页数] <关键字>` | 搜索谱面集                                    |
| [`/daily`](/commands/beatmaps#daily) | `/daily`                | 获取 osu! 每日挑战信息                        |
| [`/luck` ](/commands/beatmaps#luck)  | `/luck`                 | 获取当天固定的“今日人品”和推荐谱面集          |

详见[谱面与谱面集](/commands/beatmaps)。

## 回放与视频

| 指令                                | 用法                                | 作用                             | 备注                       |
|-------------------------------------|-------------------------------------|----------------------------------|----------------------------|
| [`/r`    ](/commands/replays#r)     | `/r [成绩目标] [[开始]-[结束]]`     | 渲染高光、片段或完整回放         | 省略目标时使用最近目标     |
| [`/rsc`  ](/commands/replays#rsc)   | `/rsc [谱面目标] [+ID列表/=ID列表]` | 生成多人同屏回放                 | 仅群聊                     |
| [`/rstat`](/commands/replays#rstat) | `/rstat [任务ID]`                   | 查询渲染状态或重新取得已完成视频 | 省略 ID 时查自己的最近任务 |

详见[回放与视频](/commands/replays)。

## 状态与帮助

| 指令                                    | 用法       | 作用                                     |
|-----------------------------------------|------------|------------------------------------------|
| [`/stat`   ](/commands/general#stat)    | `/stat`    | 显示 Seira、oStella、osu! 状态及运行统计 |
| [`/inspect`](/commands/general#inspect) | `/inspect` | 显示当前用户、群组和消息 ID              |
| [`/help`   ](/commands/general#help)    | `/help`    | 显示机器人内置简要帮助                   |
| [`/faq`    ](/commands/general#faq)     | `/faq`     | 显示常见问题                             |

详见[状态与帮助](/commands/general)。