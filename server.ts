Bun.serve({
	port: 3001,
	hostname: "0.0.0.0",
	async fetch(req) {
		const url = new URL(req.url);
		const path = url.pathname === "/" ? "/index.html" : url.pathname;
		const file = Bun.file("." + path);
		if (await file.exists()) {
			return new Response(file);
		}
		return new Response("Not found", { status: 404 });
	},
});

console.log("ascii-goggles running at http://localhost:3001");
