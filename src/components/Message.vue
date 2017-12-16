<template>
    <div class="box">
        <p>
            <slot>
                This is default
            </slot>
        </p>
    </div>
</template>

<script>
</script>

<style>
    .box{
        background: #e3e3e3;
        padding: 10px;
        border: 1px solid #c5c5c5;
        margin-bottom: 1em;
    }
</style>