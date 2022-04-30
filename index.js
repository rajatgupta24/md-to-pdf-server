const express = require("express");
const fs = require("fs");
const path = require("path");
const markdownpdf = require("markdown-pdf");
const base64 = require("base64topdf");

const app = express();
const port = process.env.PORT || 5000

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.post("/md", (req, res) => {
  const text = req.body.text;

  const err = "";

  fs.writeFile("./db/new.md", text, (err) => {
    if (err) 
      err = "Server can't process the file, Try again.";
  }); 

  let inFile  = path.join(__dirname, "db", "new.md");
  let outFile = path.join(__dirname, "db", "new.pdf");
  
  fs.createReadStream(inFile)
    .pipe(markdownpdf())
    .pipe(fs.createWriteStream(outFile))

  let encodedPdf = base64.base64Encode(outFile);

  if (err != "")
    res.send(err);
  else 
    res.send(encodedPdf);
});

app.listen(port, () => {
  console.log(`Server listening on PORT ${port}`);
});
