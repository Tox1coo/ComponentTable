<script>
import TableTaskTabButtons from "@/components/TableTasks/TableTaskTabButtons.vue";
import TableTaskColumns from "@/components/TableTasks/TableTaskColumns.vue";
import TableTaskRow from "@/components/TableTasks/TableTaskRow.vue";
import Paginator from "@/components/Paginator/Paginator.vue";
import ShowCountItems from "@/components/ShowsCount/ShowCountItems.vue";
import TheButton from "@/components/UI/TheButton.vue";
import simplebar from 'simplebar-vue';
import 'simplebar-vue/dist/simplebar.min.css';

;
export default {
  name: "TableTask",
  components: {TheButton, ShowCountItems, Paginator, TableTaskRow, TableTaskColumns, TableTaskTabButtons, simplebar},
  data() {
    return {
      itemsPerPage: 5,
      currentPage: 1,
      selectedRows: [],
      selectedAll: false
    }
  },
  props: {
    tabButtonList: {
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
  },
  watch: {
    items() {
      this.currentPage = 1;
      this.selectedRows = [];
      this.selectedAll = false;
    }
  }
}
</script>

<template>
  <div class="table-tasks">
    <div class="tab-list">
      <TableTaskTabButtons v-for="tabButton in tabButtonList" :key="tabButton.id" :tab-button-info="tabButton" @clickTabOnTable="$emit('clickTabOnTable', tabButton)"/>
    </div>
    <div class="table-tasks__wrapper table">
      <div class="table-tasks__header">
        <TableTaskColumns :columns-table="columns" @updateSelectRow="updateSelectRow" :selected-all="selectedAll"/>
      </div>

      <simplebar  v-if="sliceItems.length > 0" style="max-height: 700px" data-simplebar-auto-hide="false" class="custom-scroll">
      <div class="table-tasks__body">
        <TableTaskRow  v-for="(row,index) in sliceItems" :key="index" :row="row" :columns="columns" @updateSelectRow="updateSelectRow" :selected-rows="selectedRows">
          <template #actionsButtons>
            <TheButton text="Войти в группу" />
          </template>
        </TableTaskRow>
      </div>
      </simplebar>
      <div v-else  class="table-tasks__body empty">
        <h3>Данных нет!</h3>
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
  .tab-list {
    gap: 0.2rem;
    display: flex;
  }
  &__wrapper {
    background-color: #fff;
    border-radius: 0 0.5rem 0.5rem;
    height: fit-content;
  }
  &__header {
    border-bottom: 1px solid #e5e5e5;
    padding: 2rem 6rem 2.5rem 4rem;
  }
  &__body {
    max-height: 700px;
    &.empty {
      font-size: 2rem;
      display: grid;
      place-items: center;
      padding: 3rem
    }
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
    margin-top: 2.5rem;
    padding: 0 4rem 1.5rem
  }
}

</style>
