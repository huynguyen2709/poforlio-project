import React from "react";
import {
  SkillContent,
  SkillTitle,
  SkillBox,
  SkillGroup,
  SkillData,
  SkillName,
  SkillLevel,
} from "./styles";

const FrontEnd = () => {
  return (
    <SkillContent>
      <SkillTitle>Front-end Developer</SkillTitle>

      <SkillBox>
        <SkillGroup>
          <SkillData>
            <i class="bx bx-badge-check"></i>
            <div>
              <SkillName>HTML</SkillName>
              <SkillLevel>Advanced</SkillLevel>
            </div>
          </SkillData>

          <SkillData>
            <i class="bx bx-badge-check"></i>
            <div>
              <SkillName>CSS</SkillName>
              <SkillLevel>Advanced</SkillLevel>
            </div>
          </SkillData>

          <SkillData>
            <i class="bx bx-badge-check"></i>
            <div>
              <SkillName>JavaScript</SkillName>
              <SkillLevel>Advanced</SkillLevel>
            </div>
          </SkillData>
        </SkillGroup>

        <SkillGroup>
          <SkillData>
            <i class="bx bx-badge-check"></i>
            <div>
              <SkillName>Git</SkillName>
              <SkillLevel>Advanced</SkillLevel>
            </div>
          </SkillData>

          <SkillData>
            <i class="bx bx-badge-check"></i>
            <div>
              <SkillName>React</SkillName>
              <SkillLevel>Advanced</SkillLevel>
            </div>
          </SkillData>

          <SkillData>
            <i class="bx bx-badge-check"></i>
            <div>
              <SkillName>GraphQL</SkillName>
              <SkillLevel>Intermediate</SkillLevel>
            </div>
          </SkillData>
        </SkillGroup>
      </SkillBox>
    </SkillContent>
  );
};

export default FrontEnd;
