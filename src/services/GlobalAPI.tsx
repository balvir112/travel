

import axios from 'axios';

const BASEURL = 'https://maps.googleapis.com/maps/api/place/textsearch/json?';
// const apiKey = 'AIzaSyAgqe2rfUwDrc9AeSINQOmAW7gUkQ19Emw';

const config = {
  headers: {
    'Content-Type': 'application/json',
   ' Access-Control-Allow-Origin': '*', 
  },
  'X-Google-Api-Key': 'AIzaSyAgqe2rfUwDrc9AeSINQOmAW7gUkQ19Emw',
  'X-Google-FieldMask':[
      'place.photos',
      'place.displayName',
      'places.id'
  ]
};  

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const GetPlaceDetails = (data: string): Promise<any> => {
  return axios.post(BASEURL, data, config);
};





// import axios from 'axios';

// const PROXY_URL = 'http://localhost:3001/api/place';

// export const GetPlaceDetails = async (query: string) => {
//   try {
//     const response = await axios.get(PROXY_URL, {
//       params: {
//         query: query,
//       },
//     });
//     return response.data;
//     console.log(response.data);
//   } catch (error) {
//     console.error('Error fetching place details:', error);
//     throw error;
//   }
// };



