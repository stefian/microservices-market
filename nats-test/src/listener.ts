import nats, { Message } from "node-nats-streaming";
import { randomBytes } from "crypto";

console.clear();

const stan = nats.connect("aibazar", randomBytes(4).toString("hex"), {
  url: "http://localhost:4222",
});

stan.on("connect", () => {
  console.log("Listener connected to NATS");

  stan.on("close", () => {
    console.log("NATS connection closed!");
    process.exit();
  });

  const options = stan
    .subscriptionOptions()
    .setManualAckMode(true)
    .setDeliverAllAvailable();

  const subscription = stan.subscribe(
    "ticket:created",
    // "orders-service-queue-group",
    options
  );

  subscription.on("message", (msg: Message) => {
    const data = msg.getData();

    if (typeof data === "string") {
      console.log(
        `Received event #${msg.getSequence()}, with data: ${data}`
      );
    }

    msg.ack();
  });
});

process.on("SIGINT", () => stan.close()); // Interrupt signal / CTRL-C => first close client connection
process.on("SIGTERM", () => stan.close()); // Terminate signal => first close client connection
