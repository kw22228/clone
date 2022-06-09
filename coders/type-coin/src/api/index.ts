import axios from 'axios';

const BASE_URL = 'https://api.coinpaprika.com/v1';

const getQuery = (path: string) => `${BASE_URL}/${path}`;

export async function fetchData(path: string) {
    const url = getQuery(path);
    const response = await axios.get(url);

    return response.data;
}

export async function fetchDataSlice(path: string, slice: number) {
    const url = getQuery(path);
    const response = await axios.get(url);
    return response.data.slice(0, slice);
}

// export async function multiFetchData(fetchList: string[]) {
//     axios.all(fetchList.map(f => axios.get(getQuery(f)))).then(
//         axios.spread((...args) => {
//             return args;
//         })
//     );
// }
