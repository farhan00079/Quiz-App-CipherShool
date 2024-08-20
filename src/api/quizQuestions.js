// briggs: EI, SN, TF, JP
// color: brown, green, blue, red
// letter: a, b, c, d
var quizQuestions = [
  // question #1
  {
    question: 'I am task oriented in order to achieve certain goals.',
    answers: [
      {
        // briggs, color, letter
        type: 'J,Brown,D',
        content: 'YEP! THAT IS ME!'
      },
      {
        type: ' ',
        content: 'I HAVE NO IDEA!'
      },
      {
        type: 'J,Brown,D,No',
        content: "NAH, THAT CAN'T BE ME!"
      }
    ]
  },
  // question #2
  {
    question: 'I get bored easily when disscussing abstract concepts.',
    answers: [
      {
        // briggs, color, letter
        type: 'N,Green,C',
        content: 'YEP! THAT IS ME!'
      },
      {
        type: ' ',
        content: 'I HAVE NO IDEA!'
      },
      {
        type: 'N,Green,C,No',
        content: "NAH, THAT CAN'T BE ME!"
      }
    ]
  },
  // question #3
  {
    question: 'I like to try things out myself.',
    answers: [
      {
        // briggs, color, letter
        type: 'S,Red,A',
        content: 'YEP! THAT IS ME!'
      },
      {
        type: ' ',
        content: 'I HAVE NO IDEA!'
      },
      {
        type: 'S,Red,A,No',
        content: "NAH, THAT CAN'T BE ME!"
      }
    ]
  },
  // question #4
  {
    question: "I like to know where I'm going before I leave the house.",
    answers: [
      {
        // briggs, color, letter
        type: 'J,Brown,D',
        content: 'YEP! THAT IS ME!'
      },
      {
        type: ' ',
        content: 'I HAVE NO IDEA!'
      },
      {
        type: 'J,Brown,D,No',
        content: "NAH, THAT CAN'T BE ME!"
      }
    ]
  },
  // question #5
  {
    question: 'I believe there is a logical explanation for everything.',
    answers: [
      {
        // briggs, color, letter
        type: 'T,Brown,C',
        content: 'YEP! THAT IS ME!'
      },
      {
        type: ' ',
        content: 'I HAVE NO IDEA!'
      },
      {
        type: 'T,Brown,C,No',
        content: "NAH, THAT CAN'T BE ME!"
      }
    ]
  },
  // question #6
  {
    question: 'I tend to keep my social circle small.',
    answers: [
      {
        // briggs, color, letter
        type: 'I,Green,C',
        content: 'YEP! THAT IS ME!'
      },
      {
        type: ' ',
        content: 'I HAVE NO IDEA!'
      },
      {
        type: 'I,Green,C,No',
        content: "NAH, THAT CAN'T BE ME!"
      }
    ]
  },
  // question #7
  {
    question: 'I like to share my ideas with others.',
    answers: [
      {
        // briggs, color, letter
        type: 'E,Blue,B',
        content: 'YEP! THAT IS ME!'
      },
      {
        type: ' ',
        content: 'I HAVE NO IDEA!'
      },
      {
        type: 'E,Blue,B,No',
        content: "NAH, THAT CAN'T BE ME!"
      }
    ]
  },
  // question #8
  {
    question: 'I enjoy using social media.',
    answers: [
      {
        // briggs, color, letter
        type: 'E,Blue,B',
        content: 'YEP! THAT IS ME!'
      },
      {
        type: ' ',
        content: 'I HAVE NO IDEA!'
      },
      {
        type: 'E,Blue,B,No',
        content: "NAH, THAT CAN'T BE ME!"
      }
    ]
  },
  // question #9
  {
    question: 'I always express concern for others when making decisions.',
    answers: [
      {
        // briggs, color, letter
        type: 'F,Blue,B',
        content: 'YEP! THAT IS ME!'
      },
      {
        type: ' ',
        content: 'I HAVE NO IDEA!'
      },
      {
        type: 'F,Blue,B,No',
        content: "NAH, THAT CAN'T BE ME!"
      }
    ]
  },
  // question #10
  {
    question: 'I like to try new things.',
    answers: [
      {
        // briggs, color, letter
        type: 'P,Red,A',
        content: 'YEP! THAT IS ME!'
      },
      {
        type: ' ',
        content: 'I HAVE NO IDEA!'
      },
      {
        type: 'P,Red,A,No',
        content: "NAH, THAT CAN'T BE ME!"
      }
    ]
  },
  // question #11
  {
    question: 'I can easily adjust to a change in decision.',
    answers: [
      {
        // briggs, color, letter
        type: 'P,Red,A',
        content: 'YEP! THAT IS ME!'
      },
      {
        type: ' ',
        content: 'I HAVE NO IDEA!'
      },
      {
        type: 'P,Red,A,No',
        content: "NAH, THAT CAN'T BE ME!"
      }
    ]
  },
  // question #12
  {
    question: 'I solve problems by working through facts until I understand the problem.',
    answers: [
      {
        // briggs, color, letter
        type: 'S,Brown,C',
        content: 'YEP! THAT IS ME!'
      },
      {
        type: ' ',
        content: 'I HAVE NO IDEA!'
      },
      {
        type: 'S,Brown,C,No',
        content: "NAH, THAT CAN'T BE ME!"
      }
    ]
  },
  // question #13
  {
    question: 'I rely on logic rather than intuition when making a decision.',
    answers: [
      {
        // briggs, color, letter
        type: 'T,Green,C',
        content: 'YEP! THAT IS ME!'
      },
      {
        type: ' ',
        content: 'I HAVE NO IDEA!'
      },
      {
        type: 'T,Green,C,No',
        content: "NAH, THAT CAN'T BE ME!"
      }
    ]
  },
  // question #14
  {
    question: 'I make decisions with my heart.',
    answers: [
      {
        // briggs, color, letter
        type: 'F,Blue,B',
        content: 'YEP! THAT IS ME!'
      },
      {
        type: ' ',
        content: 'I HAVE NO IDEA!'
      },
      {
        type: 'F,Blue,B,No',
        content: "NAH, THAT CAN'T BE ME!"
      }
    ]
  },
  // question #15
  {
    question: 'I learn best by seeing step by step instructions.',
    answers: [
      {
        // briggs, color, letter
        type: 'S,Brown,D',
        content: 'YEP! THAT IS ME!'
      },
      {
        type: ' ',
        content: 'I HAVE NO IDEA!'
      },
      {
        type: 'S,Brown,D,No',
        content: "NAH, THAT CAN'T BE ME!"
      }
    ]
  },  
]

export default quizQuestions
