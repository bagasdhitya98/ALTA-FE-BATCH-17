import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

import Input from "../../components/Input";
import Button from "../../components/Button";

const credentials = {
  username: "admin",
  password: "admin123",
};

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleLogin = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (
      username === credentials.username &&
      password === credentials.password
    ) {
      Swal.fire({
        title: "Success login",
        text: "Successfully login, welcome!",
        confirmButtonText: "OK",
      }).then((res) => {
        if (res.isConfirmed) {
          Cookies.set("username", username);
          navigate("/news");
        }
      });
    } else {
      Swal.fire({
        title: "Invalid account",
        text: "Check your username and password",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <section
      onSubmit={handleLogin}
      className="w-screen h-full flex flex-col justify-center items-center"
    >
      <form className="flex flex-col gap-y-6">
        <div className="flex flex-col gap-y-4">
          <label htmlFor="username">Username</label>
          <Input
            id="username"
            onChange={(e: any) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className="flex flex-col gap-y-4">
          <label htmlFor="password">Password</label>
          <Input
            id="password"
            onChange={(e: any) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="mt-7">
          <Button id="submit" type="submit" title="Submit" />
        </div>
      </form>
    </section>
  );
};

export default Login;
