import styled from "styled-components";

export const StyledButton = styled.button`
	width: 100%;
	font-family: inherit;
	font-size: 18px;
	background-color: ${({ bgColor }) => bgColor || "inherit"};
	border-width: 1px;
	border-style: solid;
	border-radius: 9px;
	padding: 15px;
	cursor: pointer;
	position: relative;
	margin-top: ${({ withError, marginTop }) =>
		withError ? withError + "px" : marginTop + "px"};
	overflow: hidden;

	&:after {
		content: "";
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		transition: opacity 0.3s ease;
		background: ${({ gradientFromColor, gradientToColor }) =>
			gradientFromColor && gradientToColor
				? `linear-gradient(to right, ${gradientFromColor}, ${gradientToColor})`
				: "none"};
		opacity: 0;
		z-index: 1;
	}

	&:hover {
		&:after {
			opacity: 1;
		}
	}

	span {
		color: ${({ textColor }) => textColor || "inherit"};
    position: relative;
    z-index: 2;
		display: block;
		overflow: hidden;
		height: 23px;

		span {
			display: block;
		}
	}
`;