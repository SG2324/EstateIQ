const express = require("express");
const app = express();
app.get("/",(req,res)=> {
    res.send("Housing Project is Working!");
});
app.get("/health",(req,res)=> {
    res.json({status:"OK",phase: "0", day:"2"});
});
const PORT=3000;
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});