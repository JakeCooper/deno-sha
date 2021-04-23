import { serve } from "https://deno.land/std@0.85.0/http/server.ts";

let port = parseInt(Deno.env.get("PORT") ?? "8000")
const s = serve({ port });

console.log(`http://localhost:${port}/`);

for await (const req of s) {
  req.respond({ body: `Choo Choo! Welcome to your Deno app\n. Git SHA is ${Deno.env.Get("RAILWAY_GIT_COMMIT_SHA")}` });
}
