export default function AdminTable({ members }) {
  const csvHeader = [
    "full_name",
    "email",
    "whatsapp_number",
    "consent",
    "created_at"
  ];

  const csvRows = members.map((m) => [
    m.full_name,
    m.email,
    m.whatsapp_number,
    m.consent ? "true" : "false",
    m.created_at
  ]);

  const csvContent = [
    csvHeader.join(","),
    ...csvRows.map((r) => r.map((x) => `"${String(x).replace(/"/g, '""')}"`).join(","))
  ].join("\n");

  const csvUrl = `data:text/csv;charset=utf-8,${encodeURIComponent(csvContent)}`;

  return (
    <div className="space-y-4">
      <a
        href={csvUrl}
        download="founding_members.csv"
        className="inline-flex items-center rounded-full bg-primary text-white px-4 py-2 text-sm font-semibold"
      >
        Download CSV
      </a>

      <div className="overflow-x-auto border rounded-xl">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-4 py-3">Name</th>
              <th className="text-left px-4 py-3">Email</th>
              <th className="text-left px-4 py-3">WhatsApp</th>
              <th className="text-left px-4 py-3">Consent</th>
              <th className="text-left px-4 py-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {members.map((m) => (
              <tr key={m.id} className="border-t">
                <td className="px-4 py-3">{m.full_name}</td>
                <td className="px-4 py-3">{m.email}</td>
                <td className="px-4 py-3">{m.whatsapp_number}</td>
                <td className="px-4 py-3">{m.consent ? "Yes" : "No"}</td>
                <td className="px-4 py-3">
                  {new Date(m.created_at).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}