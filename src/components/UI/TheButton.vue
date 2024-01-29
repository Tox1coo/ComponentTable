<script>
export default {
  name: "TheButton",
  props: {
    text: {
      type: String,
      required: true
    },
    withIcon: {
      type: Boolean,
      default: false
    },
    positionIcon: {
      type: String,
      default: 'before'
    },
    classes: {
      type:String,
      default: ''
    },
    classMargin: {
      type:String,
      default: ''
    },
    backgroundButton: {
      type:String,
      default: '#2679FB'
    },
  }
}
</script>

<template>
<button class="btn" :class="classes" :style="{backgroundColor: backgroundButton}">
  <slot v-if="positionIcon === 'before'"/>
  <span :class="classMargin">
    {{text}}
  </span>
  <slot v-if="positionIcon === 'after'"/>
</button>
</template>

<style scoped lang="scss">
.btn {
  color: #fff;
  padding: 1.4rem 2rem ;
  cursor: pointer;
  border-radius: 0.5rem;
}
.btn-icon {
  &--after {
    &-margin-xs span{ margin-right: .25em; }
    &-margin-sm span{ margin-right: .5em; }
    &-margin-md span{ margin-right: 1em; }
    &-margin-lg span{ margin-right: 1.5em; }
    &-margin-xl span{ margin-right: 3em; }
  }
  &--before {
    &-margin-xs span{ margin-left: .25em; }
    &-margin-sm span{ margin-left: .5em; }
    &-margin-md span{ margin-left: 1em; }
    &-margin-lg span{ margin-left: 1.5em; }
    &-margin-xl span{ margin-left: 3em; }
  }
}
</style>
