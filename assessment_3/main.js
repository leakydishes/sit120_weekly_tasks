//create a new vue application
new Vue({

    //connects vue to id todo in index.html
    el: '#todo',
    data: {
        task: {
            text: ''
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
                text,
            })
            this.task.text = ''
        },
        removeTask(index) {
            this.$delete(this.tasks, index)
        },
    },
    // store in local storage using Vue mounted
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

//add event listener JavaScript for name input to store
window.addEventListener('load', () => {
    // username for tasks
    const nameInput = document.querySelector('#name');
    const username = localStorage.getItem('username') || '';

    nameInput.value = username;

    // listen for name and store local storage
    nameInput.addEventListener('change', (e) => {
        localStorage.setItem('username', e.target.value);
    })
});

// Insert timer information here




