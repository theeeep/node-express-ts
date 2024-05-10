import exppress from "express";

const router = exppress.Router();

type HelloResponse = string;

router.get<{}, HelloResponse>("/", (req, res) => {
  res.json("Hello");
});

export default router;
