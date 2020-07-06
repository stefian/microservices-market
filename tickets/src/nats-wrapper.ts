import nats, { Stan } from "node-nats-streaming";

class NatsWrapper {
  private _client?: Stan; // ? tells TS that _client might be undefined for some time

  // connect needs a cluster Id, client Id and the Url to connect to
  connect(clusterId: string, clientId: string, url: string) {
    this._client = nats.connect(clusterId, clientId, { url });

    return new Promise((resolve, reject) => {
      this._client!.on("connect", () => {
        console.log("Connected to NATS");
        resolve();
      });
      this._client!.on("error", (err) => {
        reject(err);
      });
    });
  }
}

export const natsWrapper = new NatsWrapper();
