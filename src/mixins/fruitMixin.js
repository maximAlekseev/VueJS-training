export const fruitMixin = {
  data() {
    return {
      text: 'Colored text',
      fruits: ['Lemon', 'Orange', 'Apple', 'Lime'],
      filteredFruit: ''
    }
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter(el => el.toLowerCase().match(this.filteredFruit));
    }
  },
  created() {
    console.log('created mixin!');
  }
};
