<template>
    <div style="height:100%" class="resposiveCls">
        <iframe height="100%" width="100%"></iframe>
    </div>
</template>

<script>
import {bus} from '../main'
import 'brace'
import 'brace/mode/markdown'
import 'brace/mode/javascript'
import 'brace/theme/chrome'
export default{
    name:'Output',
    data:function(){
        return{
            reset:false,
        }
    },
    props:{
        scriptOpt:{
            required:false,
            type:String,
        
        }
    },
    watch:{
        scriptOpt:function(val){
            document.querySelector('iframe').contentDocument.open();
            document.querySelector('iframe').contentDocument.write(val);
            document.querySelector('iframe').contentDocument.close()
        },
    },
    mounted:function(){
        bus.$on('reset',(reset)=>{
            this.reset=reset;
            let val="";
            document.querySelector('iframe').contentDocument.open();
            document.querySelector('iframe').contentDocument.write(val);
            document.querySelector('iframe').contentDocument.close()
        });
    }
}

</script>

<style>

</style>