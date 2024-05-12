/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Data } from "./Data-Develop";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function Modal({ isModal, c, point }) {
  const [cor, setCor] = useState(false);
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    if (index < c.length) {
      c[index] == Data[index].Ans ? setCor(true) : setCor(false);
      setIndex((prev) => prev + 1);
    }
  }, [c, index]);

  return (
    <Wrapper>
      <h1>{cor ? "정답입니다!" : "오답입니다!"}</h1>
      {index > 12 ? (
        <button onClick={() => navigate("/Result", { data: point })}>
          결과보기
        </button>
      ) : (
        <button onClick={() => isModal(false)}>확인</button>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed; /* 페이지 스크롤과 관계없이 고정 위치 */
  top: 0;
  left: 0;
  width: 100%; /* 가로폭을 전체 화면으로 설정 */
  height: 100%; /* 세로폭을 전체 화면으로 설정 */
  background-color: aqua; /* 반투명한 검은색 배경 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;
