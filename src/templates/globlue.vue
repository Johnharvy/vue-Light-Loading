<!-- 横排小球渐变 -->
<style lang = 'scss'>
@import '../scss/index.scss';
    @mixin circleSize{
       width : 1rem;
       height : 1rem;
       margin-left : 0.5rem;
       border-radius : 0.5rem;
       background : #00BCD4;
       animation : shade1 1.5s;
       -webkit-animation: shade1 1.5s ;
    }

    .loading {
        @include flexCenter;
        width : 100%;
        margin : 0 auto;
    }

    .loading .ball:nth-child(1){
        @include circleSize;
        animation-iteration-count: infinite;
        -webkit-animation-iteration-count: infinite;
        opacity: 1;
    } 


    .loading .ball:nth-child(2){
        @include circleSize;
        animation-iteration-count: infinite;
        -webkit-animation-iteration-count: infinite;
        opacity: 0.84;
    } 


    .loading .ball:nth-child(3){
        @include circleSize;
        animation-iteration-count: infinite;
        -webkit-animation-iteration-count: infinite;
        opacity: 0.68;
    } 


    .loading .ball:nth-child(4){
        @include circleSize;
        animation-iteration-count: infinite;
        -webkit-animation-iteration-count: infinite;
        opacity: 0.52;
    } 


    .loading .ball:nth-child(5){
         @include circleSize;
        animation-iteration-count: infinite;
        -webkit-animation-iteration-count: infinite;
        opacity: 0.36;
    } 


    .loading .ball:nth-child(6){
        @include circleSize;
        animation-iteration-count: infinite;
        -webkit-animation-iteration-count: infinite;
        opacity: 0.20;
    } 



    @keyframes  shade1{
          25% { opacity: 0.75;}  50%{ opacity: 0.50; } 100%{ opacity: 0.25; }
    }

    @keyframes  shade2{
          25% { opacity: 0.65;}  50%{ opacity: 0.46; } 100%{ opacity: 0.25; }
    }

    @keyframes  shade3{
          25% { opacity: 0.55;}  50%{ opacity: 0.40; } 100%{ opacity: 0.25; }
    }

    @keyframes  shade4{
          25% { opacity: 0.25;}  50%{ opacity: 0.5; } 100%{ opacity: 0.25; }
    }

    @keyframes  shade5{
          25% { opacity: 0.25;}  50%{ opacity: 0.50; } 100%{ opacity: 0.25; }
    }

    @keyframes  shade6{
          25% { opacity: 0.25;}  50%{ opacity: 0.50; } 100%{ opacity: 0.25; }
    }

    
</style>

<template>
    <div  class = 'loading'>
           <div class = 'ball'>
              
           </div>
               
           <div class = 'ball'>
            
           </div>

           <div class = 'ball'>
            
           </div>

           <div class = 'ball'>
            
           </div>

           <div class = 'ball'>
            
           </div>

           <div class = 'ball'>

           </div> 
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

