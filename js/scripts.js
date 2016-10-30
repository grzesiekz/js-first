var a = prompt('Podaj długość przyprostokątnej');
var h = prompt('Podaj wysokość trójkąta');
var triangleArea = (a*h)/2;
console.log('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + h + ' wynosi: ' + triangleArea);

// Oczywiście, jeśli użyszkodnik poda coś innego niż liczby jako a i h to program rzuci wyjątkiem. Zakładam, że nikt głupot nie będzie wpisywał. 