<script>
import TheInput from "../UI/TheInput.vue";
import image from "@/assets/search.png"
export default {
  name: "Search",
  components: {TheInput},
  data() {
    return {
    }
  },
  props: {
    placeholderSearch: {
      type: String,
      default: 'Напишите ваш поисковый запрос здесь'
    },
    icon: {
      type: String,
      default: image
    },
    searchString: {
      type: String,
      required: true
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
<div class="search-block">
  <TheInput :type-input="'text'" :search-string="searchString" @updateString="searchStringUpdate" :placeholder-input="placeholderSearch" :with-icon="true" >
    <img :src="icon" alt="search">
  </TheInput>
</div>
</template>

<style  lang="scss">
.search-block {
  .input {
    height: 4.5rem;
    &-field {
      padding-left: 7.8rem;
    }
    img {
      left: 3rem;
    }
  }
}
</style>
