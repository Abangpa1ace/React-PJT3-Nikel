import React from 'react'

const LoginFind = ({ setLoginMode }) => {
  return (
    <div style={{ padding: "100px 0"}}>
      <h1 onClick={() => setLoginMode('access')}>아이디 비밀번호 찾기!</h1>
    </div>
  )
}

export default LoginFind
