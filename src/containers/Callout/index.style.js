import styled from "styled-components"
import img1 from "../../images/bg-callout.jpg"

export const Wrap = styled.section`
  padding: 15rem 0;
  background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(rgba(255, 255, 255, 0.1)),
      to(rgba(255, 255, 255, 0.1))
    ),
    url(${img1});
  background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.1) 100%
    ),
    url(${img1});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  h2 {
    font-size: 3.5rem;
    font-weight: 700;
    display: block;
    max-width: 30rem;
  }
`
