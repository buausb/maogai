<template>
  <div class="page" @scroll="addContent" id="problem">
      <ProblemCom v-for="(question,index) in context.problems" 
      :key="question" 
      :question="question" 
      :num="index"></ProblemCom>
  </div>
  
</template>

<script>
import axios from 'axios';
import {onBeforeUnmount, reactive} from 'vue';
import ProblemCom from "./components/ProblemCom.vue";
export default {
  name: 'App',
  components: {
    ProblemCom
  },
  setup() {
    let context = reactive(
      {
        problems: []
      }
    )
    var allQuestions
    let start = localStorage.getItem("max")
    if (start == null) start = "0"
    start = parseInt(start)
    localStorage.setItem("start",start)

    onBeforeUnmount(()=>{
      // console.log("onBeforeUnmount")
      localStorage.removeItem("start")
    })

    function addContent(e) {
      let scrollTop = e.target.scrollTop
      let clientHeight = e.target.clientHeight
      let scrollHeight = e.target.scrollHeight
      // console.log(e.target)
      // console.log("scrolling",scrollTop)
      // console.log(clientHeight,scrollHeight)
      let questionNum = context.problems.length
      if (scrollTop + clientHeight >= scrollHeight-500) {
        context.problems = [...context.problems,...allQuestions.slice(questionNum+1,questionNum+25)]
        // console.log("到底了",context.problems)
      }
      if (scrollTop == 0) {
        let newStart = start - 10 < 0 ? 0 : start - 10;
        let tmpNewContent = allQuestions.slice(newStart, start)
        start = newStart
        context.problems = [...tmpNewContent, ...context.problems]
        localStorage.setItem("start",start)

        // console.log("到头了")
        // console.log(tmpNewContent,start,newStart)
      }
    }
    axios.get("/maogai/problems.txt") // 生产环境
    // axios.get("/problems.txt") // 开发环境
    .then((res) => {
      allQuestions = res.data
      context.problems = allQuestions.slice(start,start+25)
    })
    
    return {
      context,
      addContent,
      start
    }
  }
}
</script>

<style>
  .page {
    overflow: scroll;
    height: 775px;
  }
</style>
