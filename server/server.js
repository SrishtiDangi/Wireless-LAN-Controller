import express from "express";
import cors from "cors";
import fs from "fs";
import diagnosticFieldGuide from "./data/diagnosticFieldGuide.json" with { type: "json" };
import ecosystem from "./data/ecosystem.json" with { type: "json" };
import architecture from "./data/architecture.json" with { type: "json" };
import rack from "./data/rack.json" with { type: "json" };
import navbar from "./data/navbar.json" with { type: "json" };
import protocols from "./data/protocols.json" with { type: "json" };
import mediaResources from "./data/mediaResources.json" with {type:"json"};
import security from "./data/security.json" with {type: "json"};
import highAvailability from "./data/highAvailability.json" with {type: "json"};
import mobility from "./data/mobility.json" with {type: "json"};
import troubleshooting from "./data/troubleshooting.json" with {type:"json"};
import advantages from "./data/advantages.json" with {type:"json"};
import footer from "./data/footer.json" with {type:"json"};
import over from "./data/over.json" with {type: "json"};
import apJoin from "./data/apJoin.json" with {type:"json"};
import capwap from "./data/capwap.json" with {type:"json"};
import wlanDeployment from "./data/wlanDeployment.json" with {type:"json"};
import wlcPorts from "./data/wlcPorts.json" with {type:"json"};
import workingProcess from "./data/workingProcess.json" with {type:"json"};
const app = express();

app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

app.get("/api/ecosystem", (req, res) => {
  res.json(ecosystem);
});

app.get("/api/architecture", (req, res) => {
  res.json(architecture);

});
app.get("/api/workingProcess",(req,res)=>{
  res.json(workingProcess);
})
app.get("/api/apJoin", (req,res)=>{
  res.json(apJoin);
})

app.get("/api/capwap",(req,res)=>{
  res.json(capwap);
})

app.get("/api/wlanDeployment",(req,res)=>{
  res.json(wlanDeployment);
})

app.get("/api/wlcPorts", (req,res)=>{
  res.json(wlcPorts);
})
app.get("/api/rack", (req, res) => {
  res.json(rack);
});


app.get("/api/navbar", (req, res) => {
  res.json(navbar);
});


app.get("/api/protocols", (req, res) => {
  res.json(protocols);
});

app.get("/api/mediaResources", (req, res) =>{
    res.json(mediaResources);
});
app.get("/api/security", (req, res) =>{
    res.json(security);
});
app.get("/api/highAvailability", (req, res) =>{
    res.json(highAvailability);
});
app.get("/api/mobility", (req,res)=>{
    res.json(mobility);
});

app.get("/api/troubleshooting", (req,res)=>{
    res.json(troubleshooting);
});
app.get("/api/advantages", (req, res) => {
  res.json(advantages);
});

app.get("/api/footer", (req, res) => {
  res.json(footer);
});

app.get("/api/diagnosticFieldGuide", (req, res) => {
  res.json(diagnosticFieldGuide);
});
app.get("/api/over",(req,res)=>{
    res.json(over);
})