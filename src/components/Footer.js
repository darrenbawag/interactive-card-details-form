import { StyledFooter } from "./styles/Footer.styled";

const Footer = ({ theme }) => {
  return (
		<StyledFooter
			textColor={theme.colors.neutral["very-dark-violet"]}
			mobile={theme.breakpoints.mobile}
		>
			<div className="attribution">
				Challenge by {/* eslint-disable-next-line */}
				<a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
					Frontend Mentor
				</a>
				{/* eslint-disable-next-line */}. Coded by{" "}
				<a href="https://github.com/darrenbawag" target="_blank">
					Darren Bawag
				</a>
				.
			</div>
		</StyledFooter>
	);
}

export default Footer;