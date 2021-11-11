const Jimp = require("jimp");
const Koa = require("koa");
const Router = require("koa-router");
const serve = require("koa-static");

const app = new Koa();
const router = new Router();

app.use(serve("serve"));

router.get("/", (ctx, next) => {
  ctx.redirect("/static/index.html");
});

router.get("/rotate90", async (ctx, next) => {
  const original = await Jimp.read("serve/static/original.png");

  original.rotate(-90, false).write("serve/static/modified.png");

  ctx.redirect("/static/index.html");
});

router.get("/rotate180", async (ctx, next) => {
  const original = await Jimp.read("serve/static/original.png");

  original.rotate(-180, false).write("serve/static/modified.png");

  ctx.redirect("/static/index.html");
});

router.get("/rotate270", async (ctx, next) => {
  const original = await Jimp.read("serve/static/original.png");

  original.rotate(-270, false).write("serve/static/modified.png");

  ctx.redirect("/static/index.html");
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
