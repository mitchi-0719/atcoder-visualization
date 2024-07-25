export const rates = [
  "gray",
  "brown",
  "green",
  "lightBlue",
  "blue",
  "yellow",
  "orange",
  "red",
  "more",
];

export const rateRange = {
  gray: {
    lower: 0,
    upper: 400,
  },
  brown: {
    lower: 400,
    upper: 800,
  },
  green: {
    lower: 800,
    upper: 1200,
  },
  lightBlue: {
    lower: 1200,
    upper: 1600,
  },
  blue: {
    lower: 1600,
    upper: 2000,
  },
  yellow: {
    lower: 2000,
    upper: 2400,
  },
  orange: {
    lower: 2400,
    upper: 2800,
  },
  red: {
    lower: 2800,
    upper: 3200,
  },
  more: {
    lower: 3200,
    upper: 1000000000,
  },
};

export const rateToColorMap = {
  0: "gray",
  400: "brown",
  800: "green",
  1200: "lightBlue",
  1600: "blue",
  2000: "yellow",
  2400: "orange",
  2800: "red",
  3200: "more",
};
