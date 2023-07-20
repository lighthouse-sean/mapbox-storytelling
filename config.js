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
            title: 'Floridian Social Club',
            image: './images/floridian-social.jpg',
            description: '<strong><a href="https://www.thefloridiansocial.com/">Floridian Social Club</a><br>687 Central Ave N, St. Petersburg, FL 33701</strong><br>🎺Art Deco music venue in the heart of St Pete',
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
            description: '<strong><a href="https://enigmastpete.com/">Enigma St Pete</a> <br>1110 Central Ave, St. Petersburg, FL 33705</strong><br>Lively, gay-friendly lounge with several rooms, a cozy dance floor, drag shows & sidewalk tables.',
            location: {
                center: [-82.65023, 27.77107],
                zoom: 19,
                pitch: 10,
                bearing: -60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
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
            description: '<strong><a href="https://cocktailstpete.com">Cocktail St Pete</a><br>2355 Central Ave, St. Petersburg, FL 33713</strong><br>St Petes newest cocktail experience, Cocktail where you will get stiff drinks, hard liquor and raging good times.',
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
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'the-garage',
            alignment: 'left',
            hidden: false,
            title: 'Grand Central Garage',
            image: './images/garage.jpg',
            description: '<strong><a href="https://www.facebook.com/FukTheGarage">Grand Central Garage</a><br>2729 Central Ave Saint Petersburg, FL 33713</strong><br>A dive bar to find St. Petes older crowd in the historic Kenwood area, locals end up here for a mellow good time. Enjoy everything from cold brews to karaoke, this is a no-frills hang out.',
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
            id: 'the-salty-nun',
            alignment: 'right',
            hidden: false,
            title: 'The Salty Nun',
            image: './images/salty-nun.jpg',
            description: '<strong><a href="https://www.yelp.com/biz/salty-nun-st-petersburg">The Salty Nun</a><br>2501 Central Ave Saint Petersburg, FL 33713</strong><br>🏳️‍🌈 “We have combined the famous breakfast restaurant, Stellas, and your favorite Gulfport local bar, Saltys. Our venue includes a varietal breakfast menu, with highlighted Stella signature menu items, and a local bar with great drinks and live music!',
            location: {
                center: [-82.66745, 27.77128],
                zoom: 20,
                pitch: 61,
                bearing: -34.80
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
            description: '<strong><a href="https://www.facebook.com/SouthernNightsTampa/">Southern Nights Tampa</a> <br> 1401 E 7th Ave, Tampa, FL, United States, 33605</strong><br>A rambunctious crowd enjoys cocktails, drag queens, go-go dancers, and renowned DJs. Southern Nights is the place to go to if you are looking for a rowdy, fun, dance and drink-filled night.',
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
        }
    ]
};
