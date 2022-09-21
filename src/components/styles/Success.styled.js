import styled from "styled-components";

export const SuccessMessage = styled.div`
	position: relative;
	text-align: center;
	padding: 1.875rem 0 1.25rem;
	opacity: 0;
	display: none;

	img {
		display: block;
		margin: 0 auto 2.1875rem;
	}

	h2 {
		text-transform: uppercase;
		letter-spacing: 0.2188rem;
		font-size: 1.75rem;
		color: ${({ textColor }) => textColor || "inherit"};
	}

	p {
		color: #908c90;
	}

	@media (max-width: ${({ mobile }) => mobile}) {
		padding: 0 0 2.5rem;
	}
`;