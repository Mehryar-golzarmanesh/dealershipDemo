import { NextResponse } from "next/server";
import { z } from "zod";

import { db } from "@/db";
import { testDriveRequests } from "@/db/schema";

const testDriveSchema = z.object({
  fullName: z.string().min(5).max(32),
  phone: z.string().min(11).max(11),
  email: z.string().email(),
  date: z
    .string()
    .datetime({ offset: true })
    .or(z.string().regex(/^\d{4}-\d{2}-\d{2}T/)),
  description: z.string().max(100).optional().or(z.literal("")),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = testDriveSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "اطلاعات فرم نامعتبر است.", details: parsed.error },
        { status: 400 },
      );
    }

    const { fullName, phone, email, date, description } = parsed.data;
    const preferredDate = new Date(date);

    if (Number.isNaN(preferredDate.getTime())) {
      return NextResponse.json(
        { error: "تاریخ انتخاب‌شده معتبر نیست." },
        { status: 400 },
      );
    }

    const result = await db.insert(testDriveRequests).values({
      fullName,
      phone,
      email,
      preferredDate,
      description: description || null,
    });

    return NextResponse.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("test-drive submit error:", error);
    return NextResponse.json(
      { error: "ارسال فرم با خطا مواجه شد." },
      { status: 500 },
    );
  }
}
