import nats from "node-nats-streaming";

console.clear();

const stan = nats.connect("aibazar", "123", {
  url: "http://localhost:4222",
});

stan.on("connect", () => {
  console.log("Listener connected to NATS");
});
