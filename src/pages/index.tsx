import { SignIn } from "@clerk/nextjs";
import Head from "next/head";
import Link from "next/link";


import { api } from "~/utils/api";
import { 
  SignUpButton,
  SignInButton,
  SignOutButton,
  UserButton,
  useUser,
  SignedIn,
  ClerkProvider,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/nextjs";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  const user = useUser();
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <h1>Hello world</h1>

        <SignIn path ="/sign-in" routing="path" signUpUrl="/sign-up"/>

        {!user.isSignedIn && <SignInButton />}
        {!!user.isSignedIn && <SignOutButton />}

        <UserButton />

        <SignedIn>
        </SignedIn>

        <SignedOut>
          <SignUpButton />
        </SignedOut>

      </main>
    </>
  );

}

