import React, { createContext, useState } from 'react'

export const BlogContext = createContext()

const BlogState = ({ children }) => {

    const [recipeCategory, setRecipeCategory] = useState()

    return (
        <BlogContext.Provider
        value={{recipeCategory, setRecipeCategory}}
        >
        {children}
        </BlogContext.Provider>
    )

}

export default BlogState