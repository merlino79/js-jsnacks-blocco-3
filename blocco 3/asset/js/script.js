const arrlett = ['a', 'b', 'c', 'd', 'e', ];
const arrnume = [1, 2, 3, 4, 5, ];
const arrToT = [];


//console.log(arrlett);
//console.log(arrnume);

let i = 0;

//ciclo wile

while (arrlett[i] != undefined && arrnume[i] != undefined) {
    arrToT.push(arrlett[i]);
    arrToT.push(arrnume[i]);
    i++;
};



console.log(arrToT + '');