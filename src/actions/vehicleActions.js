import axios from 'axios';
export const FETCH_VEHICLES_BEGIN   = 'FETCH_VEHICLES_BEGIN';
export const FETCH_VEHICLES_SUCCESS = 'FETCH_VEHICLES_SUCCESS';
export const FETCH_VEHICLES_FAILURE = 'FETCH_VEHICLES_FAILURE';

export const fetchVehiclesBegin = () => ({
  type: FETCH_VEHICLES_BEGIN
});

export const fetchVehiclesSuccess = vehicles => ({
  type: FETCH_VEHICLES_SUCCESS,
  payload: vehicles
});

export const fetchVehiclesFailure = error => ({
  type: FETCH_VEHICLES_FAILURE,
  payload: error
});

export function fetchVehicles () {
	return dispatch => {
        dispatch(fetchVehiclesBegin());
        axios.get('http://www.agamoving.cz/api_aga/?type=get&object=vehicles', {
			  responseType: 'json'
		  })
        .then(function(res) {
				if(res.data){
					dispatch(fetchVehiclesSuccess(res.data));
				}
        })
        .catch(function(error) {
			  	console.log(error);
		  		dispatch(fetchVehiclesFailure(error));
        });
    }
};
