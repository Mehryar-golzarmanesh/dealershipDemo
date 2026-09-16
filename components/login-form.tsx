"use client";
import { cn } from "cn";

import { Button } from "@/components/ui/button";
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
import { useSession, signIn } from "@/lib/auth-client";
import { toast } from "sonner";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { data: session, isPending } = useSession();

  // Create a Skeleton for later.
  if (session) return <p>Already signed in as {session.user.email}</p>;
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="bg-[#14161a] text-white">
        <CardHeader>
          <CardTitle>ورود به اکانت</CardTitle>
          <CardDescription>اطلاعات خود رو وارد کنید.</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              try {
                type SignInResult = {
                  ok?: boolean;
                  error?: { message?: string };
                };

                function isSignInResult(v: unknown): v is SignInResult {
                  return (
                    typeof v === "object" &&
                    v !== null &&
                    ("ok" in v || "error" in v)
                  );
                }

                const res = (await signIn.email({
                  email: formData.get("email") as string,
                  password: formData.get("password") as string,
                })) as unknown;

                if (isSignInResult(res) && res.ok) {
                  toast.success("ورود موفق", { position: "bottom-right" });
                } else {
                  const message =
                    isSignInResult(res) && res.error?.message
                      ? res.error.message
                      : "خطا در ورود";
                  toast.error(message, { position: "bottom-right" });
                }
              } catch (error) {
                console.error("Sign-in error:", error);
                toast.error("خطا در ورود", { position: "bottom-right" });
              }
            }}
          >
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">ایمیل</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  autoComplete="email"
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">پسوورد</FieldLabel>
                  <Link
                    href="/forgot-password"
                    className="ms-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    رمز خود را فراموش کرده اید؟
                  </Link>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                />
              </Field>
              <Field>
                <Button type="submit">ورود</Button>

                <Button
                  variant="outline"
                  type="button"
                  className="hover:bg-white hover:text-black hover:border-[#b5956a]"
                  onClick={async () => {
                    try {
                      if (typeof signIn.social === "function")
                        await signIn.social({ provider: "github" });
                    } catch (err) {
                      console.error(err);
                      toast.error("خطا در ورود با گیت‌هاب", {
                        position: "bottom-right",
                      });
                    }
                  }}
                >
                  ورود با گیت‌هاب
                </Button>
                <FieldDescription className="text-center">
                  اکانت ندارید؟{" "}
                  <Link href="/sign-up" className="hover:text-[#b5956a]">
                    ثبت نام کنید
                  </Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
