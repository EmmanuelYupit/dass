import React from "react"
import {
  User,
  ContentUser,
  ContentDescription,
  Profession,
  FlipCard,
  Front,
  Back,
} from "./index.style"

const FrontCard = () => (
  <ContentUser>
    <User />
    <strong>Jhon Doe</strong>
  </ContentUser>
)

const BackCard = () => (
  <ContentDescription>
    <div>
      <Profession>Developer</Profession>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      1500s.
    </div>
  </ContentDescription>
)

const CardFlip = ({ front, back }) => (
  <FlipCard>
    <Front>{front}</Front>
    <Back>{back}</Back>
  </FlipCard>
)

const Card = () => <CardFlip front={<FrontCard />} back={<BackCard />} />

export default Card
