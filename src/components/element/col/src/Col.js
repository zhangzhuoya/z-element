export default {
  name: 'ElCol',
  props: {
    span: {
      type: Number,
      default: 0,
    },
    tag: {
      type: String,
      default: 'div',
    },
    offset: {
      type: Number,
      default: 0,
    },
    push: {
      type: Number,
      default: 0,
    },
    pull: {
      type: Number,
      default: 0,
    },
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object],
  },
  computed: {
    gutter() {
      let parent = this.$parent;
      while (parent && parent.$options.name !== 'ElRow') {
        parent = parent.$parent;
      }
      return parent ? parent.gutter : 0;
    },
    style() {
      const style = {};
      if (this.gutter) {
        style.paddingLeft = `${this.gutter / 2}px`;
        style.paddingRight = style.paddingLeft;
      }
      return style;
    },
    classList() {
      const classList = [];
      ['span', 'pull', 'push', 'offset'].forEach((item) => {
        if (this[item]) {
          classList.push(item === 'span' ? `el-col-${this[item]}` : `el-col-${item}-${this[item]}`);
        }
      });
      // {
      //   size:ml,
      //   pull:1,

      // }
      ['xs', 'sm', 'md', 'lg', 'xl'].forEach((size) => {
        if (typeof this[size] === 'number') {
          classList.push(`el-col-${size}-${this[size]}`);
        } else if (typeof this[size] === 'object') {
          Object.keys(size).forEach((prop) => {
            classList.push(
              this[prop] === 'span'
                ? `el-col-${this[size]}-${size[prop]}`
                : `el-col-${this[size]}-${prop}-${size[prop]}`,
            );
          });
        }
      });
      return classList;
    },
  },
  render(h) {
    return h(
      this.tag,
      {
        class: ['el-col', this.classList],
        style: this.style,
      },
      this.$slots.default,
    );
  },
};
