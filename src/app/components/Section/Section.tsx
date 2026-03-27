import { ReactNode } from "react"
import "./styles.scss"
const Section = ({children}:{children: ReactNode}) => {
  return (
    <section className="section-container">
      {children}
    </section>
  )
}

export default Section;