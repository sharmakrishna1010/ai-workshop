import app from "./app.js";
import dotenv from "dotenv";
import connectToDb from "./db/connectToDb.js";
import dns from "dns";

dns.setServers(["1.1.1.1", "8.8.8.8"]);
dotenv.config();

connectToDb()
  .then(() => {
    if (process.env.NODE_ENV !== "production") {
      const PORT: number = parseInt(process.env.PORT || "8000");
      app.listen(PORT, () => {
        console.log(`Server is running locally on port ${PORT}`);
      });
    }
  })
  .catch((error) => {
    console.error(error);
  });

export default app;
