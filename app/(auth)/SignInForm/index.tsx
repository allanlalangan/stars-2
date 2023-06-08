"use client";

export default function SignInForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="mt-2 flex flex-col p-4 bg-base-700"
    >
      <div className="">
        <label className="sr-only" htmlFor="email">
          Email
        </label>
        <input
          className="mb-2 p-2 bg-base-400/25 outline-none"
          name="email"
          id="email"
          type="email"
          placeholder="Email"
        />
      </div>
      <div className="">
        <label className="sr-only" htmlFor="password">
          Password
        </label>
        <input
          className="mb-2 p-2 bg-base-400/25 outline-none"
          name="password"
          id="password"
          type="password"
          placeholder="Password"
        />
      </div>
      <button className="bg-primary-500 w-full p-2" type="submit">
        Sign in
      </button>
    </form>
  );
}
