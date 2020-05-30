<template>
  <div class="el-row"
    :style="style"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'ElRow',
  props: {
    gutter: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    style() {
      const style = {};
      if (this.gutter) {
        style.marginLeft = `${-this.gutter / 2}px`;
        style.marginRight = style.marginLeft;
      }
      return style;
    },
  },
};
</script>
<style lang="scss" scoped>
.el-row {
  &::after,
  &::before {
    display: block;
    content: "";
  }
  &::after {
    clear: both;
  }
}
</style>
