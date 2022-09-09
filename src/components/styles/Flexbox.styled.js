import styled from "styled-components";

export const Flexbox = styled.div`
	display: flex;
	width: ${({ widthUnit }) => widthUnit || "auto"};
	height: ${({ heightUnit }) => heightUnit || "auto"};
	align-items: ${({ alignItems }) => alignItems || "flex-start"};
	justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
	margin-bottom: ${({ marginBottom }) => marginBottom + "px" || "0"};
	flex-direction: ${({ flexDirection }) => flexDirection || "row"};

	@media (max-width: ${({ mobile }) => mobile}) {
		flex-direction: ${({ mobileFlexDirection }) =>
			mobileFlexDirection || "inherit"};
	}
`;

export const LeftColumn = styled.div`
	position: relative;
	width: 50%;
	z-index: 1;
	height: 100%;

	@media (max-width: ${({ mobile }) => mobile}) {
		position: absolute;
		width: 100%;
	}
`;

export const RightColumn = styled.div`
	position: relative;
	width: 100%;
	margin-left: -50%;
	z-index: 2;

	@media (max-width: ${({ mobile }) => mobile}) {
		margin-left: 0;
	}
`;

export const FlexHalf = styled.div`
	width: 100%;
	flex-basis: 50%;
	margin-top: ${({ marginTop }) => marginTop + "px" || "0"};
	margin-bottom: ${({ marginBottom }) => marginBottom + "px" || "0"};
	margin-left: ${({ marginLeft }) => marginLeft + "px" || "0"};
	margin-right: ${({ marginRight }) => marginRight + "px" || "0"};
	padding-top: ${({ paddingTop }) => paddingTop + "px" || "0"};
	padding-bottom: ${({ paddingBottom }) => paddingBottom + "px" || "0"};
	padding-left: ${({ paddingLeft }) => paddingLeft + "px" || "0"};
	padding-right: ${({ paddingRight }) => paddingRight + "px" || "0"};

	@media (max-width: ${({ mobile }) => mobile}) {
		margin-top: ${({ mobileMarginTop }) => mobileMarginTop + "px" || "0"};
		margin-bottom: ${({ mobileMarginBottom }) => mobileMarginBottom + "px" || "0"};
		margin-left: ${({ mobileMarginLeft }) => mobileMarginLeft + "px" || "0"};
		margin-right: ${({ mobileMarginRight }) => mobileMarginRight + "px" || "0"};
		padding-top: ${({ mobilePaddingTop }) => mobilePaddingTop + "px" || "0"};
		padding-bottom: ${({ mobilePaddingBottom }) => mobilePaddingBottom + "px" || "0"};
		padding-left: ${({ mobilePaddingLeft }) => mobilePaddingLeft + "px" || "0"};
		padding-right: ${({ mobilePaddingRight }) => mobilePaddingRight + "px" || "0"};
	}
`;