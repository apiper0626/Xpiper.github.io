import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  theme: defaultTheme({
    logo: "https://vuejs.press/images/hero.png",
    navbar: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "接口文档",
        link: "/api/",
      },
    ],
    sidebar: {
      "/api/": [
        {
          text: "生态数智云",
          collapsible: true,
          prefix: "stszy/",
          children: [
            "h5bot.md",
            "vue2-bot.md",
            "wechatPush.md",
            "stomp.md",
            "botApi.md",
            "xiaochengxuApi.md",
            "aiParser.md",
          ],
        },
        {
          text: "李鹏达",
          collapsible: true,
          prefix: "lpd/",
          children: [
            "意图类接口统一返回格式.md",
            "des加解密.md",
            "模板类智能体接口.md",
          ],
        },
        // {
        //   text: "段浩松",
        //   collapsible: true,
        //   prefix: "dhs/",
        //   children: [
        //     {
        //       text: "省厅大模型",
        //       collapsible: true,
        //       prefix: "省厅大模型/",
        //       children: [
        //         "PDF2WORD接口说明.md",
        //         "创建prompt接口.md",
        //         "模板类智能体接口.md",
        //         "对话接口111.md",
        //         "摘要与标签接口说明.md",
        //         "摘要生成接口说明.md",
        //         "省厅自定义知识库知识.md",
        //       ],
        //     },
        //     {
        //       text: "数链AI接口调用",
        //       collapsible: true,
        //       prefix: "数链AI接口调用/",
        //       children: [
        //         "weather_intent接口.md",
        //         "删除向量内容.md",
        //         "接口文档.md",
        //         "数链AI接口调用文档.md",
        //         "数链AI接口调用文档1.md",
        //         "数链AI接口调用文档2.md",
        //         "新建笔记(2024130).md",
        //         "新建笔记(20231010).md",
        //         "新建笔记(20231228).md",
        //         "根据关键词搜索知识库向量.md",
        //         "获取向量库数据接口.md",
        //       ],
        //     },
        //     {
        //       text: "微信消息推送",
        //       collapsible: true,
        //       prefix: "微信消息推送/",
        //       children: [
        //         "微信发送消息接口.md",
        //         "微信推送图片或文件.md",
        //         "微信机器人接口.md",
        //       ],
        //     },
        //     {
        //       text: "语音相关",
        //       collapsible: true,
        //       prefix: "语音相关/",
        //       children: ["Speech.md"],
        //     },
        //   ],
        // },
      ],
    },
    colorMode: "dark",
    sidebarDepth: 2,
  }),
  bundler: viteBundler(),
  lang: "zh-CN",
  title: "mydocs",
  description: "这是我的第一个 VuePress 站点",
  head: [
    ["link", { rel: "icon", href: "https://vuejs.press/images/hero.png" }],
  ],
  base: "/mydocs/",
  dest: "mydocs",
});
