const QuestionData = [
  [ // 1단계 문제
    {
      Q: '웹을 작성할때 쓰는 언어는 HTMI / CCS / Typescript읻',
      Ans: 'X',
      Point: 10
    },
    {
      Q: '웹은 브라우저를 통해 들어갈 수 있다.',
      Ans: 'O',
      Point: 10,
    }
  ],
  [ // 2단계 문제
    {
      Q: 'C언어 출력은 print()로 한다',
      Ans: 'X',
      Point: 10
    },
    {
      Q: 'Python 출력은 print()로 한다',
      Ans: 'X',
      Point: 10
    },
  ],
  [ // 3단계 문제
    {
      Q: 'C언어는 B언어를 개량해서 만들었다.',
      Ans: 'O',
      Point: 10
    },
    {
      Q: 'HTML은 프로그래래밍 언어다.',
      Ans: 'X',
      Point: 10
    }
  ],
  [ // 4단계 문제
    {
      Q: "웹을 직접적으로 조종하는 언어는 Javascript와 Typescript이다.",
      Ans: "X",
      Point: 20,
    },
    {
      Q: "파이썬은 인터프리터 언어이다.",
      Ans: 'O',
      Point: 20
    }
  ],
  [ // 5단계 문제
    {
      Q: 'CommonJS는 import 할 때 require()를 사용한다.',
      Ans: 'O',
      Point: 30
    },
    {
      Q: 'Kotlin은 iOS 개발, swift는 안드로이드 개발용이다.',
      Ans: 'X',
      Point: 30
    }
  ],
  [ // 6단계 문제
    {
      Q: '이 사진에서 오류가 난 행을 고르시오!', // 파이썬
      Ans: '',
      Point: 30,
      src: '' // 엔트리 코드 사진 주소
    },
    {
      Q: '이 사진에서 오류가 난 행을 고르시오!', // C언어
      Ans: '',
      Point: 30,
      src: '' // C언어 코드 사진 주소
    },
    {
      Q: 'https의 포트 번호는?',
      Ans: '443',
      Point: 30,
      src: ''
    }
  ]
]


// Easy - 10 (1,2,3)
// Medium - 20 (4)
// Hard - 30 (5,6)
// Bonus - 0.1

// -웹을 작성하는 언어는 HTMI / CCS / TS 이다. (X)
// -웹은 브라우저를 통해 들어갈 수 있다. (O)

// -C언어 출력은 print()로 한다. (X)
// -Python 출력은 print()로 한다. (O)

// -C언어는 B언어를 개량해서 만들었다. (O)
// -HTML 은 프로그래밍 언어이다. (X)

// 4.
// -웹을 직접적으로 조종하는 언어는 Javascript와 Typescript 이다. (X)
// -파이썬은 인터프리터 언어이다. (O)

// 5.
// -CommonJS는 임포트를 require()로 한다. (O)
// -Kotlin은 ios 개발, Swift는 안드로이드 앱을 개발할 때 사용되는 언어이다. (X)

// 6.
// 엔트리 오류 찾기
// C언어 실행결과
// Https의 포트번호는?
