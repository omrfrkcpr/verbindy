import Image from "next/image";
import AuthForm from "./components/AuthForm";
import ThemeToggle from "../components/ui/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <ThemeToggle />
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          alt="Logo"
          height="64"
          width="64"
          className="mx-auto w-auto rounded-full bg-primary-foreground"
          src="/verbindy-logo.png"
        />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">
          Sign in to your account
        </h2>
      </div>
      <AuthForm />
    </main>
  );
}
