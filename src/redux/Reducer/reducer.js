 import { GET_DOGS, GET_FAVORITE, SEARCH_DOG, GET_DETAIL, DELETE_FAVORITE,SET_PAGE } from "../actions/actions";
const initialState = {
    dogs:[],
    allDogs:[],
    details:{},
    favorites:[],
    search:[],
    currentPage:1
}
function rootReducer (state=initialState, action){
     switch (action.type) {
        case GET_DOGS :
          return{
            ...state,
            dogs:action.payload,
            allDogs:action.payload
          }
        case GET_FAVORITE:
          return{
            ...state,
            favorites:state.favorites.concat(action.payload)
          }
        case SEARCH_DOG:
          try {
            const dogs = [...state.allDogs]
            const valor = dogs.filter((d)=> d.name.toLowerCase() === action.payload.toLowerCase())
            console.log("esto es valor ========>",dogs)
            if(valor.length === 0){
              throw new Error(" not found")
            }
            return{
              ...state,
              search:valor
            }
          } catch (error) {
             alert(error)
          }
        case GET_DETAIL:
          const dogss = [...state.allDogs]
          const valorr = dogss.filter((d)=>d.id === parseInt(action.payload))
          return{
            ...state,
            details:valorr
          } 
        case DELETE_FAVORITE:
          return{
            ...state,
            favorites: state.favorites.filter(f=>f.id!== parseInt(action.payload))
          }
        case SET_PAGE:
          return{
            ...state,
            currentPage:action.payload
          }
         
     
        default:
           return state
     }
}

export default rootReducer