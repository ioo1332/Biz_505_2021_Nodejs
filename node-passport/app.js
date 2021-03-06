/**
 * express generator ES6+ template
 * @edit : callor@callor.com
 * @since : 2020-12-10
 * @see : nodejs + express 프로젝트에서 ES6+ 문법을 사용하기 위한 template
 *
 * require()방식의 코드를 import방식으로 변경
 * require()방식의 코드르 commonJS코드라고 하며
 * import 방식으로 사용하는 코드를 ES+ module 방식 코드라고 한다
 */
import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

import session from "express-session";
import passport from "passport";
import passportConfig from "./modules/passport.js";

import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";
import cors from "cors";

const app = express();

const whiteURL = ["http://localhost:3000"];
const corsOption = {
  orgin: (origin, callback) => {
    const iswhiteURL = whiteURL.indexOf(origin) !== -1;
    callback(null, iswhiteURL);
  },
};

// Disable the fingerprinting of this web technology. 경고
app.disable("x-powered-by");

// view engine setup
app.set("views", path.join("./views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join("./public")));

// 세션 활성화
app.use(session({ secret: "aa1234", resave: true, saveUninitialized: false }));
app.use(passport.initialize()); // passpaort start
app.use(passport.session());

app.use(cors(corsOption));

app.use("/", indexRouter);
app.use("/users", usersRouter);
passportConfig();

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export default app;
