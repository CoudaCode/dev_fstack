import { createContext, useMemo, useState, useContext }from "react"
import { getPosts, insertPosts } from "../service"

const AppContext = createContext()

const {Provider} = AppContext


const AppProvider = ({children}) => {

    const [posts, setPosts] = useState([])
    // Fonctions pour afficher les elements de la bd
    const fetchPosts = ()=>{
           getPosts().then(setPosts)
    } 

    // Fonction addPosts pour ajouter un nouveau posts
        const addPosts = (body)=>{
            insertPosts(body).then(setPosts)
        }

    // Creation d'un states pour un memoriser les valeurs
   const value = useMemo(()=>{
        return {
            posts,
            fetchPosts,
            addPosts
        } 
    }, [posts, fetchPosts, addPosts])

  
    return <Provider value={value}>{children}</Provider>

}

export const useAppContext = ()=>{
        return useContext(AppContext)
}
export default AppProvider