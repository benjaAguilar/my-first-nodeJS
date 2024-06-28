const adress = new URL('http://localhost:8080/default.htm?year=2017&month=february');

console.log(adress.host);
console.log(adress.pathname);
console.log(adress.search);

const params = new URLSearchParams(adress.search);

console.log(params);
console.log(params.get('year'));
console.log(params.get('month'));