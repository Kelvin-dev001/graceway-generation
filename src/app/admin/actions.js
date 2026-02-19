"use server";

import { setAuthed, clearAuthed } from "@/lib/adminAuth";

export async function loginAdmin(formData) {
  const password = formData.get("password") || "";
  if (password !== process.env.ADMIN_PASSWORD) {
    return { success: false, message: "Invalid password." };
  }

  setAuthed();
  return { success: true };
}

export async function logoutAdmin() {
  clearAuthed();
  return { success: true };
}