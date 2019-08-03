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
		  axios.request({
			 method: 'get',
			 url: 'http://www.agamoving.cz/api_aga/json/vehicles.php',
			 responseType: 'json'
		  })
        .then(function(res) {
			if(res.data){
				dispatch(fetchVehiclesSuccess(res.data));
			}
        })
        .catch(function(error) {
		  		dispatch(fetchVehiclesFailure(error));
        });
    }
};
