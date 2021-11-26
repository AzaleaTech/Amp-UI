import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","前览",["/index.html","/README.md"]],
  ["v-3d924e45","/docs/avatar.html","Avatar 头像",["/docs/avatar","/docs/avatar.md"]],
  ["v-263e9b51","/docs/badge.html","Badge 徽标",["/docs/badge","/docs/badge.md"]],
  ["v-85f4afe8","/docs/button.html","Button 按钮",["/docs/button","/docs/button.md"]],
  ["v-a02302f2","/docs/buttonGroup.html","Button-group 按钮组",["/docs/buttonGroup","/docs/buttonGroup.md"]],
  ["v-faded7a4","/docs/card.html","Card 卡片",["/docs/card","/docs/card.md"]],
  ["v-fe8e9e4a","/docs/checkbox.html","Checkbox 多选框",["/docs/checkbox","/docs/checkbox.md"]],
  ["v-4c1b9f18","/docs/checkboxGroup.html","CheckboxGroup 多选框组",["/docs/checkboxGroup","/docs/checkboxGroup.md"]],
  ["v-1389e99e","/docs/collapse.html","Collapse 折叠列表",["/docs/collapse","/docs/collapse.md"]],
  ["v-12cde9e7","/docs/cropper.html","Cropper 图片裁剪",["/docs/cropper","/docs/cropper.md"]],
  ["v-274e2fb6","/docs/dialog.html","Dialog 弹出框",["/docs/dialog","/docs/dialog.md"]],
  ["v-bfeb8a4a","/docs/divider.html","Divider 分割线",["/docs/divider","/docs/divider.md"]],
  ["v-05ec1a0c","/docs/form.html","Form 表单",["/docs/form","/docs/form.md"]],
  ["v-6c78cd91","/docs/header.html","Header 顶部栏",["/docs/header","/docs/header.md"]],
  ["v-3e4b4c65","/docs/icon.html","Icon 图标",["/docs/icon","/docs/icon.md"]],
  ["v-147825fb","/docs/","快速上手",["/docs/index.html","/docs/index.md"]],
  ["v-38785f8a","/docs/input.html","Input 输入框",["/docs/input","/docs/input.md"]],
  ["v-a943f37e","/docs/parse.html","Parse 富文本解析",["/docs/parse","/docs/parse.md"]],
  ["v-471929bd","/docs/player.html","Player 语音播放器",["/docs/player","/docs/player.md"]],
  ["v-349acc0e","/docs/radio.html","Radio 单选框",["/docs/radio","/docs/radio.md"]],
  ["v-31c68e8c","/docs/radioGroup.html","RadioGroup 单选框组",["/docs/radioGroup","/docs/radioGroup.md"]],
  ["v-c3d73744","/docs/rate.html","Rate 评分",["/docs/rate","/docs/rate.md"]],
  ["v-746abe4d","/docs/record.html","Record 录音",["/docs/record","/docs/record.md"]],
  ["v-87df1366","/docs/steps.html","Steps 步骤条",["/docs/steps","/docs/steps.md"]],
  ["v-b6606d6c","/docs/switch.html","Switch 开关",["/docs/switch","/docs/switch.md"]],
  ["v-2650f080","/docs/tabs.html","Tabs 标签页",["/docs/tabs","/docs/tabs.md"]],
  ["v-2f5d2c7a","/docs/tag.html","Tag 标签",["/docs/tag","/docs/tag.md"]],
  ["v-6832d966","/docs/toast.html","Toast 提示框",["/docs/toast","/docs/toast.md"]],
  ["v-655eaa9d","/docs/upload.html","Upload 上传",["/docs/upload","/docs/upload.md"]],
  ["v-d98720a6","/docs/dev/commit.html","",["/docs/dev/commit","/docs/dev/commit.md"]],
  ["v-2b4f175c","/docs/dev/guide.html","贡献指南",["/docs/dev/guide","/docs/dev/guide.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
