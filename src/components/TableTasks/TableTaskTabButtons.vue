<script>
export default {
  name: "TableTaskTabButtons",
  emits: ['clickTabOnTable'],
  props: {
    tabButtonInfo: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <div @click="$emit('clickTabOnTable', tabButtonInfo)" class="status-button" :class="{'active': tabButtonInfo.isActive}">
    <p>
      {{tabButtonInfo.label}}
    </p>
    <span :style="{backgroundColor: tabButtonInfo.color}"></span>
  </div>
</template>

<style scoped lang="scss">
.status-button {
  display: block;
  background-color: #fff;
  text-align: center;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 0.5rem 0.5rem 0 0;
  &.active {
    background-color: rgba(#A9A9A9, 0.2);
  }
  p {
    padding: 0.8rem 5.8rem;

  }
  span {
    display: block;
    width: 100%;
    height: 2px;
  }
}
</style>
