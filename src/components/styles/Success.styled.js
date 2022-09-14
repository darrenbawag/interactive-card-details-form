import styled from "styled-components";

export const SuccessMessage = styled.div`
	position: relative;
	text-align: center;
	padding: 30px 0 20px;
	opacity: 0;
	display: none;

	img {
		display: block;
		margin: 0 auto 35px;
	}

	h2 {
		text-transform: uppercase;
		letter-spacing: 3.5px;
		font-size: 28px;
		color: ${({ textColor }) => textColor || "inherit"};
	}

	p {
		color: #908c90;
	}

	@media (max-width: ${({ mobile }) => mobile}) {
		padding: 0 0 40px;
	}
`;