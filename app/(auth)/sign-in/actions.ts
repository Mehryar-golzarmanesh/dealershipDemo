"use server";

import { auth } from "@/lib/auth";

export async function signInAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const result = await auth.api.signInEmail({
    body: { email, password },
  });

  return result;
}
