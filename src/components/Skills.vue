<template>
    <div>
        <ul>
            <li v-for="skill in skills">{{ skill }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                skills: []
            }
        },
        mounted() {
            axios
                .get('/api/skills')
                .then(response => {
                    this.skills = response.data;
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }
</script>

<style>
</style>