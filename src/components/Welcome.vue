<template>
    <div>
        <message>
            {{info}}
        </message>
    </div>
</template>

<script>
    import Message from "./Message.vue";

    export default {
        components:{
            Message
        },
        data () {
            return {
                info: "Hello Welcome to Vue learning!"
            }
        }
    }
</script>

<style>
    h2{
        left: 0;
        line-height: 200px;
        margin: auto;
        margin-top: -100px;
        position: absolute;
        top: 50%;
        width: 100%;
    }
</style>