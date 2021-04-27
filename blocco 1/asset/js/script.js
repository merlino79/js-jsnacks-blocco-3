//creare un array di 10 oggetti che rappresentano una zucchina
//per ogni varietà peso e lunghezza
//calcolare il peso della zucchina





$(function() {
    //console.log('prova');


    var zucchine = [{


            origine: 'Nera di Milano',
            lunghezza: 30,
            peso: "3 gr",

        },

        {
            origine: 'Alberello',
            lunghezza: 45,

            peso: "65 gr",

        },
        {
            origine: 'Tonda di Nizza',
            lunghezza: 40,


            peso: "25gr",


        },
        {
            origine: 'Lunghe fiorentine',
            lunghezza: 40,


            peso: "75 gr",


        },
        {
            origine: 'Trombetta di_Albenga',
            lunghezza: 40,


            peso: "25 gr",


        },
        {
            origine: 'Trombetta di_Albenga',
            lunghezza: 40,


            peso: "7 gr",


        },
        {
            origine: 'Zucchino giallo Golden',
            lunghezza: 40,


            peso: "45 gr",


        },
        {
            origine: 'Italiane',
            lunghezza: 40,


            peso: "15 gr",


        },
        {
            origine: 'Francesi',
            lunghezza: 40,


            peso: "30 gr",


        },
        {
            origine: 'Ungheresi',
            lunghezza: 40,


            peso: "20 gr",


        },



    ]

    console.log(zucchine);

    for (var varietàZucchine of zucchine) {

        console.log('peso: ' + varietàZucchine.peso);
        var pesoTotoale = +varietàZucchine.peso;
        console.log(parseInt(pesoTotoale));



    }





});