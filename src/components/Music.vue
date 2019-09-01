<template>
  <div>
    <audio :src="getCurrentSongSrc" autoplay controls></audio>
    <ul>
      <li v-for='(item,index) in musicData'
          :class='{active : currentIndex===index}'
          @click="listenIt(index)">
        <h2>{{item.id}}-歌名:{{item.name}}</h2>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "Music",
        data(){
            return{
                currentIndex:0,
                musicData:[
                    {id:1,name:"a-a",songSrc:"../static/1.mp3"},
                    {id:2,name:"b-b",songSrc:"../static/Joel Adams - Please Dont Go.mp3"},
                    {id:3,name:"c-c",songSrc:"../static/MKJ - Time.mp3"}
                ]
            }
        },
        computed:{
            getCurrentSongSrc(){
                return this.musicData[this.currentIndex].songSrc;
            }
        },
        methods:{
            listenIt(index){
                this.currentIndex = index;
            }
        }
    }
</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
  ul{
    list-style: none;
  }
  ul li{
    margin: 20px 20px;
    padding: 10px 5px;
    border-radius: 3px;
  }
  ul li.active{
    background-color: #66FFFF;
  }
</style>
