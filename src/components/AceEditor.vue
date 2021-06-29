<template>
    <div style="height:100%">
        <m-ace-editor 
            style="height:100%"
            v-model="content" 
            :line-number="true"
            theme="chrome" 
            mode="javascript"
            ></m-ace-editor>
    </div>
</template>
<script>
import { saveAs } from 'file-saver';
import {bus} from '../main'
import 'brace'
import 'brace/mode/markdown'
import 'brace/mode/javascript'
import 'brace/theme/chrome'
export default{
    name:'AceEditor',
    data:function(){
        return{
            content:`<!DOCTYPE html>
<html>
    <body>
        <h2>TryIt</h2>
    </body>
</html>`, 
            mode:false,
        }
    },
    props:{
            run:{
                type:Boolean,
                required:false,
                default:false,
                reset:false,
            }
        },
    watch:{
        run:function(){
            this.$emit('content',this.content);
        }
    },
    methods:{
        clic:function(){
            document.querySelector('iframe').contentDocument.open();
            document.querySelector('iframe').contentDocument.write(this.content);
            document.querySelector('iframe').contentDocument.close()
        }
    },
    mounted:function(){
        bus.$on('saveFile',()=>{
            console.log("save");
            var blob = new Blob([this.content],
                { type: "text/plain;charset=utf-8" });
            saveAs(blob, "download.txt");
        });
        bus.$on('reset',(reset)=>{
            this.reset=reset;
            this.content=`<!DOCTYPE html>
<html>
    <body>
    </body>
</html>`;
        });
    }
}
</script>
<style>

</style>