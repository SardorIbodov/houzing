import React, { useRef } from "react";

export const SignIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const sign = () => {
    fetch("http://localhost:8081/api/public/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }),
    })
      .then((res) => res.json())
      .then((res) => localStorage.setItem("token", res.authenticationToken));
  };
  return (
    <div>
      <input type="text" ref={emailRef} placeholder="email" />
      <input
        type="text"
        ref={passwordRef}
        id="password"
        placeholder="password"
      />
      <button onClick={sign}>Sign in</button>
    </div>
  );
};

export default SignIn;
