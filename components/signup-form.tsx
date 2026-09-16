"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useSession, signUp } from "@/lib/auth-client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) return <p>Already signed in as {session.user.email}</p>;

  return (
    <Card {...props} className="bg-[#14161a] text-white">
      <CardHeader>
        <CardTitle>ساخت اکانت</CardTitle>
        <CardDescription>اطلاعات خود را با دقت وارد کنید.</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            const name = (fd.get("name") as string) || "";
            const email = (fd.get("email") as string) || "";
            const password = (fd.get("password") as string) || "";
            const confirm = (fd.get("confirm-password") as string) || "";

            if (password !== confirm) {
              toast.error("پسوردها مطابقت ندارند", {
                position: "bottom-right",
              });
              return;
            }

            try {
              type SignUpResult = {
                ok?: boolean;
                error?: { message?: string };
              };

              function isSignUpResult(v: unknown): v is SignUpResult {
                return (
                  typeof v === "object" &&
                  v !== null &&
                  ("ok" in v || "error" in v)
                );
              }

              const res = (await signUp.email({
                name,
                email,
                password,
              })) as unknown;

              if (isSignUpResult(res) && res.ok) {
                toast.success("اکانت ساخته شد", { position: "bottom-right" });
                router.push("/sign-in");
              } else {
                const message =
                  isSignUpResult(res) && res.error?.message
                    ? res.error.message
                    : "خطا در ساخت اکانت";
                toast.error(message, { position: "bottom-right" });
              }
            } catch (err) {
              console.error("Sign-up error:", err);
              toast.error("خطا در ساخت اکانت", { position: "bottom-right" });
            }
          }}
        >
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">نام و نام خانوادگی</FieldLabel>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                required
                autoComplete="name"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">ایمیل</FieldLabel>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
                required
                autoComplete="email"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="password">پسوورد</FieldLabel>
              <Input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="new-password"
              />
              <FieldDescription>حداقل 8 حرف باشد.</FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="confirm-password">تایید پسوورد</FieldLabel>
              <Input
                id="confirm-password"
                name="confirm-password"
                type="password"
                required
                autoComplete="new-password"
              />
              <FieldDescription>
                لطفا پسوورد خود را دوباره وارد کنید
              </FieldDescription>
            </Field>
            <FieldGroup>
              <Field>
                <Button type="submit">ساخت اکانت</Button>
                <FieldDescription className="px-6 text-center">
                  اکانت دارید؟ <Link href="/sign-in">ورود</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
