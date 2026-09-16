// src/app/(auth)/sign-in/sign-in-form.tsx
"use client";

import { useSession, signIn } from "@/lib/auth-client";

export function SignInForm() {
  const { data: session, isPending } = useSession();

  if (isPending) return <p>Loading…</p>;
  if (session) return <p>Already signed in as {session.user.email}</p>;

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        await signIn.email({
          email: formData.get("email") as string,
          password: formData.get("password") as string,
        });
      }}
    >
      <input name="email" type="email" required />
      <input name="password" type="password" required />
      <button type="submit">Sign in</button>
    </form>
  );
}
