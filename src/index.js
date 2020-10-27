"use strict";

import express from "express";
import bodyParser from "body-parser";
import logger from "./utilities/logger";
import cors from "cors";

let app = express();

app.get("/health", (req, res) => {
  return res.status(200).json({
    status: 200,
    descriptions: "Health - 1"
  });
});

app.get("/", (req, res) => {
  return res.status(200).json({
    status: 200,
    descriptions: "Health - 1"
  });
});

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.listen(process.env.PORT, (error, server) => {
  if (error) {
    logger.error({ err }, "Failed to start server");
  } else {
    logger.info(`Started server on ${process.env.PORT}`);
  }
});

export default app;
