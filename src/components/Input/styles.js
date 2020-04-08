import styled, { css } from 'styled-components'
import colors from '../../styles/colors'

const inputStyle = css`
  padding: 4px 8px;
  background: none;
  border: none;
  border-bottom-color: currentcolor;
  border-bottom-style: none;
  border-bottom-width: medium;
  display: block;
  border-bottom: 2px solid #d89e63;
  color: #fff;
  font-size: 1.125em;
  width: 100%;
  max-width: 360px;
  font-family: 'Lato', sans-serif;
`

export const Wrapper = styled.div`
  margin-top: 16px;
`

export const Label = styled.label`
  color: ${colors.secondary};
  font-size: 1.125em;
`

export const Input = styled.input`
  ${inputStyle}
`

export const TextArea = styled.textarea`
  ${inputStyle}
  resize: none;
  min-height: 128px;
`
