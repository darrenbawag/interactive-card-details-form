import { StyledButton } from "./styles/Button.styled";

const Button = ({ theme }) => {
	return (
		<StyledButton
			type="submit"
			textColor={theme.colors.neutral.white}
			bgColor={theme.colors.neutral["very-dark-violet"]}
			gradientFromColor={theme.colors.primary["gradient-from"]}
			gradientToColor={theme.colors.primary["gradient-to"]}
			marginTop="39"
			className="submitBtn"
		>
			<div>
				<span>Confirm</span>
				<span>Continue</span>
			</div>
		</StyledButton>
	);
};

export default Button;
