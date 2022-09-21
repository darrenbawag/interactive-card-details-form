import styled from "styled-components";

export const StyledForm = styled.div`
	position: relative;
	padding: 17.1875rem 0 0 7rem;

	& > form {
		width: 23.8125rem;
		max-width: 100%;
	}

	@media (max-width: ${({ mobile }) => mobile}) {
		padding: 0 1.5625rem;
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
	font-size: 0.75rem;
	font-weight: 500;
	color: ${({ textColor }) => textColor || "inherit"};
	text-transform: uppercase;
	letter-spacing: 0.125rem;
	margin-bottom: ${({ marginBottom }) => marginBottom + "px" || "0"};
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const FormInput = styled.div`
	position: relative;

	& > input {
		width: 100%;
		padding: 0.6875rem 0.9375rem 0.625rem;
		font-family: inherit;
		font-size: 1.125rem;
		font-weight: 500;
		border-width: 1px;
		border-style: solid;
		border-color: ${({ borderColor }) => borderColor || "inherit"};
		border-radius: 0.5625rem;
		color: ${({ textColor }) => textColor || "inherit"};
	}
`;

export const ErrorFeedback = styled.span`
	display: none;
	margin-top: 0.5rem;
	font-size: 0.7594rem;
	color: ${({ textColor }) => textColor || "inherit"};
`;