import styled from "styled-components";

export const StyledCard = styled.div`
	position: relative;
	padding: 188px 15px 0 164px;
	width: 100%;

	@media (max-width: ${({ mobile }) => mobile}) {
		padding: 32px 15px 13px;
	}
`;

// Card Front
export const StyledFront = styled.div`
	position: relative;
	width: 447px;
	height: 245px;
	padding: 140px 32px 25px;
	overflow: hidden;
	z-index: 2;
	box-shadow: 0 20px 25px rgba(0, 0, 0, 0.07);
	/* transform: translateX(-100%);
	opacity: 0; */

	@media (max-width: ${({ mobile }) => mobile}) {
		width: 287px;
		height: 157px;
		margin-top: -63px;
		padding: 86px 21px 25px;
	}
`;

export const BgFront = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: -1;

	& > img {
		width: 447px;
		height: 245px;

		@media (max-width: ${({ mobile }) => mobile}) {
			width: 287px;
			height: 157px;
		}
	}
`;

export const CardLogo = styled.img`
	position: absolute;
	z-index: 1;
	top: 27px;
	left: 32px;

	@media (max-width: ${({ mobile }) => mobile}) {
		height: 30px;
		top: 18px;
		left: 21px;
	}
`;

export const CardNumber = styled.h1`
	font-size: 27px;
	color: ${({ textColor }) => textColor || "inherit"};
	letter-spacing: 4px;
	margin-bottom: ${({ marginBottom }) => marginBottom + "px" || "0"};
	text-transform: uppercase;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;

	@media (max-width: ${({ mobile }) => mobile}) {
		font-size: 18px;
		letter-spacing: 2.2px;
		margin-bottom: ${({ mobileMarginBottom }) =>
			mobileMarginBottom + "px" || "0"};
	}
`;

export const CardHolderName = styled.h2`
	font-size: 14px;
	text-transform: uppercase;
	color: ${({ textColor }) => textColor || "inherit"};
	letter-spacing: 2px;
	margin-bottom: ${({ marginBottom }) => marginBottom + "px" || "0"};

	@media (max-width: ${({ mobile }) => mobile}) {
		font-size: 9px;
		letter-spacing: 1.27px;
	}
`;

export const ExpirationDate = styled.h2`
	font-size: 14px;
	color: ${({ textColor }) => textColor || "inherit"};
	letter-spacing: 2px;
	margin-bottom: ${({ marginBottom }) => marginBottom + "px" || "0"};

	@media (max-width: ${({ mobile }) => mobile}) {
		font-size: 9px;
		letter-spacing: 1.27px;
	}
`;

// Card Back
export const StyledBack = styled.div`
	position: relative;
	width: 447px;
	height: 245px;
	padding: 112px 58px 0;
	z-index: 1;
	box-shadow: 0 20px 25px rgba(0, 0, 0, 0.07);
	/* transform: translateX(-100%);
	opacity: 0; */

	@media (max-width: ${({ mobile }) => mobile}) {
		width: 287px;
		height: 157px;
		padding: 71px 38px 0;
	}
`;

export const BgBack = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: -1;

	& > img {
		width: 447px;
		height: 245px;

		@media (max-width: ${({ mobile }) => mobile}) {
			width: 287px;
			height: 157px;
		}
	}
`;

export const CVC = styled.h2`
	font-size: 14px;
	color: ${({ textColor }) => textColor || "inherit"};
	letter-spacing: 2px;
	text-align: right;
	margin-bottom: ${({ marginBottom }) => marginBottom + "px" || "0"};

	@media (max-width: ${({ mobile }) => mobile}) {
		font-size: 9.5px;
		letter-spacing: 1.27px;
	}
`;