export const optionsGenre = [
  { value: 'Drama', label: 'Drama' },
  { value: 'Thriller', label: 'Thriller' },
  { value: 'Horror', label: 'Horror' },
  { value: 'Comedy', label: 'Comedy' },
  { value: 'Romance', label: 'Romance' },
  { value: 'Animation', label: 'Animation' },
  { value: 'Crime', label: 'Crime' },
  { value: 'Adventure', label: 'Adventure' },
  { value: 'Mystery', label: 'Mystery' },
  { value: 'Documentary', label: 'Documentary' },
  { value: 'Sci-Fi', label: 'Sci-Fi' },
  { value: 'Action', label: 'Action' },
  { value: 'War', label: 'War' },
  { value: 'Fantasy', label: 'Fantasy' },
  { value: 'Western', label: 'Western' },
  { value: 'Children', label: 'Children' },
  { value: 'Musical', label: 'Musical' },
];

export const optionsCountry = [
  { value: 'France', label: 'France' },
  { value: 'Italy', label: 'Italy' },
  { value: 'Spain', label: 'Spain' },
  { value: 'Germany', label: 'Germany' },
  { value: 'Sweden', label: 'Sweden' },
  { value: 'Denmark', label: 'Denmark' },
  { value: 'Norway', label: 'Norway' },
  { value: 'Portugal', label: 'Portugal' },
  { value: 'China', label: 'China' },
  { value: 'Japan', label: 'Japan' },
  { value: 'South Korea', label: 'South Korea' },
  { value: 'Turkey', label: 'Turkey' },
  { value: 'Argentina', label: 'Argentina' },
  { value: 'Poland', label: 'Poland' },
  { value: 'India', label: 'India' },
  { value: 'Netherlands', label: 'Netherlands' },
  { value: 'Russia', label: 'Russia' },
  { value: 'Brazil', label: 'Brazil' },
  { value: 'Canada', label: 'Canada' },
  { value: 'Mexico', label: 'Mexico' },
];

const numbers = Array.from(Array(60).keys());
const yearsArray = numbers.map((i) => i = 2022 - i);

export const optionsYear = yearsArray.map((i) => ({ value: `${i}`, label: `${i}`, }));