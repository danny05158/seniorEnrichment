let Promise = require('bluebird');

const {Aircraft} = require('./server/db/models')
const {Country} = require('./server/db/models')


var db = require('./server/db/_db')

var data = {
  aircraft: [
    {
      make: 'Lockheed',
      model: 'Electra',
      year: 1934,
      type: 'Versatile',
      imageUrl: 'https://static.thisdayinaviation.com/wp-content/uploads/tdia//2013/06/Lockheed-Electra-10E-NR16020-by-F.X.-OGrady-1937.jpg',
      description: 'The Lockheed Model 10 Electra is an American twin-engine, all-metal monoplane airliner developed by the Lockheed Aircraft Corporation in the 1930s to compete with the Boeing 247 and Douglas DC-2. The type gained considerable fame as one was flown by Amelia Earhart on her ill-fated around-the-world expedition in 1937.',
      cost: 1.6,
      country: {
        name: 'United States',
        GFI: 6.0,
        flagUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png'
      }
    },
    {
      make: 'Lockheed',
      model: 'Vega',
      year: 1927,
      type: 'Transport',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Lockheed_Vega_5b_Smithsonian.jpg',
      description: 'The Lockheed Vega is an American six-passenger high-wing monoplane airliner built by the Lockheed Corporation starting in 1927. It became famous for its use by a number of record-breaking pilots who were attracted to the rugged and very long-range design. Amelia Earhart became the first woman to fly the Atlantic single-handed in one, and Wiley Post used his to prove the existence of the jet stream after having flown around the world twice.',
      cost: 1.5,
      country: {
        name: 'United States',
        GFI: 6.0,
        flagUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png'
      }
    },
    {
      make: 'Lockheed',
      model: 'P-2 Neptune',
      year: 1945,
      type: 'Reconoissance',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/P2V-7_VP-7_1954.jpg/1200px-P2V-7_VP-7_1954.jpg',
      description: 'The Lockheed P-2 Neptune (designated P2V by the United States Navy prior to September 1962) was a Maritime patrol and anti-submarine warfare (ASW) aircraft. It was developed for the US Navy by Lockheed to replace the Lockheed PV-1 Ventura and PV-2 Harpoon, and was replaced in turn by the Lockheed P-3 Orion. Designed as a land-based aircraft, the Neptune never made a carrier landing, although a small number of aircraft were converted and deployed as carrier-launched, stop-gap nuclear bombers which would have to ditch or recover at land bases. The type was successful in export and saw service with several armed forces.',
      cost: 2.0,
        country: {
        name: 'United States',
        GFI: 6.0,
        flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/P-2H_VP-56_1963.jpg/1200px-P-2H_VP-56_1963.jpg'
      }
    },
    {
      make: 'Boeing',
      model: 'B-52 Stratofortress',
      year: 1952,
      type: 'Bomber',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/USAF_B-52_participating_in_RIMPAC_2010.jpg/1200px-USAF_B-52_participating_in_RIMPAC_2010.jpg',
      description: 'The Boeing B-52 Stratofortress is an American long-range, subsonic, jet-powered strategic bomber. The B-52 was designed and built by Boeing, which has continued to provide support and upgrades. It has been operated by the United States Air Force (USAF) since the 1950s. The bomber is capable of carrying up to 70,000 pounds (32,000 kg) of weapons,[5] and has a typical combat range of more than 8,800 miles (14,080 km) without aerial refueling.',
      cost: 2.3,
      country: {
        name: 'United States',
        GFI: 6.0,
        flagUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png'
      }
    },
    {
      make: 'Boeing',
      model: 'YB-9',
      year: 1931,
      type: 'Bomber',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Boeing_Y1B-9_test_flight_USAF_p29.jpg/1200px-Boeing_Y1B-9_test_flight_USAF_p29.jpg',
      description: `The Boeing YB-9 was the first all-metal monoplane bomber aircraft designed for the United States Army Air Corps. The YB-9 was an enlarged alteration of Boeing's Model 200 Commercial Transport.`,
      cost: 1.8,
      country: {
        name: 'United States',
        GFI: 6.0,
        flagUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png'
      }
    },
    {
      make: 'Northrop',
      model: 'F-5',
      year: 1959,
      type: 'Attack',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Chile_Air_Force_Northrop_F-5E_Tigre_III_Lofting-1.jpg',
      description: `The Northrop F-5A and F-5B Freedom Fighter and the F-5E and F-5F Tiger II are part of a supersonic light fighter family, initially designed in the late 1950s by Northrop Corporation. Being smaller and simpler than contemporaries such as the McDonnell Douglas F-4 Phantom II, the F-5 cost less to both procure and operate, making it a popular export aircraft. The F-5 started life as a privately funded light fighter program by Northrop in the 1950s. The design team wrapped a small, highly aerodynamic fighter around two compact and high-thrust General Electric J85 engines, focusing on performance and low cost of maintenance. Though primarily designed for the day air superiority role, the aircraft is also a capable ground-attack platform. The F-5A entered service in the early 1960s. During the Cold War, over 800 were produced through 1972 for U.S. allies. Though the USAF had no acknowledged need for a light fighter, it did procure roughly 1,200 Northrop T-38 Talon trainer aircraft, which were directly based on the F-5A.`,
      cost: 1.2,
      country: {
        name: 'United States',
        GFI: 6.0,
        flagUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png'
      }
    },
    {
      make: 'Saab',
      model: '37 Viggen',
      year: 1967,
      type: 'Attack',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Saab_37_Viggen_37301_001.jpg',
      description: `The Saab 37 Viggen ("Thunderbolt")[Nb 1][3] is a retired Swedish single-seat, single-engine, short-medium range combat aircraft. Development work on the type was initiated at Saab in 1952 and, following the selection of a radical delta wing configuration, the resulting aircraft performed its first flight on 8 February 1967 and entered service in 21 June 1971. The Viggen holds the distinction of being the first canard design to be produced in quantity.[4]`,
      cost: 3.0,
      country: {
        name: 'Sweden',
        GFI: 1.0,
        flagUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/1200px-Flag_of_Sweden.svg.png'
      }
    },
    {
      make: 'Aero',
      model: 'A.11',
      year: 1925,
      type: 'Reconoissance',
      imageUrl: 'http://www.leteckabadatelna.cz/uploads/P%C5%99edv%C3%A1le%C4%8Dn%C3%A9/A-11%20Troubelice/AB%20111%20Brand%C3%BDs/12081701AAA.jpg',
      description: `The Aero A.11 was a biplane light bomber and reconnaissance aircraft built in Czechoslovakia between the First and Second World Wars. It formed the basis for a large number of other Czechoslovakian military aircraft of the inter-war period. Around 250 were built, with some remaining in service at the outbreak of World War II.`,
      cost: 1.8,
      country: {
        name: 'Czechoslovakia',
        GFI: 1.0,
        flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Flag_of_Czechoslovakia.png/1200px-Flag_of_Czechoslovakia.png'
      }
    },
    {
      make: 'Bristol',
      model: 'Belvedere',
      year: 1958,
      type: 'Transport',
      imageUrl: 'http://www.leteckabadatelna.cz/uploads/P%C5%99edv%C3%A1le%C4%8Dn%C3%A9/A-11%20Troubelice/AB%20111%20Brand%C3%BDs/12081701AAA.jpg',
      description: `The Bristol Type 192 Belvedere was a British twin-engine, tandem rotor military helicopter built by the Bristol Aeroplane Company. It was designed by Raoul Hafner for a variety of transport roles including troop transport, supply dropping and casualty evacuation. It was operated by the Royal Air Force (RAF) from 1961 to 1969. The Belvedere was Britain's only tandem rotor helicopter to enter production, and one of the few not built by Boeing or Piasecki.`,
      cost: 1.4,
      country: {
        name: 'United Kingdom',
        GFI: 3.0,
        flagUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1280px-Flag_of_the_United_Kingdom.svg.png'
      }
    },
    {
      make: 'Blackburn',
      model: 'Buccaneer',
      year: 1958,
      type: 'Attack',
      imageUrl: 'https://i.pinimg.com/originals/e7/57/bd/e757bddf27507f5dd964b6f2a13b6340.jpg',
      description: `The Blackburn Buccaneer was a British carrier-borne attack aircraft designed in the 1950s for the Royal Navy (RN). Designed and initially produced by Blackburn Aircraft at Brough, it was later officially known as the Hawker Siddeley Buccaneer when Blackburn became a part of the Hawker Siddeley Group, but this name is rarely used.`,
      cost: 2.0,
      country: {
        name: 'United Kingdom',
        GFI: 3.0,
        flagUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1280px-Flag_of_the_United_Kingdom.svg.png'
      }
    },
    {
      make: 'Spitfire',
      model: 'Supermarine',
      year: 1936,
      type: 'Attack',
      imageUrl: 'https://www.virginexperiencedays.co.uk/content/img/product/large/PSPF20.jpg',
      description: `The Supermarine Spitfire is a British single-seat fighter aircraft used by the Royal Air Force and other Allied countries before, during and after World War II. Many variants of the Spitfire were built, using several wing configurations, and it was produced in greater numbers than any other British aircraft. It was also the only British fighter produced continuously throughout the war. The Spitfire continues to be popular among enthusiasts; about 54 remain airworthy, and many more are static exhibits in aviation museums throughout the world.`,
      cost: 1.9,
      country: {
        name: 'United Kingdom',
        GFI: 3.0,
        flagUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1280px-Flag_of_the_United_Kingdom.svg.png'
      }
    },
    {
      make: 'Super Étendard',
      model: 'Dassault-Breguet',
      year: 1974,
      type: 'Attack',
      imageUrl: 'http://3.bp.blogspot.com/_rUHyHq68ak0/TJIQ4A_OmZI/AAAAAAABERI/3_V_D_fpp1Y/s1600/superEtendard-bia.jpg',
      description: `The Dassault-Breguet Super Étendard (Étendard is French for "battle flag", cognate to English "standard") is a French carrier-borne strike fighter aircraft designed by Dassault-Breguet for service with the French Navy.
      The aircraft is an advanced development of the Étendard IVM, which it replaced. The Super Étendard first flew in October 1974 and entered French service in June 1978. French Super Étendards have served in several conflicts such as the Kosovo war, the war in Afghanistan and the military intervention in Libya.`,
      cost: 2.4,
      country: {
        name: 'France',
        GFI: 1.0,
        flagUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png'
      }
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
      GFI: 1.0,
      flagUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png'
    }
  ]
};

db
  .sync()
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
    return null; // silences bluebird warning about using non-returned promises inside of handlers
  });
