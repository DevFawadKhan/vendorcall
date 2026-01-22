// app/api/__tests__/test-endpoint/route.js

export async function GET(request) {
  // Logic for your test endpoint
  const data = { message: "Hello from test route!" };
  return Response.json(data, { status: 200 });
}

export async function POST(request) {
  const body = await request.json();
  // Process the request body
  return Response.json({ received: body, status: "success" }, { status: 200 });
}
