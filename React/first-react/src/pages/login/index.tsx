import { Component, FormEvent } from "react";
import { withRouter } from "../../withRouter";

import Layout from "../../components/Layout";

interface LoginState {
  username?: string;
  password?: string;
}

interface LoginProps {
  navigate: any;
}

class Login extends Component<LoginProps, LoginState> {
  state = {
    username: "",
    password: "",
  };

  handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, password } = this.state;
    const { navigate } = this.props;
    navigate("/", {
      state: {
        username: username,
        password: password,
      },
    });
  };

  render() {
    const { username, password } = this.state;

    return (
      <Layout>
        <form
          onSubmit={this.handleLogin}
          className="flex flex-col gap-y-5 w-60"
        >
          <label className="font-semibold">Username</label>
          <input
            value={username}
            onChange={(e: any) => this.setState({ username: e.target.value })}
            className="p-3 w-full h-10 rounded-md bg-white border border-blue-600"
          />
          <label className="font-semibold">Password</label>
          <input
            value={password}
            onChange={(e: any) => this.setState({ password: e.target.value })}
            className="p-3 w-full h-10 rounded-md bg-white border border-blue-600"
          />
          <button
            type="submit"
            className="mt-10 w-full h-10 flex justify-center text-center items-center text-white rounded-md bg-blue-700 hover:bg-blue-800"
          >
            Submit
          </button>
        </form>
      </Layout>
    );
  }
}

export default withRouter(Login);
