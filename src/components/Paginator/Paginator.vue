<script>
export default {
  name: "Paginator",
  props: {
    pages: {
      type: Number,
      required: true
    },
    countShowPages: {
      type: Number,
      default: 5
    },
    replacePages: {
      type: Boolean,
      default: true
    },
    itemsPerPage: {
      type: Number,
      default: 10
    },
    showArrows: {
      type: Boolean,
      default: true
    },
    currentPage: {
      type: Number,
      default: 1
    }
  },
  emits: ['updatePageNumber'],
  computed:{
    paginationPages() {
      return Math.ceil(this.pages / this.itemsPerPage);
    }
  },
  methods: {
    updateCurrentPage(page) {
      if(page < 1 || page > this.paginationPages ) return;
      if(this.currentPage !== page) {
        this.$emit('updatePageNumber', page);
      }
    }
  }
}
</script>

<template>
<div class="paginator">
  <div v-if="paginationPages > 1" class="paginator-wrapper">
    <div v-if="showArrows" class="arrows" :class="{'prev-active': currentPage !== 1, 'next-active': currentPage !== paginationPages}">
      <div @click="updateCurrentPage(currentPage - 1)" class="arrow arrow--prev">
        <div></div>
      </div>
      <div @click="updateCurrentPage(currentPage + 1)" class="arrow arrow--next">
        <div></div>
      </div>
    </div>
    <div class="paginator-pages page">
      <div v-for="pageNumber in paginationPages"
          v-show="Math.abs(pageNumber - currentPage) < 5 || pageNumber === paginationPages  || pageNumber === 1">
        <span class="page-slice page-slice--last" v-if="(pageNumber === paginationPages && Math.abs(pageNumber - currentPage) > 3)">
          ...
        </span>
        <span class="page-item"
           :class="{'page-item__active': currentPage === pageNumber}"
            @click="updateCurrentPage(pageNumber)">
          {{ pageNumber }}</span>
        <span v-if="(pageNumber === 1 && Math.abs(pageNumber - currentPage) > 3)" class="page-slice page-slice--first">
          ...
        </span>
      </div>

    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
%arrow-block {
  height: 8px;
  width: 8px;
  border-bottom: 2px solid currentColor;
  border-left: 2px solid currentColor;
}
.arrows {
  display: flex;
  gap: 2rem;
  &.next-active {
    cursor: pointer;
    .arrow--next {
      color: #2679FB;
    }
  }
  &.prev-active {
    cursor: pointer;
    .arrow--prev {
      color: #2679FB;
    }
  }
  .arrow {
    width: 2.4rem;
    height: 2.4rem;
    display: grid;
    place-items: center;
    &--prev {
      div {
        @extend %arrow-block;
        transform: rotate(45deg);
      }
    }
    &--next {
      div {
        @extend %arrow-block;
        transform: rotate(-135deg);
      }

    }
  }
}
.paginator {
  &-wrapper {
    display: flex;
    align-items: center;
    gap: 3rem;
  }
  &-pages {
    display: flex;
    color: #A9A9A9;
    font-size: 1.4rem;
    font-weight: 500;
    gap: 1rem
  }
  .page {
    &-slice {
      &--first {
        margin-left: 2rem;
      }
      &--last {
        margin-right: 2rem;
      }
    }
    &-item {
      padding: 1rem;
      &__active {
        color: #272727
      }
      transition: color .1s linear;
      &:hover {
        color: rgba(#272727, 0.8)
      }
    }
    cursor: pointer;

  }
}
</style>
