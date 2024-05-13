/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { Data } from "../components/Data-Develop";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";

export default function QuestionPage() {
  const [level, setLevel] = useState(0);
  const [point, setPoint] = useState(0);
  const [choice, setChoice] = useState([]); // 유저가 전송한 답안
  const [inputvalue, setInputvalue] = useState("");
  const [modal, setModal] = useState(false);

  const onButtonClick = (value) => {
    let copy = [...choice, Data[level].Choice[value]]; // 맨 마지막에 답안 추가
    setChoice(copy);
    if (Data[level].Choice[value] === Data[level].Ans) {
      console.log("정답!");
      setPoint((prev) => prev + Data[level].Point);
    }
    setLevel(level + 1);
    setModal(true);
  };

  const onSubmit = () => {
    let copy = [...choice, inputvalue]; // 맨 마지막에 답안 추가
    setChoice(copy);
    if (inputvalue === Data[level].Ans) {
      console.log("정답!");
      setPoint((prev) => prev + Data[level].Point);
    }
    setModal(true);
    setLevel(level + 1);
    setInputvalue("");
  };

  useEffect(() => {
    console.log(choice);
  }, [choice]);

  return (
    <div>
      {!modal ? (
        <div>
          <p>{Data[level].Q}</p>
          {level <= 9 ? ( // 11번째 질분부터는 주관식으로 바뀜
            Data[level].Choice.map((value, index) => (
              <button key={index} onClick={() => onButtonClick(index)}>
                {value}
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
      ) : (
        <Modal isModal={setModal} c={choice} point={point} />
      )}
    </div>
  );
}
