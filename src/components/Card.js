import { Flexbox } from "./styles/Flexbox.styled";
import { StyledCard } from "./styles/Card.styled";

import Front from "./Front";
import Back from "./Back";

const Card = ({
	theme,
	cardNumber,
	cardHolderName,
	month,
	year,
	cvc,
	placeholderName,
	handleCardDisplay
}) => {
	return (
		<StyledCard mobile={theme.breakpoints.mobile}>
			<Flexbox
				flexDirection="column"
				mobileFlexDirection="column-reverse"
				mobile={theme.breakpoints.mobile}
				widthUnit="100%"
			>
				<Flexbox marginBottom="35">
					<Front 
            theme={theme}
            cardNumber={cardNumber}
            cardHolderName={cardHolderName}
            month={month}
            year={year}
            placeholderName={placeholderName}
            handleCardDisplay={handleCardDisplay}
          />
				</Flexbox>

				<Flexbox widthUnit="100%" justifyContent="flex-end">
					<Back theme={theme} cvc={cvc} />
				</Flexbox>
			</Flexbox>
		</StyledCard>
	);
};

export default Card;
