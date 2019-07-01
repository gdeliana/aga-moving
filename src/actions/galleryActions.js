import axios from 'axios';
export const FETCH_GALLERY_BEGIN = "FETCH_GALLERY_BEGIN";
export const FETCH_GALLERY_SUCCESS = "FETCH_GALLERY_SUCCESS";
export const FETCH_GALLERY_ERROR = "FETCH_GALLERY_ERROR";



export const fetchGalleryBegin = () => ({
	type : FETCH_GALLERY_BEGIN
});

export const fetchGallerySuccess = (images) => ({
	type : FETCH_GALLERY_SUCCESS,
	payload : images
});

export const fetchGalleryError = (error) => ({
	type: FETCH_GALLERY_ERROR,
	error
});

export const fetchGallery = () => {
	return (dispatch) => {
		dispatch(fetchGalleryBegin);
		axios.get('http://agamoving.cz/api_aga/gallery.php').then((json) => {
			dispatch(() => fetchGallerySuccess(json));
		}).catch((error) => {
			dispatch(() => fetchGalleryError(error));
		});
	}
}
