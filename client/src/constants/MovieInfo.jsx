import mockData from "../databases/MockMovies.json";

const yearData_80 = mockData.filter(movie => (movie.year <= 1980)).length;
const yearData_8085 = mockData.filter(movie => (1980 < movie.year & movie.year <= 1985)).length;
const yearData_8590 = mockData.filter(movie => (1985 < movie.year & movie.year <= 1990)).length;
const yearData_9095 = mockData.filter(movie => (1990 < movie.year & movie.year <= 1995)).length;
const yearData_9500 = mockData.filter(movie => (1995 < movie.year & movie.year <= 2000)).length;
const yearData_0005 = mockData.filter(movie => (2000 < movie.year & movie.year <= 2005)).length;
const yearData_0510 = mockData.filter(movie => (2005 < movie.year & movie.year <= 2010)).length;
const yearData_1015 = mockData.filter(movie => (movie.year >= 2010));

export { yearData_80, yearData_8085, yearData_8590, yearData_9095, yearData_9500, yearData_0005, yearData_0510, yearData_1015 };