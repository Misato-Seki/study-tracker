import { useState } from "react";
import TextField from "../component/textfield.component";
import Button from "../component/button.component";
import SignUpModal from "./signup";
import { useAuth } from "../hook/authContext";

function LoginModal() {
  interface ILoginData {
    username: string;
    password: string;
  }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showSignUp, setShowSignUp] = useState(false);
  const isDevelopment = import.meta.env.MODE === "development";
  const baseURL = isDevelopment
    ? import.meta.env.VITE_API_BASE_URL_LOCAL
    : import.meta.env.VITE_API_BASE_URL_PROD;

  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data: ILoginData = {
      username,
      password,
    };

    try {
      const response = await fetch(`${baseURL}api/token/`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        // Save JWT token
        localStorage.setItem("accessToken", responseData.access);
        localStorage.setItem("refreshToken", responseData.refresh);
        console.log(response);
        login();
      }
    } catch (error) {
      alert("Log in error");
      console.error("login error: ", error);
    }
  };

  return (
    <>
      {!showSignUp ? (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <form onSubmit={handleSubmit}>
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 flex flex-col items-center justify-center">
              <h2>Login</h2>
              <TextField
                label="Username"
                width="w-full"
                placeholder="enter username"
                name="username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                value={username}
              />
              <TextField
                label="Password"
                width="w-full"
                placeholder="enter password"
                name="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
              />
              <Button label="Login" type="submit" className="" />
              <p>Don't you have an account?</p>
              <Button
                label="Create new account"
                type="button"
                onClick={() => setShowSignUp(true)}
              />
            </div>
          </form>
        </div>
      ) : (
        <SignUpModal />
      )}
    </>
  );
}

export default LoginModal;
