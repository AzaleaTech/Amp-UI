Component({
  properties: {
    // home_line | home_fill | arrow-up | arrow-down | arrow-right | arrow-left | media_fill | upload-image | upload-video | media_line | close | error | success | pending | info | danxuanxuanzhong | select | playing-1 | playing-2 | playing-3 | audio-bg | recording | playing | visible | invisible | arrow-up_fill | arrow-down_fill | satisfied_fill | satisfied_line | service_fill | service_line | picture_fill | picture_line | love_fill | love_line | positioning_fill | positioning_line | share_line | share_fill | instructions_fill | instructions_line | succeed_line | error_line | about_line | delete_fill | photograph_line | telephone_fill | telephone_line | video_line | trumpet_line | trumpet_fill | praise_fill | praise_line | star_fill | star_line | succeed_fill | error_fill | about_fill | delete_line | photograph_fill | video_fill
    name: {
      type: String,
    },
    // string | string[]
    color: {
      type: null,
      observer: function (color) {
        this.setData({
          colors: this.fixColor(),
          isStr: typeof color === 'string',
        });
      },
    },
    size: {
      type: Number,
      value: 60,
      observer: function (size) {
        this.setData({
          svgSize: parseInt((size / 750) * wx.getSystemInfoSync().windowWidth),
        });
      },
    },
  },
  data: {
    colors: '',
    svgSize: parseInt((60 / 750) * wx.getSystemInfoSync().windowWidth),
    quot: '"',
    isStr: true,
  },
  methods: {
    fixColor: function () {
      var color = this.data.color;
      var hex2rgb = this.hex2rgb;

      if (typeof color === 'string') {
        return color.indexOf('#') === 0 ? hex2rgb(color) : color;
      }

      return color.map(function (item) {
        return item.indexOf('#') === 0 ? hex2rgb(item) : item;
      });
    },
    hex2rgb: function (hex) {
      var rgb = [];

      hex = hex.substr(1);

      if (hex.length === 3) {
        hex = hex.replace(/(.)/g, '$1$1');
      }

      hex.replace(/../g, function (color) {
        rgb.push(parseInt(color, 0x10));
        return color;
      });

      return 'rgb(' + rgb.join(',') + ')';
    },
  },
});
