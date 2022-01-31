import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = (props) => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isNewUser, setIsNewUser] = useState(false);

  const toggleForNewuser = (e) => {
    e.preventDefault();
    setIsNewUser(!isNewUser);
  };

  const handleAuthEmail = (e) => {
    e.preventDefault();
    if (isNewUser) {
      setRegisterEmail(e.target.value);
    } else {
      setLoginEmail(e.target.value);
    }
  };

  const handleAuthPassword = (e) => {
    e.preventDefault();
    if (isNewUser) {
      setRegisterPassword(e.target.value);
    } else {
      setLoginPassword(e.target.value);
    }
  }

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          {/* <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"/> */}
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-400">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-300">
            Or
            <a href="#" className="font-medium text-amber-500 hover:text-green-900" onClick={(e)=> toggleForNewuser(e)}>{"  "}Create an account </a>
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-7">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                onChange={(e) => { handleAuthEmail(e); }}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-300 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-200 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                onChange={(e) => { handleAuthPassword(e); }}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300" >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a  href="#" className="font-medium text-amber-500 hover:text-green-900" >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
