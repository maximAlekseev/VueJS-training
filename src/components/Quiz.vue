<template>
  <div class="quiz">
    <div class="row">
      <div class="col-6 offset-3">
        <p class="text-center quiz-question">{{ quiz.question }} = ?</p>
      </div>
    </div>
    <div class="row quiz-row">
      <div class="col-4 offset-2">
        <input type="button" class="btn btn-primary" @click="answerQuiz" v-model="quiz.firstAnswer" />
      </div>
      <div class="col-4 offset-2">
        <input type="button" class="btn btn-primary" @click="answerQuiz" v-model="quiz.secondAnswer" />
      </div>
    </div>
    <div class="row quiz-row">
      <div class="col-4 offset-2">
        <input type="button" class="btn btn-primary" @click="answerQuiz" v-model="quiz.thirdAnswer" />
      </div>
      <div class="col-4 offset-2">
        <input type="button" class="btn btn-primary" @click="answerQuiz" v-model="quiz.fourthAnswer" />
      </div>
    </div>
  </div>
</template>

<script>
  import { EventBus } from '../main';

  export default {
    props: {
      quiz: Object
    },
    methods: {
      answerQuiz(e) {
        if (Number(e.target.value) !== this.quiz.correctAnswer) {
          alert('Wrong answer. Try again!');
        } else {
          EventBus.$emit('correct-answer');
        }
      }
    }
  }
</script>

<style>

  .quiz {
    padding: 60px 0 0;
    width: 400px;
    height: 300px;
    margin: auto;
    background-color: azure;
    border: 3px solid black;
    border-radius: 5px;
  }

  .quiz-question {
    color: black;
    font-size: 20px;
    font-weight: 600;
  }

  .quiz-row {
    padding: 30px 0 0;
  }
</style>
