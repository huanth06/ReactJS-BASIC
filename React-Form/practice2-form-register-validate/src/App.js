import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {const MESSAGE_ERROR = {
    username: "Username error",
    email: "Email error",
    password: "Password error",
    confirmPassword: "Password must be the same"
  };

  const REGEX = {
    username: /^[a-zA-Z]{2,}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/
  };

  const [form, setForm] = useState({});

  function handleChange(event) {
    let error = "";
    if (event.target.name === "password") {
      if (form.confirmPassword && form.confirmPassword.value) {
        error =
          event.target.value === form.confirmPassword.value
            ? ""
            : MESSAGE_ERROR[event.target.name];
      } else {
        error = REGEX[event.target.name].test(event.target.value)
          ? ""
          : MESSAGE_ERROR[event.target.name];
      }
    } else if (event.target.name === "confirmPassword") {
      error =
        event.target.value === form.password.value
          ? ""
          : MESSAGE_ERROR[event.target.name];
    } else {
      error = REGEX[event.target.name].test(event.target.value)
        ? ""
        : MESSAGE_ERROR[event.target.name];
    }
    setForm({
      ...form,
      [event.target.name]: { value: event.target.value, error: error }
    });
  }

  function handleSubmit() {
    const isFilled =
      form.username &&
      form.username.value &&
      form.email &&
      form.email.value &&
      form.password &&
      form.password.value &&
      form.confirmPassword &&
      form.confirmPassword.value;
    const isError =
      isFilled &&
      (form.username.error ||
        form.email.error ||
        form.password.error ||
        form.confirmPassword.error);

    alert(
      isFilled && !isError
        ? "Sign up successfully!!!"
        : "Please fill out all the fields!!!"
    );
  }
  return (
    <div>
      <h1>Sign up</h1>
      <form>
        <div className="custom-input">
          <label>Username </label>
          <input name="username" value={form.username || ''} onChange={handleChange} />
        </div>
        <div className="custom-input">
          <label>Email </label>
          <input name="email" value={form.email || ''} onChange={handleChange} />
        </div>
        <div className="custom-input">
          <label>Password </label>
          <input type="password" name="password" value={form.password || ''} onChange={handleChange} />
        </div>
        <div className="custom-input">
          <label>Confirm password </label>
          <input type="password" name="confirmPassword" value={form.confirmPassword || ''} onChange={handleChange} />
        </div>
        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default App;
