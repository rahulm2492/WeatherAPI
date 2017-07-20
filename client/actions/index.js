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
export function errorAfterFiveSeconds() {
    // We return a function instead of an action object
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=89247fc59451636636c0d5b343638881')
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