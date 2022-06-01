import mockData from "../databases/MockMovies.json";

// Year
const yearData_80 = mockData.filter(movie => (movie.year <= 1980)).length;
const yearData_8085 = mockData.filter(movie => (1980 < movie.year & movie.year <= 1985)).length;
const yearData_8590 = mockData.filter(movie => (1985 < movie.year & movie.year <= 1990)).length;
const yearData_9095 = mockData.filter(movie => (1990 < movie.year & movie.year <= 1995)).length;
const yearData_9500 = mockData.filter(movie => (1995 < movie.year & movie.year <= 2000)).length;
const yearData_0005 = mockData.filter(movie => (2000 < movie.year & movie.year <= 2005)).length;
const yearData_0510 = mockData.filter(movie => (2005 < movie.year & movie.year <= 2010)).length;
const yearData_10 = mockData.filter(movie => (movie.year >= 2010)).length;

// Genre
const DramaG = mockData.filter(movie => (movie.genre.includes('Drama'))).length;
const HorrorG = mockData.filter(movie => (movie.genre.includes('Horror'))).length;
const ThrillerG = mockData.filter(movie => (movie.genre.includes('Thriller'))).length;
const CrimeG = mockData.filter(movie => (movie.genre.includes('Crime'))).length;
const MusicalG = mockData.filter(movie => (movie.genre.includes('Musical'))).length;
const RomanceG = mockData.filter(movie => (movie.genre.includes('Romance'))).length;
const SciFiG = mockData.filter(movie => (movie.genre.includes('Sci-Fi'))).length;
const DocumentaryG = mockData.filter(movie => (movie.genre.includes('Documentary'))).length;
const ComedyG = mockData.filter(movie => (movie.genre.includes('Comedy'))).length;
const AdventureG = mockData.filter(movie => (movie.genre.includes('Adventure'))).length;
const ActionG = mockData.filter(movie => (movie.genre.includes('Action'))).length;
const WarG = mockData.filter(movie => (movie.genre.includes('War'))).length;
const FantasyG = mockData.filter(movie => (movie.genre.includes('Fantasy'))).length;
const MysteryG = mockData.filter(movie => (movie.genre.includes('Mystery'))).length;
const FilmNoirG = mockData.filter(movie => (movie.genre.includes('Film-Noir'))).length;
const WesternG = mockData.filter(movie => (movie.genre.includes('Western'))).length;
const ChildrenG = mockData.filter(movie => (movie.genre.includes('Children'))).length;
const OtherG = mockData.filter(movie => (movie.genre.includes('(no genres listed)'))).length;

// Country
const FranceC = mockData.filter(movie => (movie.country === 'France')).length;
const ItalyC = mockData.filter(movie => (movie.country === 'Italy')).length;
const SpainC = mockData.filter(movie => (movie.country === 'Spain')).length;
const GermanyC = mockData.filter(movie => (movie.country === 'Germany')).length;
const SwedenC = mockData.filter(movie => (movie.country === 'Sweden')).length;
const DenmarkC = mockData.filter(movie => (movie.country === 'Denmark')).length;
const NorwayC = mockData.filter(movie => (movie.country === 'Norway')).length;
const PortugalC = mockData.filter(movie => (movie.country === 'Portugal')).length;
const ChinaC = mockData.filter(movie => (movie.country === 'China')).length;
const JapanC = mockData.filter(movie => (movie.country === 'Japan')).length;
const SouthKoreaC = mockData.filter(movie => (movie.country === 'South Korea')).length;
const TurkeyC = mockData.filter(movie => (movie.country === 'Turkey')).length;
const ArgentinaC = mockData.filter(movie => (movie.country === 'Argentina')).length;
const PolandC = mockData.filter(movie => (movie.country === 'Poland')).length;
const IndiaC = mockData.filter(movie => (movie.country === 'India')).length;
const NetherlandsC = mockData.filter(movie => (movie.country === 'Netherlands')).length;
const RussiaC = mockData.filter(movie => (movie.country === 'Russia')).length;
const BrazilC = mockData.filter(movie => (movie.country === 'Brazil')).length;
const CanadaC = mockData.filter(movie => (movie.country === 'Canada')).length;
const MexicoC = mockData.filter(movie => (movie.country === 'Mexico')).length;

export { yearData_80, yearData_8085, yearData_8590, yearData_9095, yearData_9500, yearData_0005, yearData_0510, yearData_10 };
export { DramaG, HorrorG, ThrillerG, CrimeG, MusicalG, RomanceG, SciFiG, DocumentaryG, ComedyG, AdventureG, ActionG, WarG, FantasyG, MysteryG, FilmNoirG, WesternG, ChildrenG, OtherG };
export { FranceC, ItalyC, SpainC, GermanyC, SwedenC, DenmarkC, NorwayC, PortugalC, ChinaC, JapanC, SouthKoreaC, TurkeyC, ArgentinaC, PolandC, IndiaC, NetherlandsC, RussiaC, BrazilC, CanadaC, MexicoC };