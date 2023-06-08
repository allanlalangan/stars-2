"use client";

export default function SignInForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="mt-2 flex flex-col p-4 bg-base-100"
    >
      <div className="">
        <label className="sr-only" htmlFor="email">
          Email
        </label>
        <input
          className="text-black mb-2 py-2 bg-transparent border-b border-secondary-400 focus:border-secondary-800 outline-none transition"
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
          className="text-black mb-2 py-2 bg-transparent border-b border-secondary-400 focus:border-secondary-800 outline-none transition"
          name="password"
          id="password"
          type="password"
          placeholder="Password"
        />
      </div>
      <button
        className="bg-primary-300 w-full p-2 mt-2 hover:text-accent-300 transition hover:bg-primary-400 active:bg-primary-500"
        type="submit"
      >
        Sign In
      </button>
    </form>
  );
}
