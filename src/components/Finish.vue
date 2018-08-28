<template>
  <div class="next-quiz">
    <h3 class="text-center">Finish!</h3>
    <button @click="startNewQuiz" class="btn btn-primary">Start again!</button>
  </div>
</template>

<script>
  import { EventBus } from '../main';

  export default {
    methods: {
      startNewQuiz() {
        EventBus.$emit('start-new-quiz');
      }
    }
  }
</script>

<style>

  .next-quiz {
    width: 400px;
    height: 300px;
    margin: auto;
    background-color: darkolivegreen;
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
