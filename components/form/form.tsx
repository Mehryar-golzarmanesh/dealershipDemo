"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { toPersianNumbers } from "@/lib/number-formatter";
import { DatePicker } from "../datePicker";

const formSchema = z.object({
  fullName: z
    .string()
    .min(5, "نام  و نام خانوادگی کمتر از 5 حرف نمی تواند باشد..")
    .max(32, "نام و نام خانوادگی بیشتر از 32 حرف نمی تواند باشد."),
  phone: z
    .string()
    .min(11, "لطفا شماره موبایل خود را صحیح وارد کنید.")
    .max(11, "لطفا شماره موبایل خود را صحیح وارد کنید."),
  email: z.email("لطفا ایمیل خود را صحیح وارد کنید.").optional(),
  date: z.date({ error: "لطفا تاریخ را انتخاب کنید." }).optional(),
  description: z
    .string()
    .max(100, "بیشتر از 100 حرف قابل دریافت نیست.")
    .optional(),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      description: "",
      phone: "",
      email: "",
      date: undefined,
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      const payload = {
        fullName: data.fullName,
        phone: data.phone,
        email: data.email || "",
        date: data.date?.toISOString() || "",
        description: data.description || "",
      };

      const response = await fetch("/api/test-drive", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const error = await response.json();
        toast.error("خطا در ارسال درخواست", {
          description: error.error || "لطفا دوباره تلاش کنید.",
          position: "bottom-right",
        });
        return;
      }

      const formattedDate = data.date
        ? new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }).format(data.date)
        : "انتخاب نشده";

      const summary = [
        { label: "نام و نام خانوادگی", value: data.fullName },
        { label: "شماره همراه", value: data.phone },
        { label: "ایمیل", value: data.email || "—" },
        { label: "تاریخ پیشنهادی", value: formattedDate },
      ];

      toast.success("درخواست تست درایو ثبت شد", {
        description: (
          <div className="p-5 w-[320px] space-y-2 text-right">
            {summary.map(({ label, value }) => (
              <div
                key={label}
                className="flex items-start justify-between gap-3 border-b border-[#383b3e] pb-1.5 text-sm last:border-none last:pb-0"
              >
                <span className="text-[#d9c29a]">{label}</span>
                <span className="text-left text-[#f6f3ef] rtl:text-right">
                  {value}
                </span>
              </div>
            ))}
          </div>
        ),
        position: "bottom-right",
        duration: 10000,
        classNames: {
          toast:
            "border border-[#b8935f]/80 bg-[#1b1e23] text-[#ede9e1] shadow-[0_12px_40px_rgba(0,0,0,0.45)]",
          title: "text-[#f4e7d3] font-bold",
          description: "text-[#dbd6ce]",
          closeButton:
            "border-[#b8935f]/70 bg-[#1b1e23] text-[#edd8a6] hover:bg-[#25292d]",
        },
        style: {
          borderRadius: "14px",
          background: "#1b1e23",
          color: "#ede9e1",
        } as React.CSSProperties,
      });

      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("خطا در ارسال درخواست", {
        description: "لطفا دوباره تلاش کنید.",
        position: "bottom-right",
      });
    }
  }

  return (
    <Card className="max-w-7xl bg-[#1b1e23] rounded-xl border-[#383b3e] border">
      <CardHeader>
        <CardTitle className="text-[#ede9e1] text-3xl">
          درخواست تست درایو
        </CardTitle>
        <CardDescription>
          پیش از تصمیم‌گیری، پشت فرمان این خودرو بنشینید.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup className="grid grid-cols-2">
            <Controller
              name="fullName"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor="form-rhf-demo-title"
                    className="text-white"
                  >
                    نام و نام خانوادگی
                  </FieldLabel>
                  <Input
                    type="text"
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="مثلا مهریار گلزارمنش"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="phone"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor="form-rhf-demo-phone"
                    className="text-white"
                  >
                    شماره همراه
                  </FieldLabel>
                  <Input
                    type="tel"
                    {...field}
                    id="form-rhf-demo-phone"
                    aria-invalid={fieldState.invalid}
                    placeholder={`${toPersianNumbers(0)}${toPersianNumbers(913)}xxxxxxx`}
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor="form-rhf-demo-email"
                    className="text-white"
                  >
                    ایمیل
                  </FieldLabel>
                  <Input
                    type="email"
                    {...field}
                    id="form-rhf-demo-email"
                    aria-invalid={fieldState.invalid}
                    placeholder="ایمیل شما"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="date"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <DatePicker
                    value={field.value}
                    onChange={field.onChange}
                    label="تاریخ پیشنهادی"
                    invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="description"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="col-span-2">
                  <FieldLabel
                    htmlFor="form-rhf-demo-description"
                    className="text-white"
                  >
                    توضیحات (اختیاری)
                  </FieldLabel>
                  <InputGroup className="bg-transparent border-b border-b-[#323436] hover:border-b-[#b8935f] rounded-none">
                    <InputGroupTextarea
                      {...field}
                      id="form-rhf-demo-description"
                      placeholder="زمان ترجیحی, سوالات خاص و ..."
                      rows={6}
                      className="min-h-24 resize-none bg-transparent"
                      aria-invalid={fieldState.invalid}
                    />
                    <InputGroupAddon align="block-end">
                      <InputGroupText className="tabular-nums bg-transparent">
                        {toPersianNumbers(field.value!.length)}/
                        {toPersianNumbers(100)} کارکتر
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
          <CardFooter className="pt-5">
            <Field
              orientation="horizontal"
              className="flex-col md:flex-row gap-4 justify-between"
            >
              <div className="text-[#717377]">
                پس از ثبت درخواست، کارشناسان ما ظرف چند ساعت با شما تماس
                می‌گیرند.
              </div>
              <div>
                <Button
                  type="submit"
                  className="bg-[#b8935f] text-black hover:bg-[#d9b37e] hover:text-black rounded-none p-6"
                >
                  ثبت درخواست تست درایو
                </Button>
              </div>
            </Field>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
