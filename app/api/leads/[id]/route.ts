import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/prisma";

const STATUS = {
  new: "NEW",
  contacted: "CONTACTED",
  scheduled: "SCHEDULED",
  converted: "CONVERTED",
  lost: "LOST",
} as const;

export async function GET(_req: NextRequest, { params }: any) {
  const lead = await db.lead.findById(params.id);
  if (!lead)
    return NextResponse.json({ success: false, error: "Not found" }, { status: 404 });

  return NextResponse.json({ success: true, lead });
}

export async function PATCH(req: NextRequest, { params }: any) {
  const body = await req.json();

  const update: any = { ...body };

  if (body.status) update.status = STATUS[body.status];

  const lead = await db.lead.update(params.id, update);

  return NextResponse.json({ success: true, lead });
}

export async function DELETE(_req: NextRequest, { params }: any) {
  await db.lead.delete(params.id);
  return NextResponse.json({ success: true });
}
