import { Router } from "express";
import { adminRouter } from "./admin";
import { spaceRouter } from "./space";
import { userRouter } from "./user";

export const router = Router();

router.post("/signup", (req, res) => {
  res.json({
    message: "Signup",
  });
});
router.post("/signin", (req, res) => {
  res.json({
    message: "Signin",
  });
});
router.get("/elements", (req, res) => {
  res.json({
    message: "elements",
  });
});
router.get("/avatars", (req, res) => {
  res.json({
    message: "avatars",
  });
});

router.use("/user", userRouter);
router.use("/space", spaceRouter);
router.use("/admin", adminRouter);
