"use client";

import { useState, useTransition } from "react";
import { submitWaitlist } from "@/app/actions/submitWaitlist";
import { waitlistSchema } from "@/lib/validation";

export default function WaitlistForm() {
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    setStatus(null);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.consent = data.consent === "on";

    const parsed = waitlistSchema.safeParse(data);
    if (!parsed.success) {
      setErrors(parsed.error.flatten().fieldErrors);
      return;
    }

    startTransition(async () => {
      const result = await submitWaitlist(formData);
      if (result?.errors) setErrors(result.errors);
      if (result?.message) setStatus(result.message);

      if (result?.success) {
        if (window?.gtag) {
          window.gtag("event", "signup_success", {
            event_category: "waitlist",
            event_label: "founding_member"
          });
        }
        if (window?.fbq) {
          window.fbq("track", "CompleteRegistration");
        }
      }
    });
  };

  if (status && !Object.keys(errors).length) {
    return (
      <div className="text-center space-y-4">
        <h3 className="text-xl font-semibold text-primary">
          Success
        </h3>
        <p className="text-gray-700">{status}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="company" className="hidden" tabIndex="-1" autoComplete="off" />

      <div>
        <label className="block text-sm font-medium">Full Name</label>
        <input
          name="full_name"
          aria-label="Full Name"
          required
          className="w-full border rounded-lg px-3 py-2 mt-1"
        />
        {errors.full_name && (
          <p className="text-sm text-red-600">{errors.full_name[0]}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium">Email Address</label>
        <input
          name="email"
          type="email"
          aria-label="Email Address"
          required
          className="w-full border rounded-lg px-3 py-2 mt-1"
        />
        {errors.email && (
          <p className="text-sm text-red-600">{errors.email[0]}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium">WhatsApp Number</label>
        <input
          name="whatsapp_number"
          aria-label="WhatsApp Number"
          required
          placeholder="+1 555 123 4567"
          className="w-full border rounded-lg px-3 py-2 mt-1"
        />
        {errors.whatsapp_number && (
          <p className="text-sm text-red-600">{errors.whatsapp_number[0]}</p>
        )}
      </div>

      <div className="flex items-start gap-2">
        <input name="consent" type="checkbox" aria-label="Consent" required />
        <p className="text-sm text-gray-700">
          I agree to receive updates about Graceway Generation.
        </p>
      </div>
      {errors.consent && (
        <p className="text-sm text-red-600">{errors.consent[0]}</p>
      )}

      <button
        type="submit"
        className="w-full rounded-full bg-primary text-white py-3 text-sm font-semibold shadow-soft transition hover:opacity-90"
        disabled={isPending}
      >
        {isPending ? "Reserving..." : "Reserve My Spot"}
      </button>
      <p className="text-xs text-gray-500 text-center">
        Launching Soon. Limited Founding Access.
      </p>
      {status && <p className="text-sm text-red-600 text-center">{status}</p>}
    </form>
  );
}