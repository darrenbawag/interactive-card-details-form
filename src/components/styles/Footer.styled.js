import styled from "styled-components";

export const StyledFooter = styled.footer`
	padding: 60px 0;
  margin-left: 112px;

	.attribution {
		font-size: 11px;
		text-align: center;
		color: ${({ textColor }) => textColor || "inherit"};
    width: 381px;
	}

	.attribution a {
		color: hsl(228, 45%, 44%);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
	}
`;