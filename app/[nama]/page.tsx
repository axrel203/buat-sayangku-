import ClientLovePage from './ClientLovePage';

// For Next.js 15, params is a Promise
export default async function LovePage({ params }: { params: Promise<{nama: string}> }) {
  const resolvedParams = await params;
  // Decode e.g. "untuk-putri" -> "untuk putri" -> Title case could be done in client
  const decodedName = decodeURIComponent(resolvedParams.nama).replace(/-/g, ' ');

  return <ClientLovePage name={decodedName} />;
}
