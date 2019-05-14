import React, { Component } from 'react';
// import logo from './logo.svg';
// import Quiz from './component/quiz';
import  Quiz from './component/quiz'
import './App.css';
import { error } from 'util';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dta: []
    }

  }

  componentDidMount() {
    var { head, dta } = this.state
    fetch('https://opentdb.com/api.php?amount=10')
      .then((resp) => resp.json()) // Transform the data into json
      .then((data) => {
        this.setState({ dta: data.results })
        console.log('1st==>' + dta)

      })
      .catch(error => console.error(error))
  }


  render() {
    var { start, dta } = this.state
    // console.log(dta[0])
    // console.log('dta' + dta)

    // console.log(dta)

    // for (let i in dta) {
    //   console.log(dta[i])   //har ques a gaey ha    
    //   for (let j in dta[i]) {
    //     // console.log(dta[i][j])
    //   }
    // }

    // const doubled = dta.map((dta) => dta);
    // console.log(doubled);


    return (
      <div className="App">
        <header className="App-header">
          <h1>React Quiz App</h1>
          {/* {!start && <button onClick={() => this.start()}>Start Quiz</button>} <br /> */}

          {/* {dta.length && start && <Quiz data={dta[0].question}
            ans1={dta[0].incorrect_answers[0]}
            ans2={dta[0].incorrect_answers[1]}
            ans3={dta[0].incorrect_answers[2]}
            ans4={dta[0].correct_answer} />
          } */}

          {<Quiz dta={dta} />}

        </header>
      </div>
    );
  }
}

export default App;