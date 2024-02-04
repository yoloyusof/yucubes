import { Elysia } from "elysia";

const app = new Elysia();

app.get("/", () => "asdasd")

app.listen(8080, () => {
    console.log("now listening")
})