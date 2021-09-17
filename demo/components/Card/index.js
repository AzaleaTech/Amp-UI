Component({
  properties: {
    /**
     * 卡片标题，必填
     */
    title: {
      type: String,
      value: '',
    },
    /**
     * 卡片文本，必填
     * @property {string} label   -标识
     * @property {string} content -文本
     * @example
     * [{ label:'', content:''}]
     */
    contents: {
      type: Array,
      value: [],
    },
    /**
     * 卡片图标地址，可选
     */
    imgUrl: {
      type: String,
      value: undefined,
    },
    /**
     * 卡片页脚文本，可选
     */
    footer: {
      type: String,
      value: undefined,
    },
    /**
     * 特殊文本栏，可选
     * @property {string}   label               -标识
     * @property {string}   content             -文本
     * @property {string}   [color]             -文本颜色
     * @property {number}   [size]              -标识+文本+标签+点赞数的字体大小
     * @property {object}   [likes]             -点赞模块
     * @property {string}   likes.iconUrl       -点赞图标地址
     * @property {number}   likes.value         -点赞数
     * @property {array<object>} [tags]         -标签模块数组
     * @property {object}   tags[]              -标签
     * @property {string}   tags[].content      -标签文本
     * @property {string}   [tags[].number]     -标签边框+字体颜色
     * @example
     * {
     *   label:'',
     *   content: '',
     *   color: 'rgba(0,0,0,1)',
     *   size: 20,
     *   likes: { iconUrl: '', value: 0 },
     *   tags: [{ content:'', color:'rgba(0,0,0,1)' }],
     * }
     */
    spec: {
      type: Object,
      value: undefined,
    },
  },

  methods: {
    handleTap(e) {
      this.triggerEvent('click', e);
    },

    handleLike(e) {
      this.triggerEvent('like', e);
    },
  },
});
