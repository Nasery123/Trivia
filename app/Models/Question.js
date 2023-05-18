export class Question {
    constructor(data) {
        this.catagory = data.catagory
        this.type = data.type
        this.question = data.question
        this.correct_answer = data.correct_answer
        this.choices = data.choices
        this.incorrect_answers = data.incorrect_answers
        this.choice = ([...data.incorrect_answer, data.correct_answer])

    }
    get QuestionTemplate() {
        if (this.type == 'boolean') {
            return `
        <section class="row">
        <div class="col-12 text-center">
          <p>${this.question}</p>
        </div>
      </section>
      <section class="row">
        <div class="col-12 text-center">
          <button onclick="app.questionsController.checkAnswer('${this.correct_answer}')" class="btn btn-primary">${this.correct_answer}</button>
          <button onclick="app.questionsController.checkAnswer('${this.incorrect_answers[0]}')" class="btn btn-primary">${this.incorrect_answers[0]}</button>
        </div>
      </section>`
        } else {
            return `
            <section class="row">
            <div class="col-12 text-center">
              <p>${this.question}</p>
            </div>
          </section>
          <section class="row">
            <div class="col-12 text-center">
              ${this.MultipleTemplate}
            </div>
          </section>`

        }
    }
    get MultipleTemplate() {
        let template = ''
        this.choices.sort(() => Math.random() - 0.5)
        this.choices.forEach(a => {
            template += `<button onclick="app.questionsController.checkAnswer('${a}')" class="btn btn-primary">${a}</button>`
        })

        return template
    }
}
