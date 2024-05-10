import express from "express";
import MessageResponse from "./interfaces/MessageResponse";
import routes from "./routes";

const app = express();

app.get<{}, MessageResponse>("/", (req, res) => {
  res.json({
    message: "Hello from Server",
  });
});

app.use("/api/v1/", routes);

export default app;
