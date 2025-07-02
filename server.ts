import { serveDir } from "https://deno.land/std@0.217.0/http/file_server.ts";

Deno.serve(async (req: Request) => {
  const url = new URL(req.url);
  
  // Try to serve the file normally first
  const response = await serveDir(req, {
    fsRoot: "dist",
    quiet: true,
  });
  
  // If it's a 404 and not a file extension, serve index.html for SPA routing
  if (response.status === 404 && !url.pathname.includes('.')) {
    const indexRequest = new Request(new URL('/index.html', req.url));
    return await serveDir(indexRequest, {
      fsRoot: "dist",
      quiet: true,
    });
  }
  
  return response;
});