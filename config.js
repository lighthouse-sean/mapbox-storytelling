var config = {
    style: 'mapbox://styles/tampabaygay/clk5lemvw02c801no0h266dl4',
    accessToken: 'pk.eyJ1IjoidGFtcGFiYXlnYXkiLCJhIjoiY2xrNWxhZTRsMHVmeTNkcXBqYXZ1NWJ0bSJ9.LR_ZKdaaFCqK0FInLrr4Xw',
    showMarkers: true,
    markerColor: '#FF74E2',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'TAMPABAY.GAY NIGHTLIFE',
    subtitle: 'An interactive guide of all the best places to kiki in Tampa Bay.',
    byline: '',
    footer: '&copy 2023 <a href="https://tampabay.gay/" target="_blank">tampabay.gay</a>',
    chapters: [
        {
            id: 'nightlife',
            alignment: 'fully',
            title: 'Tampa Bay Gay Nightlife Guide',
            image: './images/logo-horizontal.svg',
            description: 'An interactive guide of all the best places to kiki in Tampa Bay.',
            location: {
                center: [-82.71247, 27.74352],
                zoom: 11,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
               // {
               //     layer: 'phl-city-limits',
               //     opacity: .45
               // }
            ],
            onChapterExit: [
              //  {
              //      layer: 'phl-city-limits',
              //      opacity: 0
              //  }
            ]
        },
        {
            id: 'floridian-social',
            alignment: 'right',
            hidden: false,
            title: 'Floridian Social',
            image: './images/floridian-social.jpg',
            description: '🎺Art Deco music venue in the heart of St Pete',
            location: {
                center: [-82.64337, 27.77147],
                zoom: 18,
                pitch: 0,
                bearing: -20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'enigma-st-pete',
            alignment: 'left',
            hidden: false,
            title: 'Enigma',
            image: './images/enigma.jpg',
            description: 'Lively, gay-friendly lounge with several rooms, a cozy dance floor, drag shows & sidewalk tables.',
            location: {
                center: [-82.65023, 27.77107],
                zoom: 19,
                pitch: 10,
                bearing: -60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'cocktail-st-pete',
            alignment: 'right',
            hidden: false,
            title: 'Cocktail St Pete',
            image: './images/wet-spot.webp',
            description: 'St Petes newest cocktail experience, Cocktail where you will get stiff drinks, hard liquor and raging good times.',
            location: {
                center: [-82.66553, 27.77109],
                zoom: 18.55,
                pitch: 54.50,
                bearing: -27.20
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'the-garage',
            alignment: 'left',
            hidden: false,
            title: 'The Garage',
            image: './images/garage.jpg',
            description: 'Low-lit, no-frills gay bar with a festive, dark wood interior, plus beer, cocktails & karaoke.',
            location: {
                center: [-82.67052, 27.77116],
                zoom: 20,
                pitch: 61,
                bearing: 24.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ritz',
            alignment: 'left',
            hidden: false,
            title: 'THE RITZ YBOR',
            image: './images/ritz-ybor.jpg',
            description: '<strong><a href="https://theritzybor.com/">The Ritz Ybor</a> <br/>1503 E 7th Ave, Tampa, FL 33605</strong><br/>The RITZ Ybor is Tampas most sought-after venue for live music and special events, and serves as the official home and headquarters of Sunset Events.',
            location: {
                center: [-82.44289, 27.95995],
                zoom: 19,
                pitch: 34,
                bearing: -49
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'bradleys',
            alignment: 'right',
            hidden: false,
            title: 'Bradleys on 7th',
            image: './images/bradleys.jpg',
            description: '<strong><a href="https://bradleyson7th.com/">Bradleys on 7th</a> <br/>1510 E 7th Ave, Tampa, FL 33605</strong><br/>Friendly gay bar with great drag shows, where everyone is welcome with great drinks and a friendly staff!',
            location: {
                center: [-82.44258, 27.96037],
                zoom: 19.42,
                pitch: 22.50,
                bearing: 128.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'southern',
            alignment: 'left',
            hidden: false,
            title: 'Southern Nights Tampa',
            image: './images/southern.jpg',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-82.44403, 27.96016],
                zoom: 19.42,
                pitch: 44.50,
                bearing: 70.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
