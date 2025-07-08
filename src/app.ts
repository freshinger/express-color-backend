require("dotenv").config();

import express from "express";
import convert from "color-convert";
import { ColorResponse } from "../types";
import { RNG } from "./util/RNG";

const app = express();
const port = process.env.PORT || 3000;

function getColorResponse(): ColorResponse {
  const rng = new RNG();
  const r = rng.generate();
  const g = rng.generate();
  const b = rng.generate();

  const hsl = convert.rgb.hsl(r, g, b);
  const hex = convert.rgb.hex(r, g, b);
  let response: ColorResponse = {
    rgb: { r: r, g: g, b: b },
    hsl: { h: hsl[0], s: hsl[1], l: hsl[2] },
    hex: hex,
  };
  return response;
}

app.get("/randomColor", (req, res) => {
  res.json(getColorResponse());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
