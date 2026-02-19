"use server";

import { z } from "zod";
import { headers } from "next/headers";
import { createAdminClient } from "@/lib/supabase/admin";
import { resend } from "@/lib/resend";
import { waitlistSchema } from "@/lib/validation";

const sanitize = (value) => value.replace(/[<>]/g, "").trim();

const getRequestIp = () => {
  const headerList = headers();
  const forwarded = headerList.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return headerList.get("x-real-ip") || "unknown";
};

export async function submitWaitlist(formData) {
  const requestIp = getRequestIp();

  const rawData = {
    full_name: sanitize(formData.get("full_name") || ""),
    email: sanitize(formData.get("email") || ""),
    whatsapp_number: sanitize(formData.get("whatsapp_number") || ""),
    consent: formData.get("consent") === "on",
    honeypot: formData.get("company") || ""
  };

  if (rawData.honeypot) {
    return { success: false, message: "Spam detected." };
  }

  const parsed = waitlistSchema.safeParse(rawData);

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors
    };
  }

  const client = createAdminClient();

  // Rate limit: max 3 submissions per 10 minutes per IP
  if (requestIp !== "unknown") {
    const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000).toISOString();
    const { count } = await client
      .from("founding_members")
      .select("id", { count: "exact", head: true })
      .eq("request_ip", requestIp)
      .gte("created_at", tenMinutesAgo);

    if (count && count >= 3) {
      return {
        success: false,
        message: "Too many requests. Please try again later."
      };
    }
  }

  const { data: existing } = await client
    .from("founding_members")
    .select("id")
    .or(`email.eq.${parsed.data.email},whatsapp_number.eq.${parsed.data.whatsapp_number}`)
    .maybeSingle();

  if (existing) {
    return {
      success: false,
      message: "This email or WhatsApp number is already registered."
    };
  }

  const { error } = await client.from("founding_members").insert({
    full_name: parsed.data.full_name,
    email: parsed.data.email,
    whatsapp_number: parsed.data.whatsapp_number,
    consent: parsed.data.consent,
    request_ip: requestIp
  });

  if (error) {
    return {
      success: false,
      message: "Something went wrong. Please try again."
    };
  }

  await resend.emails.send({
    from: "Graceway Generation <onboarding@resend.dev>",
    to: parsed.data.email,
    subject: "You’re officially a Founding Member",
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.6">
        <h2>Welcome to Graceway Generation</h2>
        <p>You’re officially a Founding Member. We’ll notify you soon.</p>
      </div>
    `
  });

  return {
    success: true,
    message: "You’re officially a Founding Member. We’ll notify you soon."
  };
}