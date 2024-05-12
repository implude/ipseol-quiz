import axios from "axios";
import { useEffect } from "react";

export default function ResultPage() {
  const fetchPoint = async () => {
    //  const res = await axios.get();
    // 백엔드랑 연동 후 코드 짤듯
  };
  useEffect(() => {
    fetchPoint();
  }, []);

  return <h1>유저이름님, 당신의 점수는 10 입니다.</h1>;
}
