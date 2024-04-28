import { styled } from 'styled-components'
import { QuestionData } from '../Data-Develop'
import { useEffect, useState } from 'react'

export default function Quiz() {
  const [level, setLevel] = useState(1)
  const [point, setPoint] = useState(0)
  const [choice, setChoice] = useState([]) // 유저가 전송한 답안
  const [inputValue, setInputValue] = useState('')
  const [progressbarArr, setProgressbarArr] = useState([])
  let list = [0, 1]

  const onButtonClick = (value) => {
    let copy = [...choice, QuestionData[level].Choice[value]] // 맨 마지막에 답안 추가
    setChoice(copy)
    if (QuestionData[level].Choice[value] === QuestionData[level].Ans) {
      console.log('정답!')
      setPoint((prev) => prev + QuestionData[level].Point)
    }
    setLevel(level + 1)
  }

  const onSubmit = () => {
    if (inputValue != '') {
      let copy = [...choice, inputValue] // 맨 마지막에 답안 추가
      setChoice(copy)
      if (inputValue === QuestionData[level].Ans) {
        console.log('정답!')
        setPoint((prev) => prev + QuestionData[level].Point)
      }
      setLevel(level + 1)
      setInputValue('')
    }
  }

  function progressBarFunc() {
    let tempArr = []
    for (let i = 0; i < QuestionData.length; i++) {
      if (i < level) tempArr.push(<ProgressBlock key={i} className="progress" />)
      else tempArr.push(<ProgressBlock />)
    }
    setProgressbarArr([...tempArr])
  }

  useEffect(() => {
    progressBarFunc()
    console.log(level)
  }, [level])

  return (
    <Wrap>
      <QuizBox>
        <Info>
          <Level>문제 {level}.</Level>
          <Point>
            현재 점수 <Slash /> <PointNum>{point}점</PointNum>
          </Point>
          <LevelNum>
            {level} / {QuestionData.length - 1}
          </LevelNum>
        </Info>
        <ProgressBarCon>{progressbarArr.map((v) => v)}</ProgressBarCon>
        <Quest>
          {QuestionData[level].isImgExist ? <img src={QuestionData[level].src} alt={QuestionData[level].src} /> : ''}
          {QuestionData[level].Q}
        </Quest>
        <AnswerBox>
          {QuestionData[level].isImgExist ? (
            <InputAnswer>
              <input
                type="text"
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
                placeholder="답안을 입력하세요!"
              />
              <button onClick={() => onSubmit()}>전송</button>
            </InputAnswer>
          ) : (
            [0, 1].map((index) => (
              <Answer key={index} onClick={() => onButtonClick(index)}>
                {QuestionData[level].Choice[index]}
              </Answer>
            ))
          )}
        </AnswerBox>
        <Implude>
          <img src="/img/logo.png" alt="임플루드 로고" /> #Implude
        </Implude>
      </QuizBox>
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`

const QuizBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 40vw;
  @media (max-width: 1000px) {
    width: 80vw;
  }
`

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const Level = styled.div`
  font-size: 2rem;
  font-weight: bold;
`

const Slash = styled.span`
  &::before {
    content: '|';
  }
  color: #c0c0c0;
  font-weight: 500;
  font-size: 1.5rem;
`

const Point = styled.div`
  font-size: 1.3rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`

const PointNum = styled.span``

const LevelNum = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 10px;
  border: 1px solid #eaeaea;
  background: #fff;
  padding: 0.4rem 1rem;
`

const ProgressBarCon = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 0.3rem;
`

const ProgressBlock = styled.div`
  width: ${`calc(100% / ${QuestionData.length - 1})`};
  padding: 0.1rem 0;
  border-radius: 30px;
  box-sizing: border-box;
  background: #0076ff;

  box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 2px;
  &:not(.progress) {
    background: #fff;
    border: 1px solid #eaeaea;
  }
`

const Quest = styled.div`
  width: 100%;
  padding: 3rem;
  box-sizing: border-box;
  border-radius: 20px;
  border: 1px solid #eaeaea;
  background: #fff;
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px;
  line-height: 1.6rem;
  & img {
    height: 10rem;
  }
`

const AnswerBox = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`

const InputAnswer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
  & input {
    outline: none;
    border: 1px solid #eaeaea;
    padding: 0.5rem 1rem;
    font-size: 1.1rem;
    border-radius: 5px;
    transition: all 0.2s ease;
    &:focus {
      border: 1px solid #0076ff;
      background: #e2eefe;
    }
  }
  & button {
    padding: 0.5rem 1rem;
    background: #fff;
    outline: none;
    border: 1px solid #eaeaea;
    font-size: 1.1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
      border: 1px solid #0076ff;
      background: #e2eefe;
    }
  }
`

const Answer = styled.div`
  width: 50%;
  box-sizing: border-box;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 400;
  background: #fff;
  border-radius: 20px;
  border: 1px solid #eaeaea;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px;
  &:hover,
  &:focus {
    background: #e2eefe;
    border: 1px solid #0076ff;
    transform: scale(1.03);
  }
  @media (max-width: 1000px) {
    font-weight: 600;
  }
`

const Implude = styled.div`
  & img {
    height: 3vh;
  }
  display: flex;
  align-items: center;
  gap: 0.5vw;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Poppins';
`
