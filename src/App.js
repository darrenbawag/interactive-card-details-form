import { useState, useEffect, useRef } from "react";
import { gsap, Power4 } from "gsap";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./components/styles/Global.styled";
import { Container } from "./components/styles/Container.styled";
import { Flexbox, LeftColumn, RightColumn, FlexHalf } from "./components/styles/Flexbox.styled";

import Background from "./components/Background";
import Card from "./components/Card";
import Form from "./components/Form";
import Footer from "./components/Footer";

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
	const el = useRef();
	const q = gsap.utils.selector(el);

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

	const handleBlurMonth = (e) => {
		const value = e.target.value.toString();
		if (value.length === 1 && value > 0) {
			e.target.value = "0" + value;
		}
		e.stopPropagation();

		(e.target.value === "" || /^[0-9\b]+$/.test(e.target.value)) &&
			setMonth(e.target.value);
	};

	const handleChangeYear = (e) => {
		setYearStatus("");		
		(e.target.value === "" || /^[0-9\b]+$/.test(e.target.value)) &&
			setYear(e.target.value);
	};

	const handleBlurYear = (e) => {
		const value = e.target.value.toString();
		if (value.length === 1 && value > 0) {
			e.target.value = "0" + value;
		}
		e.stopPropagation();

		(e.target.value === "" || /^[0-9\b]+$/.test(e.target.value)) &&
			setYear(e.target.value);
	};

	const handleChangeCvc = (e) => {
		setCvcStatus("");
		(e.target.value === "" || /^[0-9\b]+$/.test(e.target.value)) &&
			setCvc(e.target.value);
	};

	const validator = () => {
		let checkIsValid = true;

		if (!cardHolderName) {
			setCardHolderNameStatus("Can't be blank");
			checkIsValid = false;
		}
		if (cardNumber !== "") {
			if (/\D/.test(cardNumber.split(" ").join(""))) {
				setCardNumberStatus("Wrong format, numbers only");
				checkIsValid = false;
			}
			if (cardNumber.length !== 19) {
				setCardNumberStatus("Wrong format, it should be 16-digit cards");
				checkIsValid = false;
			}
		} else {
			setCardNumberStatus("Can't be blank");
			checkIsValid = false;
		}
		if (!month) {
			setMonthStatus("Can't be blank");
			checkIsValid = false;
		}
		if (!year) {
			setYearStatus("Can't be blank");
			checkIsValid = false;
		}
		if (cvc !== "") {
			if (cvc.length !== 3) {
				setCvcStatus("Wrong format, 3-digit");
				checkIsValid = false;
			}
		} else {
			setCvcStatus("Can't be blank");
			checkIsValid = false;
		}
		
		return checkIsValid;
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		const checkIsValid = validator();
		if (checkIsValid) {
			let tl = gsap.timeline({
				default: { ease: Power4.easeInOut, duration: 2 },
			});
			tl.to(q(".formCtrl"), { opacity: 0, stagger: 0.3, y: -100 })
				.to(q(".formCtrl"), { display: "none" })
				.to(q(".successMsg"), { opacity: 1, display: "block" })
				.to(
					q(".submitBtn span span:first-child"),
					{ transform: "translateY(-100%)" },
					"-=1"
				)
				.to(
					q(".submitBtn span span:last-child"),
					{ transform: "translateY(-100%)" },
					"-=1"
				);
			
			const submitBtn = document.querySelector(".submitBtn");
			submitBtn.type = "button";
			submitBtn.classList.add("button");

			const buttonBtn = document.querySelector(".submitBtn.button");
			const btnFunc = () => {
				setCardNumber("");
				setCardHolderName("");
				setMonth("");
				setYear("");
				setCvc("");

				let tl = gsap.timeline({
					default: { ease: Power4.easeInOut, duration: 2 },
				});
				tl.to(q(".successMsg"), { opacity: 0, display: "none" })
					.to(q(".formCtrl"), { display: "" })
					.to(q(".formCtrl"), { opacity: 1, stagger: { each: -0.3 }, y: 0 })
					.to(
						q(".submitBtn span span:first-child"),
						{ y: 0 },
						"-=1"
					)
					.to(
						q(".submitBtn span span:last-child"),
						{ y: 0 },
						"-=1"
					);

				const submitBtn = document.querySelector(".submitBtn");
				submitBtn.classList.remove("button");
				setTimeout(() => {
					submitBtn.type = "submit";
				}, 1000);
				buttonBtn.removeEventListener("click", btnFunc);
			};
			buttonBtn.addEventListener("click", btnFunc);
		}
	};

	// useEffect(() => {
	// 	let tl = gsap.timeline({
	// 		default: { ease: Power4.easeInOut, duration: 2 },
	// 	});
	// 	tl.to(q(".frontCard"), { opacity: 1, x: 0 })
	// 		.to(q(".backCard"), { opacity: 1, x: 0 })
	// 		.from(q(".formCtrl"), { opacity: 0, stagger: 0.3, y: 100 }, "-=1")
	// 		.to(q(".formCtrl"), { opacity: 1, stagger: 0.3, y: 0 })
	// 		.from(q(".submitBtn"), { opacity: 0, y: 100 }, "-=1.3")
	// 		.to(q(".submitBtn"), { opacity: 1, y: 0 })
	// 		.from(q(".attribution"), { opacity: 0, y: 100 }, "-=1.3")
	// 		.to(q(".attribution"), { opacity: 1, y: 0 });
	// 	// eslint-disable-next-line
	// }, []);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles
				placeholderColor={theme.colors.neutral["light-grayish-violet"]}
				gradientFromColor={theme.colors.primary["gradient-from"]}
				gradientToColor={theme.colors.primary["gradient-to"]}
			/>
			<main ref={el}>
				<Flexbox
					heightUnit="100%"
					mobileFlexDirection="column"
					mobile={theme.breakpoints.mobile}
				>
					<LeftColumn mobile={theme.breakpoints.mobile}>
						<Background theme={theme} />
					</LeftColumn>
					<RightColumn mobile={theme.breakpoints.mobile}>
						<Container mobile={theme.breakpoints.mobile}>
							<Flexbox
								heightUnit="100%"
								mobileFlexDirection="column"
								mobile={theme.breakpoints.mobile}
							>
								<FlexHalf>
									<Card
										theme={theme}
										cardNumber={cardNumber}
										cardHolderName={cardHolderName}
										month={month}
										year={year}
										cvc={cvc}
										placeholderName={placeholderName}
										handleCardDisplay={handleCardDisplay}
									/>
								</FlexHalf>
								<FlexHalf>
									<Form
										theme={theme}
										cardHolderName={cardHolderName}
										month={month}
										year={year}
										cvc={cvc}
										cardNumberStatus={cardNumberStatus}
										cardHolderNameStatus={cardHolderNameStatus}
										monthStatus={monthStatus}
										yearStatus={yearStatus}
										cvcStatus={cvcStatus}
										placeholderName={placeholderName}
										handleCardDisplay={handleCardDisplay}
										handleChangeCardHolderName={handleChangeCardHolderName}
										handleChangeCardNumber={handleChangeCardNumber}
										handleChangeMonth={handleChangeMonth}
										handleBlurMonth={handleBlurMonth}
										handleChangeYear={handleChangeYear}
										handleBlurYear={handleBlurYear}
										handleChangeCvc={handleChangeCvc}
										handleFormSubmit={handleFormSubmit}
									/>
									<Footer theme={theme} />
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
