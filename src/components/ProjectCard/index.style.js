import styled from "styled-components"
import { Link } from "gatsby"

export const GatbsbyLink = styled(Link)`
  display: block;
  position: relative;
  overflow: hidden;
  max-width: 530px;
  margin: auto auto 1rem;
`
export const Caption = styled.span`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  width: 100%;
  background-color: rgba(33, 37, 41, 0.2);
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
`
export const CaptionContent = styled.span`
  color: #fff;
  margin: auto 2rem 2rem;
  h2 {
    font-size: 0.8rem;
    text-transform: uppercase;
  }
  p {
    font-weight: 300;
    font-size: 1.2rem;
  }
`
