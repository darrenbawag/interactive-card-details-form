import { Flexbox } from "./styles/Flexbox.styled";
import {
	StyledFront,
	BgFront,
	CardLogo,
	CardNumber,
	CardHolderName,
	ExpirationDate,
} from "./styles/Card.styled";

const Front = ({
	theme,
	cardNumber,
	cardHolderName,
	month,
	year,
  placeholderName,
	handleCardDisplay
}) => {
	return (
		<StyledFront
			bgColorBefore={theme.colors.neutral.white}
			borderColorAfter={theme.colors.neutral.white}
			mobile={theme.breakpoints.mobile}
			className="frontCard"
		>
			<BgFront mobile={theme.breakpoints.mobile}>
				<img src="./images/bg-card-front.png" alt="Background Card Front" />
			</BgFront>
			<CardLogo
				mobile={theme.breakpoints.mobile}
				src="./images/card-logo.svg"
				alt="Card Logo"
			/>
			<CardNumber
				textColor={theme.colors.neutral.white}
				marginBottom="25"
				mobile={theme.breakpoints.mobile}
				mobileMarginBottom="16"
			>
				{cardNumber && cardNumber !== " "
					? handleCardDisplay()
					: "0000 0000 0000 0000"}
			</CardNumber>
			<Flexbox justifyContent="space-between">
				<CardHolderName
					textColor={theme.colors.neutral.white}
					marginBottom="0"
					mobile={theme.breakpoints.mobile}
				>
					{cardHolderName ? cardHolderName : placeholderName}
				</CardHolderName>
				<ExpirationDate
					textColor={theme.colors.neutral.white}
					marginBottom="0"
					mobile={theme.breakpoints.mobile}
				>
					{month ? month : "00"}/{year ? year : "00"}
				</ExpirationDate>
			</Flexbox>
		</StyledFront>
	);
};

export default Front;
