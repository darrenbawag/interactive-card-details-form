import styled from "styled-components";

export const StyledButton = styled.button`
	width: 100%;
	font-family: inherit;
	font-size: 1.125rem;
	background-color: ${({ bgColor }) => bgColor || "inherit"};
	border-width: 0.0625rem;
	border-style: solid;
	border-radius: 0.5625rem;
	padding: 15px;
	cursor: pointer;
	position: relative;
	margin-top: 2.4375rem;
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
		height: 1.4375rem;

		span {
			display: block;
		}
	}
`;