<template>
    <div>
        <Loading :my-message = 'params'></Loading> 
    </div>
</template>

<script>
    import Loading from './loading'

    let params = {
         background : '#d8d8d8',
         type : 'globlue'
    }
    export default {
        components : {Loading},
        data(){
            return{
               params : params
            }
        }
    }
</script>

<style scoped>

</style>