Vue.component('task', {
    props: ['title'],
    name: 'task',
    template: `
        <div>
            <li v-show="isVisible">{{title}} 
                <button class="btn btn-sm btn-primary" @click="hideTask">Hide</button>
            </li>
        </div>
    `,
    data() {
        return {
            isVisible: true
        }
    },
    methods: {
        hideTask() {
            this.$emit('task_hide');
            this.isVisible = false;
        }
    }
});

Vue.component('task-list', {
    name: 'task-list',
    template: `
    <div>
        <task v-for="(task,index) in tasks" :key="index" :title="task.description + ' ' + index" @task_hide="hideTask"></task>
    </div>
    `,
    data() {
        return {
            tasks: [
                {description: "d1", completed: true},
                {description: "d2", completed: true},
                {description: "d3", completed: false},
                {description: "d4", completed: true},
                {description: "d5", completed: false},
                {description: "d6", completed: false},
                {description: "d7", completed: false},
                {description: "d8", completed: true},
                {description: "d9", completed: false}
            ]
        }
    },
    methods: {
        hideTask() {
            console.log("Task hiden");
        }
    }
});

new Vue({
    el: "#root"
});