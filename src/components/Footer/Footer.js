import React from "react";
import { Button } from "../../globalStyles";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./Footer.elements";

function Footer() {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Unite a nuestra plataforma contable y financiera para que juntos
          hagamos crecer tu empresa
        </FooterSubHeading>
        <FooterSubText>¿Te unís al reto?</FooterSubText>
        <Form>
          <FormInput name="email" type="email" placeholder="Your Email" />
          <Button fontBig>Comenzar</Button>
        </Form>
      </FooterSubscription>

      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">ChekeApp</SocialLogo>
          <WebsiteRights>ChekeApp © 2021</WebsiteRights>
          <SocialIcons>
            <SocialIconLink
              href="https://www.facebook.com/chekeapp"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.instagram.com/chekeapp/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href="https://twitter.com/Chekeapp"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.linkedin.com/company/chekeapp"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
