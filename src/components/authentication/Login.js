import React from "react";
import { useState } from "react";
// import loginimage from "../asserts/LoginBackground.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPass] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const data = {
      username,
      password,
    };

    console.log(username, password);

    const res = await axios.post("/user/login", data);
    console.log(res);
    res.data.status === 200
      ? alert("User Logged In Successfully")
      : console.log("NO");
  };

  return (
    <div
      className="flex min-h-full w-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
      // style={{
      //   backgroundImage: `url(${loginimage})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      //   height: "100vh",
      // }}
    >
      <div className="mt-60 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          action="#"
          method="POST"
          className="space-y-6"
          onSubmit={handleFormSubmit}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                value={username}
                onChange={(event) => setUserName(event.target.value)}
                id="uname"
                name="uname"
                type="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                value={password}
                onChange={(event) => setPass(event.target.value)}
                id="password"
                name="password"
                type="password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <input
              value={"Login"}
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            />
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Dont Have An Account?{" "}
          <Link
            to="/signup"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
