// const db = require('./server/db/_db')
const {Aircraft} = require('./server/db/models')
const {Country} = require('./server/db/models')

//new
const {db} = require('./server/db/_db')

const aircraftList = [{
  make: 'Lockheed Martin',
  model: 'SR-71 Blackbird',
  year: 1990,
  type: 'Reconoissance',
  cost: 1200,
  imageUrl: '/images/SR-71.jpg',
  description: 'The fastest plane the world has seen',
  countryId: 1,
}, {
  make: 'Lockheed Martin',
  model: 'U-2',
  year: 1991,
  type: 'Reconoissance',
  cost: 2100,
  imageUrl: '/images/U-2.jpg',
  description: 'This plane will do some damage',
  countryId: 2
}, {
  make: 'Boeing',
  model: 'B-52 Stratofortress',
  year: 1995,
  type: 'Bomber',
  cost: 35100,
  imageUrl: '/images/B-52.jpg',
  description: 'The Beast with all its glory',
  countryId: 2
}, {
  make: 'Boeing',
  model: 'B-29 Superfortresss',
  year: 2000,
  type: 'Bomber',
  cost: 2500,
  imageUrl: '/images/B-29.jpg',
  description: 'Flies like a fly',
  countryId: 4
}, {
  make: 'Northrup Grumman',
  model: 'F6F Hellcat',
  year: 1942,
  type: 'Attack',
  cost: 500,
  imageUrl: '/images/F6F.jpg',
  description: 'Buy it as soon as possible',
  countryId: 2
}, {
  make: 'Northrup Grumman',
  model: 'A-10 Warthog',
  year: 1980,
  type: 'Attack',
  cost: 5000,
  imageUrl: '/images/A-10.jpg',
  description: 'You wont look back once you buy this bad boy',
  countryId: 1
} ,{
    make: 'Northrup 755',
    model: 'A-10',
    year: 1980,
    type: 'Attack',
    cost: 5000,
    imageUrl: '/images/Sub748.jpg',
    description: 'You wont look back once you buy this bad boy',
    countryId: 3
}, {
    make: 'Grumman',
    model: 'Warthog',
    year: 1986,
    type: 'Attack',
    cost: 5000,
    imageUrl: '/images/Boeing754.jpg',
    description: 'You wont look back once you buy this bad boy',
    countryId: 4
} , {
      make: 'Grumman',
      model: 'A-Warthog',
      year: 2000,
      type: 'Attack',
      cost: 5000,
      imageUrl: '/images/F-16.jpg',
      description: 'You wont look back once you buy this bad boy',
      countryId: 1
} , {
  make: 'Grumman',
  model: 'A1600-Warthog',
  year: 2000,
  type: 'Attack',
  cost: 5000,
  imageUrl: '/images/Boeing754.jpg',
  description: 'You wont look back once you buy this bad boy',
  countryId: 2
} , {
  make: 'Lockheed',
  model: 'Warthog',
  year: 2016,
  type: 'Attack',
  cost: 5000,
  imageUrl: '/images/Lockheed Martin 2000.jpg',
  description: 'You wont look back once you buy this bad boy',
  countryId: 2
} , {

  make: 'Lockheed-2100',
  model: 'Warthog',
  year: 2016,
  type: 'Attack',
  cost: 5000,
  imageUrl: '/images/sweeden.jpg',
  description: 'You wont look back once you buy this bad boy',
  countryId: 3
}];

const countriesList = [{
  name: 'South Africa',
  GFI: 3.2,
  flagUrl: '/images/southAfrica.png'
}, {
  name: 'Australia',
  GFI: 6.8,
  flagUrl: '/images/australia.png'
}, {
  name: 'Egypt',
  GFI: 3.1,
  flagUrl: '/images/egypt.png'
}, {
  name: 'UK',
  GFI: 8,
  flagUrl: '/images/uk.png'
}, {
  name: 'USA',
  GFI: 10,
  flagUrl: '/images/us.png'
}, {
  name: 'Argentina',
  GFI: 2.30,
  flagUrl: '/images/argentina.png'
}, {
  name: 'Saudi Arabia',
  GFI: 5.2,
  flagUrl: '/images/saudi.jpg'
}, {
  name: 'Canada',
  GFI: 6.5,
  flagUrl: '/images/canada.jpg'
}];


const seed = () =>
  Promise.all(countriesList.map(country =>
    Country.create(country))
  )
  .then(() =>
  Promise.all(aircraftList.map(aircraft =>
    Aircraft.create(aircraft))
  ))

  seed()
  .then(() => db.close())
  .catch(err => console.log('the seed error:', err))
