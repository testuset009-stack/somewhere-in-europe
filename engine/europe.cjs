// european country metadata and graph
// computes neighbor, close, or far hints
var COUNTRIES = {
AL: {
code: 'AL',
uk: 'Албанія',
en: 'Albania',
capUk: 'Тирана',
capEn: 'Tirana',
cx: 184.1,
cy: 120.6,
neighbors: ['ME', 'RS', 'MK', 'GR']
},
AT: {
code: 'AT',
uk: 'Австрія',
en: 'Austria',
capUk: 'Відень',
capEn: 'Vienna',
cx: 163.2,
cy: 95.2,
neighbors: [
'DE', 'CZ', 'SK', 'HU',
'SI', 'IT', 'CH'
]
},
BA: {
code: 'BA',
uk: 'Боснія і Герцеговина',
en: 'Bosnia and Herzegovina',
capUk: 'Сараєво',
capEn: 'Sarajevo',
cx: 177.8,
cy: 109.4,
neighbors: ['HR', 'RS', 'ME']
},
BE: {
code: 'BE',
uk: 'Бельгія',
en: 'Belgium',
capUk: 'Брюссель',
capEn: 'Brussels',
cx: 135.7,
cy: 84.0,
neighbors: ['FR', 'LU', 'DE', 'NL']
},
BG: {
code: 'BG',
uk: 'Болгарія',
en: 'Bulgaria',
capUk: 'Софія',
capEn: 'Sofia',
cx: 201.5,
cy: 114.0,
neighbors: ['RO', 'RS', 'MK', 'GR']
},
BY: {
code: 'BY',
uk: 'Білорусь',
en: 'Belarus',
capUk: 'Мінськ',
capEn: 'Minsk',
cx: 211.4,
cy: 72.9,
neighbors: ['LV', 'LT', 'PL', 'UA']
},
CH: {
code: 'CH',
uk: 'Швейцарія',
en: 'Switzerland',
capUk: 'Берн',
capEn: 'Bern',
cx: 148.1,
cy: 98.5,
neighbors: ['DE', 'AT', 'IT', 'FR']
},
CZ: {
code: 'CZ',
uk: 'Чехія',
en: 'Czechia',
capUk: 'Прага',
capEn: 'Prague',
cx: 171.5,
cy: 86.9,
neighbors: ['DE', 'PL', 'SK', 'AT']
},
DE: {
code: 'DE',
uk: 'Німеччина',
en: 'Germany',
capUk: 'Берлін',
capEn: 'Berlin',
cx: 153.6,
cy: 79.5,
neighbors: [
'DK', 'PL', 'CZ', 'AT',
'CH', 'FR', 'LU', 'BE', 'NL'
]
},
DK: {
code: 'DK',
uk: 'Данія',
en: 'Denmark',
capUk: 'Копенгаген',
capEn: 'Copenhagen',
cx: 150.8,
cy: 63.3,
neighbors: ['DE', 'SE', 'NO']
},
EE: {
code: 'EE',
uk: 'Естонія',
en: 'Estonia',
capUk: 'Таллінн',
capEn: 'Tallinn',
cx: 201.2,
cy: 53.7,
neighbors: ['LV', 'FI']
},
ES: {
code: 'ES',
uk: 'Іспанія',
en: 'Spain',
capUk: 'Мадрид',
capEn: 'Madrid',
cx: 107.5,
cy: 121.3,
neighbors: ['PT', 'FR']
},
FI: {
code: 'FI',
uk: 'Фінляндія',
en: 'Finland',
capUk: 'Гельсінкі',
capEn: 'Helsinki',
cx: 202.0,
cy: 29.5,
neighbors: ['SE', 'NO', 'EE']
},
FR: {
code: 'FR',
uk: 'Франція',
en: 'France',
capUk: 'Париж',
capEn: 'Paris',
cx: 125.3,
cy: 98.5,
neighbors: [
'ES', 'BE', 'LU', 'DE',
'CH', 'IT', 'GB'
]
},
GB: {
code: 'GB',
uk: 'Велика Британія',
en: 'United Kingdom',
capUk: 'Лондон',
capEn: 'London',
cx: 109.9,
cy: 68.4,
neighbors: ['IE', 'FR', 'IS']
},
GR: {
code: 'GR',
uk: 'Греція',
en: 'Greece',
capUk: 'Афіни',
capEn: 'Athens',
cx: 194.1,
cy: 127.3,
neighbors: ['AL', 'MK', 'BG']
},
HR: {
code: 'HR',
uk: 'Хорватія',
en: 'Croatia',
capUk: 'Загреб',
capEn: 'Zagreb',
cx: 173.3,
cy: 104.9,
neighbors: [
'SI', 'HU', 'RS', 'BA', 'ME'
]
},
HU: {
code: 'HU',
uk: 'Угорщина',
en: 'Hungary',
capUk: 'Будапешт',
capEn: 'Budapest',
cx: 180.3,
cy: 97.1,
neighbors: [
'AT', 'SK', 'UA', 'RO',
'RS', 'HR', 'SI'
]
},
IE: {
code: 'IE',
uk: 'Ірландія',
en: 'Ireland',
capUk: 'Дублін',
capEn: 'Dublin',
cx: 94.5,
cy: 73.5,
neighbors: ['GB']
},
IS: {
code: 'IS',
uk: 'Ісландія',
en: 'Iceland',
capUk: 'Рейкʼявік',
capEn: 'Reykjavik',
cx: 84.4,
cy: 28.0,
neighbors: ['NO', 'GB']
},
IT: {
code: 'IT',
uk: 'Італія',
en: 'Italy',
capUk: 'Рим',
capEn: 'Rome',
cx: 161.3,
cy: 112.1,
neighbors: ['FR', 'CH', 'AT', 'SI']
},
LT: {
code: 'LT',
uk: 'Литва',
en: 'Lithuania',
capUk: 'Вільнюс',
capEn: 'Vilnius',
cx: 197.9,
cy: 66.6,
neighbors: ['LV', 'BY', 'PL']
},
LU: {
code: 'LU',
uk: 'Люксембург',
en: 'Luxembourg',
capUk: 'Люксембург',
capEn: 'Luxembourg',
cx: 140.3,
cy: 87.1,
neighbors: ['BE', 'DE', 'FR']
},
LV: {
code: 'LV',
uk: 'Латвія',
en: 'Latvia',
capUk: 'Рига',
capEn: 'Riga',
cx: 198.7,
cy: 60.3,
neighbors: ['EE', 'BY', 'LT']
},
MD: {
code: 'MD',
uk: 'Молдова',
en: 'Moldova',
capUk: 'Кишинів',
capEn: 'Chisinau',
cx: 212.7,
cy: 98.0,
neighbors: ['RO', 'UA']
},
ME: {
code: 'ME',
uk: 'Чорногорія',
en: 'Montenegro',
capUk: 'Подгориця',
capEn: 'Podgorica',
cx: 182.0,
cy: 114.3,
neighbors: ['HR', 'BA', 'RS', 'AL']
},
MK: {
code: 'MK',
uk: 'Північна Македонія',
en: 'North Macedonia',
capUk: 'Скопʼє',
capEn: 'Skopje',
cx: 189.7,
cy: 119.3,
neighbors: ['RS', 'BG', 'GR', 'AL']
},
NL: {
code: 'NL',
uk: 'Нідерланди',
en: 'Netherlands',
capUk: 'Амстердам',
capEn: 'Amsterdam',
cx: 138.5,
cy: 78.2,
neighbors: ['DE', 'BE']
},
NO: {
code: 'NO',
uk: 'Норвегія',
en: 'Norway',
capUk: 'Осло',
capEn: 'Oslo',
cx: 169.0,
cy: 26.9,
neighbors: ['SE', 'FI', 'DK', 'IS']
},
PL: {
code: 'PL',
uk: 'Польща',
en: 'Poland',
capUk: 'Варшава',
capEn: 'Warsaw',
cx: 180.5,
cy: 79.8,
neighbors: [
'DE', 'CZ', 'SK', 'UA',
'BY', 'LT'
]
},
PT: {
code: 'PT',
uk: 'Португалія',
en: 'Portugal',
capUk: 'Лісабон',
capEn: 'Lisbon',
cx: 95.8,
cy: 125.9,
neighbors: ['ES']
},
RO: {
code: 'RO',
uk: 'Румунія',
en: 'Romania',
capUk: 'Бухарест',
capEn: 'Bucharest',
cx: 200.7,
cy: 104.0,
neighbors: [
'UA', 'MD', 'BG', 'RS', 'HU'
]
},
RS: {
code: 'RS',
uk: 'Сербія',
en: 'Serbia',
capUk: 'Белград',
capEn: 'Belgrade',
cx: 186.7,
cy: 108.3,
neighbors: [
'HU', 'RO', 'BG', 'MK',
'AL', 'ME', 'BA', 'HR'
]
},
SE: {
code: 'SE',
uk: 'Швеція',
en: 'Sweden',
capUk: 'Стокгольм',
capEn: 'Stockholm',
cx: 175.7,
cy: 40.6,
neighbors: ['NO', 'FI', 'DK']
},
SI: {
code: 'SI',
uk: 'Словенія',
en: 'Slovenia',
capUk: 'Любляна',
capEn: 'Ljubljana',
cx: 167.7,
cy: 101.4,
neighbors: ['IT', 'AT', 'HU', 'HR']
},
SK: {
code: 'SK',
uk: 'Словаччина',
en: 'Slovakia',
capUk: 'Братислава',
capEn: 'Bratislava',
cx: 182.1,
cy: 91.4,
neighbors: [
'CZ', 'PL', 'UA', 'HU', 'AT'
]
},
UA: {
code: 'UA',
uk: 'Україна',
en: 'Ukraine',
capUk: 'Київ',
capEn: 'Kyiv',
cx: 223.1,
cy: 94.1,
neighbors: [
'PL', 'SK', 'HU', 'RO',
'MD', 'BY'
]
}
};

// get country record by iso code
// returns null if code is unknown
function getCountry(code) {
if (!code) {
return null;
}
var key = String(code).toUpperCase();
return COUNTRIES[key] || null;
}

// check if two countries share border
// looks up neighbor list on source
function isNeighbor(codeA, codeB) {
var c = getCountry(codeA);
if (!c || !codeB) {
return false;
}
var b = String(codeB).toUpperCase();
return c.neighbors.indexOf(b) !== -1;
}

// compute proximity tier between countries
// returns neighbor, close, or far
function getDistanceHint(guessCode, targetCode) {
var g = getCountry(guessCode);
var t = getCountry(targetCode);
if (!g || !t) {
return 'far';
}
if (g.code === t.code) {
return 'exact';
}
if (isNeighbor(g.code, t.code)) {
return 'neighbor';
}
// check two-step neighbor path first
// catches compact central euro neighbors
for (var i = 0; i < g.neighbors.length; i++) {
if (isNeighbor(g.neighbors[i], t.code)) {
return 'close';
}
}
var dx = g.cx - t.cx;
var dy = g.cy - t.cy;
var dist = Math.sqrt(dx * dx + dy * dy);
if (dist <= 38) {
return 'close';
}
return 'far';
}

// return sorted array of country info
// used by phone controller dropdowns
function listCountries() {
var out = [];
for (var code in COUNTRIES) {
if (COUNTRIES.hasOwnProperty(code)) {
out.push(COUNTRIES[code]);
}
}
out.sort(function (a, b) {
return a.en.localeCompare(b.en);
});
return out;
}

module.exports = {
COUNTRIES: COUNTRIES,
getCountry: getCountry,
isNeighbor: isNeighbor,
getDistanceHint: getDistanceHint,
listCountries: listCountries
};
