<template>
    <div class = "childvue">
      <h2>我是子组件</h2>
      <h4>{{value}}</h4>
      <span>
        <button @click="childParet">子传父值</button>
      </span>
    </div>
</template>

<script>
  export default {
    props:['test'],
    name: 'ChildVue',
    data(){
        return{
          value:"",
          websocket:null,
        }
    },
    mounted () {

    },
    created(){
      this.initWebSocket();
    },
    destroyed(){
      this.websocketclose();
    },
    methods:{
      childParet(){
        this.$emit("paretChiled","我是子组件传来的值");
      },
      initWebSocket(){
        //websocket地址
        console.log(window.location.hostname);
        let url = "ws://127.0.0.1:8080/ws/websocket";
        this.websocket = new WebSocket(url);
        this.websocket.open = this.websocketonopen;
        this.websocket.onerror = this.websocketonerror;
        this.websocket.onmessage = this.websocketonmessage;
        this.websocket.onclose = this.websocketclose;
        console.log(this.websocket);
      },
      websocketonopen() {
        console.log("WebSocket连接成功");
      },
      websocketonerror(e) { //错误
        console.log("WebSocket连接发生错误");
      },
      websocketonmessage(e){ //数据接收
        const redata = JSON.parse(e.data);
        //注意：长连接我们是后台直接1秒推送一条数据，
        //但是点击某个列表时，会发送给后台一个标识，后台根据此标识返回相对应的数据，
        //这个时候数据就只能从一个出口出，所以让后台加了一个键，例如键为1时，是每隔1秒推送的数据，为2时是发送标识后再推送的数据，以作区分
        console.log(redata.value);
      },
      websocketsend(agentData){//数据发送
        this.websock.send(agentData);
      },

      websocketclose(e){ //关闭
        console.log("connection closed (" + e.code + ")");
      },
    },
    watch:{
      test:{
        handler(newName, oldName) {
          this.value = this.test;
        },
        immediate: true
      }
    }
  }
</script>

<style scoped>
  .childvue{
    margin-left: 100px;
    width: 500px;
    height: 200px;
    border:solid #894546 1px;
  }
</style>
