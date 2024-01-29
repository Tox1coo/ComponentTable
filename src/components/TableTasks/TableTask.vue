<script>
import TableTaskStatusesButtons from "@/components/TableTasks/TableTaskStatusesButtons.vue";
import TableTaskColumns from "@/components/TableTasks/TableTaskColumns.vue";
import TableTaskRow from "@/components/TableTasks/TableTaskRow.vue";
import Paginator from "@/components/Paginator/Paginator.vue";
import ShowCountItems from "@/components/ShowsCount/ShowCountItems.vue";

export default {
  name: "TableTask",
  components: {ShowCountItems, Paginator, TableTaskRow, TableTaskColumns, TableTaskStatusesButtons},
  data() {
    return {
      itemsPerPage: 5,
      currentPage: 1,
      selectedRows: [],
      selectedAll: false
    }
  },
  props: {
    statusesList: {
      type: Array,
    },
    items: {
      type: Array,
      required:true
    },
    columns: {
      type: Array,
      required: true
    }
  },
  computed: {
    sliceItems() {
      let from = (this.currentPage - 1) * this.itemsPerPage;
      let to = from + this.itemsPerPage;
      return this.items.slice(from,to);
    },

  },
  mounted() {
    this.selectedRows = []
  },
  methods: {
    getCurrentPage(page) {
      this.currentPage = page;
      this.selectedAll && this.updateSelectRow({enabled: true, id:-1})
    },
    getShowItemPerPage(showItems) {
      this.itemsPerPage = showItems;
      this.currentPage = 1;
      this.selectedAll && this.updateSelectRow({enabled: true, id:-1})
    },
    updateSelectRow(rowInfo) {
      if(rowInfo.id === -1) {
        switch(rowInfo.enabled){
          case true:
            this.selectedAll = true;
            this.selectedRows = this.sliceItems
            break;
          case false:
            this.selectedAll = false;
            this.selectedRows = [];
            break;
        }
      } else {
        switch(rowInfo.enabled){
          case true:
            this.selectedRows.push(this.sliceItems.filter((item) => rowInfo.id === item.id)[0])
            break;
          case false:
            let idItem = this.selectedRows.findIndex((item) => rowInfo.id === item.id);

            this.selectedRows.splice(idItem,1);
            break;
        }
      }
    },

  }
}
</script>

<template>
  <div class="table-tasks">
    <TableTaskStatusesButtons :statusesList="statusesList" />
    <div class="table-tasks__wrapper table">
      <div class="table-tasks__header">
        <TableTaskColumns :columns-table="columns" @updateSelectRow="updateSelectRow" />
      </div>
      <div class="table-tasks__body">
        <TableTaskRow v-for="row in sliceItems" :key="row.id" :row="row" :columns="columns" class="mb-lg" @updateSelectRow="updateSelectRow" :selected-rows="selectedRows" />
      </div>
      <div class="table-tasks__footer">
        <Paginator :pages="items.length" :items-per-page="itemsPerPage" @updatePageNumber="getCurrentPage" :current-page="currentPage"/>
        <ShowCountItems @updateShowItemPerPage="getShowItemPerPage" :current-show-items-number="itemsPerPage"/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.table-tasks {
  margin-top: 5rem;

  &__wrapper {
    padding: 2rem 6.4rem 2rem 3.5rem;
    background-color: #fff;
    border-radius: 0 0.5rem 0.5rem;
    height: fit-content;
  }
  &__header {
    padding-bottom: 2rem;
    border-bottom: 1px solid #e5e5e5;
  }
  &__body {
    margin-top: 3rem;
    margin-bottom: 2.5rem;
    overflow: auto;
    max-height: 600px;
    &::-webkit-scrollbar {
      &-track {
        background-color: rgba(#D8D8D8, 0.5);
      }
      &-thumb {
        background-color: #2679FB;
        border-radius: 20px;
      }
      width: 2px;
    }
  }
  &__footer {
    display: flex;
    justify-content: space-between;
  }
}
</style>
