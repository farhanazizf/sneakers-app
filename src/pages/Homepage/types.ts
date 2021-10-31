export interface IData {
  shoes: Shoe[];
  selected?: Shoe;
  cart?: {
    items: Cart[];
  };
}

export interface Cart {
  name: string;
  category: string;
  description: string;
  price: number;
  sizes: string;
  colors: string;
  video: string;
}

export interface Shoe {
  name: string;
  category: string;
  description: string;
  price: number;
  sizes: string[];
  colors: Color[];
  video: string;
}

export interface Color {
  name: string;
  color_hash: string;
}

export const initState = {
  shoes: [
    {
      name: "Nike Air Force 1",
      category: "Men Shoes",
      description:
        "The Nike Air Edge 270 takes the look of retro basketball and puts it through a modern lens.",
      price: 30,
      sizes: ["8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5"],
      colors: [
        {
          name: "Just Brown",
          color_hash: "#AA6159",
        },
        {
          name: "Mistique Black",
          color_hash: "#272425",
        },
        {
          name: "Sky Blue",
          color_hash: "#6389CB",
        },
        {
          name: "Somewhat Gold",
          color_hash: "#F2C758",
        },
      ],
      video: "https://www.youtube.com/embed/lvfB_p0IiHM",
    },
  ],
};

// export enum ColorHash {
//   Aa6159 = "#AA6159",
//   F2C758 = "#F2C758",
//   The272425 = "#272425",
//   The6389Cb = "#6389CB",
// }

// export enum Name {
//   JustBrown = "Just Brown",
//   MistiqueBlack = "Mistique Black",
//   SkyBlue = "Sky Blue",
//   SomewhatGold = "Somewhat Gold",
// }
