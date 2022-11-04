Component({
  externalClasses: ['a-class'],

  properties: {
    // 'success' | 'error' | 'warning' | 'pending' | 'info'
    type: {
      type: String,
      value: 'success',
    },
    content: {
      type: String,
      value: '',
    },
    desc: {
      type: String,
      value: '',
    },
    iconColor: {
      type: String,
      value: '',
    },
    backgroundColor: {
      type: String,
      value: '#fff',
    },
    confirmBtn: {
      type: String,
      value: '确认',
    },
    cancelBtn: {
      type: String,
      value: '取消',
    },
  },

  methods: {
    handleConfirm() {
      this.triggerEvent('confirm');
    },

    handleCancel() {
      this.triggerEvent('cancel');
    },
  },
});
