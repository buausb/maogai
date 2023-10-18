<template>
  <div class="page" @scroll="addContent" id="problem">
      <ProblemCom v-for="(question,index) in context.problems" :key="index" :question="question" :num="index"></ProblemCom>
  </div>
  
</template>

<script>
import axios from 'axios';
import {reactive} from 'vue';
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
    }
    
    axios.get("/problems.txt")
    .then((res) => {
      allQuestions = res.data
      context.problems = allQuestions.slice(0,25)
    })
    
    return {
      context,
      addContent
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
