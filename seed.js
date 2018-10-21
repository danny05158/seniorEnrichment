let Promise = require('bluebird');
let db = require('./server/db/_db')

var data = {
  aircraft: [
    {
      make: 'Lockheed',
      model: 'Electra',
      year: 1934,
      type: 'Versatile',
      imageUrl: 'https://static.thisdayinaviation.com/wp-content/uploads/tdia//2013/06/Lockheed-Electra-10E-NR16020-by-F.X.-OGrady-1937.jpg',
      description: 'The Lockheed Model 10 Electra is an American twin-engine, all-metal monoplane airliner developed by the Lockheed Aircraft Corporation in the 1930s.',
      cost: 1.6
    },
    {
      make: 'Lockheed',
      model: 'Vega',
      year: 1927,
      type: 'Transport',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Lockheed_Vega_5b_Smithsonian.jpg',
      description: 'The Lockheed Vega is an American six-passenger high-wing monoplane airliner built by the Lockheed Corporation starting in 1927.',
      cost: 1.5
    },
    {
      make: 'Lockheed',
      model: 'P-2 Neptune',
      year: 1945,
      type: 'Reconoissance',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/P2V-7_VP-7_1954.jpg/1200px-P2V-7_VP-7_1954.jpg',
      description: 'The Lockheed P-2 Neptune (designated P2V by the United States Navy prior to September 1962) was a Maritime patrol and anti-submarine warfare (ASW) aircraft.',
      cost: 2.0
    },
    {
      make: 'Boeing',
      model: 'B-52 Stratofortress',
      year: 1952,
      type: 'Bomber',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/USAF_B-52_participating_in_RIMPAC_2010.jpg/1200px-USAF_B-52_participating_in_RIMPAC_2010.jpg',
      description: 'The Boeing B-52 Stratofortress is an American long-range, subsonic, jet-powered strategic bomber. The B-52 was designed and built by Boeing, which has continued to provide support and upgrades.',
      cost: 2.3
    },
    {
      make: 'Boeing',
      model: 'YB-9',
      year: 1931,
      type: 'Bomber',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Boeing_Y1B-9_test_flight_USAF_p29.jpg/1200px-Boeing_Y1B-9_test_flight_USAF_p29.jpg',
      description: 'The Boeing YB-9 was the first all-metal monoplane bomber aircraft designed for the United States Army Air Corps.',
      cost: 1.8
    },
    {
      make: 'Northrop',
      model: 'F-5',
      year: 1959,
      type: 'Attack',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Chile_Air_Force_Northrop_F-5E_Tigre_III_Lofting-1.jpg',
      description: `The Northrop F-5A and F-5B Freedom Fighter and the F-5E and F-5F Tiger II are part of a supersonic light fighter family, initially designed in the late 1950s by Northrop Corporation.`,
      cost: 1.2
    },
    {
      make: 'Saab',
      model: '37 Viggen',
      year: 1967,
      type: 'Attack',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Saab_37_Viggen_37301_001.jpg',
      description: `The Saab 37 Viggen ("Thunderbolt")[Nb 1][3] is a retired Swedish single-seat, single-engine, short-medium range combat aircraft.`,
      cost: 3.0
    },
    {
      make: 'Aero',
      model: 'A.11',
      year: 1925,
      type: 'Reconoissance',
      imageUrl: 'http://www.leteckabadatelna.cz/uploads/P%C5%99edv%C3%A1le%C4%8Dn%C3%A9/A-11%20Troubelice/AB%20111%20Brand%C3%BDs/12081701AAA.jpg',
      description: `The Aero A.11 was a biplane light bomber and reconnaissance aircraft built in Czechoslovakia between the First and Second World Wars.`,
      cost: 1.8
    },
    {
      make: 'Bristol',
      model: 'Belvedere',
      year: 1958,
      type: 'Transport',
      imageUrl: 'http://www.leteckabadatelna.cz/uploads/P%C5%99edv%C3%A1le%C4%8Dn%C3%A9/A-11%20Troubelice/AB%20111%20Brand%C3%BDs/12081701AAA.jpg',
      description: `The Bristol Type 192 Belvedere was a British twin-engine, tandem rotor military helicopter built by the Bristol Aeroplane Company.`,
      cost: 1.4
    },
    {
      make: 'Blackburn',
      model: 'Buccaneer',
      year: 1958,
      type: 'Attack',
      imageUrl: 'https://i.pinimg.com/originals/e7/57/bd/e757bddf27507f5dd964b6f2a13b6340.jpg',
      description: `The Blackburn Buccaneer was a British carrier-borne attack aircraft designed in the 1950s for the Royal Navy (RN).`,
      cost: 2.0
    }
  ],
  country: [
    {
      name: 'United States',
      GFI: 6.0,
      flagUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png'
    },
    {
      name: 'United Kingdom',
      GFI: 2.0,
      flagUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1280px-Flag_of_the_United_Kingdom.svg.png'
    },
    {
      name: 'Sweden',
      GFI: 1.0,
      flagUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/1200px-Flag_of_Sweden.svg.png'
    },
    {
      name: 'Czechoslovakia',
      GFI: 1.0,
      flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Flag_of_Czechoslovakia.png/1200px-Flag_of_Czechoslovakia.png'
    },
    {
      name: 'France',
      GFI: 15.0,
      flagUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png'
    }
  ]
};

db
  .sync({force: true})
  .then(function() {
    console.log("Old data dropped, and new data inserted");
    return Promise.map(Object.keys(data), function(name) {
      return Promise.map(data[name], function(item) {
        return db.model(name).create(item);
      });
    });
  })
  .then(function() {
    console.log("Finished inserting data");
  })
  .catch(function(err) {
    console.error("there was a problem", err, err.stack);
  })
  .finally(function() {
    db.close();
    console.log("connection closed");
    return null;
  });
