const API_ENDPOINT = 'https://meek-gumption-c04779.netlify.app/vacations';

type APIPart = 'reviews' | 'recommendations' | 'rooms';

export const fetchAPI = (part: APIPart, delay: number) => fetch(API_ENDPOINT + '?part=' + part + '&delay=' + delay);
