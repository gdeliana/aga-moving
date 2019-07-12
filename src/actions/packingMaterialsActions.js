import axios from 'axios';
export const FETCH_MATERIALS_BEGIN = "FETCH_MATERIALS_BEGIN";
export const FETCH_MATERIALS_SUCCESS = "FETCH_MATERIALS_SUCCESS";
export const FETCH_MATERIALS_ERROR = "FETCH_MATERIALS_ERROR";



export const fetchMaterialsBegin = () => ({
	type : FETCH_MATERIALS_BEGIN
});

export const fetchMaterialsSuccess = (materials) => ({
	type : FETCH_MATERIALS_SUCCESS,
	payload : materials
});

export const fetchMaterialsError = (error) => ({
	type: FETCH_MATERIALS_ERROR,
	error
});

export function fetchMaterials () {
	return dispatch => {
        dispatch(fetchMaterialsBegin());
		  axios.request({
			 method: 'get',
			 url: 'http://www.agamoving.cz/api_aga/json/materials.php',
			 responseType: 'json'
		  })
        .then(function(res) {
				if(res.data){
					dispatch(fetchMaterialsSuccess(res.data));
				}
        })
        .catch(function(error) {
		  		dispatch(fetchMaterialsError(error));
        });
    }
};
