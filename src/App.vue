<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3">
        <transition
          name="flip"
          mode="out-in"
          enter-active-class="animated flipInY"
          leave-active-class="animated flipOutY"
        >
          <component :is="activeComponent" :quiz="currentProperties"></component>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  import { EventBus } from './main';
  import Quiz from './components/Quiz';
  import NextQuiz from './components/NextQuiz';

  const quizArr = [
    {
      _id: 1,
      firstAnswer: 10,
      secondAnswer: 20,
      thirdAnswer: 30,
      fourthAnswer: 40,
      question: '13 + 17',
      correctAnswer: 30
    },
    {
      _id: 2,
      firstAnswer: 11,
      secondAnswer: 21,
      thirdAnswer: 31,
      fourthAnswer: 41,
      question: '18 + 23',
      correctAnswer: 41
    },
    {
      _id: 3,
      firstAnswer: 12,
      secondAnswer: 22,
      thirdAnswer: 32,
      fourthAnswer: 42,
      question: '5 + 7',
      correctAnswer: 12
    }
  ];

  export default {
    created() {
      EventBus
        .$on('next-quiz', () => {
          this.currentQuiz++;

          if (this.currentQuiz < this.tests.length) {
            this.activeComponent = 'app-quiz';
          } else {
            alert('That is all!');
          }
        })
        .$on('correct-answer', () => {
          this.activeComponent = 'app-next-quiz';
        })
    },
    data() {
      return {
        activeComponent: 'app-quiz',
        tests: quizArr,
        currentQuiz: 0
      }
    },
    computed: {
      currentProperties() {
        if (this.activeComponent === 'app-quiz') {
          return this.tests[this.currentQuiz]
        }
      }
    },
    components: {
      appQuiz: Quiz,
      appNextQuiz: NextQuiz
    }
  }
</script>

<style lang="scss" scoped>

  .container {
    padding: 30px 0;
  }

  /*.flip-enter {*/
    /*opacity: 0;*/
  /*}*/

  /*.flip-enter-active {*/
    /*transition: opacity 1s;*/
  /*}*/

  /*.flip-leave {*/

  /*}*/

  /*.flip-leave-active {*/
    /*transition: opacity 1s;*/
    /*opacity: 0;*/
  /*}*/

  /*.flip-move {*/

  /*}*/

  @keyframes flip-in {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes flip-out {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(20px);
    }
  }
</style>
