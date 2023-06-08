import Link from "next/link";
import SignInForm from "../../../components/SignInForm";

export default function LoginPage() {
  return (
    <>
      <h1>Sign in or create an account</h1>
      <Link href="/">Home</Link>
      <SignInForm />
    </>
  );
}
