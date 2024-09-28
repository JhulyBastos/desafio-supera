import express from "express";
import userRoutes from "./routes/userRoutes";

const app = express();
const cors = require("cors");
const PORT = 3001;

app.use(express.json());
app.use(cors());

app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
