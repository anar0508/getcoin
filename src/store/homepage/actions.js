export const LOG_OUT = 'LOG_OUT';
export const HANDLE_SEARCH = 'HANDLE_SEARCH';
export const TOGGLE_ADVANCED_SEARCH = 'TOGGLE_ADVANCED_SEARCH';
export const GET_ADVANCED_SEARCH_INFO = 'GET_ADVANCED_SEARCH_INFO';


export const logOut = () => {
    return {
        type: LOG_OUT,
        payload: null
    }
}

export const loggingOut = () => (dispatch, getState) => {
    fetch('http://localhost:8000/logout', {
        method: "POST",
        body: JSON.stringify({
            token: getState().token
        }),
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Content-Type': 'application/json'
        }
    }).then(() => { dispatch(logOut()) })
}

export const toggleAdvancedSearch=()=>{
    return {
        type: TOGGLE_ADVANCED_SEARCH
    }
}

export const getAdvancedSearchInfo=(info)=>{
    return {
        type: GET_ADVANCED_SEARCH_INFO,
        payload: info
    }
}

export const getSearchResult = (coins) => {
    return {
        type: HANDLE_SEARCH,
        payload: coins
    }
}

export const searchHandling = (search) => (dispatch, getState) => {
    const country = getState().adSearch.country;
    const composition =getState().adSearch.composition;
    const priceFrom =getState().adSearch.priceFrom;
    const priceTo =getState().adSearch.priceTo;
    const yearFrom =getState().adSearch.yearFrom;
    const yearTo =getState().adSearch.yearTo;
    fetch(`http://localhost:8000/searchCoins?text=${search}&country=${country}&composition=${composition}&priceFrom=${priceFrom}&priceTo=${priceTo}&yearFrom=${yearFrom}&yearTo=${yearTo}`, {
        method: "GET",
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:8000',
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).then(res => { dispatch(getSearchResult(res))})
    
}

export const gettingAdvancedSearchInfo = () => (dispatch, getState) => {
    fetch('http://localhost:8000/advanced').then(res => { return res.json()}).then(res => { 
dispatch(getAdvancedSearchInfo(res));})
    
}

