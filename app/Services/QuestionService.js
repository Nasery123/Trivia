import { appState } from "../AppState.js"
import { Question } from "../Models/Question.js";
import { triviaApi } from "./AxiosService.js";







class QuestionService {
    async getQuestion() {
        const res = await triviaApi.get();
        console.log(res.data.results)
        appState.Question = res.data.
            results.map(q => new Question(q));
    }

}
export const questionService = new QuestionService()
