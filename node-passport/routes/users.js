import express from "express";
import passport from "passport";

const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
/**
 * react,nodejs API 를 연동하여 login 구현
 * login router는 반드시 post 구현해야한다
 * oAuth2.0 passport 방식으로 login 할때는 정책상 반드시 post로 요청 해야 한다
 *
 * passport를 사용하여 login을 수행할때 router의
 * path와 callback 함수사이에서 login 정책을 수행할 미들웨어
 * passport.authenticate("local")
 */
router.post("/login", passport.authenticate("local"), (req, res) => {
  console.log(req.user);
  res.json({ userid: req.user.userid, password: req.user.password });
});
export default router;
