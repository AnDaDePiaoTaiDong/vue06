<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Form :posts="posts" @change="jj"></Form>
  </div>
</template>

<script>
    import Form from './Form'

    export default {
        components: {Form},
        name: 'HelloWorld',
        data() {
            return {
                msg: '我的时尚表单',
                posts:[
                    {id:1,name:"传给子组件xx"},{id:2,name:"传给子组件dd"},{id:3,name:"传给子组件xd"}
                ]
            }
        },
        mounted(){
            bus.$on("sendData",d=>{
                console.log(d.data);
                this.msg = d.data;
            });
        },
        methods:{
            jj(){
                this.msg = this.msg + "33";
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
