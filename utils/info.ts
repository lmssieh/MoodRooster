export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

interface Mood {
  [key: number]: {
    id: number;
    name: string;
    emote: string;
    color: string;
  };
}

export const moodsObj: Mood = {
  0: {
    id: 0,
    name: "amazing",
    emote: "1f600",
    color: "#26867d",
  },
  1: {
    id: 1,
    name: "ok",
    emote: "1f642",
    color: "#2c9d92",
  },
  2: {
    id: 2,
    name: "tired",
    emote: "1f62b",
    color: "#32b3a6",
  },
  3: {
    id: 3,
    name: "sad",
    emote: "2639",
    color: "#39cabb",
  },
  4: {
    id: 4,
    name: "stressed",
    emote: "1f62e-200d-1f4a8",
    color: "#3fe0d0",
  },
};