//creare 10 oggetii di zucchine con proprietà
// Dividi in due array separati le zucchine che misurano meno o più di 15cm
//stampa separatamente quanto pesano i due gruppi di zucchine



$(function() {



    var zucchine = [{


            origine: 'Berlino',
            lunghezza: 10,
            peso: 41,

        },

        {
            origine: 'Brasile',
            lunghezza: 20,

            peso: 35,

        },
        {
            origine: 'Tunesia',
            lunghezza: 7,


            peso: 52,


        },
        {
            origine: 'Veronese',
            lunghezza: 20,


            peso: 52,


        },
        {
            origine: 'Scozia',
            lunghezza: 12,


            peso: 52,


        },
        {
            origine: 'Danimarca',
            lunghezza: 20,


            peso: 52,


        },
        {
            origine: 'Italia',
            lunghezza: 7,


            peso: 52,


        },
        {
            origine: 'Germania',
            lunghezza: 25,


            peso: 52,


        },
        {
            origine: 'Spagna',
            lunghezza: 8,


            peso: 52,


        },
        {
            origine: 'Francia',
            lunghezza: 25,


            peso: 52,


        },






    ]

    console.log(zucchine);
    var minore = [];
    var maggiore = [];
    var pesoTotale = 0;


    for (var tipoZucchina of zucchine) {

        //console.log(tipoZucchina.lunghezza + ' cm');

        if (tipoZucchina.lunghezza < 15) {
            minore = tipoZucchina.lunghezza
            pesoTotale += tipoZucchina.peso
                //console.log("il peso totale è " + pesoTotale + "  gr");




            console.log('sei minore' + minore + "il peso totale è " + pesoTotale + "  gr");
        }
        if (tipoZucchina.lunghezza > 15) {
            maggiore = tipoZucchina.lunghezza
            pesoTotale += tipoZucchina.peso
                //console.log("il peso totale è " + pesoTotale + "  gr");


            console.log('sei maggiore' + maggiore + "il peso totale è " + pesoTotale + "  gr");

        }











    };







});