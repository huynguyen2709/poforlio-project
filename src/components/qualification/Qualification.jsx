import React, { useState } from "react";
import styled from "styled-components";
import {
  Container,
  CommonSection,
  CommonTitle,
  CommonSubTitle,
} from "../../common/styles";

const Qualification = () => {
  const [isActive, setIsActive] = useState(true);

  console.log("this is active:", isActive);
  const handleSetActiveEdu = () => {
    setIsActive(true);
  };

  const handleSetActiveExp = () => {
    setIsActive(false);
  };
  return (
    <CommonSection>
      <CommonTitle>Qualification</CommonTitle>
      <CommonSubTitle>My personel journey</CommonSubTitle>

      <QualificationContainer>
        <QualificationTab>
          <ButtonLink onClick={handleSetActiveEdu}>
            <i className="uil uil-graduation-cap"></i>
            Education
          </ButtonLink>
          <ButtonLink onClick={handleSetActiveExp}>
            <i className="uil uil-briefcase-alt"></i>
            Experience
          </ButtonLink>
        </QualificationTab>

        <QualificationSections>
          <QualificationContentEdu isActive={isActive}>
            <QualificationData>
              <div>
                <QualificationTitle>Art Director</QualificationTitle>
                <QualificationSubTitle>
                  Viet Nam - Instutute
                </QualificationSubTitle>
                <QualificationCalendar>
                  <i className="uil uil-calender"></i> 2022 - Present
                </QualificationCalendar>
              </div>

              <div>
                <QualificationRounder></QualificationRounder>
                <QualificationLine></QualificationLine>
              </div>
            </QualificationData>

            <QualificationData>
              <div></div>

              <div>
                <QualificationRounder></QualificationRounder>
                <QualificationLine></QualificationLine>
              </div>

              <div>
                <QualificationTitle>Web Design</QualificationTitle>
                <QualificationSubTitle>Spain - Institute</QualificationSubTitle>
                <QualificationCalendar>
                  <i className="uil uil-calender"></i> 20219 - 2020
                </QualificationCalendar>
              </div>
            </QualificationData>

            <QualificationData>
              <div>
                <QualificationTitle>Art Director</QualificationTitle>
                <QualificationSubTitle>
                  Viet Nam - Instutute
                </QualificationSubTitle>
                <QualificationCalendar>
                  <i className="uil uil-calender"></i> 2022 - Present
                </QualificationCalendar>
              </div>

              <div>
                <QualificationRounder></QualificationRounder>
                <QualificationLine></QualificationLine>
              </div>
            </QualificationData>

            <QualificationData>
              <div></div>

              <div>
                <QualificationRounder></QualificationRounder>
                <QualificationLine></QualificationLine>
              </div>

              <div>
                <QualificationTitle>Web Design</QualificationTitle>
                <QualificationSubTitle>Spain - Institute</QualificationSubTitle>
                <QualificationCalendar>
                  <i className="uil uil-calender"></i> 20219 - 2020
                </QualificationCalendar>
              </div>
            </QualificationData>
          </QualificationContentEdu>

          <QualificationContentExp isActive={isActive}>
            <QualificationData>
              <div>
                <QualificationTitle>Art Director</QualificationTitle>
                <QualificationSubTitle>
                  Viet Nam - Instutute
                </QualificationSubTitle>
                <QualificationCalendar>
                  <i className="uil uil-calender"></i> 2022 - Present
                </QualificationCalendar>
              </div>

              <div>
                <QualificationRounder></QualificationRounder>
                <QualificationLine></QualificationLine>
              </div>
            </QualificationData>

            <QualificationData>
              <div></div>

              <div>
                <QualificationRounder></QualificationRounder>
                <QualificationLine></QualificationLine>
              </div>

              <div>
                <QualificationTitle>Web Design</QualificationTitle>
                <QualificationSubTitle>Spain - Institute</QualificationSubTitle>
                <QualificationCalendar>
                  <i className="uil uil-calender"></i> 20219 - 2020
                </QualificationCalendar>
              </div>
            </QualificationData>

            <QualificationData>
              <div>
                <QualificationTitle>Art Director</QualificationTitle>
                <QualificationSubTitle>
                  Viet Nam - Instutute
                </QualificationSubTitle>
                <QualificationCalendar>
                  <i className="uil uil-calender"></i> 2022 - Present
                </QualificationCalendar>
              </div>

              <div>
                <QualificationRounder></QualificationRounder>
                <QualificationLine></QualificationLine>
              </div>
            </QualificationData>

            <QualificationData>
              <div></div>

              <div>
                <QualificationRounder></QualificationRounder>
                <QualificationLine></QualificationLine>
              </div>

              <div>
                <QualificationTitle>Web Design</QualificationTitle>
                <QualificationSubTitle>Spain - Institute</QualificationSubTitle>
                <QualificationCalendar>
                  <i className="uil uil-calender"></i> 20219 - 2020
                </QualificationCalendar>
              </div>
            </QualificationData>
          </QualificationContentExp>
        </QualificationSections>
      </QualificationContainer>
    </CommonSection>
  );
};

export default Qualification;

const QualificationContainer = styled(Container)`
  max-width: 768px;
`;

const QualificationTab = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const ButtonLink = styled.div`
  .uil {
    margin-right: 0.5rem;
    font-size: 1.8rem;
    font-weight: 500;
  }
  color: #333333;
  margin: 1rem;
  cursor: pointer;
  :hover {
    color: #000000;
  }
`;

const QualificationSections = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const QualificationContentEdu = styled.div`
  display: ${({ isActive }) => (isActive ? "block" : "none")};
`;

const QualificationContentExp = styled.div`
  display: ${({ isActive }) => (!isActive ? "block" : "none")};
`;

const QualificationData = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  column-gap: 3.5rem;
`;

const QualificationTitle = styled.h3`
  font-size: 1rem;
  font-weight: 500;
`;

const QualificationSubTitle = styled.span`
  display: inline-block;
  font-size: 0.875rem;
  margin-bottom: 1rem;
`;

const QualificationCalendar = styled.div`
  font-size: 0.875rem;
`;

const QualificationRounder = styled.span`
  display: inline-block;
  width: 13px;
  height: 13px;
  background-color: #757575;
  border-radius: 50%;
`;

const QualificationLine = styled.span`
  display: block;
  width: 1px;
  height: 100%;
  background-color: #757575;
  transform: translate(6px, -7px);
`;
