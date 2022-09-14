import { SuccessMessage } from "./styles/Success.styled";

const Message = ({ theme }) => {
	return (
		<SuccessMessage
			textColor={theme.colors.neutral["very-dark-violet"]}
			mobile={theme.breakpoints.mobile}
			className="successMsg"
		>
			<img src="./images/icon-complete.svg" alt="" />
			<h2>Thank You!</h2>
			<p>We've added your card details</p>
		</SuccessMessage>
	);
};

export default Message;
