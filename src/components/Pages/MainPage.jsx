import { useNavigate } from 'react-router-dom'

export default function MainPage() {
  const navigate = useNavigate()

  return (
    <>
      <h1>Welcome to IMPLUDE!</h1>
      <button onClick={() => navigate('/Question')}>시작하기</button>
    </>
  )
}
