import { EmailTemplate } from "@/components/global/emails/email-template";
import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  try {
    const { data, error } = await resend.emails.send({
      from: "Up And Running <onboarding@resend.dev>",
      to: ["juniorcireba@gmail.com"],
      subject: "New waitlist entry",
      react: EmailTemplate({ email }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
