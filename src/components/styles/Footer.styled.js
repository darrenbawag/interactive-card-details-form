import styled from "styled-components";

export const StyledFooter = styled.footer`
	padding: 3.75rem 0;
	margin-left: 7rem;

	.attribution {
		font-size: 0.6875rem;
		text-align: center;
		color: ${({ textColor }) => textColor || "inherit"};
		width: 23.8125rem;

		@media (max-width: ${({ mobile }) => mobile}) {
			width: 100%;
		}
	}

	.attribution a {
		color: hsl(228, 45%, 44%);
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}

	@media (max-width: ${({ mobile }) => mobile}) {
		margin-left: 0;
		padding: 3.75rem 0.9375rem;
	}
`;