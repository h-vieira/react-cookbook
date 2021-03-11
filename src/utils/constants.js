export const CTFULL_DATA_URL = "https://graphql.contentful.com/content/v1/spaces/kp6wmoapi8iy/explore?access_token=rj5s9hjur3wHY27I5p7NROBQbZp4GcxQcEMQ1iThM44";


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
        }
      }
    }`
  );
};

// gets the id of recipes in category
export const getCategoryRecipes = (category) =>{ 
  return (
    `{
      categoryCollection (where:{ categoryTitle: "${category}"}) {
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
  return (
    `{
      recipeCollection(where: {sys: {id: "${recipeID}"}}) {
        items {
          title
        }
      }
    }`
  );
};

// we retreave as many as we need
export const getMostViewed = (many) => {
  return (
    `{
      recipeCollection(order :views_DESC, limit:${many}) {
        items {
          title
          author
          views
          rating
        }
      }
    }`
  );
}