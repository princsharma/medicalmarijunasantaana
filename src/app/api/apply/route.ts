import { NextResponse } from "next/server";
import { applicationFormSchema } from "@/lib/validation";
import type { ApiResponse } from "@/types";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = applicationFormSchema.safeParse(body);

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
          type: "application",
          ...parsed.data,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!webhookResponse.ok) {
        return NextResponse.json<ApiResponse>(
          {
            success: false,
            message: "Unable to process your application right now. Please try again or call us.",
          },
          { status: 502 }
        );
      }
    } else if (process.env.NODE_ENV === "development") {
      console.info("[apply] Form submission:", parsed.data);
    }

    return NextResponse.json<ApiResponse>({
      success: true,
      message:
        "Thank you! Your application has been received. Our team will contact you shortly to schedule your consultation.",
      data: { submittedAt: new Date().toISOString() },
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
