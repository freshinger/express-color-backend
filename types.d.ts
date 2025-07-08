type rgb = {
  r: number;
  g: number;
  b: number;
};
type hsl = {
  h: number;
  s: number;
  l: number;
};

export type ColorResponse = {
  rgb: rgb;
  hsl: hsl;
  hex: string;
};
