import styled from "styled-components";

export const Container = styled.div`
	width: 1440px;
	max-width: 100%;
	padding: 0;
	margin: 0 auto;
  
	@media (max-width: ${({ mobile }) => mobile}) {
		width: 375px;
	}
`;