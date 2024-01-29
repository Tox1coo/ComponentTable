<script>
export default {
  name: "TheInput",
  props: {
    placeholderInput: {
      type:String,
      default: ""
    },
    withIcon: {
      type: Boolean,
      default: false
    },
    positionIcon: {
      type: String,
      default: "before"
    },
    typeInput: {
      type: String,
      default: 'text'
    },
    classes: {
      type:String,
      default: ''
    },
    searchString: {
      type:String,
      default: ''
    }
  }
}
</script>

<template>
  <div class="input" :class="{'icon-before': positionIcon === 'before', 'icon-after': positionIcon === 'after' }">
    <slot v-if="positionIcon === 'before'"/>

    <input class="input-field"
           :type="typeInput"
           :placeholder="placeholderInput"
           @input="$emit('updateString', $event.target.value)"
           :value="searchString"
    >

    <slot v-if="positionIcon === 'after'"/>

  </div>
</template>

<style scoped lang="scss">
.input {
  width: 100%;
  position: relative;
  &-field {
    width: inherit;
    height: inherit;
    border-radius: 0.5rem;
    border: 1px solid #e5e5e5;
    outline: none;
  }
  img,svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
