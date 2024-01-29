<script>
import TabButton from "../Tab/TabButton.vue";
import TabButtonList from "../Tab/TabButtonList.vue";
import Search from "../Search/Search.vue";
import TheButton from "../UI/TheButton.vue";
import ViewsList from "@/components/Views/ViewsList.vue";
import TheInput from "@/components/UI/TheInput.vue";

export default {
  name: 'SearchBar',
  components: {TheInput, ViewsList, TheButton, Search, TabButtonList, TabButton},

  props: {
    searchString: {
      type: String,
      required:true
    }
  },
  computed: {
    haveSlotBottom() {
      return !!this.$slots.searchBottom;
    }
  },
  methods: {
    searchStringUpdate(string) {
      this.$emit("searchStringUpdate", string);
    }
  }
}
</script>

<template>
<div class="search-bar">
  <div class="search-bar__top">
    <slot name="tabButtons"></slot>
    <Search :search-string.sync="searchString"  @searchStringUpdate="searchStringUpdate"/>
    <slot name="buttonAction"></slot>

  </div>
  <div v-if="haveSlotBottom" class="search-bar__bottom">
    <slot name="searchBottom"></slot>
  </div>
</div>
</template>

<style lang="scss">
.search-bar {
  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3.5rem;
    & .search-block {
      flex: 1;

    }
    .tab-list {
      gap: 3.5rem;
      p {
        font-weight: 700;
      }
    }
  }
  &__bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 3.5rem;
  }
}
.type-task {
  display: flex;
  gap: 1rem;
  .border-5 {
    border-radius: 0.2em;
  }
}
</style>
