<template>
 <div>
  <span>
    {{sum}}
  </span>
   <button @click="onclik">按钮</button>
   <span>
  </span>
   <div>
     <Hello></Hello>
     <router-view></router-view>
   </div>
 </div>
</template>

<script>
  import qs from 'qs';
  import Hello from './HelloWorld.vue';
  export default {
    name: 'MyFirstVue',
    data () {
      return {
        sum: '我的第一个vue',
        value:''
      }
    },
    components:{
      Hello
    },
    methods:{
      onclik(){
        console.log(this.$route.params);
        this.$http.post('/demo/test/vueTest',qs.stringify({params:"455688520"})).then(res=>{
          console.log(res.data.name);
          this.value = res.data.name;
          this.$router.push({path:"/cue",query:{name:this.value}});
        });
      }
    }
  }
</script>

<style scoped>

</style>
