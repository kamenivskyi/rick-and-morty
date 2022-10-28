export interface InitialResponse {
  info?: {
    prev: null;
    next: null;
    pages: number;
    count: number;
  };
  message?: string;
  error?: any;
  results?: any[];
}

export async function fetchData<T>(url: string): Promise<T> {
  const request = await fetch(`https://rickandmortyapi.com/api${url}`);
  return await request.json();
}
