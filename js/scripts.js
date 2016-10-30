var a, b, value;
// można było od razu zrobić var a = prompt('');..., ale w zadaniu było, żeby osobno zadeklarować, więc jest jak jest
a = prompt('Podaj a');
b = prompt('Podaj b');
value = (a*a) + (2*a*b) - (b*b);
console.log('Wynik działania: ', value);
if (value > 0) {
	console.log('Wynik dodatni')
} else if (value < 0) {
	console.log('Wynik ujemny')
} else {
	console.log('ZERO')
}


