import styled from "styled-components";

export const StyledFooter = styled.footer`
	padding: 60px 0;
	margin-left: 112px;

	.attribution {
		font-size: 11px;
		text-align: center;
		color: ${({ textColor }) => textColor || "inherit"};
		width: 381px;

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
		padding: 60px 15px;
	}
`;