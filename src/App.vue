<template>
    <div id="app">
        <nav>
            <router-link to="/" exact>Home</router-link>
            <router-link to="/skills" exact>Skills</router-link>
            <router-link to="/counter" exact>Counter</router-link>
            <router-link to="/projects" exact>Projects</router-link>
        </nav>
        <section>
            <router-view></router-view>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {};
        }
    }
</script>

<style>
</style>
