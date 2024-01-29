<script>

export default {
  name: "ShowCountItems",
  data() {
    return {
      showDropdown: false
    }
  },
  emits: ['updateShowItemPerPage'],
  methods: {
    updateShowDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    hideDropdown() {
      this.showDropdown = false;
    },
    updateCurrentItemsNumber(showNumber) {
      if(showNumber !== this.currentShowItemsNumber) {
        localStorage.setItem('itemPerPage', showNumber);
        this.$emit('updateShowItemPerPage', showNumber);
      }
      this.updateShowDropdown();
    }
  },
  props: {
    showsList: {
      type: Array,
      default: () => [5, 10, 25, 50, 100]
    },
    currentShowItemsNumber: {
      type: Number,
      default: 5
    }
  },
  mounted() {
    if(localStorage.getItem('itemPerPage') !== null) {
      this.$emit('updateShowItemPerPage', +localStorage.getItem('itemPerPage'));
    }
  }
}
</script>

<template>
  <div class="show-count">
    <p>
      Отображать по:
    </p>
    <div class="show-count-wrapper show">
      <div @click="updateShowDropdown" class="show-current">
        <span>
          {{currentShowItemsNumber}}
        </span>
        <div  class="arrow">
        </div>
      </div>
      <div v-click-outside="hideDropdown" v-show="showDropdown" class="show-dropdown">
        <div v-for="showItem in showsList"
             :key="showItem"
             class="show-dropdown__item"
             :class="{current: showItem === currentShowItemsNumber}"
              @click="updateCurrentItemsNumber(showItem)">
          {{showItem}}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.show-count {
  display: flex;
  font-size: 1.4rem;
  gap: 2rem;
  align-items: center;
  p {
    color: #A9A9A9;
  }
}
.show {
  position: relative;
  &-dropdown {
    position: absolute;
    background-color: rgba(#e5e5e5, 0.9);
    width: 100%;
    &__item {
      cursor: pointer;
      padding: 0.5rem;
      &:hover {
        background-color: #a9a9a9;
        color: #fff;
      }
    }
  }
  &-current {
    padding: 0.9rem 1.5rem;
    border: 1px solid #EBEDEE;
    border-radius: 0.5rem;
    display: flex;
    gap: 1.5rem;
    align-items: center;
    .arrow {
      width: 0.7rem;
      height: 0.7rem;
      border-bottom: 1px solid #2679FB;
      border-left: 1px solid #2679FB;
      transform: translateY(-2px) rotate(320deg);
      transform-origin: center;
      transition: all 0.2s ease;
      &.active {
        transform: rotate(135deg);
      }
    }
  }
}
</style>
