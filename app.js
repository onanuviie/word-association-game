const scoreDisplay = document.getElementById('score-display')
const questionDisplay = document.getElementById('question-display')

const questions = [
    {
        quiz: ['value', 'estimate', 'evaluate'],
        options: ['jury', 'assess'],
        correct: 1
    },
    {
        quiz: ['close', 'near', 'next'],
        options: ['trace', 'adjacent'],
        correct: 1
    },
    {
        quiz: ['love', 'romance', 'infatuation'],
        options: ['affection', 'rulers'],
        correct: 0
    },
    {
        quiz: ['amethyst', 'beryl', 'jade'],
        options: ['emerald', 'cerulean'],
        correct: 0
    },
    {
        quiz: ['foreign', 'national', 'ethnic'],
        options: ['mad', 'exotic'],
        correct: 1
    },
    {
        quiz: ['asaba', 'ikeja', 'gombe'],
        options: ['edo', 'uyo'],
        correct: 1
    },
]

let score = 0
let pickedAnswers = []

scoreDisplay.textContent = score

function populateQuestions() {
    questions.forEach(question => {
        const questionBox = document.createElement('div')
        questionBox.classList.add('question-box')

        const logoDisplay = document.createElement('h1')
        logoDisplay.textContent = '✒'
        questionBox.append(logoDisplay)
        
        question.quiz.forEach(word => {
            const wordText = document.createElement('p')
            wordText.textContent = word
            questionBox.append(wordText)
        })

        const questionButtons = document.createElement('div')
        questionButtons.classList.add('question-buttons')
        questionBox.append(questionButtons)

        question.options.forEach((option, optionIndex) => {
            const questionButton = document.createElement('button')
            questionButton.classList.add('question-button')
            questionButton.textContent = option

            let correctAnswer = question.correct

            questionButton.addEventListener('click', () => 
            checkAnswer(questionBox, questionButton, 
                option, optionIndex, correctAnswer))

            questionButtons.append(questionButton)
        })

        const answerDisplay = document.createElement('div')
        answerDisplay.classList.add('answer-display')

        questionBox.append(answerDisplay)
        questionDisplay.append(questionBox)
    })
}

populateQuestions()

function checkAnswer(questionBox, questionButton, 
    option, optionIndex, correctAnswer){
    if (optionIndex === correctAnswer) {
        score++
        scoreDisplay.textContent = score
        displayResult(questionBox, "CORRECT :)", 'correct')
    }
    else {
        score--
        scoreDisplay.textContent = score
        displayResult(questionBox, "WRONG:(", 'wrong')
    }

    pickedAnswers.push(option)
    questionButton.disabled = pickedAnswers.includes(option)
}

function displayResult(questionBox, answer, className) {
    const answerDisplay = questionBox.querySelector('.answer-display')
    answerDisplay.classList.remove('wrong')
    answerDisplay.classList.remove('correct')
    answerDisplay.classList.add(className)
    answerDisplay.textContent = answer
}