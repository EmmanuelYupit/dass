import React from "react"
import styled from "styled-components"

const Code = styled.code`
  display: block;
  white-space: pre-wrap;
`

const CodeBlock = ({ code }) => (
  <pre>
    <Code>{code}</Code>
  </pre>
)

export default CodeBlock
