import { useState } from 'react'

// Styled
import * as s from './UploadField.styled'

const UploadField = ({ disabled, label, type, value, ...props }) => {
	const [focused, setFocused] = useState(value !== '')

	return (
		<s.FormGroup
			data-id={props.id || type}
			data-focused={focused}
			data-disabled={disabled}>
			<s.Label>{label}</s.Label>
			<s.Input
				type={type}
				value={value}
				onFocus={() => setFocused(true)}
				onBlur={() => (value === '' || !focused) && setFocused(false)}
				disabled={disabled}
				{...props}
			/>
		</s.FormGroup>
	)
}

export default UploadField
