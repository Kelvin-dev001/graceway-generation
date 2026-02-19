import { createAdminClient } from "@/lib/supabase/admin";
import { isAuthed } from "@/lib/adminAuth";
import AdminLoginForm from "@/components/AdminLoginForm";
import AdminTable from "@/components/AdminTable";
import { logoutAdmin } from "./actions";

export const metadata = {
  title: "Admin — Graceway Generation"
};

export default async function AdminPage({ searchParams }) {
  const authed = isAuthed();
  if (!authed) {
    return (
      <main className="min-h-screen flex items-center justify-center p-6">
        <div className="bg-white border rounded-2xl p-6 shadow-soft">
          <h1 className="text-xl font-semibold mb-4">Admin Login</h1>
          <AdminLoginForm />
        </div>
      </main>
    );
  }

  const page = Number(searchParams?.page || 1);
  const pageSize = 25;
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  const client = createAdminClient();
  const { data, count } = await client
    .from("founding_members")
    .select("*", { count: "exact" })
    .order("created_at", { ascending: false })
    .range(from, to);

  const totalPages = Math.ceil((count || 0) / pageSize);

  return (
    <main className="min-h-screen p-6 max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primary">Founding Members</h1>
        <form action={logoutAdmin}>
          <button className="text-sm underline">Logout</button>
        </form>
      </div>

      <AdminTable members={data || []} />

      <div className="flex gap-2 text-sm">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <a
            key={p}
            href={`/admin?page=${p}`}
            className={`px-3 py-1 rounded ${
              p === page ? "bg-primary text-white" : "bg-gray-100"
            }`}
          >
            {p}
          </a>
        ))}
      </div>
    </main>
  );
}