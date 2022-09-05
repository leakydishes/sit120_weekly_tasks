//create a new vue application
new Vue({

    //connects vue to id todo in index.html
    el: "#todo",

    //all data from index is passed into here
    data: {
        //empty string 
        newTask: "",
        //empty array taskList
        taskList: []
    },

    methods: {
        //adds one task to the function
        addTask: function () {
            //remove white space with method time()
            let task = this.newTask.trim();
            //if user types an input/ data is not blank it is then passed
            if (task) {
                //pushed to the array taskList declared in data
                this.taskList.push({
                    text: task
                });
                //Clear import to empty for new user input
                this.newTask = "";
            }
        },

        //remove task listed by clicking the bin icon
        removeTask: function (task) {
            //data is moved friom tasklist to task and then passed to index to be removed/spliced
            let index = this.taskList.indexOf(task);
            this.taskList.splice(index, 1);
        },
        //allows the taks to be passed into targetValue to be checked using boolean 
        selectAll: function (task) {
            //targetValue is set to the opposite of areAllSelected
            let targetValue = this.areAllSelected ? false : true;
            //check state of all items to the target value and pass targetview if variable is greater then taskList length
            for (let i = 0; i < this.taskList.length; i++) {
                this.taskList[i].checked = targetValue;
            }
        }
    }
});
