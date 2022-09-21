import styled from "styled-components";

export const Container = styled.div`
	width: 90rem;
	max-width: 100%;
	padding: 0;
	margin: 0 auto;
  
	@media (max-width: ${({ mobile }) => mobile}) {
		width: 23.4375rem;
	}
`;