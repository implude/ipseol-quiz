import { QuestionData } from "../components/Data-Develop";
import { useEffect, useState } from "react";

export default function QuestionPage() {
  const [level, setLevel] = useState(1);
  const [point, setPoint] = useState(0);
  const [choice, setChoice] = useState([]); // 유저가 전송한 답안
  const [inputvalue, setInputvalue] = useState("");
  let list = [0, 1];

  const onButtonClick = (value) => {
    let copy = [...choice, QuestionData[level].Choice[value]]; // 맨 마지막에 답안 추가
    setChoice(copy);
    if (QuestionData[level].Choice[value] === QuestionData[level].Ans) {
      console.log("정답!");
      setPoint((prev) => prev + QuestionData[level].Point);
    }
    setLevel(level + 1);
  };

  const onSubmit = () => {
    let copy = [...choice, inputvalue]; // 맨 마지막에 답안 추가
    setChoice(copy);
    if (inputvalue === QuestionData[level].Ans) {
      console.log("정답!");
      setPoint((prev) => prev + QuestionData[level].Point);
    }
    setLevel(level + 1);
    setInputvalue("");
  };

  useEffect(() => {
    console.log(choice);
  }, [choice]);

  return (
    <div>
      <p>{QuestionData[level].Q}</p>
      {level <= 10 ? (
        list.map((index) => (
          <button key={index} onClick={() => onButtonClick(index)}>
            {QuestionData[level].Choice[index]}
          </button>
        ))
      ) : (
        <div>
          <input
            type="text"
            onChange={(e) => setInputvalue(e.target.value)}
            value={inputvalue}
          />
          <button onClick={() => onSubmit()}>전송</button>
        </div>
      )}
      <p>Point : {point}</p>
    </div>
  ); // 0 대신 랜덤값 넣어야함
}
