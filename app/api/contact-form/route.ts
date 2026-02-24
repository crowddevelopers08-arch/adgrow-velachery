import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const leads = await db.lead.findMany();
    return NextResponse.json({ success: true, leads });
  } catch (err: any) {
    console.error("GET /contact-form:", err);
    return NextResponse.json(
      { success: false, error: "Failed to fetch leads" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const name = (body.name ?? "").trim();
    const phone = (body.phone ?? body.mobile ?? "").trim();
    const email = (body.email ?? "").trim();

    if (!name || !phone || !email) {
      return NextResponse.json(
        { success: false, error: "Name, phone, and email are required" },
        { status: 400 }
      );
    }

    const lead = await db.lead.create({
      name,
      phone,
      email,
      concern: body.concern ?? body.treatment ?? null,
      treatment: body.treatment ?? body.concern ?? null,
      procedure: body.procedure ?? null,
      message: body.message ?? null,
      city: body.city ?? null,
      age: body.age ?? null,
      preferredDate: body.preferredDate ?? null,
      formName: body.formName ?? body.source ?? "contact-form",
      source: body.source ?? "contact-form",
      consent: true,
      status: "NEW",
      hairLossStage: body.hairLossStage ?? null,
      telecrmSynced: false,
    });

    return NextResponse.json(
      {
        success: true,
        lead,
        message: "Lead submitted successfully",
      },
      { status: 201 }
    );
  } catch (err: any) {
    console.error("POST /contact-form:", err);
    return NextResponse.json(
      { success: false, error: err.message ?? "Server error" },
      { status: 500 }
    );
  }
}
