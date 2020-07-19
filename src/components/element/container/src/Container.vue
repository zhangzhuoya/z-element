<template>
  <!-- 动态添加class -->
  <div :class="['el-container',{'is-vertical': isVertical}]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ElContainer',
  props: {
    direction: {
      type: String,
      validator: (val) => ['horizontal', 'vertical'].includes(val),
    },
  },
  computed: {
    isVertical() {
      // 默认为direction===vertical
      if (this.direction === 'vertical') {
        return true;
      } if (this.direction === 'horizontal') {
        return false;
      }

      // 判断是否是组件 判断是否是header 或者是footer组件，根据componentOptions.tag的值判断是否是组件
      // 如果是组件那么它的值是组件名，如果不是 那么为undefined
      return this.$slots && this.$slots.default
        ? this.$slots.default.some((vNode) => {
          // some
          console.log(vNode);
          const tag = vNode.componentOptions && vNode.componentOptions.tag;
          return tag === 'el-header' || tag === 'el-footer';
        })
        : false;
    },
  },
};
</script>

<style>
</style>
