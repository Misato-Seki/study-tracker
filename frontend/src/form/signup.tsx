import { useState } from "react";
import TextField from "../component/textfield.component";
import Button from "../component/button.component";
import { useAuth } from "../hook/authContext";

function SignUpModal() {
  interface ISignUpData {
    email: string;
    username: string;
    password: string;
  }
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const isDevelopment = import.meta.env.MODE === "development";
  const baseURL = isDevelopment
    ? import.meta.env.VITE_API_BASE_URL_LOCAL
    : import.meta.env.VITE_API_BASE_URL_PROD;

  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data: ISignUpData = {
      email,
      username,
      password,
    };

    if (password !== confirmPassword) {
      alert("Password not matched");
      return;
    }

    try {
      const response = await fetch(`${baseURL}api/users/`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data),
      });

      // signup success 
      if (response.status === 201) {
        alert('Thanks for signing up!')
        login();
      }
    } catch (error) {
      alert("Sign up error");
      console.error("signup error: ", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <form onSubmit={handleSubmit}>
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 flex flex-col items-center justify-center">
        <h2>Signup</h2>
        <TextField
            label='Username'
            width='w-full'
            placeholder='enter username'
            name='username'
            onChange={(e) => {
                setUsername(e.target.value);}}
            value={username}
        />
        <TextField
            label='Email'
            width='w-full'
            placeholder='enter email'
            name='email'
            onChange={(e) => {
                setEmail(e.target.value);}}
            value={email}
        />
        <TextField
            label='Password'
            width='w-full'
            placeholder='enter password'
            name='password'
            onChange={(e) => {
                setPassword(e.target.value);}}
            value={password}
        />
        <TextField
            label='Password(confirm)'
            width='w-full'
            placeholder='confirm password'
            name='password'
            onChange={(e) => {
                setConfirmPassword(e.target.value);}}
            value={confirmPassword}
        />
        <Button
            label='Sign Up'
            type = 'submit'
            className = ''
        />
        </div>
      </form>
    </div>
  );
}

export default SignUpModal;
