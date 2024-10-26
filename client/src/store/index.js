import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#8bc34a",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./smile.png",
  fullDecal: "./smile.png",
});

export default state;
