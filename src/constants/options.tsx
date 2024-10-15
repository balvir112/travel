

export const SelectTravelList = [
    {
        id: 1,
        title: 'Just me',
        desc : 'I am travelling solo',
        icon : '✈️',
        people: '1 person'
    },
    {
        id: 2,
        title: 'With my partner',
        desc : 'I am travelling with my partner',
        icon : '👫',
        people: '2 people'
    },

    {
        id : 3,
        title: 'With my family',
        desc : 'I am travelling with my family',
        icon : '🏡',
        people: "3 people"
    },
    {
        id:4 ,
        title: 'With my friends',
        desc : 'I am travelling with my friends',
        icon : '🤝',
        people :' 4 to 10 people'
    }
]

export const SelectBudgetOptions  = [

    {
        id: 1,
        title: 'Cheap',
        desc : 'I am looking for a budget friendly trip',
        icon : '💵',
        budget: 'Cheap'
    },
    {
        id: 2,
        title: 'Standard',
        desc : 'I am looking for a standard trip',
        icon : '💰',
        budget: 'Standard'
    },

    {
        id : 3,
        title: 'Luxury',
        desc : 'I am looking for a luxury trip',
        icon : '💸',
        budget: 'Luxury'
    }
]


export const  AI_prompt = 'Generate Travel Plan for Location: {destination}, for {totalDays} Days for {traveler} with a {budget} budget,Give me a Hotels options list with Hotel Name, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing,rating, Time  travel each of the location for 3 days with each day plan with best time to visit in JSON format.'




export interface Place {
    id: number;
    name: string;
  }
export const places: Place[] = [
    { id: 1, name: "Tokyo" },
  { id: 2, name: "Barcelona" },
  { id: 3, name: "Rishikesh" },
  { id: 4, name: "Agra" },
  { id: 5, name: "London" },
  { id: 6, name: "Dublin" },
  { id: 7, name: "Udaipur" },
  { id: 8, name: "New York" },
  { id: 9, name: "Rameswaram" },
  { id: 10, name: "Srinagar" },
  { id: 11, name: "Rome" },
  { id: 12, name: "Moscow" },
  { id: 13, name: "Goa" },
  { id: 14, name: "Agra" },
  { id: 15, name: "Vienna" },
  { id: 16, name: "Munnar" },
  { id: 17, name: "Alleppey" },
  { id: 18, name: "Mumbai" },
  { id: 19, name: "Paris" },
  { id: 20, name: "Sydney" },
  { id: 21, name: "Venice" },
  { id: 22, name: "Gangtok" },
  { id: 23, name: "Bangkok" },
  { id: 24, name: "Kanyakumari" },
  { id: 25, name: "Lisbon" },
  { id: 26, name: "Berlin" },
  { id: 27, name: "Jaisalmer" },
  { id: 28, name: "Moscow" },
  { id: 29, name: "Varanasi" },
  { id: 30, name: "Cairo" },
  { id: 31, name: "Coorg" },
  { id: 32, name: "Jakarta" },
  { id: 33, name: "Chennai" },
  { id: 34, name: "Khajuraho" },
  { id: 35, name: "San Francisco" },
  { id: 36, name: "Haridwar" },
  { id: 37, name: "Krakow" },
  { id: 38, name: "Ranikhet" },
  { id: 39, name: "Singapore" },
  { id: 40, name: "Budapest" },
  { id: 41, name: "Darjeeling" },
  { id: 42, name: "Copenhagen" },
  { id: 43, name: "Jodhpur" },
  { id: 44, name: "Hampi" },
  { id: 45, name: "Los Angeles" },
  { id: 46, name: "Zagreb" },
  { id: 47, name: "Kuala Lumpur" },
  { id: 48, name: "Seattle" },
  { id: 49, name: "Amsterdam" },
  { id: 50, name: "Ooty" },
  { id: 51, name: "Buenos Aires" },
  { id: 52, name: "Athens" },
  { id: 53, name: "Diu" },
  { id: 54, name: "Chandigarh" },
  { id: 55, name: "Alibaug" },
  { id: 56, name: "Mumbai" },
  { id: 57, name: "Sofia" },
  { id: 58, name: "Spiti Valley" },
  { id: 59, name: "Rio de Janeiro" },
  { id: 60, name: "Pondicherry" },
  { id: 61, name: "Tallinn" },
  { id: 62, name: "Nashik" },
  { id: 63, name: "Petra" },
  { id: 64, name: "Baku" },
  { id: 65, name: "Montreal" },
  { id: 66, name: "Genoa" },
  { id: 67, name: "Puri" },
  { id: 68, name: "Thiruvananthapuram" },
  { id: 69, name: "Helsinki" },
  { id: 70, name: "Edinburgh" },
  { id: 71, name: "Stockholm" },
  { id: 72, name: "Varkala" },
  { id: 73, name: "Mumbai" },
  { id: 74, name: "Istanbul" },
  { id: 75, name: "Moscow" },
  { id: 76, name: "Nairobi" },
  { id: 77, name: "Manali" },
  { id: 78, name: "Pune" },
  { id: 79, name: "Oslo" },
  { id: 80, name: "Düsseldorf" },
  { id: 81, name: "Chennai" },
  { id: 82, name: "Delhi" },
  { id: 83, name: "Mumbai" },
  { id: 84, name: "Quito" },
  { id: 85, name: "Brussels" },
  { id: 86, name: "Ljubljana" },
  { id: 87, name: "Nairobi" },
  { id: 88, name: "Tbilisi" },
  { id: 89, name: "Dubai" },
  { id: 90, name: "Hanoi" },
  { id: 91, name: "Oslo" },
  { id: 92, name: "Auckland" },
  { id: 93, name: "Calgary" },
  { id: 94, name: "Santiago" },
  { id: 95, name: "Quito" },
  { id: 96, name: "Yerevan" },
  { id: 97, name: "Bucharest" },
  { id: 98, name: "Cartagena" },
  { id: 99, name: "Antwerp" },
  { id: 100, name: "Vancouver" }
  ];