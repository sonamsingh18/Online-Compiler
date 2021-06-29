<template>
  <div id="app">
    <Header @runClick="updateOutput"></Header>
    <b-card-group>
    
          <b-card>
            <AceEditor :run="isRun" @content="scriptContent"></AceEditor>
          </b-card>
        
          <b-card>
            <Output :scriptOpt="contentScript"></Output>
          </b-card>
        
    </b-card-group>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import AceEditor from './components/AceEditor.vue'
import Output from './components/Output.vue'

export default {
  name: 'App',
  data:function(){
    return{
      isRun:false,
      contentScript:``,
    }
  },
  components: {
    Header,
    AceEditor,
    Output,
  },
  methods:{
    updateOutput:function(val){
      this.isRun=val;
    },
    scriptContent:function(val){
      this.contentScript=val;
    }
  },
}
</script>

<style>

body, html, #app {
  height: 100% ;
  overflow:hidden;
}

.card-group{
  height:100%;
  overflow:hidden;
}
.card{
  height:100%;
  margin:1%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
}

@media screen and (max-width:500px){
  .card{
    height:50%;
  }
}

</style>
