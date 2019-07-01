export const HIDEMENUMOBILE = 'HIDEMENUMOBILE';
export const TOGGLEMENUMOBILE = 'TOGGLEMENUMOBILE';
export const SUBMITFORM = "SUBMITFORM";

export const hideMenuMobile = () => ({
	type: HIDEMENUMOBILE
});

export const toggleMenuMobile = () => ({
	type: TOGGLEMENUMOBILE
});

export const submitform = () => {
	return {
		type: SUBMITFORM
	}
}
