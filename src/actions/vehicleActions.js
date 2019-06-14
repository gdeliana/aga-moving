export const FETCH_VEHICLES_BEGIN   = 'FETCH_VEHICLES_BEGIN';
export const FETCH_VEHICLES_SUCCESS = 'FETCH_VEHICLES_SUCCESS';
export const FETCH_VEHICLES_FAILURE = 'FETCH_VEHICLES_FAILURE';

export const fetchVehiclesBegin = () => ({
  type: FETCH_VEHICLES_BEGIN
});

export const fetchVehiclesSuccess = vehicles => ({
  type: FETCH_VEHICLES_SUCCESS,
  payload: { vehicles }
});

export const fetchVehiclesFailure = error => ({
  type: FETCH_VEHICLES_FAILURE,
  payload: { error }
});
