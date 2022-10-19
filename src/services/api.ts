/* eslint-disable eqeqeq */
/* eslint-disable no-unused-expressions */
import axios from 'axios';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export function setupAPIClient() { 
  let apiURL; 
  process.env.NODE_ENV == 'development' ? 
  apiURL = 'https://fs-homol-vagas.ue.r.appspot.com/api/v1' :
  apiURL= 'https://fs-vagas.ue.r.appspot.com/api/v1' ;  

  const api = axios.create({
    baseURL: apiURL,
    headers: {
      Authorization: `Bearer ${cookies.get('access_token')}`,
    },
  });

  return api;
}
