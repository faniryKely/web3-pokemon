export const API_BASE_URL = "https://pokeapi.co/api/v2/pokemon";

type ListQuery = {
  offset: number,
  limit: number
}

export function createApiUrl({ offset, limit }: ListQuery) {
  return `${API_BASE_URL}?offset=${offset}&limit=${limit}`;
}
