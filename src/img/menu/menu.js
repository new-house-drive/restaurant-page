import buryanPic from "./buryan.png";
import hlibPic from "./hlib.png";
import hlibciPic from "./hlibci.png";
import korzhykPic from "./korzhyk.png";
import palyanychkyPic from "./palyanychky.png";
import tovchenykyPic from "./tovchenyky.png";
import travyanykyPic from "./travyanyky.png";
import zateruhaPic from "./zateruha.png";

let menuList = [
  {
    title: "Buryan Soup",
    text: "One boiled corn and grass",
    price: "0.29$",
    pic: buryanPic,
  },

  {
    title: "Bread",
    text: "Dough from grated bark with a handful of bran and quince leaves",
    price: "0.49$",
    pic: hlibPic,
  },

  {
    title: "Bread Pieces",
    text: "Crumbled and baked straw together with millet and buckwheat chaff, hemp seed cake crushed in a mortar",
    price: "0.69$",
    pic: hlibciPic,
  },

  {
    title: "Flatbread",
    text: "ground into flour oak bark, chopped reed roots, and goosefoots",
    price: "0.69$",
    pic: korzhykPic,
  },

  {
    title: "Palyanychky",
    text: "Baked and finely chopped potato waste with grain residues mixed in hot water",
    price: "0.39$",
    pic: palyanychkyPic,
  },

  {
    title: "Tovchenyky",
    text: "Small fish with salt, baked in cast iron",
    price: "0.49$",
    pic: tovchenykyPic,
  },

  {
    title: "Herbal Bread",
    text: "baked flatbread made of grated grass, kneaded in hot water with the addition of flax seeds",
    price: "0.79$",
    pic: travyanykyPic,
  },

  {
    title: "Zaterukha",
    text: "The baked dough of flour, tree bark birch and water",
    price: "1.09$",
    pic: zateruhaPic,
  },
];

export default() => {
    return menuList;
}