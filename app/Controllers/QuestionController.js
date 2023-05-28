import { appState } from "../AppState.js"
import { questionService } from "../Services/QuestionService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"

function _drawQuestion() {

    setHTML('question', appState.question[0].QuestionTemplate)
}

export class QuestionController {
    constructor() {
        this.getQuestion()
        appState.on('question', _drawQuestion)
    }



    async getQuestion() {
        try {

            await questionService.getQuestion()
        } catch (error) {
            Pop.error(error)
            console.log(error)


        }
    }
    checkAnswer(answer) {
        if (answer == appState.question[0].correct_answer) {
            Pop.toast("CONGRATS BIG BRAIN")
        } else {
            Pop.error('try your best you got it')
        }
    }
}
