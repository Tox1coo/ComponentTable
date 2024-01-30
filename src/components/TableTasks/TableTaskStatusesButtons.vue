<script>
import TableTaskStatusesButton from "@/components/TableTasks/TableTaskTabButtons.vue"
export default {
  name: "TableTaskStatusesButtons",
  components: {TableTaskStatusesButton},
  props: {
    statusesList: {
      type: Array,
      required:true
    }
  }
}
</script>

<template>
  <div class="statuses-list">
    <TableTaskStatusesButton v-for="statusButton in statusesList" :key="statusButton.id" :status-button-info="statusButton"/>

  </div>
</template>

<style scoped lang="scss">
.statuses-list {
  gap: 0.2rem;
  display: flex;
}
</style>
