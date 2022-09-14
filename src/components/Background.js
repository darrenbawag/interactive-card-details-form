import { MainBackground } from "./styles/Background.styled";

const Background = ({ theme }) => {
  return (
		<MainBackground mobile={theme.breakpoints.mobile}>
			<div>
				<img className="desktop" src="./images/bg-main-desktop.png" alt="" />
				<img className="mobile" src="./images/bg-main-mobile.png" alt="" />
			</div>
		</MainBackground>
	);
}

export default Background;