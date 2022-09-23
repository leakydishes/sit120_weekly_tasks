
// SETTING PAGE
//show email for user
var showContact = new Vue({
    el: '#showContact',
    data: {
        show: false
    }
});

//show plan button
var planreq = new Vue({
    el: '#planreq',
    data: {
        show: false
    }
});

// select a new plan
// component which counts the function planclicked and showplans
// this.$emit function allows you to pass custom events and fuction(argument) passing when function is invoked
Vue.component('button-counter', {
    template: '<button v-on:click = "displayPlan(item)"><span style = "font-size:25px;">{{ item }}</span></button>',
    data: function () {
        return {
            counter: 0
        }
    },
    props: ['item'],
    methods: {
        displayPlan: function (lng) {
            console.log(lng);
            this.$emit('showplan', lng);
        },
    },
});

// array plan and method for function to track planclicked
// this acts like a getter/setter data object property is applied to the new vue
var vm = new Vue({
    el: '#changeplan',
    data: {
        planclicked: "",
        plans: ['SINGLE PLAN', 'FAMILY PLAN', 'BUSINESS PLAN']
    },
    methods: {
        plandisp: function (a) {
            this.planclicked = a;
        },
    }
});

// TASK PAGE
// Creates a task as an array (Task/ index page)
// push to put tasks into array, $delete in v2, removetask is a function which uses (index) as the parameter. 
var todo = new Vue({
    el: '#todo',
    data: {
        task: {
            text: '',
        },
        tasks: [{
            text: 'Daily Tasks'
        }]
    },
    methods: {
        // adds note to array
        addTask() {
            let {
                text
            } = this.task
            this.tasks.push({
                text
            })
            this.task.text = ''
        },
        removeTask(index) {
            this.$delete(this.tasks, index)
        }
    },
    // store in local storage using Vue mounted -> this allows pulls from local storage. Watch allows Vue to watch for the task array
    mounted() {
        if (localStorage.getItem('tasks')) this.tasks = JSON.parse(localStorage.getItem('tasks'));
    },
    //watch for user input
    watch: {
        tasks: {
            handler() {
                localStorage.setItem('tasks', JSON.stringify(this.tasks));
            },
            deep: true,
        },
    }
});

// NOTE PAGE
//Time and message to user
Vue.component("timetab", {
    data() {
        return {
            showDetails: false
        };
    },
    template: `  
      <div>  
        <h1>TIME GOAL = 3 HOURS</h1>  
        <button class="messagebutton" style="background-color: #A8763E;" @click='showDetails = !showDetails'>  
          CLICK HERE TO SEE HOW MUCH TIME TODAY 
        </button>  
        <div v-if='showDetails'>  
          3 HOURS, WELL DONE!
        </div>  
      </div>  
    `
});

Vue.component("messagetab", {
    data() {
        return {
            showDetails: false
        };
    },
    template: `  
      <div>  
        <h1 style="color: #A8763E;">'ACTIVITY LEADS TO PRODUCTIVITY' - JIM ROHN</h1>  
      </div>  
    `
});

new Vue({
    el: "#usermessage",
    data: {
        inputButtons: "timetab"
    }
});

// adding notes similar implimentation as array
var note = new Vue({
    el: '#note',
    data: {
        note: {
            text: '',
            date: ''
        },
        notes: [{
            text: 'Daily notes',
            date: new Date(Date.now()).toLocaleString()
        }
        ],
    },
    methods: {
        // adds note to array
        //LIST RENDERING maintaining state .push to push notes onto array
        //EVENT HANDLING listens for the button @click to run event. 
        addNote() {
            let {
                text, title, color
            } = this.note
            this.notes.push({
                text,
                date: new Date(Date.now()).toLocaleString(),
            })
            this.note.text = ''
        },
        removeNote(index) {
            this.$delete(this.notes, index)
        },
    },
    // store in local storage using Vue mounted
    mounted() {
        if (localStorage.getItem('notes')) this.notes = JSON.parse(localStorage.getItem('notes'));
    },
    //watch for user input
    watch: {
        notes: {
            handler() {
                localStorage.setItem('notes', JSON.stringify(this.notes));
            },
            deep: true,
        },
    }
});

// TIMER PAGE
// math floor functions rounds down to the largest integer < = to number
var clock = new Vue({
    el: '#clock',
    data: {
        statement: 'FOCUS ON A TASK',
        timeSum: (25 * 60),
        // delay controls the speed of timer
        delay: null,
        active: false,
        inspo: 'Perfectionism prevents action. Waiting until you have devised the perfect solution to something is merely a form of procrastination ― Staffan Noteberg, Pomodoro Technique',
        about: 'Pomodoro Technique uses a 25 minute timer to focus on a task, go ahead and complete a task!'
    },
    computed: {
        //sec 60
        seconds: function () {
            var second = this.timeSum - (this.minutes * 60);
            return second >= 10 ? second : '0' + second;
        },
        //min 60*60
        minutes: function () {
            var minute = Math.floor(this.timeSum / 60);
            return minute >= 10 ? minute : '0' + minute;
        },
        //displays clock to html
        displayClock: function () {
            return this.minutes + " : " + this.seconds;
        }
    },
    methods: {
        // checks lapse is working and remove second at the start
        checkLapse() {
            if (this.active == true) {
                this.timeSum--;
            }
        },
        // freeze timer by returning active as false, clears interval
        pause() {
            this.active = false;
            clearInterval(this.delay);
        },
        // makes active true / starts clock 
        start() {
            this.active = true;
            this.delay = setInterval(this.checkLapse, 1000);
        },
        // stops count down from going into negative/ 
        checkCountdown() {
            this.active = true;
            this.delay = setInterval(this.updateCurrentTime, 1000);
            // set interval by timerminutes current 60 * 1000
            setInterval(() => {
                this.timerMinutes--
            }, 60 * 1000)

            // Checks if seconds are 00 and changes min to 59, continues loop. else adds 1000 to the distance
            if (this.timerSeconds === '00') {
                this.timerSeconds = 59;
                setInterval(() => {
                    this.timerSeconds--
                }, 1000);
            } else {
                setInterval(() => {
                    this.timerSeconds--
                }, 1000);
            }
        },
        // resets active to false to restart clock
        reset() {
            this.active = false;
            clearInterval(() => { this.delay; });
            this.timeSum = (25 * 60);
        }
    }
});


// PROFILE PAGE
//log in & bind and filter
var login = new Vue({
    el: '#login',
    data() {
        return {
            selected: '',
            lastName: '',
            firstName: ''
        }
    },
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
});

// filter name
Vue.filter('capitalize', function (value) {
    if (!value) return ''
    value = value.toString()
    return value.toUpperCase()
});

//custom directive for colour block changes colour of subscription
Vue.directive('colorful', {
    inserted(el, binding) {
        el.style.color = binding.value;
        console.log(binding);
    }
});

// Scoped slots
Vue.component('my-list', {
    template: '#my-list',
    props: ['title', 'items']
});

var userstats = new Vue({
    el: '#userstats',
    data: {
        users: [
            { name: 'Maria', days: 42 },
            { name: 'Claire', days: 14 },
            { name: 'HARRY', days: 44 }
        ],
        colors: [
            { name: 'MARIA', hex: '#9FB1BC', },
            { name: 'CLAIRE', hex: '#A8763E' },
            { name: 'HARRY', hex: '#1E3B51' }
        ]
    }
});

// Profile with subscription
var profile = new Vue({
    el: '#profile',
    data: {
        subscriptionType: 'FAMILY',
        person: 'PROFILE',
        selectedVariant: 0,
        subscription: 6,
        qoute: 'Amateurs sit and wait for inspiration, the rest of us just get up and go to work ― Stephen King',
        name: 'PICK USER PROFILE',
        variants: [
            {
                variantId: 1,
                variantPerson: "rgb(159, 177, 188)",
                variantImage: './images/martha.jpg'
            },
            {
                variantId: 2,
                variantPerson: "rgb(168, 118, 62)",
                variantImage: './images/claire.jpg'
            },
            {
                variantId: 3,
                variantPerson: "rgb(30, 59, 81)",
                variantImage: './images/harry.jpg'
            },
        ]
    },
    methods: {
        updatePerson: function (index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.subscriptionType + ' ' + this.person
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        }
    }
});
