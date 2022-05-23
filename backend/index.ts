require("dotenv").config();

const fastify = require("fastify")({ logger: true });
const path = require("path");
const port = process.env.PORT || 8080;

fastify.register(require("@fastify/static"), {
  root: path.join(__dirname, "../build"),
});

fastify.setNotFoundHandler((_: any, res: any) => {
  res.sendFile("index.html");
});

fastify.route({
  method: "GET",
  url: "/",
  handler: async (_: any, res: any) => {
    res.sendFile("index.html");
  },
});

const start = async () => {
  try {
    await fastify.listen(port);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
