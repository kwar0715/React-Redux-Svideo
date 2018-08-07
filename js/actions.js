export const SET_SEARCH_TERM ='SET_SEARCH_TERM'
export const SET_API_DATA ='SET_API_DATA'

export function setSearchTerm(searchTerm){
    return {
        type: SET_SEARCH_TERM,
        payload: searchTerm
    }
}

export function setApiData(show){
    return {
        type:SET_API_DATA,
        payload:show
    }
}

export function getApiData(imdbid){
    return (dispatch) =>{
        axios
      .get("http://localhost:3000/" + imdbid)
      .then(response => {
         dispatch(setApiData(response.data))
      })
    }
}
