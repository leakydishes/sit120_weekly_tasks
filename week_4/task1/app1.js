//First Vue Test
const app = new Vue({
    el: '#app',
    data: {
        title: 'Hello Everyone - This is Vue!'
    }
});

//Second Vue Test
var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
});

//Third Vue Test
var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
});

