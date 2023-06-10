"use client";

export default function SignInForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="mt-2 flex flex-col p-4 bg-base-100 w-full sm:w-3/4 md:w-1/2 lg:w-1/3"
    >
      <div className="">
        <label className="sr-only" htmlFor="email">
          Email
        </label>
        <input
          className="w-full text-black mb-2 py-2 bg-transparent border-b border-primary-400/50 focus:border-primary-400 outline-none transition"
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
          className="w-full text-black mb-2 py-2 bg-transparent border-b border-primary-400/50 focus:border-primary-400 outline-none transition"
          name="password"
          id="password"
          type="password"
          placeholder="Password"
        />
      </div>
      <button
        className="bg-primary-600 w-full p-2 mt-2 transition hover:bg-primary-700 active:bg-primary-800 text-base-50"
        type="submit"
      >
        Sign In
      </button>
    </form>
  );
}
