import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global.styled";
import { Container } from "./components/styles/Container.styled";
import { Flexbox, LeftColumn, RightColumn, FlexHalf } from "./components/styles/Flexbox.styled";
import { MainBackground } from "./components/styles/Background.styled";
import { Card, Front, BgFront, CardLogo, CardNumber, CardHolderName, ExpirationDate, Back, BgBack, CVC } from "./components/styles/Card.styled";
import { StyledForm, FormControl, FormLabel, FormInput, ErrorFeedback } from "./components/styles/Form.styled";
import { StyledButton } from "./components/styles/Button.styled";

const theme = {
	colors: {
		primary: {
			"gradient-from": "hsl(249, 99%, 64%)",
			"gradient-to": "hsl(278, 94%, 30%)",
			red: "hsl(0, 100%, 66%)"
		},
		neutral: {
			white: "hsl(0, 0%, 100%)",
			"light-grayish-violet": "hsl(270, 3%, 87%)",
			"dark-grayish-violet": "hsl(279, 6%, 55%)",
			"very-dark-violet": "hsl(278, 68%, 11%)"
		}
	},
	breakpoints: {
		mobile: "1254px"
	}
};

const App = () => {
	const placeholderName = "Jane Appleseed";
	const [cardNumber, setCardNumber] = useState("");
	const [cardHolderName, setCardHolderName] = useState("");
	const [month, setMonth] = useState("");
	const [year, setYear] = useState("");
	const [cvc, setCvc] = useState("");

	const [cardNumberStatus, setCardNumberStatus] = useState("");
	const [cardHolderNameStatus, setCardHolderNameStatus] = useState("");
	const [monthStatus, setMonthStatus] = useState("");
	const [yearStatus, setYearStatus] = useState("");
	const [cvcStatus, setCvcStatus] = useState("");

	const handleCardDisplay = () => {
		const cardNumberHolder = [...cardNumber.split(" ").join("")];
		const Card = [];
		cardNumberHolder.forEach((t, i) => {
			if (i !== 0 && i % 4 === 0) Card.push(" ");
			Card.push(t);
		});
		return Card.join("");
	};

	const handleChangeCardHolderName = (e) => {
		setCardHolderNameStatus("");
		(e.target.value === "" || /^\D+$/.test(e.target.value)) &&
			setCardHolderName(e.target.value);
	};

	const handleChangeCardNumber = (e) => {
		setCardNumberStatus("");
		setCardNumber(e.target.value);
	};

	const handleChangeMonth = (e) => {
		setMonthStatus("");
		const value = e.target.value.toString();
		if (value.length === 1 && value > 1) {
			e.target.value = "0" + value;
		}

		if (value === "00") {
			e.target.value = "01";
		} else if (value > 12) {
			e.target.value = "12";
		}
		e.stopPropagation();

		(e.target.value === "" || /^[0-9\b]+$/.test(e.target.value)) &&
			setMonth(e.target.value);
	};

	const handleChangeYear = (e) => {
		setYearStatus("");
		(e.target.value === "" 
			|| /^[0-9\b]+$/.test(e.target.value)) 
			&& setYear(e.target.value);
	};

	const handleChangeCvc = (e) => {
		setCvcStatus("");
		(e.target.value === "" 
			|| /^[0-9\b]+$/.test(e.target.value))
			&& setCvc(e.target.value);
																
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		if(!cardHolderName) setCardHolderNameStatus("Can't be blank");
		if (!cardNumber) setCardNumberStatus("Can't be blank");
		if (/[A-Za-z]/.test(cardNumber)) setCardNumberStatus("Wrong format, numbers only");
		if (!month) setMonthStatus("Can't be blank");
		if (!year) setYearStatus("Can't be blank");
		if (!cvc) setCvcStatus("Can't be blank");

		return;
	};

  return (
		<ThemeProvider theme={theme}>
			<GlobalStyles
				placeholderColor={theme.colors.neutral["light-grayish-violet"]}
				gradientFromColor={theme.colors.primary["gradient-from"]}
				gradientToColor={theme.colors.primary["gradient-to"]}
			/>
			<main>
				<Flexbox
					heightUnit="100%"
					mobileFlexDirection="column"
					mobile={theme.breakpoints.mobile}
				>
					<LeftColumn mobile={theme.breakpoints.mobile}>
						<MainBackground mobile={theme.breakpoints.mobile}>
							<div>
								<img
									className="desktop"
									src="./images/bg-main-desktop.png"
									alt=""
								/>
								<img
									className="mobile"
									src="./images/bg-main-mobile.png"
									alt=""
								/>
							</div>
						</MainBackground>
					</LeftColumn>
					<RightColumn mobile={theme.breakpoints.mobile}>
						<Container mobile={theme.breakpoints.mobile}>
							<Flexbox
								heightUnit="100%"
								mobileFlexDirection="column"
								mobile={theme.breakpoints.mobile}
							>
								<FlexHalf>
									<Card mobile={theme.breakpoints.mobile}>
										<Flexbox
											flexDirection="column"
											mobileFlexDirection="column-reverse"
											mobile={theme.breakpoints.mobile}
											widthUnit="100%"
										>
											<Flexbox marginBottom="35">
												<Front
													bgColorBefore={theme.colors.neutral.white}
													borderColorAfter={theme.colors.neutral.white}
													mobile={theme.breakpoints.mobile}
												>
													<BgFront mobile={theme.breakpoints.mobile}>
														<img src="./images/bg-card-front.png" alt="" />
													</BgFront>
													<CardLogo
														mobile={theme.breakpoints.mobile}
														src="./images/card-logo.svg"
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
															{cardHolderName
																? cardHolderName
																: placeholderName}
														</CardHolderName>
														<ExpirationDate
															textColor={theme.colors.neutral.white}
															marginBottom="0"
															mobile={theme.breakpoints.mobile}
														>
															{month ? month : "00"}/{year ? year : "00"}
														</ExpirationDate>
													</Flexbox>
												</Front>
											</Flexbox>

											<Flexbox widthUnit="100%" justifyContent="flex-end">
												<Back mobile={theme.breakpoints.mobile}>
													<BgBack mobile={theme.breakpoints.mobile}>
														<img src="./images/bg-card-back.png" alt="" />
													</BgBack>
													<CVC
														textColor={theme.colors.neutral.white}
														marginBottom="0"
														mobile={theme.breakpoints.mobile}
													>
														{cvc ? cvc : "000"}
													</CVC>
												</Back>
											</Flexbox>
										</Flexbox>
									</Card>
								</FlexHalf>
								<FlexHalf>
									<StyledForm mobile={theme.breakpoints.mobile}>
										<form onSubmit={(e) => handleFormSubmit(e)}>
											<FormControl
												marginBottom="25"
												mobileMarginBottom="20"
												mobile={theme.breakpoints.mobile}
											>
												<FormLabel
													textColor={theme.colors.neutral["very-dark-violet"]}
													marginBottom="8"
												>
													Cardholder Name
												</FormLabel>
												<FormInput
													borderColor={
														theme.colors.neutral["light-grayish-violet"]
													}
													textColor={theme.colors.neutral["very-dark-violet"]}
												>
													<input
														type="text"
														placeholder={"e.g. " + placeholderName}
														value={cardHolderName}
														onChange={(e) => handleChangeCardHolderName(e)}
														style={
															cardHolderNameStatus
																? {
																		borderColor: theme.colors.primary.red,
																  }
																: null
														}
													/>
												</FormInput>
												<ErrorFeedback
													textColor={theme.colors.primary.red}
													style={
														cardHolderNameStatus ? { display: "block" } : null
													}
												>
													{cardHolderNameStatus}
												</ErrorFeedback>
											</FormControl>
											<FormControl
												marginBottom="25"
												mobileMarginBottom="20"
												mobile={theme.breakpoints.mobile}
											>
												<FormLabel
													textColor={theme.colors.neutral["very-dark-violet"]}
													marginBottom="8"
												>
													Card Number
												</FormLabel>
												<FormInput
													borderColor={
														theme.colors.neutral["light-grayish-violet"]
													}
													textColor={theme.colors.neutral["very-dark-violet"]}
												>
													<input
														type="text"
														placeholder="e.g. 1234 5678 9123 0000"
														maxLength="19"
														value={handleCardDisplay()}
														onChange={(e) => handleChangeCardNumber(e)}
														style={
															cardNumberStatus
																? {
																		borderColor: theme.colors.primary.red,
																		textTransform: "uppercase",
																  }
																: { textTransform: "uppercase" }
														}
													/>
												</FormInput>
												<ErrorFeedback
													textColor={theme.colors.primary.red}
													style={cardNumberStatus ? { display: "block" } : null}
												>
													{cardNumberStatus}
												</ErrorFeedback>
											</FormControl>
											<Flexbox>
												<FlexHalf
													paddingRight="20"
													mobilePaddingRight="12"
													mobile={theme.breakpoints.mobile}
												>
													<FormControl>
														<FormLabel
															textColor={
																theme.colors.neutral["very-dark-violet"]
															}
															marginBottom="9"
														>
															Exp. Date (MM/YY)
														</FormLabel>
														<Flexbox>
															<FlexHalf paddingRight="5">
																<FormControl marginBottom="0">
																	<FormInput
																		borderColor={
																			theme.colors.neutral[
																				"light-grayish-violet"
																			]
																		}
																		textColor={
																			theme.colors.neutral["very-dark-violet"]
																		}
																	>
																		<input
																			type="text"
																			maxLength="2"
																			pattern="[0-9]*"
																			inputMode="numerical"
																			placeholder="MM"
																			value={month}
																			onChange={(e) => handleChangeMonth(e)}
																			style={
																				monthStatus
																					? {
																							borderColor:
																								theme.colors.primary.red,
																					  }
																					: null
																			}
																		/>
																	</FormInput>
																</FormControl>
															</FlexHalf>
															<FlexHalf paddingLeft="5">
																<FormControl marginBottom="0">
																	<FormInput
																		borderColor={
																			theme.colors.neutral[
																				"light-grayish-violet"
																			]
																		}
																		textColor={
																			theme.colors.neutral["very-dark-violet"]
																		}
																	>
																		<input
																			type="text"
																			maxLength="2"
																			pattern="[0-9]*"
																			inputMode="numerical"
																			placeholder="YY"
																			value={year}
																			onChange={(e) => handleChangeYear(e)}
																			style={
																				yearStatus
																					? {
																							borderColor:
																								theme.colors.primary.red,
																					  }
																					: null
																			}
																		/>
																	</FormInput>
																</FormControl>
															</FlexHalf>
														</Flexbox>
														{monthStatus && yearStatus ? (
															<ErrorFeedback
																textColor={theme.colors.primary.red}
																style={
																	monthStatus && yearStatus
																		? { display: "block" }
																		: null
																}
															>
																{monthStatus}
															</ErrorFeedback>
														) : monthStatus ? (
															<ErrorFeedback
																textColor={theme.colors.primary.red}
																style={
																	monthStatus ? { display: "block" } : null
																}
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
													<FormControl marginBottom="0">
														<FormLabel
															textColor={
																theme.colors.neutral["very-dark-violet"]
															}
															marginBottom="9"
														>
															CVC
														</FormLabel>
														<FormInput
															borderColor={
																theme.colors.neutral["light-grayish-violet"]
															}
															textColor={
																theme.colors.neutral["very-dark-violet"]
															}
														>
															<input
																type="text"
																maxLength="3"
																pattern="[0-9]*"
																inputMode="numerical"
																placeholder="e.g. 123"
																value={cvc}
																onChange={(e) => handleChangeCvc(e)}
																style={
																	cvcStatus
																		? {
																				borderColor: theme.colors.primary.red,
																		  }
																		: null
																}
															/>
														</FormInput>
														<ErrorFeedback
															textColor={theme.colors.primary.red}
															style={cvcStatus ? { display: "block" } : null}
														>
															{cvcStatus}
														</ErrorFeedback>
													</FormControl>
												</FlexHalf>
											</Flexbox>
											<StyledButton
												type="submit"
												textColor={theme.colors.neutral.white}
												bgColor={theme.colors.neutral["very-dark-violet"]}
												gradientFromColor={
													theme.colors.primary["gradient-from"]
												}
												gradientToColor={theme.colors.primary["gradient-to"]}
												marginTop="39"
											>
												<span>Confirm</span>
											</StyledButton>
										</form>
									</StyledForm>
								</FlexHalf>
							</Flexbox>
						</Container>
					</RightColumn>
				</Flexbox>
			</main>
		</ThemeProvider>
	);
}

export default App;
