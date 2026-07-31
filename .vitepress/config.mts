import { defineConfig } from 'vitepress'

export default defineConfig({
  srcDir: 'src',
  lang: 'zh-CN',
  title: 'Seira Bot',
  description: 'Seira osu! 成绩查询 QQ 机器人使用文档',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['meta', { name: 'theme-color', content: '#74a6df' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  themeConfig: {
    siteTitle: 'Seira Bot',
    outline: {
      level: [2, 3],
      label: '本页目录'
    },
    lastUpdated: {
      text: '最后更新于'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    nav: [
      { text: '主页', link: '/' },
      { text: '开始使用', link: '/overview/use' },
      { text: '指令', link: '/overview/commands' },
      { text: '更新日志', link: '/overview/changelog' },
      { text: '部署', link: '/operations/deployment' }
    ],

    sidebar: [
      {
        text: '概览',
        items: [
          { text: '介绍', link: '/overview/intro' },
          { text: '开始使用机器人', link: '/overview/use' },
          { text: '完整指令列表', link: '/overview/commands' },
          { text: '常见问题', link: '/overview/faq' },
          { text: '更新日志', link: '/overview/changelog' }
        ]
      },
      {
        text: '使用指南',
        items: [
          { text: '目标与快捷查询', link: '/guide/targets' },
          { text: '排队、上下文与文件', link: '/guide/behavior' }
        ]
      },
      {
        text: '指令详情',
        items: [
          { text: '绑定、好友与排行', link: '/commands/account-social' },
          { text: '成绩查询与分析', link: '/commands/scores' },
          { text: '谱面与谱面集', link: '/commands/beatmaps' },
          { text: '回放与视频', link: '/commands/replays' },
          { text: '状态与帮助', link: '/commands/general' }
        ]
      },
      {
        text: '自行部署',
        items: [
          { text: '安装与启动', link: '/operations/deployment' },
          { text: '配置文件', link: '/operations/configuration' },
          { text: '调试指令', link: '/operations/debug' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/BotSeira' }
    ],

    footer: {
      message: 'Seira is under MIT License'
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '没有找到相关结果',
            resetButtonTitle: '清除查询',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    }
  }
})
