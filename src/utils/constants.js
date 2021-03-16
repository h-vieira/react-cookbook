//https://graphql.contentful.com/content/v1/spaces/kp6wmoapi8iy/explore?access_token=rj5s9hjur3wHY27I5p7NROBQbZp4GcxQcEMQ1iThM44

export const CTFULL_GRAPHQL_API = "https://graphql.contentful.com/content/v1/spaces/kp6wmoapi8iy/";
export const CTFULL_ACCESS_TOKEN = "rj5s9hjur3wHY27I5p7NROBQbZp4GcxQcEMQ1iThM44";

// gets all categories
export const getCategories = 
`
  {
    categoryCollection{
      items{
        categoryTitle
      }
    }
  }`;

// gets all recipes
export const getRecipes = `
  {
    recipeCollection {
      items {
        title
        author
      }
    }
  }`;

// gets singel recipe by title
export const getRecipeByTitle = (title) =>{ 
  return (
    `{
      recipeCollection (where:{ title: "${title}"}) {
        items {
          title
          author
          sys{id}
        }
      }
    }`
  );
};

// gets the id of recipes in category
export const getCategoryRecipes = (category) =>{ 
  return (
    `{
      categoryCollection (where:{ categoryTitle: "${ category }"}) {
        items {
          categoryRecipesCollection {
            items {
              sys{id}
            }
          }
        }
      }
    }`
  );
};

// gets recipe with defined id 
export const getRecipesByID = (recipeID) => { 
  return (`{recipeCollection(where : {sys : {id: "${recipeID}"}}) {items {title sys{id}}}}`);};

export const getRecipeByID = (recipeID) => {
  return (
    `
    {
      recipe(id :"${recipeID}"){
        image{url}
        title
        ingredients
        time
        description{json}
        author
        views
        rating
      }
    }
    `
  )
};

// we retreave as many as we need
 export const getMostViewed = (many) => {
  return (
    `{
      recipeCollection(order :views_DESC, limit:${many}) {
        items {
          title
          author
          rating
          image{url}
          sys{id}
        }
      }
    }`
  );
};
export default getMostViewed;