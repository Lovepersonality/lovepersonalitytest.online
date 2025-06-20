import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { reference, email, name, profileKey } = body;

  try {
    const resp = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        Accept: "application/json"
      }
    });
    const data = await resp.json();
    if (data.status && data.data.status === "success" && data.data.customer.email === email) {
      const token = Buffer.from(`${email}:${profileKey}:${Date.now()}`).toString("base64");
      return NextResponse.json({ success: true, token });
    }
    return NextResponse.json({ success: false }, { status: 400 });
  } catch {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}