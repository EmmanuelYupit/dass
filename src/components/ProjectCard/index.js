import React from "react"
import { GatbsbyLink, Caption, CaptionContent } from "./index.style"

const PorjectCard = ({ project: { url, caption, description, imageUrl } }) => (
  <GatbsbyLink to={url}>
    <Caption>
      <CaptionContent>
        <h2>{caption}</h2>
        <p className="mb-0">{description}</p>
      </CaptionContent>
    </Caption>
    <img src={imageUrl} className="img-fluid"></img>
  </GatbsbyLink>
)

export default PorjectCard
