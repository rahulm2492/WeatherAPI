import 'whatwg-fetch';
let click = 0;
export const addTodo = text => {
  return {
    type: 'CLICK_COUNT',
    count: click++,
  }
}

export const itemsHasErrored = val =>{
return {
    type: 'ITEMS_HAS_ERRORED',
    hasErrored: val,
  }
}
export const onSearch = val =>{
return {
    type: 'ITEM_SEARCHED',
    data: null
  }
}
export const itemsIsLoading = val =>{
return {
    type: 'ITEMS_IS_LOADING',
    isLoading: val,
  }
}
export const itemsFetchDataSuccess = data =>{
return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    data,
  }
}

export function getCountryFromZip(code) {
    // We return a function instead of an action object
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        window.fetch('http://maps.googleapis.com/maps/api/geocode/json?address='+code+'&sensor=true')
        .then((response) => {
            if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));

                return response;
        })
        .then((response) => response.json())
        .then((items) => {
        const component =items.results[0].address_components ;
        dispatch(byZipCode(component[component.length-1].short_name, code))});
    };
}

export function byZipCode(name, code) {
    // We return a function instead of an action object
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        window.fetch('http://api.openweathermap.org/data/2.5/forecast?zip='+code+','+name+'&appid=89247fc59451636636c0d5b343638881&units=metric').then((response) => {
            if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));

                return response;
        })
        .then((response) => response.json())
        .then((items) => dispatch(itemsFetchDataSuccess(items)));
    };
}
export function byName(city) {
    // We return a function instead of an action object
    return (dispatch) => {
        const url= 'http://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid=89247fc59451636636c0d5b343638881&units=metric';
        dispatch(itemsIsLoading(true));
       fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}