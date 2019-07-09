import axios from 'axios';
export const FETCH_GALLERY_BEGIN = "FETCH_GALLERY_BEGIN";
export const FETCH_GALLERY_SUCCESS = "FETCH_GALLERY_SUCCESS";
export const FETCH_GALLERY_ERROR = "FETCH_GALLERY_ERROR";
export const CLEAN_GALLERY = "CLEAN_GALLERY";


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
	return function(dispatch) {
		dispatch(fetchGalleryBegin());
		axios.get('http://agamoving.cz/api_aga/gallery.php').then((json) => {
			dispatch(fetchGallerySuccess(json.data));
		}).catch((error) => {
			dispatch(fetchGalleryError(error));
		});
	}
}

export const cleanGallery = () => ({
	type: CLEAN_GALLERY
})
