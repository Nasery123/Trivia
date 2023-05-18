import { appState } from "../AppState.js"
import { questionService } from "../Services/QuestionService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"

function _drawQuestion(){
    setHTML('question', appState.Question[0].QuestionTemplate)
}

export class QuestionController {
    constructor() {
        this.getQuestion()
        appState.on('question',_drawQuestion)
    }



    async getQuestion() {
        try {
            await questionService.getQuestion()
        } catch (error) {
            Pop.error(error)


        }
    }
}
