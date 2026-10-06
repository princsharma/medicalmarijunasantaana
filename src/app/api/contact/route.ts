import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";
import type { ApiResponse } from "@/types";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      const errors: Record<string, string[]> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0]?.toString() ?? "form";
        if (!errors[key]) errors[key] = [];
        errors[key].push(issue.message);
      }

      return NextResponse.json<ApiResponse>(
        {
          success: false,
          message: "Please correct the errors below.",
          errors,
        },
        { status: 422 }
      );
    }

    const webhookUrl = process.env.FORM_WEBHOOK_URL;

    if (webhookUrl) {
      const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "contact",
          ...parsed.data,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!webhookResponse.ok) {
        return NextResponse.json<ApiResponse>(
          {
            success: false,
            message: "Unable to send your message right now. Please try again or call us.",
          },
          { status: 502 }
        );
      }
    } else {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          message: "Online email delivery is not configured. Please email us directly.",
        },
        { status: 503 }
      );
    }

    return NextResponse.json<ApiResponse>({
      success: true,
      message: "Thank you! Your message has been sent. We'll get back to you within one business day.",
    });
  } catch {
    return NextResponse.json<ApiResponse>(
      {
        success: false,
        message: "An unexpected error occurred. Please try again.",
      },
      { status: 500 }
    );
  }
}
