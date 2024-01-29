<script>
import TabButton from "@/components/Tab/TabButton.vue";

export default {
  name: "ViewsList",
  components: {TabButton},
  emits: ['updateActiveView'],
  props: {
    viewList: {
      type: Array,
      required: true
    },
  }
}
</script>

<template>
  <div class="views-list">
    <TabButton class="tab-button--icon" v-for="viewType in viewList"
               :key="viewType.id"
               :label="viewType.label"
               :is-active="viewType.isActive"
               :font-size="18"
               :with-icon="true"
               @actionClick="$emit('updateActiveView', viewType.id)"
    >
      <div class="icon-block">
        <span :class="viewType.className"></span>
      </div>
    </TabButton>
  </div>
</template>

<style scoped lang="scss">
%spanTab {
  content: '';
  position: absolute;
  display: block;
  width: inherit;
  height: inherit;
  background-color: inherit;
}
.views-list {
  display: flex;
  gap: 2.3rem;
  .tab-button {
    &--icon {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      .icon-block {
        width: 1.2rem;
        height: 1.3rem;
        display: grid;
        align-items: center;
      }

    }
    &.active {
      span {
        background-color: currentColor;
      }
      //& > .icon-block .vertical.steps{
      //  span::before, span::after {
      //    height: 100%;
      //  }
      //}
    }
    span {
      position: relative;
      display: block;
      background-color: #000;
      &.horizontal.full {
        height: 2px;
        width: 100%;
        &::after {
         @extend %spanTab;
          top: -0.4rem;
        }
        &::before {
          @extend %spanTab;
          top: 0.4rem;
        }
      }
      &.vertical.steps {
        width: 2px;
        height: 100%;
        &::after {
          @extend %spanTab;
          right: -0.4rem;
          height: 50%;
          width: 2px;

        }
        &::before {
          @extend %spanTab;
          right: -0.8rem;
          height: 20%;
          width: 2px;
        }
      }
    }
  }


}
</style>
