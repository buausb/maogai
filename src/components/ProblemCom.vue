<template>
    <div class="panel">
        <div class="question">
            &nbsp;{{ questionNum  }}.
            <br>
            &nbsp;&nbsp;{{ question.Description }}
        </div>
        <hr>

        <div class="choices" 
            v-for="(choice,index) in question.Choice" 
            :key="index"
            :name=" questionBoxName "
            @click="choose"
            >
            <input 
             :type="type"
             :name="question.Description"
             :value="choice.slice(0,1)"
            >
            &nbsp;&nbsp;{{choice}}
        </div>

        <br>
        <br>
        <br>
        &nbsp;&nbsp;
        <span>Answer:&nbsp;</span>
        <span v-show="answer">{{ question.Answer }}</span>
        &nbsp;&nbsp;
        <button @click="showAnswer">
            {{ answer ? "Hide Answer" : "Show Answer" }}
        </button>
        <!-- <div class="space"></div> -->
        &nbsp;&nbsp;
        &nbsp;&nbsp;
        <button @click="checkAnswer">
            {{ checking ? "Try Again" : "Check Answer" }}
        </button>
        &nbsp;&nbsp;
        &nbsp;&nbsp;
        <button @click="mark" style="width: 70px;" :class="{'star':star}">
            Star
        </button>
        
    </div>
</template>

<script setup>
    import { defineProps,ref } from 'vue';
    const props = defineProps({
        question: Object,
        num: Number,
        // start: Number
    })
    // console.log(props.start)
    // console.log(props.question.Answer.length)
    let type = props.question.Answer.length > 1 ? "checkbox" : "radio";
    let answer = ref(false);
    let checking = ref(false);
    if (JSON.parse(localStorage.getItem("marks")) == null) {
        localStorage.setItem("marks",JSON.stringify([]))
    }

    
    let start = localStorage.getItem("start")
    start = parseInt(start)
    // console.log(start,start + props.num + 1)
    
    let starOrNot = JSON.parse(localStorage.getItem("marks")).includes(props.question.Description)
    let star = ref(starOrNot);

    let questionNum = props.num + start + 1
    
    let questionBoxName = "box" + props.question.Description

    function showAnswer() {
        answer.value = !answer.value
    }
    function checkAnswer() {
        localStorage.setItem("max",props.num+start)
        checking.value = !checking.value

        var choices = document.getElementsByName(props.question.Description)
        var choiceBox = document.getElementsByName(questionBoxName)
        
        if (checking.value) {
            var res = []
            for (var i in choices) {
                if (choices[i].checked) {
                    res.push(choices[i].value)
                    if (props.question.Answer.includes(choices[i].value)) {
                        console.log("correct answer")
                        choiceBox[i].style.backgroundColor = "#3df158"
                    } else {
                        choiceBox[i].style.backgroundColor = "#e35555"
                    }
                } else {
                    if (props.question.Answer.includes(choices[i].value)) {
                        choiceBox[i].style.backgroundColor = "#3df158"
                    }
                }
            }

            answer.value = true;
        } else {
            // console.log("no answer")
            answer.value = false
            for (i = 0; i < choices.length; i++) {
                // console.log(i)
                choiceBox[i].style.backgroundColor = "white"
                choices[i].checked = false
            }
        }
        
    }
    function mark() {
        star.value = !star.value
        let marks = JSON.parse(localStorage.getItem("marks"))
        if (marks == null) {
            marks = []
        }
        if (star.value) {
            marks.push(props.question.Description)
        } else {
            marks = marks.filter((str) => !(str === props.question.Description))
        }
        localStorage.setItem("marks", JSON.stringify(marks))
        console.log(marks)
    }

    function choose(e) {
        e.target.children[0].checked = !e.target.children[0].checked
    }
</script>

<style>
    .panel {
        width: 100%;
        /* height: 300px; */
        margin: 0 auto;
        border-top: 1px solid black;
        border-left: 1px solid black;
        border-right: 1px solid black;
    }
    .question {
        width: 100%;
        text-align: center;
    }
    .choices {
        /* text-align: center; */
        margin-top: 10px;
        border-top: 1px solid black;
        border-bottom: 1px solid black;
    }
    .choices:hover {
        background-color: #ddd;
    }
    .space {
        display: inline-block;
        width: 20%;
    }
    .star {
        background-color: #f6c72c;
    }
</style>