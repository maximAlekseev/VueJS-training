new Vue({
    el: '#root',
    data: {
        text: 'VueJS is Awesome!',
        link: 'http://google.com',
        fullLink: '<a href="http://google.com">http://google.com</a>',
        counter: 0,
        secCounter: 0,
        x: 0,
        y: 0
    },
    methods: {
        func1() {
            this.text = 'kek';
            return this.text;
        },
        refreshTitle() {
            this.text = 'kek1';
        },
        updateCoord(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        }
    },
    computed: {
        result() {
            setTimeout(() => {
                return this.counter > 5 ? 'greater than 5' : 'smaller than 5';
            }, 2000);
        }
    },
    watch: {
        counter() {
            setTimeout(() => {
                console.log(this.counter);
            }, 1000);
        }
    }
});