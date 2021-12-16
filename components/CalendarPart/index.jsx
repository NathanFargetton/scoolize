import React from "react";
import styled from "styled-components";
import {
  Border8pxJade,
  Border1pxEastBay,
  Border1pxJade,
  HeeboBoldBlack19px,
  Border1pxFf5d22,
  HeeboNormalBlack25px,
  HeeboNormalEastBay12px,
  Border8pxFf5d22,
  HeeboBoldOrange60px,
  HeeboNormalJade12px,
  Border1pxDoveGray,
  Border8pxEastBay,
  HeeboBoldEastBay60px,
  HeeboNormalOrange12px,
  HeeboBoldJade60px,
} from "../../styledMixins";


function CalendarPart(props) {
  const { className } = props;

  return (
    <CalendarPart1 className={`calendar-part ${className || ""}`}>
      <OverlapGroup5 className="overlap-group5-2">
        <JaiDuTempsEtJe className="jai-du-temps-et-je">
          J&#39;ai du temps et je m&#39;organise pour me renseigner au mieux sur mon orientation..
        </JaiDuTempsEtJe>
        <Groupe1892 className="groupe-1892">
          <GroupContainer className="group-container">
            <OverlapGroup className="overlap-group-12">
              <Trac1994 className="trac-1994" src="/img/trac--1994-1@1x.png" />
              <Ellipse57 className="ellipse-57"></Ellipse57>
              <Ellipse58 className="ellipse-58"></Ellipse58>
              <Ellipse59 className="ellipse-59"></Ellipse59>
              <Ellipse60 className="ellipse-60"></Ellipse60>
              <Ellipse61 className="ellipse-61"></Ellipse61>
              <Ellipse62 className="ellipse-62"></Ellipse62>
              <Ellipse63 className="ellipse-63"></Ellipse63>
              <Ellipse64 className="ellipse-64"></Ellipse64>
              <Ellipse65 className="ellipse-65"></Ellipse65>
              <Ellipse66 className="ellipse-66"></Ellipse66>
              <Ellipse67 className="ellipse-67"></Ellipse67>
              <Ellipse68 className="ellipse-68"></Ellipse68>
            </OverlapGroup>
            <Groupe1884 className="groupe-1884">
              <Oct className="oct">Oct.</Oct>
              <Nov2021 className="nov-2021">Nov. 2021</Nov2021>
              <Dc className="dc">Déc.</Dc>
              <Janv2022 className="janv-2022">Janv. 2022</Janv2022>
              <Fvrier className="fvrier">Février</Fvrier>
              <Place className="place">Mars</Place>
              <Place1 className="place-1">Avril</Place1>
              <Mai className="mai">Mai</Mai>
              <Juin className="juin">Juin</Juin>
              <Juillet className="juillet">Juillet</Juillet>
              <Aot className="aot">Août</Aot>
              <September className="september">September</September>
            </Groupe1884>
          </GroupContainer>
          <GroupContainer1 className="group-container-1">
            <Groupe1885 className="groupe-1885">
              <Number className="number">1</Number>
            </Groupe1885>
            <OverlapGroup1 className="overlap-group1-11">
              <Rectangle635 className="rectangle-635"></Rectangle635>
              <DbutOctobre2021 className="dbut-octobre-2021">
                <span className="span0-4 heebo-normal-black-12px">Début Octobre 2021 → Janvier 2022</span>
                <span className="span1-4 heebo-normal-orange-12px-2">
                  <br />
                  Je m&#39;informe et découvre les formations
                </span>
              </DbutOctobre2021>
            </OverlapGroup1>
            <Groupe1886 className="groupe-1886">
              <Number1 className="number-1">2</Number1>
            </Groupe1886>
            <OverlapGroup2 className="overlap-group2-6">
              <Rectangle636 className="rectangle-636"></Rectangle636>
              <Address className="address">
                <span className="span0-5 heebo-normal-black-12px">
                  20 Janvier → 29 Mars → 7 Avril 2022
                  <br />
                </span>
                <span className="span1-5 heebo-normal-east-bay-12px-2">
                  Je m&#39;inscris pour formuler mes voeux et <br />
                  je finalise mon dossier
                </span>
              </Address>
            </OverlapGroup2>
            <Groupe1887 className="groupe-1887">
              <Number2 className="number-2">3</Number2>
            </Groupe1887>
            <OverlapGroup3 className="overlap-group3-8">
              <Rectangle637 className="rectangle-637"></Rectangle637>
              <Address1 className="address-1">
                <span className="span0-6 heebo-normal-black-12px">
                  2 Juin → 15 Juillet 2022
                  <br />
                </span>
                <span className="span1-6 heebo-normal-jade-12px-2">
                  Je reçois les réponses des formations et
                  <br /> je choisis
                </span>
              </Address1>
            </OverlapGroup3>
          </GroupContainer1>
        </Groupe1892>
      </OverlapGroup5>
    </CalendarPart1>
  );
}

const CalendarPart1 = styled.div`
  height: 336px;
  z-index: 2;
  margin-top: 106px;
  margin-right: 40px;
  display: flex;
  align-items: flex-end;
  min-width: 1571px;

  &.calendar-part.calendar-part-1 {
    align-self: flex-end;
  }
`;

const OverlapGroup5 = styled.div`
  width: 1571px;
  height: 334px;
  position: relative;
`;

const JaiDuTempsEtJe = styled.div`
  ${HeeboNormalBlack25px}
  position: absolute;
  width: 909px;
  height: 47px;
  top: 0;
  left: 28px;
  letter-spacing: 0;
  line-height: 22px;
`;

const Groupe1892 = styled.div`
  ${Border1pxDoveGray}
  position: absolute;
  width: 1571px;
  top: 44px;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 23px 0;
  align-items: center;
  min-height: 291px;
  background-color: var(--white);
`;

const GroupContainer = styled.div`
  width: 1474px;
  height: 102px;
  position: relative;
  margin-top: 4px;
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 1474px;
  height: 60px;
  top: 42px;
  left: 0;
`;

const Trac1994 = styled.img`
  position: absolute;
  width: 1474px;
  height: 9px;
  top: 25px;
  left: 0;
  object-fit: cover;
`;

const Ellipse57 = styled.div`
  ${Border8pxFf5d22}
  position: absolute;
  width: 61px;
  height: 60px;
  top: 0;
  left: 62px;
  background-color: var(--white);
  border-radius: 30.5px/30px;
`;

const Ellipse58 = styled.div`
  ${Border8pxFf5d22}
  position: absolute;
  width: 60px;
  height: 60px;
  top: 0;
  left: 177px;
  background-color: var(--white);
  border-radius: 30px;
`;

const Ellipse59 = styled.div`
  ${Border8pxFf5d22}
  position: absolute;
  width: 60px;
  height: 60px;
  top: 0;
  left: 292px;
  background-color: var(--white);
  border-radius: 30px;
`;

const Ellipse60 = styled.div`
  ${Border8pxFf5d22}
  position: absolute;
  width: 60px;
  height: 60px;
  top: 0;
  left: 407px;
  background-color: var(--white);
  border-radius: 30px;
`;

const Ellipse61 = styled.div`
  ${Border8pxEastBay}
  position: absolute;
  width: 60px;
  height: 60px;
  top: 0;
  left: 522px;
  background-color: var(--white);
  border-radius: 30px;
`;

const Ellipse62 = styled.div`
  ${Border8pxEastBay}
  position: absolute;
  width: 60px;
  height: 60px;
  top: 0;
  left: 637px;
  background-color: var(--white);
  border-radius: 30px;
`;

const Ellipse63 = styled.div`
  ${Border8pxEastBay}
  position: absolute;
  width: 60px;
  height: 60px;
  top: 0;
  left: 751px;
  background-color: var(--white);
  border-radius: 30px;
`;

const Ellipse64 = styled.div`
  ${Border8pxEastBay}
  position: absolute;
  width: 60px;
  height: 60px;
  top: 0;
  left: 866px;
  background-color: var(--white);
  border-radius: 30px;
`;

const Ellipse65 = styled.div`
  ${Border8pxJade}
  position: absolute;
  width: 60px;
  height: 60px;
  top: 0;
  left: 981px;
  background-color: var(--white);
  border-radius: 30px;
`;

const Ellipse66 = styled.div`
  ${Border8pxJade}
  position: absolute;
  width: 60px;
  height: 60px;
  top: 0;
  left: 1096px;
  background-color: var(--white);
  border-radius: 30px;
`;

const Ellipse67 = styled.div`
  ${Border8pxJade}
  position: absolute;
  width: 60px;
  height: 60px;
  top: 0;
  left: 1211px;
  background-color: var(--white);
  border-radius: 30px;
`;

const Ellipse68 = styled.div`
  ${Border8pxJade}
  position: absolute;
  width: 60px;
  height: 60px;
  top: 0;
  left: 1326px;
  background-color: var(--white);
  border-radius: 30px;
`;

const Groupe1884 = styled.div`
  ${HeeboBoldBlack19px}
  position: absolute;
  height: 43px;
  top: 0;
  left: 76px;
  display: flex;
  align-items: flex-start;
  min-width: 1329px;
`;

const Oct = styled.div`
  width: 45px;
  height: 45px;
  margin-top: -1.5px;
  letter-spacing: 0;
  line-height: 22px;
`;

const Nov2021 = styled.div`
  width: 91px;
  height: 45px;
  margin-left: 43px;
  margin-top: -1.5px;
  letter-spacing: 0;
  line-height: 22px;
`;

const Dc = styled.div`
  width: 45px;
  height: 45px;
  margin-left: 50px;
  margin-top: -1.5px;
  letter-spacing: 0;
  line-height: 22px;
`;

const Janv2022 = styled.div`
  width: 104px;
  height: 45px;
  margin-left: 41px;
  margin-top: -1.5px;
  letter-spacing: 0;
  line-height: 22px;
`;

const Fvrier = styled.div`
  width: 68px;
  height: 45px;
  margin-left: 26px;
  margin-top: -1.5px;
  letter-spacing: 0;
  line-height: 22px;
`;

const Place = styled.div`
  width: 49px;
  height: 45px;
  margin-left: 55px;
  margin-top: -1.5px;
  letter-spacing: 0;
  line-height: 22px;
`;

const Place1 = styled.div`
  width: 49px;
  height: 45px;
  margin-left: 66px;
  margin-top: -1.5px;
  letter-spacing: 0;
  line-height: 22px;
`;

const Mai = styled.div`
  width: 49px;
  height: 45px;
  margin-left: 71px;
  margin-top: -1.5px;
  letter-spacing: 0;
  line-height: 22px;
`;

const Juin = styled.div`
  width: 49px;
  height: 45px;
  margin-left: 62px;
  margin-top: -1.5px;
  letter-spacing: 0;
  line-height: 22px;
`;

const Juillet = styled.div`
  width: 67px;
  height: 45px;
  margin-left: 57px;
  margin-top: -1.5px;
  letter-spacing: 0;
  line-height: 22px;
`;

const Aot = styled.div`
  width: 50px;
  height: 45px;
  margin-left: 57px;
  margin-top: -1.5px;
  letter-spacing: 0;
  line-height: 22px;
`;

const September = styled.div`
  width: 97px;
  height: 45px;
  margin-left: 38px;
  margin-top: -1.5px;
  letter-spacing: 0;
  line-height: 22px;
`;

const GroupContainer1 = styled.div`
  margin-top: 16px;
  margin-right: 66px;
  display: flex;
  align-items: flex-start;
  min-width: 1333px;
`;

const Groupe1885 = styled.div`
  ${Border8pxFf5d22}
  height: 111px;
  display: flex;
  padding: 6px 31px;
  align-items: flex-end;
  min-width: 111px;
  background-color: var(--white);
  border-radius: 55.5px;
`;

const Number = styled.div`
  ${HeeboBoldOrange60px}
  width: 36px;
  height: 80px;
  letter-spacing: 0;
  line-height: 22px;
`;

const Number1 = styled.div`
  ${HeeboBoldEastBay60px}
  width: 36px;
  height: 80px;
  letter-spacing: 0;
  line-height: 22px;
`;

const Number2 = styled.div`
  ${HeeboBoldJade60px}
  width: 36px;
  height: 80px;
  letter-spacing: 0;
  line-height: 22px;
`;

const OverlapGroup1 = styled.div`
  width: 297px;
  height: 122px;
  position: relative;
  margin-left: 9px;
`;

const Rectangle635 = styled.div`
  ${Border1pxFf5d22}
  position: absolute;
  width: 262px;
  height: 122px;
  top: 0;
  left: 14px;
  background-color: var(--white);
  border-radius: 31px;
`;

const DbutOctobre2021 = styled.p`
  ${HeeboNormalOrange12px}
  position: absolute;
  width: 297px;
  height: 64px;
  top: 35px;
  left: 0;
  text-align: center;
  letter-spacing: 0;
  line-height: 22px;
`;

const Groupe1886 = styled.div`
  ${Border8pxEastBay}
  height: 111px;
  margin-left: 47px;
  display: flex;
  padding: 8px 31px;
  align-items: flex-end;
  min-width: 111px;
  background-color: var(--white);
  border-radius: 55.5px;
`;

const OverlapGroup2 = styled.div`
  width: 297px;
  height: 122px;
  position: relative;
  margin-left: 3px;
`;

const Rectangle636 = styled.div`
  ${Border1pxEastBay}
  position: absolute;
  width: 262px;
  height: 122px;
  top: 0;
  left: 20px;
  background-color: var(--white);
  border-radius: 31px;
`;

const Address = styled.p`
  ${HeeboNormalEastBay12px}
  position: absolute;
  width: 297px;
  height: 64px;
  top: 25px;
  left: 0;
  text-align: center;
  letter-spacing: 0;
  line-height: 22px;
`;

const Address1 = styled.p`
  ${HeeboNormalJade12px}
  position: absolute;
  width: 297px;
  height: 64px;
  top: 25px;
  left: 0;
  text-align: center;
  letter-spacing: 0;
  line-height: 22px;
`;

const Groupe1887 = styled.div`
  ${Border8pxJade}
  height: 111px;
  margin-left: 43px;
  display: flex;
  padding: 8px 31px;
  align-items: flex-end;
  min-width: 111px;
  background-color: var(--white);
  border-radius: 55.5px;
`;

const OverlapGroup3 = styled.div`
  width: 297px;
  height: 122px;
  position: relative;
  margin-left: 7px;
`;

const Rectangle637 = styled.div`
  ${Border1pxJade}
  position: absolute;
  width: 262px;
  height: 122px;
  top: 0;
  left: 16px;
  background-color: var(--white);
  border-radius: 31px;
`;

export default CalendarPart;
