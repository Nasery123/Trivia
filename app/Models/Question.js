export class Question {
  constructor(data) {
    this.catagory = data.catagory
    this.type = data.type

    this.question = data.question
    this.correct_answer = data.correct_answer


    this.incorrect_answers = data.incorrect_answers
    this.choices = ([...data.incorrect_answers, data.correct_answer])

  }
  get QuestionTemplate() {
    if (this.type == 'boolean') {
      return `
        <section class="row">
        <div class="col-12 text-center">
          <p class="text">${this.question}</p>
        </div>
      </section>
      <section class="row">
        <div class="col-12 text-center">
          <button onclick="app.questionController.checkAnswer('${this.correct_answer}')" class="btn btn-primary m-2">${this.correct_answer}</button>
          <button onclick="app.questionController.checkAnswer('${this.incorrect_answers[0]}')" class="btn btn-primary m-2">${this.incorrect_answers[0]}</button>
        </div>
      </section>`
    } else {
      return `
            <section class="row">
            <div class="col-12 text-center m-2">
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
      template += `<button onclick="app.questionController.checkAnswer('${a}')" class="btn btn-primary">${a}</button>`
    })

    return template
  }
}
