const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetcher(endpoint: string) {
  const res = await fetch(`${baseUrl}${endpoint}`);
  if (!res.ok) throw new Error("Gagal mengambil data");
  return res.json();
}

export async function postData(endpoint: string, data: any) {
  const res = await fetch(`${baseUrl}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
