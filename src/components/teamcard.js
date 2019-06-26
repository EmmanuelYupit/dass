import React from "react"
import { Card, CardTitle, CardText, CardImg } from "reactstrap"

const TeamCard = ({ member: { name, description, position } }) => (
  <Card body outline color="secundary">
    <CardTitle className="text-center">{name}</CardTitle>
    <CardText className="text-center">{position}</CardText>
    <CardText className="text-justified">{description}</CardText>
  </Card>
)

export default TeamCard
