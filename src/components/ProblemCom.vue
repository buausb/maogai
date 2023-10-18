<template>
    <div class="panel">
        <div class="question">
            &nbsp;{{ num+1 }}.
            <br>
            &nbsp;&nbsp;{{ question.Description }}
        </div>
        <hr>
        <div class="choices" 
            v-for="(choice,index) in question.Choice" 
            :key="index"
            :name=" question.Description "
            >
            <input 
             :type="type"
             :name="num"
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
        
    </div>
</template>

<script setup>
    import { defineProps,ref } from 'vue';
    const props = defineProps({
        question: Object,
        num: Number,
    })
    // console.log(props.question.Answer.length)
    let type = props.question.Answer.length > 1 ? "checkbox" : "radio";
    let answer = ref(false);
    let checking = ref(false);
    function showAnswer() {
        answer.value = !answer.value
    }
    function checkAnswer() {
        localStorage.removeItem("max",props.num)
        checking.value = !checking.value

        var choices = document.getElementsByName(props.num)
        var choiceBox = document.getElementsByName(props.question.Description)
        
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
    
</style>