import { StyledBack, BgBack, CVC } from "./styles/Card.styled";

const Back = ({ theme, cvc }) => {
	return (
		<StyledBack mobile={theme.breakpoints.mobile} className="backCard">
			<BgBack mobile={theme.breakpoints.mobile}>
				<img src="./images/bg-card-back.png" alt="Background Card Back" />
			</BgBack>
			<CVC
				textColor={theme.colors.neutral.white}
				marginBottom="0"
				mobile={theme.breakpoints.mobile}
			>
				{cvc ? cvc : "000"}
			</CVC>
		</StyledBack>
	);
};

export default Back;
