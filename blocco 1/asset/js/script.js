//creare un array di 10 oggetti che rappresentano una zucchina
//per ogni varietà peso e lunghezza
//calcolare il peso della zucchina





$(function() {
    //console.log('prova');


    var zucchine = [{


            origine: 'Nera di Milano',
            lunghezza: 30,
            peso: 3,

        },

        {
            origine: 'Alberello',
            lunghezza: 45,

            peso: 15,

        },
        {
            origine: 'Tonda di Nizza',
            lunghezza: 40,


            peso: 25,


        },
        {
            origine: 'Lunghe fiorentine',
            lunghezza: 40,


            peso: 22,


        },
        {
            origine: 'Trombetta di_Albenga',
            lunghezza: 40,


            peso: 12,


        },
        {
            origine: 'Trombetta di_Albenga',
            lunghezza: 40,


            peso: 7,


        },
        {
            origine: 'Zucchino giallo Golden',
            lunghezza: 40,


            peso: 45,


        },
        {
            origine: 'Italiane',
            lunghezza: 40,


            peso: 25,


        },
        {
            origine: 'Francesi',
            lunghezza: 40,


            peso: 30,


        },
        {
            origine: 'Ungheresi',
            lunghezza: 40,


            peso: 20,


        },



    ]

    console.log(zucchine);

    var pesoTotoale = 0;

    for (var varietàZucchine of zucchine) {

        //console.log('peso zucchine : ' + varietàZucchine.peso);
        pesoTotoale += varietàZucchine.peso;
        //console.log('il peso delle zucchine è :' + pesoTotoale);
        document.getElementById('testo').innerHTML = 'il peso totale delle zucchine è ' + pesoTotoale + " gr";




    }





});