export const SocketStatus = (engine: any) => {
  console.log(engine.transport.name); // in most cases, prints "polling"

  engine.once("upgrade", () => {
    // called when the transport is upgraded (i.e. from HTTP long-polling to WebSocket)
    console.log(engine.transport.name); // in most cases, prints "websocket"
  });

  engine.on("packet", ({ type, data }: { type: string; data: any }) => {
    // called for each packet received
  });

  engine.on("packetCreate", ({ type, data }: { type: string; data: any }) => {
    // called for each packet sent
  });

  engine.on("drain", () => {
    // called when the write buffer is drained
  });

  engine.on("close", (reason: any) => {
    // called when the underlying connection is closed
  });
};
