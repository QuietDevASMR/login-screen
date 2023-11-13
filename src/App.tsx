import { useState } from "react";
import BaseInput from "./components/BaseInput";

function App() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    console.log(form);
  };

  return (
    <div className="w-full h-full px-4 flex justify-center items-center">
      <form
        className="w-full md:w-3/4 lg:w-1/3 xl:w-1/4 p-4 border border-grey-300 rounded-lg flex flex-col justify-center"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-black mb-4">Sign in</h1>
        <BaseInput
          id="email"
          type="email"
          label="Email"
          value={form.email}
          onInput={(ev) =>
            setForm({ ...form, email: (ev.target as HTMLInputElement).value })
          }
        />
        <BaseInput
          id="password"
          type="password"
          label="Password"
          value={form.password}
          onInput={(ev) =>
            setForm({
              ...form,
              password: (ev.target as HTMLInputElement).value,
            })
          }
        />
        <div className="flex justify-end mb-4">
          <a
            href="/forgot-password"
            className="text-indigo-500 hover:text-indigo-700 hover:underline transition-colors duration-300"
          >
            Forgot password?
          </a>
        </div>
        <button
          type="submit"
          className="w-5/8 mx-auto mb-4 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-300"
        >
          Login
        </button>
        <div className="flex justify-center">
          <a
            href="/register"
            className="text-indigo-500 hover:text-indigo-700 hover:underline transition-colors duration-300"
          >
            Don't have an account?
          </a>
        </div>
      </form>
    </div>
  );
}

export default App;
