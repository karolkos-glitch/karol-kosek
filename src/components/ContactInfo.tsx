import { Paragraph } from "styles/shared"
import { Root, ContactButton} from './ContactInfo.styles'

const ContactInfo = () => {
  return (
    <Root>
      <Paragraph fontSize="lg">
        Interested in cooperation?
      </Paragraph>
    <ContactButton>
      Contact me
    </ContactButton>
    </Root>
  )
}

export default ContactInfo