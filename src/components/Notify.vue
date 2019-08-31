<template>
  <el-button
    plain
    @click="open2">
    警告
  </el-button>
</template>

<script>
    export default {
        name: "Notify",
        methods: {
            open2() {
                this.$notify({
                    title: '警告',
                    message: '这是一条警告的提示消息',
                    type: 'warning'
                });
            },
        }
    }
</script>

<style scoped>

</style>
