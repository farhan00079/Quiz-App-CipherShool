// briggs: EI, SN, TF, JP
// color: brown, green, blue, red
// letter: a, b, c, d
var quizQuestions = [
  // question #1
  {
    question: 'What is the purpose of the render() method in a React component?',
    answers: [
      {
        // briggs, color, letter
        type: 'J,Brown,D',
        content: 'To handle user input and update the components state'
      },
      {
        type: ' ',
        content: 'To return the JSX elements that make up the components UI'
      },
      {
        type: 'J,Brown,D,No',
        content: "To manage the component's lifecycle and handle mounting/unmounting"
      }
    ]
  },
  // question #2
  {
    question: 'What is a React component?',
    answers: [
      {
        // briggs, color, letter
        type: 'N,Green,C',
        content: 'A copy of the real DOM'
      },
      {
        type: ' ',
        content: 'A lightweight in-memory DOM'
      },
      {
        type: 'N,Green,C,No',
        content: "A slow DOM rendering"
      }
    ]
  },
  // question #3
  {
    question: 'What is the virtual DOM?',
    answers: [
      {
        // briggs, color, letter
        type: 'S,Red,A',
        content: 'A copy of the real DOM'
      },
      {
        type: ' ',
        content: 'A lightweight in-memory DOM'
      },
      {
        type: 'S,Red,A,No',
        content: "A slow DOM rendering method"
      }
    ]
  },
  // question #4
  {
    question: "What is a React Hook?",
    answers: [
      {
        // briggs, color, letter
        type: 'J,Brown,D',
        content: 'A way to use state in functions '
      },
      {
        type: ' ',
        content: 'A way to use props in classes'
      },
      {
        type: 'J,Brown,D,No',
        content: "A way to use context in components"
      }
    ]
  },
  // question #5
  {
    question: 'What is the purpose of the ReactDOM.render() method?',
    answers: [
      {
        // briggs, color, letter
        type: 'T,Brown,C',
        content: 'To render components to the DOM'
      },
      {
        type: ' ',
        content: 'To create a new React component'
      },
      {
        type: 'T,Brown,C,No',
        content: "To update the components state"
      }
    ]
  },
 
]

export default quizQuestions
