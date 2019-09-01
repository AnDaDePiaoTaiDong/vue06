<template>
  <div>
    <el-button
      plain
      @click="open2">
      警告
    </el-button>
    <el-button
      plain
      @click="open3">
      警告3
    </el-button>
    <p>{{result}}</p>
    <input :value='getNotify'></input>
  </div>
</template>

<script>
    export default {
        name: "Notify",
        data(){
            return{
                notifyAll:1,
                other:2,
                result:8
            }
        },
        computed:{
            getNotify(){
                return this.notifyAll + this.other;
            }
        },
        watch:{
            notifyAll : {
                handler(newVal,oldVal){
                    this.result = this.notifyAll + this.other;
                }
            }
        },
        methods: {

            open2() {
                this.notifyAll++;
                this.$notify({
                    title: '警告',
                    message: '这是一条警告的提示消息',
                    type: 'warning'
                });
            },
            open3() {
                this.other++;
            }
        }
    }
</script>

<style scoped>

</style>
