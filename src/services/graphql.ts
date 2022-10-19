import axios from 'axios';
import { Cookies } from 'react-cookie';

export function setupGraphQLClient() {
  const cookies = new Cookies();

  const api = axios.create({
    baseURL: 'https://us-east1-fs-homol-vagas.cloudfunctions.net/graphql',
    headers: {
      Authorization: `Bearer ${cookies.get('access_token')}`,
    },
  });

  return api;
}
