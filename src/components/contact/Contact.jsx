import React, { useRef } from "react";
import styled from "styled-components";
import {
  Container,
  CommonSection,
  CommonTitle,
  CommonSubTitle,
  H3Title,
} from "../../common/styles";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_wgdlecd",
      "template_8nqp3g6",
      form.current,
      "F2QOP1V4pGCKE98aA"
    );
    e.target.reset();
  };

  return (
    <CommonSection id="contact">
      <CommonTitle>Get in touch</CommonTitle>
      <CommonSubTitle>Contact Me</CommonSubTitle>

      <ContactContainer>
        <ContactContent>
          <StyledH3Title>Talk to me</StyledH3Title>

          <ContactInfo>
            <ContactCard>
              <i class="bx bx-envelope"></i>

              <ContactCardTitle>Email</ContactCardTitle>
              <ContactCardData>huyhamho145@gmail.com</ContactCardData>

              <ContactButton href="mailto:huyhamho145@gmail.com">
                Write me <i className="bx bx-right-arrow-alt"></i>
              </ContactButton>
            </ContactCard>

            <ContactCard>
              <i class="bx bxl-whatsapp"></i>

              <ContactCardTitle>Zalo</ContactCardTitle>
              <ContactCardData>0336319905</ContactCardData>

              <ContactButton>
                Write me <i className="bx bx-right-arrow-alt"></i>
              </ContactButton>
            </ContactCard>

            <ContactCard>
              <i class="bx bxl-messenger"></i>

              <ContactCardTitle>Messenger</ContactCardTitle>
              <ContactCardData>Huy Nguyen</ContactCardData>

              <ContactButton>
                Write me <i className="bx bx-right-arrow-alt"></i>
              </ContactButton>
            </ContactCard>
          </ContactInfo>
        </ContactContent>

        <ContactContent>
          <StyledH3Title>Write me your need</StyledH3Title>
          <ContactForm ref={form} onSubmit={sendEmail}>
            <ContactFormDiv>
              <ContactFormTag>Name</ContactFormTag>
              <ContactFormInput
                type="name"
                name="name"
                placeholder="Insert your name"
              />
            </ContactFormDiv>
            <ContactFormDiv>
              <ContactFormTag>Mail</ContactFormTag>
              <ContactFormInput
                type="email"
                name="email"
                placeholder="Insert your mail"
              />
            </ContactFormDiv>
            <ContactFormDiv style={{ height: "11rem" }}>
              <ContactFormTag>Information</ContactFormTag>
              <ContactFormTextArea
                name="project"
                id=""
                cols="30"
                rows="10"
                placeholder="Insert your need"
              ></ContactFormTextArea>
            </ContactFormDiv>
            <ButtonLink type="submit">
              Send Message
              <svg
                className="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                  fill="#fff"
                ></path>
                <path
                  d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                  fill="#fff"
                ></path>
              </svg>
            </ButtonLink>
          </ContactForm>
        </ContactContent>
      </ContactContainer>
    </CommonSection>
  );
};

export default Contact;

const StyledH3Title = styled(H3Title)`
  text-align: center;
  margin-bottom: 1.5rem;
`;

const ContactContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 6rem;
  justify-content: center;
  padding-bottom: 3rem;

  @media screen and (max-width: 992px) {
    column-gap: 3rem;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 3rem;
  }
`;

const ContactContent = styled.div``;

const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: 300px;
  row-gap: 1rem;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const ContactCard = styled.div`
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-radius: 0.75rem;
  text-align: center;
  .bx {
    font-size: 2rem;
    color: #333333;
    margin-bottom: 0.25rem;
  }
`;

const ContactCardTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 500;
`;

const ContactCardData = styled.div`
  font-size: 0.875rem;
  display: block;
  margin-bottom: 0.75rem;
`;

const ContactButton = styled.a`
  color: #757575;
  font-size: 0.875rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.25rem;
  .bx {
    font-size: 1rem;
    color: #757575;
    transition: 0.3s;
  }
  :hover {
    .bx {
      font-size: 1rem;
      transition: 0.3s;
      color: #757575;
      transform: translateX(0.25rem);
    }
  }
`;

const ContactForm = styled.form`
  width: 360px;

  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }

  @media screen and (max-width: 576px) {
    width: 300px;
  }

  @media screen and (max-width: 350px) {
    width: 100%;
  }
`;

const ContactFormDiv = styled.div`
  position: relative;
  margin-bottom: 2rem;
  height: 4rem;
`;

const ContactFormTag = styled.label`
  position: absolute;
  top: -0.75rem;
  left: 1.25rem;
  font-size: 0.875rem;
  padding: 0.25rem;
  background-color: #fafafa;
  z-index: 10;
`;

const ContactFormInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border: 2px solid rgba(0, 0, 0, 0.3);
  background: none;
  color: #757575;
  border-radius: 0.75rem;
  outline: none;
  padding: 1.5rem;
  z-index: 1;
`;

const ContactFormTextArea = styled.textarea`
  position: absolute;
  width: 100%;
  border: 2px solid rgba(0, 0, 0, 0.3);
  height: 11rem;
  padding: 1.5rem;
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 0.75rem;
  resize: none;
`;

const ButtonLink = styled.button`
  display: flex;
  cursor: pointer;
  justify-content: center;
  min-width: 180px;
  max-width: 250px;
  align-items: center;
  background-color: #333333;
  color: #fff;
  padding: 1.25rem 2rem;
  border-radius: 1rem;
  font-weight: 500;
  :hover {
    background-color: #000000;
  }

  @media screen and (max-width: 768px) {
    max-width: initial;
    width: 100%;
  }

  .button__icon {
    /* For small devices */
    @media screen and (max-width: 350px) {
      width: 22px;
      height: 22px;
    }
  }

  /* For small devices */
  @media screen and (max-width: 350px) {
    padding: 1rem 1.5rem;
  }
`;
