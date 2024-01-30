<script>
export default {
  name: "TableTaskColumns",
  props: {
    columnsTable: {
      type: Array,
      required:true
    },
    selectedAll:{
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <div class="columns">
    <div class="columns-item columns-item--checkbox">
      <input type="checkbox" @click="$emit('updateSelectRow', {'enabled': $event.target.checked, id: -1})" :checked="selectedAll">
    </div>
    <div v-for="column in columnsTable" :key="column.id" class="columns-item" :style="{'flex-basis': column.width}">
      {{column.label}}
    </div>
  </div>
</template>

<style scoped lang="scss">
.columns {
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 1.4rem;  gap: 1rem;

  &-item {
    flex-basis: 13%;
    &--checkbox {
      flex-basis: 2%;
    }
  }
}
</style>
