import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { useState } from "react";

function App() {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="form-wrapper">
      <div className="form-content">
        <form className="form">
          {isLoginForm ? <SignIn onSubmit={onSubmit} /> : <SignUp />}
        </form>
        {isLoginForm ? (
          <div className="change-mode">
            Еще нет аккаунта?
            <span onClick={() => setIsLoginForm(false)}>Регистрация</span>
          </div>
        ) : (
          <div className="change-mode">
            Уже есть аккаунт?
            <span onClick={() => setIsLoginForm(true)}>Войти</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
