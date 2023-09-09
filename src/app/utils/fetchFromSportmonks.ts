
const token = process.env.API_KEY;

type Args = {
    query: string;
    include?: string
}

const fetchFromSportmonks = async ({ query, include }: Args) => {
    const path = `https://api.sportmonks.com/v3/football/${query}?api_token=${token}&include=${include === undefined ? '': include}`;

    const response = await fetch(path)
    const res = await response.json();
    console.log(res.data)
    return res.data;
}

export { fetchFromSportmonks };