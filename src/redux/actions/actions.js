 import axios from "axios"
export const GET_DOGS = "GET_DOGS"
export const GET_FAVORITE = "GET_FAVORITE"
export const SEARCH_DOG = "SEARCH_DOG"
export const GET_DETAIL = "GET_DETAIL"
export const DELETE_FAVORITE = "DELETE_FAVORITE"
// actions.js
export const SET_PAGE = 'SET_PAGE'; // Verifica que esté escrito exactamente así




const apiKey = "live_1Ia96GUABG8ey5g0dUowFRAf71WiKbPEJm2omtqmvUhFDp0bqTLMUuMNbzERMAVh "

export function getDogs(){
    return function(dispatch){
        axios.get(`https://api.thedogapi.com/v1/breeds?${apiKey}`)
        .then((data)=>{
            console.log(data)
            dispatch({type:GET_DOGS,payload:data.data})
        })
    }
}

export function addFavorite (dog){
    return{
        type:GET_FAVORITE,
        payload:dog
    }
}

export function searchDog(payload){
    return{
        type:SEARCH_DOG,
        payload,
    }
}
export function detail(payload){
    return{
        type:GET_DETAIL,
        payload,
    }
}
export function deleteFvorite(payload){
    return{
        type:DELETE_FAVORITE,
        payload,
    }
}
export function setPage(payload){
    return{
        type:SET_PAGE,
        payload,
    }
}
