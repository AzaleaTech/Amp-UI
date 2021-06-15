Page({
  data: {
    background: 'white',
    color: 'black',
    hasReturn: true,
    title: 'Header',
  },

  handleBackground(){
    this.setData({
      background: this.data.background === 'white' ? 'gray' : 'white',
    });
  },

  handleColor(){
    this.setData({
      color: this.data.color === 'black' ? 'blue' : 'black',
    });
  },

  handleReturn(){
    this.setData({
      hasReturn: !this.data.hasReturn,
    });
  },

  handleTitle(){
    this.setData({
      title: this.data.title === 'Header' ? 'Header1' : 'Header',
    });
  }
})