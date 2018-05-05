<template>
    <div class = 'outCell'>
        {{text}}
    </div>
</template>

<script>
    /* import './scss/index.css' */
    export default {
        props : ['myMessage'],
        data(){
            return {
                text : '你好'  
            }
        },
        mounted(){
            
        }
    }
</script>

<style>
     /* @import url("./scss/index.css"); */
</style>

