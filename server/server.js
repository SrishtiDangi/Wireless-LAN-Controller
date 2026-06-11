import express from "express";
import cors from "cors";
import fs from "fs";
import diagnosticFieldGuide from "./data/diagnosticFieldGuide.json" with { type: "json" };
import ecosystem from "./data/ecosystem.json" with { type: "json" };
import architecture from "./data/architecture.json" with { type: "json" };
import gateway from "./data/gateway.json" with { type: "json" };
import phoneRegistration from "./data/phoneRegistration.json" with { type: "json" };
import callflow from "./data/callflow.json" with { type: "json" };
import dialplan from "./data/dialplan.json" with { type: "json" };
import rack from "./data/rack.json" with { type: "json" };
import cms from "./data/cms.json" with { type: "json" };
import navbar from "./data/navbar.json" with { type: "json" };
import pbxComparison from "./data/pbxComparison.json" with { type: "json" };
import protocols from "./data/protocols.json" with { type: "json" };
import codecQoS from "./data/codecQoS.json" with {type:"json"};
import mediaResources from "./data/mediaResources.json" with {type:"json"};
import security from "./data/security.json" with {type: "json"};
import highAvailability from "./data/highAvailability.json" with {type: "json"};
import mobility from "./data/mobility.json" with {type: "json"};
import classOfService from "./data/classOfService.json" with {type: "json"};
import troubleshooting from "./data/troubleshooting.json" with {type:"json"};
import advantages from "./data/advantages.json" with {type:"json"};
import footer from "./data/footer.json" with {type:"json"};
import over from "./data/over.json" with {type: "json"};
const app = express();

app.use(cors());

const overview = JSON.parse(
  fs.readFileSync("./data/overview.json", "utf8")
);

app.get("/api/overview", (req, res) => {
  res.json(overview);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

app.get("/api/ecosystem", (req, res) => {
  res.json(ecosystem);
});

app.get("/api/architecture", (req, res) => {
  res.json(architecture);

});

app.get("/api/gateway", (req, res) => {
  res.json(gateway);
});
app.get("/api/phoneRegistration", (req, res) => {
  res.json(phoneRegistration);
});
app.get("/api/callflow", (req, res) => {
  res.json(callflow);
});

app.get("/api/dialplan", (req, res) => {
  res.json(dialplan);
});

app.get("/api/rack", (req, res) => {
  res.json(rack);
});

app.get("/api/cms", (req, res) => {
  res.json(cms);
});

app.get("/api/navbar", (req, res) => {
  res.json(navbar);
});

app.get("/api/pbxComparison", (req, res) => {
  res.json(pbxComparison);
});

app.get("/api/protocols", (req, res) => {
  res.json(protocols);
});

app.get("/api/codecQoS", (req, res) => {
  res.json(codecQoS);
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
app.get("/api/classOfService", (req,res)=>{
    res.json(classOfService);
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