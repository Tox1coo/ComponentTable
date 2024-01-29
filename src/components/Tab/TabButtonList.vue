<script>
import TabButton from "./TabButton.vue";

export default {
  name: "TabButtonList",
  components: {TabButton},
  emits: ['updateActiveTab'],
  props: {
    tabsTypes: {
      type: Array,
      required:true
    },
    fontSize: {
      type: Number, // указывается в px,но можно переделать под rem
      default: 16
    },
    withIcon: {
      type: Boolean,
      default: false
    },
    positionIcon: {
      type: String,
      default: "before"
    },
  }
}
</script>

<template>
<div class="tab">
  <div class="tab-list">
    <TabButton v-for="tabType in tabsTypes" :key="tabType.id" :label="tabType.label" :is-active="tabType.isActive" :font-size="fontSize" :with-icon="withIcon" @actionClick="$emit('updateActiveTab', tabType.id)"/>
  </div>
</div>
</template>

<style scoped lang="scss">
.tab-list {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
