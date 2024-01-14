const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App is running at port number=${PORT}`);
});
//# sourceMappingURL=app.js.map