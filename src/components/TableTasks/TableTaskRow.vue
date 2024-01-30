<script>
export default {
  name: "TableTaskRow",
  props: {
    row: {
      type: Object,
      required: true
    },
    columns: {
      type: Array,
      default: () => []
    },
    selectedRows: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    isCheckedRow() {
      return this.selectedRows.findIndex((rowItem) => rowItem.id === this.row.id) !== -1
    }
  },
  methods: {
    setWidth(key) {
      let indexColumn = this.columns.findIndex(col => col.prop === key);

      if(indexColumn !== -1) {
        return this.columns[indexColumn].width
      }
      return ''
    }
  }
}
</script>

<template>
  <div class="table-row" :class="{'checked': isCheckedRow}" >
    <div class="table-row__item table-row__item-checkbox">
      <input type="checkbox" @click="$emit('updateSelectRow', {'enabled': $event.target.checked, id: row.id})" :checked="isCheckedRow">
    </div>
    <div class="table-row__item" v-for="(rowData, key,index) in row"
         :key="rowData.id"
         v-show="columns.findIndex(col => col.prop === key) !== -1"
         :style="{'flex-basis': setWidth(key)}"
    >

      <span v-if="rowData.type === 'images'" class="table-row__item-flex">
      </span>
      <span v-if="rowData.type === 'image'" class="table-row__item">
        <img :src="`/src/${rowData.image}`" alt="">
      </span>


      <span v-else-if="rowData.messages !== undefined" class="table-row__item">
        <span :style="{'background-color': rowData.messages.bgc ? rowData.messages.bgc : ''}" class="table-row__item-messages">
          {{ rowData.messages.count }}
        </span>
      </span>

      <p v-else-if="Object.keys(row).length === index + 1 && !!$slots.actionsButtons">
        <slot name="actionsButtons" />
      </p>

      <span>{{rowData.label}}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.table-row {
  display: flex;
  justify-content: space-between;
  min-height: 4rem;
  font-size: 1.6rem;
  gap: 1rem;
  font-weight: 500;
  padding: 1.5rem 6rem 1.5rem 4rem;
  &:first-child {
    padding-top: 3rem;
  }
  &.checked {
    background-color: rgba(#6CBE39, 0.05);
  }
  &__item {
    position: relative;
    &-flex {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
    &-messages {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      color: #fff;
      left: -1rem;
      font-size: 0.8rem;
      top: 50%;
      transform: translate(-1rem, -50%);
      width: 1.5rem;
      height: 1.2rem;
      border-radius: 0.5rem;
    }
    &-checkbox {
      flex-basis: 2%;
    }
  }
}
</style>
