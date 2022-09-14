import {
	FormControl,
	FormLabel,
	FormInput,
	ErrorFeedback,
} from "./styles/Form.styled";

const Input = ({
  theme,
  marginBottom,
	mobileMarginBottom,
	className,
  label,
  type,
  placeholder,
  maxLength,
  pattern,
  inputMode,
  value,
  onChange,
  styleInput,
  onBlur,
  styleError,
  status
}) => {
	return (
		<FormControl
			marginBottom={marginBottom}
			mobileMarginBottom={mobileMarginBottom}
			mobile={theme.breakpoints.mobile}
			className={className}
		>
			{label && (
				<FormLabel
					textColor={theme.colors.neutral["very-dark-violet"]}
					marginBottom="8"
				>
					{label}
				</FormLabel>
			)}
			<FormInput
				borderColor={theme.colors.neutral["light-grayish-violet"]}
				textColor={theme.colors.neutral["very-dark-violet"]}
			>
				<input
					type={type}
					placeholder={placeholder}
					maxLength={maxLength}
					pattern={pattern}
					inputMode={inputMode}
					value={value}
					onChange={(e) => onChange(e)}
					style={styleInput}
					onBlur={onBlur && ((e) => onBlur(e))}
				/>
			</FormInput>
			{status && (
				<ErrorFeedback textColor={theme.colors.primary.red} style={styleError}>
					{status}
				</ErrorFeedback>
			)}
		</FormControl>
	);
};

export default Input;
