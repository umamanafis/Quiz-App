import React, { Component } from 'react'

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      start: false,
      index: 0, catIndex: 0,
      optSelected: '',
      result: 0, quiz: false, list: false,
      dta: [],
    }

  }

  static getDerivedStateFromProps(props, state) {
    if (props.dta) {

      return {
        dta: props.dta
      }
    }
  }

  start() {
    this.setState({ start: true, list: true })

    // console.log('2nd==>'+this.state.dta)
  }

  // componentDidMount(){
  //     fetch('https://opentdb.com/api.php?amount=10')
  // .then(response => response.json())
  // .then(data => {
  //   this.setState({dta:data}) // Prints result from `response.json()` in getRequest
  // })
  // .catch(error => console.error(error))

  //   }



  inpvalue() {

    let { dta, index, optSelected, result, catIndex } = this.state;
    if (optSelected) {
      if (optSelected === 3) {
        this.setState({ result: result + 1 })
      }
      // console.log('inp>>>',e.target.value);
    }
    if (index < 10) {

      this.setState({ index: index + 1 })
    }

  }


  //Quiz
  inp(e) {

    console.log('inp>>>', e.target.value);
    this.setState({ optSelected: e.target.value })
  }

  

  render() {
    let { start, dta, createquiz, quiz, list, index, catIndex, result, tryAgain } = this.state;
    const divStyle = {
      padding:'2px 2px' ,
      margin: '40px',
      border: '8px inset white'
      // position:'fixed'
    };

    // console.log('cat>>>', dta);

    return (

      <div className='CreateQuiz' style={divStyle}>

        {!start && <button onClick={() => this.start()}>Start Quiz</button>}

        {list &&
          <div>
            <div className='modal' >
              <h2>
                {index >= 10 && 'Reasult = ' + (result / 10) * 100 + '%'}
              </h2>{
                (dta) &&
                (index < 10) &&
                <div onChange={(e) => { this.inp(e) }}>
                  <h4>{
                    'Q:' + ((index) + 1) + ' ' +
                    dta[index].question
                  }
                  </h4>
                  <div className='radio'>
                    <div className='op'>
                    <input type='radio' name='ab' value={0} />
                      {
                        dta[index].incorrect_answers[0]
                      }
                    </div>
                  </div><br/>
                  <div className='radio'>
                    <div className='op'>
                    <input type='radio' name='ab' value={1} />
                      {
                        dta[index].incorrect_answers[1]
                      }
                    </div>
                  </div><br/>
                  <div className='radio'>
                    <div className='op'>
                    <input type='radio' name='ab' value={2} />
                      {
                        dta[index].incorrect_answers[2]
                      }
                    </div>
                  </div><br/>
                  <div className='radio'>
                    <div className='op'>
                    <input type='radio' name='ab' value={3} />
                      {
                        dta[index].correct_answer
                      }
                    </div>
                  </div><br/>

                  <button  onClick={(e) => { this.inpvalue(e) }}>
                    {
                      index < 10 ?
                        <div>
                          Next
                    </div> : 'result'
                    }
                  </button>
                </div>

              }
            </div>
          </div>
        }
      </div>
    )
  }
}

export default Quiz ;
