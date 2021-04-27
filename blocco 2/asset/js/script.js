$(function() {



    var zucchine = [{


            origine: 'italia',
            lunghezza: 10,
            peso: 41,

        },

        {
            origine: 'francia',
            lunghezza: 20,

            peso: 35,

        },
        {
            origine: 'germania',
            lunghezza: 7,


            peso: 52,


        },
        {
            origine: 'germania',
            lunghezza: 20,


            peso: 52,


        },
        {
            origine: 'germania',
            lunghezza: 12,


            peso: 52,


        },
        {
            origine: 'germania',
            lunghezza: 20,


            peso: 52,


        },
        {
            origine: 'germania',
            lunghezza: 7,


            peso: 52,


        },
        {
            origine: 'germania',
            lunghezza: 25,


            peso: 52,


        },
        {
            origine: 'germania',
            lunghezza: 8,


            peso: 52,


        },
        {
            origine: 'germania',
            lunghezza: 25,


            peso: 52,


        },






    ]

    console.log(zucchine);

    for (var tipoZucchina of zucchine) {

        console.log('è lunga ' + tipoZucchina.lunghezza);
        if (tipoZucchina.lunghezza < 15) {
            console.log("sei lunga" + tipoZucchina.lunghezza);
        } else('sei più lunga')


    };







});