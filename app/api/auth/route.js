// app/api/auth/token/route.js

import { getToken } from "next-auth/jwt";

export async function GET(request) {
  const token = await getToken({ req: request});

  console.log("JSON Web Token", token);

  return new Response(JSON.stringify(token), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

