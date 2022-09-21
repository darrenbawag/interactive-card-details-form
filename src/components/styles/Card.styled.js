import styled from "styled-components";

export const StyledCard = styled.div`
	position: relative;
	padding: 11.75rem 0.9375rem 0 10.25rem;
	width: 100%;

	@media (max-width: ${({ mobile }) => mobile}) {
		padding: 2rem 0.9375rem 0.8125rem;
	}
`;

// Card Front
export const StyledFront = styled.div`
	position: relative;
	width: 27.9375rem;
	height: 15.3125rem;
	padding: 8.75rem 2rem 1.5625rem;
	overflow: hidden;
	z-index: 2;
	box-shadow: 0 1.25rem 3.125rem rgba(0, 0, 0, 0.19);
	border-radius: 0.5625rem;
	transform: translateX(-100%);
	opacity: 0;

	@media (max-width: ${({ mobile }) => mobile}) {
		width: 17.9375rem;
		height: 9.8125rem;
		margin-top: -3.9375rem;
		padding: 5.375rem 1.3125rem 1.5625rem;
		border-radius: 0.25rem;
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
		width: 27.9375rem;
		height: 15.3125rem;

		@media (max-width: ${({ mobile }) => mobile}) {
			width: 17.9375rem;
			height: 9.8125rem;
		}
	}
`;

export const CardLogo = styled.img`
	position: absolute;
	z-index: 1;
	top: 1.6875rem;
	left: 2rem;

	@media (max-width: ${({ mobile }) => mobile}) {
		height: 1.875rem;
		top: 1.125rem;
		left: 1.3125rem;
	}
`;

export const CardNumber = styled.h1`
	font-size: 1.6875rem;
	color: ${({ textColor }) => textColor || "inherit"};
	letter-spacing: 0.1875rem;
	margin-bottom: ${({ marginBottom }) => marginBottom + "px" || "0"};
	text-transform: uppercase;
	white-space: nowrap;
	overflow: hidden;
	/* text-overflow: ellipsis; */

	@media (max-width: ${({ mobile }) => mobile}) {
		font-size: 1.125rem;
		letter-spacing: 0.0938rem;
		margin-bottom: ${({ mobileMarginBottom }) =>
			mobileMarginBottom + "px" || "0"};
	}
`;

export const CardHolderName = styled.h2`
	font-size: 0.875rem;
	text-transform: uppercase;
	color: ${({ textColor }) => textColor || "inherit"};
	letter-spacing: 0.125rem;
	margin-bottom: ${({ marginBottom }) => marginBottom + "px" || "0"};

	@media (max-width: ${({ mobile }) => mobile}) {
		font-size: 0.5625rem;
		letter-spacing: 0.0794rem;
	}
`;

export const ExpirationDate = styled.h2`
	font-size: 0.875rem;
	color: ${({ textColor }) => textColor || "inherit"};
	letter-spacing: 0.125rem;
	margin-bottom: ${({ marginBottom }) => marginBottom + "px" || "0"};

	@media (max-width: ${({ mobile }) => mobile}) {
		font-size: 0.5625rem;
		letter-spacing: 0.0794rem;
	}
`;

// Card Back
export const StyledBack = styled.div`
	position: relative;
	width: 27.9375rem;
	height: 15.3125rem;
	padding: 7rem 3.625rem 0;
	z-index: 1;
	box-shadow: 0 1.25rem 3.125rem rgba(0, 0, 0, 0.19);
	border-radius: 0.5625rem;
	transform: translateX(-100%);
	opacity: 0;

	@media (max-width: ${({ mobile }) => mobile}) {
		width: 17.9375rem;
		height: 9.8125rem;
		padding: 4.4375rem 2.375rem 0;
		border-radius: 0.25rem;
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
		width: 27.9375rem;
		height: 15.3125rem;

		@media (max-width: ${({ mobile }) => mobile}) {
			width: 17.9375rem;
			height: 9.8125rem;
		}
	}
`;

export const CVC = styled.h2`
	font-size: 0.875rem;
	color: ${({ textColor }) => textColor || "inherit"};
	letter-spacing: 0.125rem;
	text-align: right;
	margin-bottom: ${({ marginBottom }) => marginBottom + "px" || "0"};

	@media (max-width: ${({ mobile }) => mobile}) {
		font-size: 0.5938rem;
		letter-spacing: 0.0794rem;
	}
`;