<!-- 圈状渐变 -->
<style lang = 'scss'>
@import '../scss/index.scss';

    .loading{
        width : 4rem;
        height : 4rem;
        border-radius : 2rem;
        background : #00BCD4;
        animation : shade 1.5s;
        -webkit-animation: shade 1.5s ;
        animation-iteration-count: infinite;
        -webkit-animation-iteration-count: infinite;
    }

    @keyframes  shade{
        50%  {
                 width : 1rem;
                 height : 1rem;
                 border-radius : 0.5rem;
                 background : #61dc34;
             }

        100% {
                 width : 4rem;
                 height : 4rem;
                 border-radius : 2rem;
                 background : #00BCD4;
            }
    }
</style>

<template>
    <div  class = 'loading'>
           
    </div>
</template>

<script>
    export default {
        data(){
            return {
                
            }
        }
    }
</script>

