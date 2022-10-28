export const pages = [
  { id: 1, to: "/", label: "Charachters" },
  { id: 2, to: "/episodes", label: "Episodes" },
  { id: 3, to: "/locations", label: "Locations" },
  { id: 4, to: "/watch-list", label: "Watch list" },
];

export const initialResponse = {
  info: {
    prev: null,
    next: null,
    pages: 0,
    count: 0,
  },
  results: [],
};

export const DEFAULT_PAGE_SIZE = 20;
