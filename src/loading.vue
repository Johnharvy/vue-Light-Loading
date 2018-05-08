<style lang = 'scss'>
      @import './scss/index.scss';
</style>

<template>
    <div class="outCell"  :style = "{ background : myMessage.background }">
            <!-- <CircleLoading></CircleLoading> -->
            <Globlue></Globlue>         
    </div>
</template>

<script>
    import CircleLoading from './templates/circle'
    import Globlue from './templates/globlue'

    let type = {}
    export default {
        components : {
           CircleLoading,
           Globlue
        },
        /**
         *  @props {String} background
         *  
         */
        props : ['myMessage'],
        data(){
            return {
                 text : "Hello!",
                 type : '',
                 
            }
        },
        mounted(){
            document.querySelector('.outCell').style.height = screen.availHeight + 'px'
            this.type = this.myMessage.type
        }  
    }
</script>

