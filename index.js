const cats = ["Milo", "Otis", "Garfield"]
function beforeEach() {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
}
function destructivelyAppendCat(Ralph) {
    cats.push('Ralph')
}
function destructivelyPrependCat(Bob) {
    cats.unshift('Bob')
}
function destructivelyRemoveLastCat(Garfield) {
    cats.pop()
}
function destructivelyRemoveFirstCat(Milo) {
    cats.shift()
}
function appendCat(Broom) {
    return [...cats, 'Broom'];
}
function prependCat(Arnold) {
    return ['Arnold', ...cats];
}
function removeLastCat() {
    const catscopy1 = cats.slice()
    return catscopy1.slice(0, cats.length - 1);
}
function removeFirstCat() {
    const catscopy2 = cats.slice()
    return catscopy2.slice(1)
}