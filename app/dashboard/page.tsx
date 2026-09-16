// src/app/dashboard/page.tsx
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return <p>Not signed in.</p>;
  }

  return <p className="pt-20">Welcome, {session.user.name}</p>;
}
