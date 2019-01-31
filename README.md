# Senior Enrichment Project

### The Premise
 Design a website for aircraft fanatics 🤓 and create a RESTful API that allows you to manage these aircrafts!


### The tools

Use at least Sequelize, Express, React, Redux, and React-Redux when creating this app. You can incorporate any additional libraries or tools you wish.


## Getting started

1. Fork and clone this repo
2. *Set the name of your project in `package.json`*. The skeleton intentionally ships with an invalid name.
3. `npm install`
4. Start the build and the application processes with: `npm run start:dev`
5. If you navigate to the URL you should see some UI already :) [We already have some connection code to get you started]

### Routes
```
GET
- all countries
  - populated with aircrafts
- a country by id
  - populated with aircrafts
  - excluding the description of the aircraft
- top 5 countries
  - by GFI (0 is strongest (top), 10 is weakest (bottom))
  - sorted strongest to weakest
- all aircrafts
  - populated with the name of the country that owns each aircraft
  - excluding the descriptions
- an aircraft by id
  - populated with only the name of the country that owns the aircraft
```

```
POST
- new country
- new aircraft
```

```
PUT
- update country info for one country
- update aircraft info for one aircraft
```

```
DELETE
- a country
  - deletes all aircrafts associated with the country
- an aircraft
```


