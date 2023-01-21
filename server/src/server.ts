import Fastify from "fastify";
import cors from "@fastify/cors";

const app = Fastify();
app.register(cors);
app.get("/", () => {
  return "Hello World";
});

app
  .listen({
    port: 3500,
  })
  .then(() => {
    console.log("Server is running in 3500 port");
  });
