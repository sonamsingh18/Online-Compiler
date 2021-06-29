<template>
  <b-nav pills>
    <b-nav-item><b-icon icon="house" aria-hidden="true" class="iconVis" title="reset" @click="reset()"></b-icon></b-nav-item>
    <b-nav-item>
        <b-icon icon="file-earmark" 
            aria-hidden="true" 
            class="iconVis"
            v-on:click="saveFile()" title="save"></b-icon>
    </b-nav-item>
    <b-nav-item>
        <b-icon icon="exclamation-circle-fill" 
            variant="dark"
            v-on:click="darkMode()" title="dark mode"></b-icon>
    </b-nav-item>
    <b-nav-item><b-button variant="success" class="btn-padding" v-on:click="runClicked()">Run >></b-button></b-nav-item>
  </b-nav>
</template>

<script>
import { bus } from '../main';
export default {
    name:'Header',
    data:function(){
        return{
            flag:false,
            saveFlag:false,
            dark:false,
        }
    },
    methods:{
        runClicked:function(){
            this.flag=!this.flag;
            this.$emit('runClick',this.flag);
        },
        saveFile:function(){
            this.saveFlag=!this.saveFlag;
            bus.$emit('saveFile',this.saveFlag);
        },
        darkMode:function(){
            let x=document.querySelector('.ace_editor');
            this.dark=!this.dark;
            if(this.dark==true){
                x.style.color='white';
                x.style.backgroundColor='black';
            }
            else{
                x.style.color='black';
                x.style.backgroundColor='';
            }
            
        },
        reset:function(){
            this.resetFlag=true;
            bus.$emit('reset',true);
        }
    }
}
</script>
<style>
.nav{
    background-color:lightgrey;
}
.btn-padding{
    margin:0%;
}
.nav-link{
    padding:0.2rem 1rem !important;
}
a{
    color:black !important;
}

</style>