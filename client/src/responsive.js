import { css } from "styled-components";

export const mobileSE = (props) => {
	return css`
		@media only screen and (max-width: 320px) {
			${props}
		}
	`;
};

export const mobile = (props) => {
	return css`
		@media only screen and (max-width: 480px) {
			${props}
		}
	`;
};

export const tablet = (props) => {
	return css`
		@media only screen and (max-width: 834px) {
			${props}
		}
	`;
};
