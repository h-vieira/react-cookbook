

const fetching = async (query) => {
  const res = await fetch('https://graphql.contentful.com/content/v1/spaces/kp6wmoapi8iy/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer bIbtEXIorbzZ7H5wMzG_Erhj_b_SnLFCQdLPJ2bKMfk"
      },
      body: JSON.stringify({ query }),
    })
  
  
  return await res.json()
  
}

    export default fetching
