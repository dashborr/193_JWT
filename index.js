require("dotenv").config();

const express = require("express");
const connectDatabase = require("./config/db");
const apiRoutes = require("./routes/api");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", apiRoutes);

connectDatabase().then(() => {
    app.listen(port, () => {
        console.log(`Server berjalan di http://localhost:${port}`);
    });
});
