import { useMemo } from "react"

export const uesSortedPosts = (posts, sort) => {
    
    const sortedPosts = useMemo(() => {
        console.log('Отработала функция getSortedPosts')
        if(sort) {
          return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts;
    
      }, [sort, posts])

      return sortedPosts;
}



export const usePosts = (posts, sort, query) => {
    const sortedPosts = uesSortedPosts(posts, sort);

    const sortedAndSearchPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
      }, [query, sortedPosts])

      return sortedAndSearchPosts;
}