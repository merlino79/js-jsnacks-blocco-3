$(function() {

    var arrBidimensionale = [
        ['a', 'b', 'c', ],
        [1, 2, 3, 4, 5, ],

    ];
    console.log(arrBidimensionale);



    for (arr of arrBidimensionale) {
        for (var arrIn of arr) {
            console.log(arrIn);
        }
        console.log('--------->')
    }













});