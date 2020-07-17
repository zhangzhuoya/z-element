export default {
  name: 'ElRow',
  props: {
    span: {
      type: Number,
      default: 0,
    },
    tag: {
      type: String,
      default: 'div',
    },
    gutter: {
      type: Number,
      default: 0,
    },
    justify: {
      type: String,
      default: 'start',
    },
    algin: {
      type: String,
      default: 'middle',
    },
  },
  computed: {
    style() {
      const styleList = {};
      if (this.gutter) {
        styleList.marginLeft = `-${this.gutter / 2}px`;
        styleList.marginRight = styleList.marginLeft;
      }
      return styleList;
    },
  },
  render(h) {
    return h(
      this.tag,
      {
        class: [
          'el-row',
          { 'el-row--flex': this.type === 'flex' },
          this.justify !== 'start' && `is-justify-${this.justify}`,
          this.align !== 'top' && `is-align-${this.align}`,
        ],
        style: this.style,
      },
      this.$slots.default,
    );
  },
};
