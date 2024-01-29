<script>
export default {
  name: "TableTaskStatusesButton",
  props: {
    statusButtonInfo: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <div class="status-button">
    <p>
      {{statusButtonInfo.label}}
    </p>
    <span :style="{backgroundColor: statusButtonInfo.color}"></span>
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
