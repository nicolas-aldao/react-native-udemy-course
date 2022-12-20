import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.harvardartmuseums.org/Image?apikey=a1ac0a13-0a4b-4c14-a8ca-69995303988c',
  headers: {
    'X-RapidAPI-Key': '326a35fdacmsh0a571adb9396777p12cae9jsn8ad278e30f84',
    'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
  },
};

export const apiCall = async () => {
  try {
    const res = await axios.get(
      'https://api.harvardartmuseums.org/Image?apikey=a1ac0a13-0a4b-4c14-a8ca-69995303988c',
      {
        headers: {
          'X-RapidAPI-Key':
            '326a35fdacmsh0a571adb9396777p12cae9jsn8ad278e30f84',
          'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
        },
      },
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const apiDigimon = async (id: string) => {
  try {
    const res = await axios.get('https://digi-api.com/api/v1/digimon/' + id);
    return res;
  } catch (err) {
    console.log(err);
  }
};
