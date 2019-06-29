export const HIDEMENUMOBILE = 'HIDEMENUMOBILE';
export const TOGGLEMENUMOBILE = 'TOGGLEMENUMOBILE';
export const UPDATEFORM = "UPDATEFORM";

export const hideMenuMobile = () => ({
	type: HIDEMENUMOBILE
});

export const toggleMenuMobile = () => ({
	type: TOGGLEMENUMOBILE
});

export const updateform = (name, value) => ({
	type: UPDATEFORM,
	name : name,
	value: value,
});
