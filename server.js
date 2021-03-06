let cors = require("cors");
const jsonServer = require("json-server");
const auth = require("json-server-auth");

const app = jsonServer.create();
const router = jsonServer.router("db.json");
const port = process.env.PORT || 3001;

app.db = router.db;

const rules = auth.rewriter({
  "/users*": "/640/users$1",
  "/techs*": "/640/techs$1",
  "/jobs*": "/640/jobs$1",
  "/accepted*": "/640/accepted$1",
  "/portfolio*": "/640/portfolio$1",
});

app.use(cors());
app.use(rules);
app.use(auth);
app.use(router);
app.listen(port);

console.log("Server is running on port:", port);
