import express from "express";
import cors from "cors";

import router from "./router";

const app = express();
const port = 3333;

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});