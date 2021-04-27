$(function() {
    console.log('prova');


    var zucchine = [{


            origine: 'italia',
            lunghezza: 30,
            peso: 41,

        },

        {
            origine: 'francia',
            lunghezza: 45,

            peso: 35,

        },
        {
            origine: 'germania',
            lunghezza: 40,


            peso: 52,


        },

    ]

    console.log(zucchine);

    for (var varietàZucchine of zucchine) {
        console.log('peso: ' + varietàZucchine.peso);

    }





});