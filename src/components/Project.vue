<template>
    <div>
        <form action="#" @submit.prevent="submit" @keydown="form.errors.clear($event.target.id)">
            <div class="control">
                <label for="project_name">Project Name</label>
                <input type="text" v-model="form.project_name" id="project_name" />
                <span v-if="form.errors.has('project_name')" style="color: red"
                      v-text="form.errors.get('project_name')"></span>
            </div>
            <div class="control">
                <label for="project_description">Project description</label>
                <input type="text" v-model="form.project_description" id="project_description"/>
                <span v-if="form.errors.has('project_description')" style="color: red"
                      v-text="form.errors.get('project_description')"></span>
            </div>
            <div class="control">
                <button :disabled="form.errors.any()">Create</button>
            </div>
        </form>
        <table>
            <thead>
            <tr>
                <td>Name</td>
                <td>Description</td>
                <td>Time</td>
            </tr>
            </thead>
            <tbody>
            <tr v-for="project in projects">
                <td>{{project.project_name}}</td>
                <td>{{project.project_description}}</td>
                <td>{{project.created_at | ago}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import moment from "moment";
    import Form from "../utils/Form";

    export default {
        data () {
            return {
                projects: [],
                form: new Form({
                    project_name: "",
                    project_description: ""
                })
            }
        },
        filters: {
            ago: date => {
                return moment(date).fromNow();
            }
        },
        created: function () {
            this.getAll();
        },
        methods: {
            getAll: function () {
                axios
                    .get('/api/projects')
                    .then(response => {
                        this.projects = response.data;
                    })
                    .catch(err => {
                        console.log("[ERROR]", err);
                    })
            },
            submit: function () {
                this
                    .form
                    .submit('post', '/api/projects')
                    .then(response => {
                        this.projects.unshift(response.data);
                    })
                    .catch(error => {
                        console.log("[ERROR]", error);
                    })
            }
        }
    }
</script>

<style>
</style>