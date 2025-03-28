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
      { text: "路线 🚶‍➡️", link: "/path" },
      { text: "美食 🍔", link: "/food" },
      { text: "注意 📝", link: "/tips" },
    ],

    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    sidebar: [
      {
        text: "攻略 🚩",
        items: [
          { text: "路线 🚶‍➡️", link: "/path" },
          { text: "美食 🍔", link: "/food" },
          { text: "注意 📝", link: "/tips" },
        ],
      },
    ],
    outline: {
      level: [2, 4], // 显示2-4级标题
      // level: 'deep', // 显示2-6级标题
      label: "目录", // 文字显示
    },
    //上次更新时间 //
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short", // 可选值full、long、medium、short
        timeStyle: "medium", // 可选值full、long、medium、short
      },
    },
  },
})
