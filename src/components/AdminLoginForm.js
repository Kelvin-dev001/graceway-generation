"use client";

import { useState, useTransition } from "react";
import { loginAdmin } from "@/app/admin/actions";

export default function AdminLoginForm() {
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.target);

    startTransition(async () => {
      const res = await loginAdmin(formData);
      if (!res?.success) {
        setError(res?.message || "Login failed.");
      } else {
        window.location.reload();
      }
    });
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <div>
        <label className="block text-sm font-medium">Admin Password</label>
        <input
          type="password"
          name="password"
          required
          className="w-full border rounded-lg px-3 py-2 mt-1"
        />
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button
        type="submit"
        className="w-full rounded-full bg-primary text-white py-2 text-sm font-semibold"
        disabled={isPending}
      >
        {isPending ? "Signing in..." : "Sign In"}
      </button>
    </form>
  );
}