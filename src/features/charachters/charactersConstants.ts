export const SPECIES_LIST = [
  { value: "all", label: "All" },
  { value: "human", label: "Human" },
  { value: "humanoid", label: "Humanoid" },
  { value: "animal", label: "Animal" },
  { value: "cronenberg", label: "Cronenberg" },
  { value: "alien", label: "Alien" },
  { value: "mythological creature", label: "Mythological Creature" },
  { value: "disease", label: "Disease" },
  { value: "poopybutthole", label: "Poopybutthole" },
  { value: "robot", label: "Robot" },
];

export const STATUSES_LIST = [
  { value: "all", label: "All" },
  { value: "alive", label: "Alive" },
  { value: "dead", label: "Dead" },
  { value: "unknown", label: "Unknown" },
];

export const GENDERS_LIST = [
  { value: "all", label: "All" },
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "genderless", label: "Genderless" },
  { value: "unknown", label: "Unknown" },
];

export const FILTERS = {
  SPECIES: "species",
  STATUS: "status",
  GENDER: "gender",
  DEFAULT_VALUES: {
    SPECIES: "all",
    STATUS: "all",
    GENDER: "all",
  },
};
