Component({
  relations: {
    '../Form/index': {
      type: 'parent',
    },
  },

  properties: {
    label: {
      type: String,
      value: '',
    },
    labelAlign: {
      type: String,
      value: '',
    },
    labelColor: {
      type: String,
      value: '',
    },
    labelWidth: {
      type: Number,
      value: undefined,
    },
    required: {
      type: Boolean,
      value: false,
    },
    warningMessage: {
      type: String,
      value: '',
    },
    iconUrl: {
      type: String,
      value: '',
    },
    footer: {
      type: String,
      value: '',
    },
    footerArrow: {
      type: Boolean,
      value: false,
    },
  },

  methods: {
    handleTap() {
      this.triggerEvent('click');
    },
  },
});
