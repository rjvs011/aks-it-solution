import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email, phone, service, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Forward to FormSubmit.co as a fallback (works without SMTP config)
    const formData = new URLSearchParams();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone || "Not provided");
    formData.append("service", service || "Not specified");
    formData.append("message", message);
    formData.append("_subject", "New Inquiry - AKS IT Solution Website");
    formData.append("_captcha", "false");
    formData.append("_template", "table");

    const res = await fetch("https://formsubmit.co/ajax/rajusharma011473@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name,
        email,
        phone: phone || "Not provided",
        service: service || "Not specified",
        message,
        _subject: "New Inquiry - AKS IT Solution Website",
        _captcha: "false",
        _template: "table",
      }),
    });

    if (res.ok) {
      return NextResponse.json({ message: "Thank you! Your message has been sent successfully." });
    }

    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
