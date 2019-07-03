import styled from "styled-components"
import { CardSubtitle } from "reactstrap"

export const ContentSection = styled.section`
  padding-top: 7.5rem;
  padding-bottom: 7.5rem;
  background: "#393E44";
`

export const ContentSectionHeading = styled.div`
  h2 {
    font-size: 3rem;
  }
  h3 {
    font-size: 1rem;
    text-transform: uppercase;
  }
`
export const Subtitle = styled(CardSubtitle)`
  color: #1890ff;
  font-style: italic;
  border-bottom: 1px solid #ddd;
  margin-bottom: 5px;
`
