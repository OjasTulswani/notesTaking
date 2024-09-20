import app from "./app";
import env from "./config/environment.config";
import connectDb from "./config/databade.config";

app.listen(() => console.log(`[server] listening on ${env.app.port}`))

connectDb();