import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

type QuoteRequestPayload = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  serviceType: string;
  projectLocation: string;
  timeline: string;
  budget: string;
  details: string;
};

function normalizePayload(payload: Partial<QuoteRequestPayload>): QuoteRequestPayload {
  return {
    fullName: payload.fullName?.trim() ?? "",
    company: payload.company?.trim() ?? "",
    email: payload.email?.trim() ?? "",
    phone: payload.phone?.trim() ?? "",
    serviceType: payload.serviceType?.trim() ?? "",
    projectLocation: payload.projectLocation?.trim() ?? "",
    timeline: payload.timeline?.trim() ?? "",
    budget: payload.budget?.trim() ?? "",
    details: payload.details?.trim() ?? "",
  };
}

function hasMissingFields(payload: QuoteRequestPayload) {
  return Object.values(payload).some((value) => !value);
}

export async function POST(request: Request) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const resendApiKey = process.env.RESEND_API_KEY;
  const resendFromEmail = process.env.RESEND_FROM_EMAIL;
  const adminEmail = process.env.QUOTE_REQUEST_ADMIN_EMAIL;

  const missingRequiredEnv = [
    ["NEXT_PUBLIC_SUPABASE_URL", supabaseUrl],
    ["SUPABASE_SERVICE_ROLE_KEY", supabaseServiceRoleKey],
  ].filter(([, value]) => !value);

  if (missingRequiredEnv.length > 0) {
    return NextResponse.json(
      {
        error: "Supabase server configuration is incomplete.",
        missing: missingRequiredEnv.map(([name]) => name),
      },
      { status: 500 },
    );
  }

  let rawPayload: Partial<QuoteRequestPayload>;

  try {
    rawPayload = (await request.json()) as Partial<QuoteRequestPayload>;
  } catch {
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 },
    );
  }

  const payload = normalizePayload(rawPayload);

  if (hasMissingFields(payload)) {
    return NextResponse.json(
      { error: "All quote request fields are required." },
      { status: 400 },
    );
  }

  const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  const { data, error } = await supabaseAdmin
    .from("quote_requests")
    .insert({
      full_name: payload.fullName,
      company: payload.company,
      email: payload.email,
      phone: payload.phone,
      service_type: payload.serviceType,
      project_location: payload.projectLocation,
      timeline: payload.timeline,
      budget: payload.budget,
      details: payload.details,
    })
    .select("id, created_at")
    .single();

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 },
    );
  }

  if (!resendApiKey || !resendFromEmail || !adminEmail) {
    return NextResponse.json(
      {
        message: "Quote request saved successfully.",
        warning: "Admin email notification is not configured.",
      },
      { status: 202 },
    );
  }

  const resend = new Resend(resendApiKey);

  try {
    await resend.emails.send({
      from: resendFromEmail,
      to: [adminEmail],
      replyTo: payload.email,
      subject: `New quote request from ${payload.company}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
          <h2 style="margin-bottom: 16px; color: #132640;">New Quote Request</h2>
          <p>A new quote request has been submitted on the Petrowave website.</p>
          <table style="border-collapse: collapse; width: 100%; margin-top: 16px;">
            <tbody>
              <tr><td style="padding: 8px; border: 1px solid #cbd5e1;"><strong>Request ID</strong></td><td style="padding: 8px; border: 1px solid #cbd5e1;">${data.id}</td></tr>
              <tr><td style="padding: 8px; border: 1px solid #cbd5e1;"><strong>Submitted At</strong></td><td style="padding: 8px; border: 1px solid #cbd5e1;">${data.created_at}</td></tr>
              <tr><td style="padding: 8px; border: 1px solid #cbd5e1;"><strong>Full Name</strong></td><td style="padding: 8px; border: 1px solid #cbd5e1;">${payload.fullName}</td></tr>
              <tr><td style="padding: 8px; border: 1px solid #cbd5e1;"><strong>Company</strong></td><td style="padding: 8px; border: 1px solid #cbd5e1;">${payload.company}</td></tr>
              <tr><td style="padding: 8px; border: 1px solid #cbd5e1;"><strong>Email</strong></td><td style="padding: 8px; border: 1px solid #cbd5e1;">${payload.email}</td></tr>
              <tr><td style="padding: 8px; border: 1px solid #cbd5e1;"><strong>Phone</strong></td><td style="padding: 8px; border: 1px solid #cbd5e1;">${payload.phone}</td></tr>
              <tr><td style="padding: 8px; border: 1px solid #cbd5e1;"><strong>Service Type</strong></td><td style="padding: 8px; border: 1px solid #cbd5e1;">${payload.serviceType}</td></tr>
              <tr><td style="padding: 8px; border: 1px solid #cbd5e1;"><strong>Project Location</strong></td><td style="padding: 8px; border: 1px solid #cbd5e1;">${payload.projectLocation}</td></tr>
              <tr><td style="padding: 8px; border: 1px solid #cbd5e1;"><strong>Timeline</strong></td><td style="padding: 8px; border: 1px solid #cbd5e1;">${payload.timeline}</td></tr>
              <tr><td style="padding: 8px; border: 1px solid #cbd5e1;"><strong>Budget</strong></td><td style="padding: 8px; border: 1px solid #cbd5e1;">${payload.budget}</td></tr>
              <tr><td style="padding: 8px; border: 1px solid #cbd5e1;"><strong>Details</strong></td><td style="padding: 8px; border: 1px solid #cbd5e1; white-space: pre-wrap;">${payload.details}</td></tr>
            </tbody>
          </table>
        </div>
      `,
    });
  } catch {
    return NextResponse.json(
      {
        message: "Quote request saved successfully.",
        warning: "Admin email notification could not be delivered.",
      },
      { status: 202 },
    );
  }

  return NextResponse.json({
    message: "Quote request submitted successfully.",
  });
}