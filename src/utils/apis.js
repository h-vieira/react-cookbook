import * as Constant from './constants';

const getData = async (query) => {
  const res = await fetch(Constant.CTFULL_GRAPHQL_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Constant.CTFULL_ACCESS_TOKEN}`
      },
      body: JSON.stringify({ query }),
    })
  return await res.json()
}
 
export default getData;
