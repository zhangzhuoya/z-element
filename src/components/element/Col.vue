<template>
  <div :class="[`el-col`,classList]" :style="style">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    span: {
      type: Number,
      default: 24,
    },
    offset: {
      type: Number,
      default: 0,
    },
    pull: {
      type: Number,
      default: 0,
    },
    push: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    gutter() {
      // 直到找到parent为row才会设置
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
        style.border = `${this.gutter}px`;
      }
      return style;
    },
    // 为了方式当span pull等值为0时 他的left也为0时 left的权限会大于right 而导致right不好使
    classList() {
      const classList = [];
      ['span', 'offset', 'pull', 'push'].forEach((prop) => {
        if (this[prop]) {
          classList.push(
            prop === 'span'
              ? `el-col-${this[prop]}`
              : `el-col-${prop}-${this[prop]}`,
          );
        }
      });
      return classList;
    },
  },
};
</script>

<style lang="scss" scoped>
//函数逻辑
.el-col {
  float: left;
  box-sizing: border-box;
}
@for $i from 0 through 24 {
  .el-col-#{$i} {
    width: $i/24 * 100%;
  }
}
@for $i from 0 through 24 {
  .el-col-offset-#{$i} {
    margin-left: $i/24 * 100%;
  }
}
@for $i from 0 through 24 {
  .el-col-push-#{$i} {
    position: relative;
    left: $i/24 * 100%;
  }
}
@for $i from 0 through 24 {
  .el-col-pull-#{$i} {
    position: relative;
    right: $i/24 * 100%;
  }
}
</style>
