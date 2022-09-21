import styled from "styled-components";

export const MainBackground = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	padding-right: 14.8125rem;
	overflow: hidden;

	& .desktop {
		display: block;
	}

	& .mobile {
		display: none;
	}

	& > div {
		width: 100%;
		height: 100%;
		background-color: #21092f;

		img {
			width: 100%;
			height: auto;
		}
	}

	@media (max-width: ${({ mobile }) => mobile}) {
		height: 15rem;
		padding-right: 0;

		& .desktop {
			display: none;
		}

		& .mobile {
			display: block;
		}
	}
`;