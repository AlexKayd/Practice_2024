// import Image from "next/image";

// export default function Home() {
//   return (
//    <h1>Главная</h1>
//   );
// }


'use client';

import React, { useState } from "react";
import Link from 'next/link';

export default function Home() {
  const [registerName, setRegisterName] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginName, setLoginName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleRegisterNameChange = (event) => {
    setRegisterName(event.target.value);
  };

  const handleRegisterPasswordChange = (event) => {
    setRegisterPassword(event.target.value);
  };

  const handleLoginNameChange = (event) => {
    setLoginName(event.target.value);
  };

  const handleLoginPasswordChange = (event) => {
    setLoginPassword(event.target.value);
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    // Обработка регистрации
    console.log("Имя:", registerName);
    console.log("Пароль:", registerPassword);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Обработка входа
    console.log("Логин:", loginName);
    console.log("Пароль:", loginPassword);
  };

  return (
    <main>
      <h1>Регистрация</h1>
      <form onSubmit={handleRegisterSubmit}>
        <div>
          <label htmlFor="register-name">Name:</label>
          <input
            type="text"
            id="register-name"
            value={registerName}
            onChange={handleRegisterNameChange}
          />
        </div>
        <div>
          <label htmlFor="register-password">Password:</label>
          <input
            type="password"
            id="register-password"
            value={registerPassword}
            onChange={handleRegisterPasswordChange}
          />
        </div>
        <button type="submit">Зарегистрироваться</button>
      </form>

      <div style={{ height: '50px' }} />
      <h1>Вход</h1>
      <form onSubmit={handleLoginSubmit}>
        <div>
          <label htmlFor="login-name">Login:</label>
          <input
            type="text"
            id="login-name"
            value={loginName}
            onChange={handleLoginNameChange}
          />
        </div>
        <div>
          <label htmlFor="login-password">Password:</label>
          <input
            type="password"
            id="login-password"
            value={loginPassword}
            onChange={handleLoginPasswordChange}
          />
        </div>
        <button type="submit">Войти</button>
      </form>
      <Link href="/search">
           <button>Перейти к поиску пользователей</button>
         </Link>
    </main>
  );
}