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
  }
}
</script>

<template>
  <div class="table-row" :class="{'checked': isCheckedRow}">
    <div class="table-row__item table-row__item-checkbox">
      <input type="checkbox" @click="$emit('updateSelectRow', {'enabled': $event.target.checked, id: row.id})" :checked="isCheckedRow">
    </div>
    <div class="table-row__item" v-for="(rowData, key,index) in row" :key="rowData.id" v-show="columns.findIndex(col => col.prop === key) !== -1">
      <div v-if="rowData.code !== undefined">
        <p :style="{'color': rowData.colorText ? rowData.colorText : ''}">{{rowData.label}}</p>
      </div>
      <div v-else-if="rowData.messages !== undefined" class="table-row__item-flex">
        <div :style="{'background-color': rowData.messages.bgc ? rowData.messages.bgc : ''}" class="table-row__item-messages">
          {{ rowData.messages.count }}
        </div>
        <p >{{rowData.label}}</p>
      </div>
        <div v-else-if="rowData.image !== undefined" class="table-row__item-flex">
          <img :src="`/src/${rowData.image}`" alt="">
          <p >{{rowData.name}}</p>
        </div>

        <p v-else>{{rowData}}</p>
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
  &.checked {
  }
  &__item {
    flex-basis: 13%;
    &-flex {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
    &-messages {
      display: grid;
      place-items: center;
      color: #fff;
      font-size: 0.8rem;
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
