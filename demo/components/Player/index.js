"use strict";var innerAudioContext=wx.createInnerAudioContext();Component({properties:{url:{type:String,value:""}},data:{playIcon:2,time:null,isPlaying:!1},lifetimes:{attached:function(){var t=this;wx.setInnerAudioOption({obeyMuteSwitch:!1}),innerAudioContext.onEnded(function(){clearTimeout(t.data.time),t.data.time=null,t.setData({playIcon:2,isPlaying:!1})}),innerAudioContext.onStop(function(){t.setData({playIcon:2,isPlaying:!1}),clearTimeout(t.data.time),t.data.time=null})}},methods:{playVoice:function(){var t=this;this.data.time=setTimeout(function(){t.setData({playIcon:2===t.data.playIcon?0:t.data.playIcon+1}),t.playVoice()},300)},tapPlayer:function(){var t=this;innerAudioContext.stop(),this.data.time?(this.setData({playIcon:1,isPlaying:!1}),innerAudioContext.stop(),clearTimeout(this.data.time),this.data.time=null):setTimeout(function(){innerAudioContext.src=t.properties.url,innerAudioContext.play(),t.playVoice(),t.setData({playIcon:0,isPlaying:!0})},50)}}});