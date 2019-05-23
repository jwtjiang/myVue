<template>
  <div class = "cue">
    <h2>{{mse}}</h2>
    <h3>路由过来的信息{{value}}</h3>
    <span>
      <button @click="childClick">{{btnVal}}</button>
    </span>
    <span>{{msg}}</span>
    <ChildVue v-bind:test='test' @paretChiled = "paret"></ChildVue>
  </div>
</template>

<script>
  import ChildVue from '@/components/ChildVue';
  export default {
    name: 'cue',
    data(){
      return{
        mse:"用来路由demo渲染",
        value:"",
        test:"",
        btnVal:"",
        flag:true,
        msg:"",
      }
    },
    components:{
      ChildVue
    },
    mounted () {
      //js开始调用初始化函数
      console.log("我初始化调用了");
      console.log("路由参数:"+this.$route.query.name);
      this.value = this.$route.query.name;
      if(this.flag){
        this.btnVal = "向子组件传值";
      }else{
        this.btnVal = "取消子组件传值";
      }
    },
    methods:{
      childClick(){
        if(this.flag){
          this.flag = false;
          this.btnVal = "取消子组件传值";
          this.test = "我是父组件的值";
          console.log(this.test);
        }else{
          this.flag = true;
          this.btnVal = "向子组件传值";
          this.test="";
        }
      },
      paret(value){
        this.msg = value;
      }
    }
  }
</script>

<style scoped>
  .cue{
    margin-left: 100px;
    width: 700px;
    height: 400px;
    border:solid #999 1px;
  }
</style>
