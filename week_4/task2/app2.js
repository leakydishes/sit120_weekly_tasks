//header
const app = new Vue({
    el: '#app',
    data: {
        title: 'Conditional Loops!'
    }
});

//v-if
const app1 = new Vue({
    el: '#app1',
    data: {
        tasks: [
            {
                name: 'Buy Bananas at Coles',
                pending: true,
                id: 1,
            },
            {
                name: 'Find missing tool',
                pending: false,
                id: 2,
            },
            {
                name: 'Pick up Max',
                pending: true,
                id: 3,
            },
        ],
    },
    computed: {
        dueTomorrowAssignemnts() {
            return this.assignments.filter((assignment) => assignment.dueTomorrow);
        },
    },
});
app.count = 2;


//v-if/else
var app2 = new Vue({
    el: '#app2',
    data: {
        message: ''
    },
});

//v-else
var app3 = new Vue({
    el: '#app3',
    data: {
        message: ''
    },
});

//v-for
        const app4 = new Vue({
            el: '#app4',
            data: {
                header: 'shopping list',
                newItem: "",
                items: [
                    '5 apples',
                    '2 carrots',
                    '1 cake'
                ]
            },
        });

//v-show
const app5 = new Vue({
    el: '#app5',
    data: {
        message: true,
    }
});