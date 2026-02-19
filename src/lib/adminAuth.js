import { cookies } from "next/headers";

const ADMIN_COOKIE = "graceway_admin_auth";

export const isAuthed = () => {
  const cookie = cookies().get(ADMIN_COOKIE);
  return cookie?.value === "true";
};

export const setAuthed = () => {
  cookies().set(ADMIN_COOKIE, "true", {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/"
  });
};

export const clearAuthed = () => {
  cookies().delete(ADMIN_COOKIE);
};