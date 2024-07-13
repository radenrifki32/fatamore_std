export async function GET() {
  return new Response(JSON.stringify({ name: 'Hello World' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
