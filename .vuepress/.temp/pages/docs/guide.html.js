export const data = {
  "key": "v-2c8ca8d0",
  "path": "/docs/guide.html",
  "title": "快速上手",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "使用",
      "slug": "使用",
      "children": [
        {
          "level": 3,
          "title": "自定义全局样式",
          "slug": "自定义全局样式",
          "children": []
        },
        {
          "level": 3,
          "title": "引入组件",
          "slug": "引入组件",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Notice",
      "slug": "notice",
      "children": []
    }
  ],
  "filePathRelative": "docs/guide.md",
  "git": {
    "updatedTime": null,
    "contributors": []
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
