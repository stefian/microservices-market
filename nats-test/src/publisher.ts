import nats from "node-nats-streaming";

const stan = nats.connect("aibazar", "abc", {
  url: "http://localhost:4222",
}); // in docs client is named: stan / nats backwards

stan.on("connect", () => {
  console.log("Publisher connected to NATS");

  const data = JSON.stringify({
    id: "123",
    title: "service",
    price: 20,
  });

  stan.publish("ticket:created", data, () => {
    console.log("Event published");
  });
});
