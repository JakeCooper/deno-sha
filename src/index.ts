import { serve } from "https://deno.land/std@0.85.0/http/server.ts";

let port = parseInt(Deno.env.get("PORT") ?? "8000");
let SHA = Deno.env.get("RAILWAY_GIT_COMMIT_SHA");
const s = serve({ port });

console.log(`http://localhost:${port}/`);
                    
console.log(SHA)

for await (const req of s) {
  req.respond({ body: `Choo Choo! Welcome to your Deno app\nGit SHA is ${SHA}\URL is ${Deno.env.get("RAILWAY_STATIC_URL")}` });
}
