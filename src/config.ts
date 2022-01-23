const DEFAULT_PORT = 3000;

function getPort(): number {
  let port = Number(process.env.PORT);
  return port > 0 && port < 65536 ? port : DEFAULT_PORT;
}

export const PORT = getPort();
