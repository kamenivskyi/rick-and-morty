export async function fetchData(url: string): Promise<any> {
  try {
    const request = await fetch(`https://rickandmortyapi.com/api${url}`);

    return await request.json();
  } catch (e) {
    console.log("Error occurred: ", e);
  }
}
