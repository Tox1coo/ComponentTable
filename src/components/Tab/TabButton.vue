<script>
export default {
  name: "TabButton",
  props: {
    label: {
      type: String,
      required: true
    },
    isActive: {
      type: Boolean,
      default: false
    },
    colorActive: {
      type: String,
      default: '#2679FB'
    },
    color: {
      type: String,
      default: '#272727'
    },
    withIcon: {
      type: Boolean,
      default: false
    },
    positionIcon: {
      type: String,
      default: "before"
    },
    fontSize: {
      type: Number, // указывается в px,но можно переделать под rem
      default: 16
    },
    isButton: {
      type: Boolean,
      default: false
    }
  },
  computed: {

  }
}
</script>

<template>
<div class="tab-button" :class="{'is-button': isButton, 'active': isActive}"
     :style="{
              color: isActive ? colorActive : color,
              fontSize: `${fontSize}px`,
              backgroundColor: isActive && isButton ? '#2679FB' : (!isButton) ? '' : '#fff'}" @click="$emit('actionClick')">

  <slot v-if="positionIcon === 'before'"/>
  <p>{{label}}</p>
  <slot v-if="positionIcon === 'after'"/>
</div>
</template>

<style scoped lang="scss">
.tab-button {
  cursor: pointer;
  &.active {
    & .icon-block .vertical.steps{
      span::before, span::after {
        height: 100%;
      }
    }
  }
}
</style>
