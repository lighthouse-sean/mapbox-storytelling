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
            title: '',
            image: './images/logo-horizontal.svg',
            description: 'An interactive guide of all the best places to kiki in Tampa Bay.',
            location: {
                center: [-82.63901, 27.77097],
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
            title: 'FLORIDIAN SOCIAL CLUB',
            image: './images/floridian-social.webp',
            description: '<strong><a href="https://www.thefloridiansocial.com/">Floridian Social Club</a><br>687 Central Avenue N<br/>St. Petersburg, FL 33701</strong><br>🎺Art Deco music venue in the heart of St. Pete',
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
            title: '🏳️‍🌈      ENIGMA',
            image: './images/enigma.webp',
            description: '<strong><a href="https://enigmastpete.com/">Enigma St. Pete</a> <br>1110 Central Avenue<br/>St. Petersburg, FL 33705</strong><br>Lively, gay-friendly lounge with several rooms, a cozy dance floor, drag shows & sidewalk tables.',
            location: {
                center: [-82.65023, 27.77107],
                zoom: 19,
                pitch: 10,
                bearing: 60
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
            title: '🏳️‍🌈      COCKTAIL ST PETE',
            image: './images/wet-spot.webp',
            description: '<strong><a href="https://cocktailstpete.com">Cocktail St. Pete</a><br>2355 Central Avenue<br/>St. Petersburg, FL 33713</strong><br>St. Petes newest cocktail experience, Cocktail where you will get stiff drinks, hard liquor and raging good times.',
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
            id: 'the-salty-nun',
            alignment: 'left',
            hidden: false,
            title: '🏳️‍🌈      THE SALTY NUN',
            image: './images/salty-nun.webp',
            description: '<strong><a href="https://www.yelp.com/biz/salty-nun-st-petersburg">The Salty Nun</a><br>2501 Central Avenue<br/>St. Petersburg, FL 33713</strong><br>We have combined the famous breakfast restaurant, Stellas, and your favorite Gulfport local bar, Saltys. Our venue includes a varietal breakfast menu, with highlighted Stella signature menu items, and a local bar with great drinks and live music!',
            location: {
                center: [-82.66745, 27.77128],
                zoom: 19.5,
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
            id: 'the-garage',
            alignment: 'right',
            hidden: false,
            title: '🏳️‍🌈      GRAND CENTRAL GARAGE',
            image: './images/garage.webp',
            description: '<strong><a href="https://www.facebook.com/FukTheGarage">Grand Central Garage</a><br>2729 Central Avenue<br/>St. Petersburg, FL 33713</strong><br>A dive bar to find St. Petes older crowd in the historic Kenwood area, locals end up here for a mellow good time. Enjoy everything from cold brews to karaoke, this is a no-frills hang out.',
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
            id: 'lucky-star-lounge',
            alignment: 'left',
            hidden: false,
            title: '🏳️‍🌈      LUCKY STAR LOUNGE',
            image: './images/lucky-star-lounge.webp',
            description: '<strong><a href="https://www.yelp.com/biz/lucky-star-lounge-st-petersburg">Lucky Star Lounge</a><br>2760 Central Avenue<br/>St. Petersburg, FL 33712</strong><br>We have combined the famous breakfast restaurant, Stellas, and your favorite Gulfport local bar, Saltys. Our venue includes a varietal breakfast menu, with highlighted Stella signature menu items, and a local bar with great drinks and live music!',
            location: {
                center: [-82.671054, 27.77077],
                zoom: 20,
                pitch: 38,
                bearing: 65.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'showbar-ybor',
            alignment: 'right',
            hidden: false,
            title: '🏳️‍🌈      SHOWBAR YBOR',
            image: './images/showbar-ybor.webp',
            description: '<strong><a href="https://www.showbarybor.com/">Showbar Ybor</a> <br/>1613 E 7th Avenue<br/>Tampa, FL 33605</strong><br/>An 8,000 square foot dueling piano bar with both indoor and outdoor seating space. The concept has debuted a Sunday Drag Brunch event, and will continue to serve as the “Happiest Place on 7th Avenue”.',
            location: {
                center: [-82.44097, 27.96007],
                zoom: 19.42,
                pitch: 45,
                bearing: 20.80
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
            title: '🏳️‍🌈      BRADLEYS ON 7th',
            image: './images/bradleys.webp',
            description: '<strong><a href="https://bradleyson7th.com/">Bradleys on 7th</a> <br/>1510 E 7th Avenue<br/>Tampa, FL 33605</strong><br/>Friendly gay bar with great drag shows, where everyone is welcome with great drinks and a friendly staff!',
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
            title: '🏳️‍🌈      SOUTHERN NIGHTS TAMPA',
            image: './images/southern.webp',
            description: '<strong><a href="https://www.facebook.com/SouthernNightsTampa/">Southern Nights Tampa</a> <br> 1401 E 7th Avenue<br/>Tampa, FL, United States, 33605</strong><br>A rambunctious crowd enjoys cocktails, drag queens, go-go dancers, and renowned DJs. Southern Nights is the place to go to if you are looking for a rowdy, fun, dance and drink-filled night.',
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
            alignment: 'right',
            hidden: false,
            title: 'THE RITZ YBOR',
            image: './images/ritz-ybor.webp',
            description: '<strong><a href="https://theritzybor.com/">The Ritz Ybor</a> <br/>1503 E 7th Avenue<br/>Tampa, FL 33605</strong><br/>The RITZ Ybor is Tampas most sought-after venue for live music and special events, and serves as the official home and headquarters of Sunset Events.',
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
            id: 'white-lie',
            alignment: 'left',
            hidden: false,
            title: 'WHITE LIE YBOR',
            image: './images/white-lie.webp',
            description: '<strong><a href="https://www.facebook.com/whitelieybor/">White Lie Ybor</a> <br/>1710 E 7th Avenue<br/>Tampa, FL 33605</strong><br/>The RITZ Ybor is Tampas most sought-after venue for live music and special events, and serves as the official home and headquarters of Sunset Events.',
            location: {
                center: [-82.44012, 27.96037],
                zoom: 19.75,
                pitch: 54,
                bearing: -28
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'johnsons',
            alignment: 'right',
            hidden: false,
            title: '🏳️‍🌈      JOHNSONS TAMPA',
            image: './images/johnsons.webp',
            description: '<strong><a href="https://johnsonstampa.com/">Johnsons Tampa</a> <br/>2606 North Armenia Avenue<br/>Tampa, FL, 33607</strong><br/>The premier gay strip club in Tampa Bay. Offering a vibrant, inclusive atmosphere, featuring some of the most talented and diverse performers in the industry. The club provides a safe, engaging space for the LGBTQ+ community and allies to enjoy top-tier adult entertainment.',
            location: {
                center: [-82.48509, 27.96418],
                zoom: 20,
                pitch: 48.63,
                bearing: -29.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'castle-ybor',
            alignment: 'left',
            hidden: false,
            title: 'CASTLE YBOR',
            image: './images/castle-ybor.webp',
            description: '<strong><a href="http://castleybor.com/">Castle Ybor</a> <br/>004 N 16th St<br/>Tampa, FL 33605</strong><br/>A multilevel bar and dance club with music from new wave to pop & a crowd dressed from Goth to fetish. The Castle is one of Ybors best and most iconic venues, serving as a bar and a nightclub. The population is broad and eclectic, and guests are encouraged to dress up for several themed nights, with an exciting theme each day. The music is equally diverse, ranging from goth and indie to alternative and mainstream. The décor of the Castle is dungeon-like, gloomy, and industrial. It offers various rooms and is highly welcoming to LGBT people.',
            location: {
                center: [-82.44176, 27.96186],
                zoom: 20,
                pitch: -28,
                bearing: 54
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
