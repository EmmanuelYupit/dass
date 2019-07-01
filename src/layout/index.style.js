import styled from "styled-components"

export const TeamContainer = styled.section`
  margin-top: "20px";
  margin-bottom: "20px";
`

export const ContentSection = styled.section`
  padding-top: 7.5rem;
  padding-bottom: 7.5rem;
  background: #393e44 !import;
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
export const Footer = styled.footer`
  padding-top: 5rem;
  padding-bottom: 5rem;
`
export const SocialLink = styled.a`
  display: block;
  height: 4rem;
  width: 4rem;
  line-height: 4.3rem;
  font-size: 1.5rem;
  background-color: #1d809f;
  -webkit-transition: background-color 0.15s ease-in-out;
  transition: background-color 0.15s ease-in-out;
  -webkit-box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #155d74;
    text-decoration: none;
  }
`
export const Image = styled.img`
  height: 10%;
  width: 10%;
`
export const NavbarContainer = styled.div`
  background: #393d46;
`
