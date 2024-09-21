import app from "./app";
import env from "./config/environment.config";
import connectDb from "./config/databade.config";

const port = env.app.port

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });

connectDb();