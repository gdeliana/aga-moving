import materials from '../materials.json';
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

export const fetchMaterials = () => {
	return (dispatch) => {
		dispatch(fetchMaterialsSuccess(materials));
	}
}
