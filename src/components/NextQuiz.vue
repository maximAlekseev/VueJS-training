<template>
  <div class="next-quiz">
    <h3 class="text-center">Correct!</h3>
    <button @click="nextQuiz" class="btn btn-primary">Next quiz!</button>
  </div>
</template>

<script>
  import { EventBus } from '../main';

  export default {
    data() {
      return {

      }
    },
    methods: {
      nextQuiz() {
        EventBus.$emit('next-quiz');
      }
    }
  }
</script>

<style>

  .next-quiz {
    width: 400px;
    height: 300px;
    margin: auto;
    background-color: red;
    border: 3px solid black;
    border-radius: 5px;
  }

  h3 {
    margin-top: 15%;
    color: white;
  }

  .next-quiz button {
    margin: 25% auto 0;
    display: block;
  }
</style>
