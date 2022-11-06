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

const BackEnd = () => {
  return (
    <SkillContent>
      <SkillTitle>Back-end Developer</SkillTitle>

      <SkillBox>
        <SkillGroup>
          <SkillData>
            <i class="bx bx-badge-check"></i>
            <div>
              <SkillName>Spring</SkillName>
              <SkillLevel>Basic</SkillLevel>
            </div>
          </SkillData>

          <SkillData>
            <i class="bx bx-badge-check"></i>
            <div>
              <SkillName>Node Js</SkillName>
              <SkillLevel>Intermediate</SkillLevel>
            </div>
          </SkillData>

          <SkillData>
            <i class="bx bx-badge-check"></i>
            <div>
              <SkillName>MySQL</SkillName>
              <SkillLevel>Basic</SkillLevel>
            </div>
          </SkillData>
        </SkillGroup>

        <SkillGroup>
          <SkillData>
            <i class="bx bx-badge-check"></i>
            <div>
              <SkillName>Apollo</SkillName>
              <SkillLevel>Intermediate</SkillLevel>
            </div>
          </SkillData>

          <SkillData>
            <i class="bx bx-badge-check"></i>
            <div>
              <SkillName>Jenkins</SkillName>
              <SkillLevel>Beginner</SkillLevel>
            </div>
          </SkillData>

          <SkillData>
            <i class="bx bx-badge-check"></i>
            <div>
              <SkillName>Docker</SkillName>
              <SkillLevel>Beginner</SkillLevel>
            </div>
          </SkillData>
        </SkillGroup>
      </SkillBox>
    </SkillContent>
  );
};

export default BackEnd;
