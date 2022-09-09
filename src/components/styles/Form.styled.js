import styled from "styled-components";

export const StyledForm = styled.div`
	position: relative;
	padding: 275px 0 0 112px;

	& > form {
		width: 381px;
		max-width: 100%;
	}

	@media (max-width: ${({ mobile }) => mobile}) {
		padding: 0 25px;
	}
`;

export const FormControl = styled.div`
	position: relative;
	margin-bottom: ${({ marginBottom }) => marginBottom + "px" || "0"};

	@media (max-width: ${({ mobile }) => mobile}) {
		margin-bottom: ${({ mobileMarginBottom }) =>
			mobileMarginBottom + "px" || "0"};
	}
`;

export const FormLabel = styled.label`
	display: block;
	font-size: 12px;
	font-weight: 500;
	color: ${({ textColor }) => textColor || "inherit"};
	text-transform: uppercase;
	letter-spacing: 2px;
	margin-bottom: ${({ marginBottom }) => marginBottom + "px" || "0"};
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const FormInput = styled.div`
	position: relative;

	& > input {
		width: 100%;
		padding: 11px 15px 10px;
		font-family: inherit;
		font-size: 18px;
		font-weight: 500;
		border-width: 1px;
		border-style: solid;
		border-color: ${({ borderColor }) => borderColor || "inherit"};
		border-radius: 9px;
		color: ${({ textColor }) => textColor || "inherit"};
	}
`;

export const ErrorFeedback = styled.span`
	display: none;
	margin-top: 8px;
	font-size: 12.15px;
	color: ${({ textColor }) => textColor || "inherit"};
`;