import { Flexbox, FlexHalf } from "./styles/Flexbox.styled";
import {
	StyledForm,
	FormControl,
	FormLabel,
	ErrorFeedback
} from "./styles/Form.styled";

import Input from "./Input";
import Message from "./Message";
import Button from "./Button";

const Form = ({
	theme,
	cardHolderName,
	month,
	year,
	cvc,
	cardNumberStatus,
	cardHolderNameStatus,
	monthStatus,
	yearStatus,
	cvcStatus,
	placeholderName,
	handleCardDisplay,
	handleChangeCardHolderName,
	handleChangeCardNumber,
	handleChangeMonth,
	handleBlurMonth,
	handleChangeYear,
	handleBlurYear,
	handleChangeCvc,
	handleFormSubmit,
}) => {
	return (
		<StyledForm mobile={theme.breakpoints.mobile}>
			<form onSubmit={(e) => handleFormSubmit(e)}>
				<Input
					theme={theme}
					marginBottom="25"
					mobileMarginBottom="20"
					className="formCtrl"
					label="Cardholder Name"
					type="text"
					placeholder={"e.g. " + placeholderName}
					value={cardHolderName}
					onChange={handleChangeCardHolderName}
					styleInput={
						cardHolderNameStatus
							? {
									borderColor: theme.colors.primary.red,
							  }
							: null
					}
					styleError={cardHolderNameStatus ? { display: "block" } : null}
					status={cardHolderNameStatus}
				/>
				<Input
					theme={theme}
					marginBottom="25"
					mobileMarginBottom="20"
					className="formCtrl"
					label="Card Number"
					type="text"
					placeholder="e.g. 1234 5678 9123 0000"
					maxLength="19"
					value={handleCardDisplay()}
					onChange={handleChangeCardNumber}
					styleInput={
						cardNumberStatus
							? {
									borderColor: theme.colors.primary.red,
									textTransform: "uppercase",
							  }
							: { textTransform: "uppercase" }
					}
					styleError={cardNumberStatus ? { display: "block" } : null}
					status={cardNumberStatus}
				/>
				<Flexbox className="formCtrl">
					<FlexHalf
						paddingRight="20"
						mobilePaddingRight="12"
						mobile={theme.breakpoints.mobile}
					>
						<FormControl>
							<FormLabel
								textColor={theme.colors.neutral["very-dark-violet"]}
								marginBottom="9"
							>
								Exp. Date (MM/YY)
							</FormLabel>
							<Flexbox>
								<FlexHalf paddingRight="5">
									<Input
										theme={theme}
										marginBottom="0"
										label=""
										type="text"
										placeholder="MM"
										maxLength="2"
										pattern="[0-9]*"
										inputMode="numeric"
										value={month}
										onChange={handleChangeMonth}
										styleInput={
											monthStatus
												? {
														borderColor: theme.colors.primary.red,
												  }
												: null
										}
										onBlur={handleBlurMonth}
									/>
								</FlexHalf>
								<FlexHalf paddingLeft="5">
									<Input
										theme={theme}
										marginBottom="0"
										label=""
										type="text"
										placeholder="YY"
										maxLength="2"
										pattern="[0-9]*"
										inputMode="numeric"
										value={year}
										onChange={handleChangeYear}
										styleInput={
											yearStatus
												? {
														borderColor: theme.colors.primary.red,
												  }
												: null
										}
										onBlur={handleBlurYear}
									/>
								</FlexHalf>
							</Flexbox>
							{monthStatus && yearStatus ? (
								<ErrorFeedback
									textColor={theme.colors.primary.red}
									style={
										monthStatus && yearStatus ? { display: "block" } : null
									}
								>
									{monthStatus}
								</ErrorFeedback>
							) : monthStatus ? (
								<ErrorFeedback
									textColor={theme.colors.primary.red}
									style={monthStatus ? { display: "block" } : null}
								>
									{monthStatus}
								</ErrorFeedback>
							) : (
								<ErrorFeedback
									textColor={theme.colors.primary.red}
									style={yearStatus ? { display: "block" } : null}
								>
									{yearStatus}
								</ErrorFeedback>
							)}
						</FormControl>
					</FlexHalf>
					<FlexHalf>
						<Input
							theme={theme}
							marginBottom="0"
							label="CVC"
							type="text"
							placeholder="e.g. 123"
							maxLength="3"
							pattern="[0-9]*"
							inputMode="numeric"
							value={cvc}
							onChange={handleChangeCvc}
							styleInput={
								cvcStatus
									? {
											borderColor: theme.colors.primary.red,
									  }
									: null
							}
							styleError={cvcStatus ? { display: "block" } : null}
							status={cvcStatus}
						/>
					</FlexHalf>
				</Flexbox>
				<Message theme={theme} />
				<Button theme={theme} />
			</form>
		</StyledForm>
	);
};

export default Form;
