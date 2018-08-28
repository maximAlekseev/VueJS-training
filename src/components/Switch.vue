<template>
  <div>
    <div
      id="on"
      class="switcher"
      @click="switchOn(true)"
      :class="{active: value}"
    >
      On
    </div>
    <div
      id="off"
      class="switcher"
      @click="switchOn(false)"
      :class="{active: !value}"
    >
      Off
    </div>
  </div>
</template>

<script>
  export default {
    props: ['value'],
    data() {
      return {

      }
    },
    methods: {
      switchOn(isOn) {
        this.$emit('input', isOn);
      }
    }
  }
</script>

<style scoped>
  .switcher {
    display: inline-block;
    padding: 3px 5px;
    cursor: pointer;
  }

  #on.switcher.active {
    background-color: aquamarine;
  }

  #off.switcher.active {
    background-color: burlywood;
  }
</style>
