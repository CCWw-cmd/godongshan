import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "东山岛六人行🏄🏻‍",
  description: "关于东山岛的一些攻略",
  base: "/godongshan/",
  appearance: "dark",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "攻略", link: "/markdown-examples" },
    ],

    sidebarMenuLabel: "菜单",
    sidebar: [
      {
        text: "攻略",
        items: [{ text: "每日行程", link: "/markdown-examples" }],
      },
    ],
    outline: {
      level: [2, 4], // 显示2-4级标题
      // level: 'deep', // 显示2-6级标题
      label: "目录", // 文字显示
    },
  },
})
