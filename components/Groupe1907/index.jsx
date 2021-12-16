import React from "react";
import styled from "styled-components";
import { HeeboBoldBlack20px, SegoeuiRegularNormalDoveGray20px } from "../../styledMixins";


function Groupe1907(props) {
  const { quappelleTOnFormation, uneFormationEstUn, className } = props;

  return (
    <Groupe19071 className={`groupe-1907 ${className || ""}`}>
      <QuelDiplmeChoisir className="quel-diplme-choisir-1">{quappelleTOnFormation}</QuelDiplmeChoisir>
      <ChoisirSonColeN className="choisir-son-cole-n">{uneFormationEstUn}</ChoisirSonColeN>
    </Groupe19071>
  );
}

const Groupe19071 = styled.div`
  width: 1143px;
  height: 565px;
  display: flex;
  flex-direction: column;

  &.groupe-1907.groupe-1907-1 {
    height: 394px;
  }

  &.groupe-1907.groupe-1915 {
    height: 270px;
    margin-top: 98px;
    justify-content: space-between;
  }

  &.groupe-1907.groupe-1916 {
    height: 270px;
    margin-top: 66px;
    justify-content: space-between;
  }

  &.groupe-1907.groupe-1917 {
    height: 270px;
    margin-top: 66px;
    justify-content: space-between;
  }

  &.groupe-1907.groupe-1918 {
    height: 270px;
    margin-top: 66px;
    justify-content: space-between;
  }

  &.groupe-1907.groupe-1919 {
    height: 270px;
    margin-top: 66px;
    justify-content: space-between;
  }

  &.groupe-1907.groupe-1907-2 {
    position: absolute;
    height: 394px;
    top: 0;
    left: 0;
  }

  &.groupe-1907.groupe-1907-3 {
    height: 507px;
  }

  &.groupe-1907.groupe-1915-1 {
    height: 270px;
    margin-top: 106px;
    justify-content: space-between;
  }

  &.groupe-1907.groupe-1916-1 {
    height: 237px;
    margin-top: 66px;
    justify-content: space-between;
  }

  &.groupe-1907.groupe-1917-1 {
    height: 613px;
    margin-top: 99px;
  }

  &.groupe-1907.groupe-1918-1 {
    height: 544px;
    margin-top: 78px;
  }

  &.groupe-1907.groupe-1919-1 {
    height: 270px;
    margin-top: 54px;
    justify-content: space-between;
  }

  &.groupe-1907.groupe-1926 {
    height: 618px;
    z-index: 4;
    margin-top: 71px;
    margin-left: 265px;
  }

  &.groupe-1907.groupe-1907-4 {
    height: 288px;
    align-self: flex-start;
  }

  &.groupe-1907.groupe-1915-2 {
    height: 270px;
    align-self: flex-start;
    margin-top: 90px;
    justify-content: space-between;
  }

  &.groupe-1907.groupe-1916-2 {
    height: 237px;
    align-self: flex-start;
    justify-content: space-between;
  }

  &.groupe-1907.groupe-1917-2 {
    height: 321px;
    align-self: flex-start;
    margin-top: 46px;
  }

  &.groupe-1907.groupe-1918-2 {
    height: 231px;
    align-self: flex-start;
    margin-top: 79px;
    justify-content: space-between;
  }

  &.groupe-1907.groupe-1919-2 {
    height: 397px;
    align-self: flex-start;
    margin-top: 79px;
  }

  &.groupe-1907.groupe-1926-1 {
    position: absolute;
    height: 618px;
    top: 0;
    left: 0;
  }

  &.groupe-1907.groupe-1907-5 {
    position: absolute;
    height: 370px;
    top: 309px;
    left: 0;
  }

  &.groupe-1907.groupe-1915-3 {
    height: 270px;
    margin-top: 87px;
    margin-right: -2px;
    justify-content: space-between;
  }

  &.groupe-1907.groupe-1916-3 {
    height: 181px;
    margin-top: 55px;
    margin-right: -2px;
    justify-content: space-between;
  }

  &.groupe-1907.groupe-1917-3 {
    height: 321px;
    margin-top: 102px;
    margin-right: -2px;
  }

  &.groupe-1907.groupe-1918-3 {
    height: 295px;
    margin-top: 79px;
    margin-right: -2px;
  }

  &.groupe-1907.groupe-1927 {
    height: 270px;
    margin-top: 102px;
    margin-right: -2px;
    justify-content: space-between;
  }

  &.groupe-1907.groupe-1928 {
    height: 154px;
    margin-top: 55px;
    margin-right: -2px;
    justify-content: space-between;
  }

  &.groupe-1907.groupe-1930 {
    height: 202px;
    margin-top: 55px;
    margin-right: -2px;
    justify-content: space-between;
  }

  &.groupe-1907.groupe-1929 {
    height: 295px;
    margin-top: 55px;
    margin-right: -2px;
  }

  &.groupe-1907.groupe-1931 {
    position: absolute;
    height: 295px;
    top: 0;
    left: 0;
  }

  &.groupe-1907.groupe-1932 {
    position: absolute;
    height: 270px;
    top: 263px;
    left: 0;
    justify-content: space-between;
  }

  &.groupe-1907.groupe-1933 {
    height: 207px;
    margin-top: 79px;
    margin-right: -2px;
    justify-content: space-between;
  }

  &.groupe-1907.groupe-1935 {
    height: 238px;
    margin-top: 79px;
    margin-right: -2px;
    justify-content: space-between;
  }
`;

const QuelDiplmeChoisir = styled.div`
  ${HeeboBoldBlack20px}
  width: 414px;
  height: 57px;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 22px;
`;

const ChoisirSonColeN = styled.div`
  ${SegoeuiRegularNormalDoveGray20px}
  margin-left: 85px;
  margin-right: -2px;
  flex: 1;
  margin-top: 38px;
  margin-bottom: -2px;
  letter-spacing: 0;
  line-height: 20px;
`;

const LaQualitDeVieEs = styled.div`
  ${SegoeuiRegularNormalDoveGray20px}

  .groupe-1907.groupe-1915  & {
    max-height: 178px;
    height: 178px;
    margin-top: unset;
  }
`;

const RaresSontLesCandi = styled.div`
  ${SegoeuiRegularNormalDoveGray20px}

  .groupe-1907.groupe-1916  & {
    max-height: 178px;
    height: 178px;
    margin-top: unset;
  }
`;

const DeMoindreImportanc = styled.div`
  ${SegoeuiRegularNormalDoveGray20px}

  .groupe-1907.groupe-1917  & {
    max-height: 178px;
    height: 178px;
    margin-top: unset;
  }
`;

const EnfinLesDbouchs = styled.div`
  ${SegoeuiRegularNormalDoveGray20px}

  .groupe-1907.groupe-1918  & {
    max-height: 178px;
    height: 178px;
    margin-top: unset;
  }
`;

const RencontrezLesCole = styled.div`
  ${SegoeuiRegularNormalDoveGray20px}

  .groupe-1907.groupe-1919  & {
    max-height: 178px;
    height: 178px;
    margin-top: unset;
  }
`;

const LaQualitDeVieEs1 = styled.div`
  ${SegoeuiRegularNormalDoveGray20px}

  .groupe-1907.groupe-1915-1  & {
    max-height: 178px;
    height: 178px;
    margin-top: unset;
  }
`;

const ContrairementCeQ = styled.div`
  ${SegoeuiRegularNormalDoveGray20px}

  .groupe-1907.groupe-1916-1  & {
    max-height: 145px;
    height: 145px;
    margin-top: unset;
  }
`;

const RencontrezLesCole1 = styled.div`
  ${SegoeuiRegularNormalDoveGray20px}

  .groupe-1907.groupe-1919-1  & {
    max-height: 178px;
    height: 178px;
    margin-top: unset;
  }
`;

const QuelQueSoitVotre = styled.div`
  ${SegoeuiRegularNormalDoveGray20px}

  .groupe-1907.groupe-1915-2  & {
    max-height: 178px;
    height: 178px;
    margin-top: unset;
  }
`;

const LeTermeDeFormatio = styled.div`
  ${SegoeuiRegularNormalDoveGray20px}

  .groupe-1907.groupe-1916-2  & {
    max-height: 145px;
    height: 145px;
    margin-top: unset;
  }
`;

const LaFormationProfess = styled.div`
  ${SegoeuiRegularNormalDoveGray20px}

  .groupe-1907.groupe-1918-2  & {
    max-height: 139px;
    height: 139px;
    margin-top: unset;
  }
`;

const EnSoiLaFormation = styled.div`
  ${SegoeuiRegularNormalDoveGray20px}

  .groupe-1907.groupe-1915-3  & {
    max-height: 178px;
    height: 178px;
    margin-top: unset;
  }
`;

const PourSeFormerPlus = styled.div`
  ${SegoeuiRegularNormalDoveGray20px}

  .groupe-1907.groupe-1916-3  & {
    max-height: 89px;
    height: 89px;
    margin-top: unset;
  }
`;

const CeQuonAppelleGra = styled.div`
  ${SegoeuiRegularNormalDoveGray20px}

  .groupe-1907.groupe-1927  & {
    max-height: 178px;
    height: 178px;
    margin-top: unset;
  }
`;

const PourSuivreUneForm = styled.div`
  ${SegoeuiRegularNormalDoveGray20px}

  .groupe-1907.groupe-1928  & {
    max-height: 62px;
    height: 62px;
    margin-top: unset;
  }
`;

const CommeNousVousLeD = styled.div`
  ${SegoeuiRegularNormalDoveGray20px}

  .groupe-1907.groupe-1930  & {
    max-height: 110px;
    height: 110px;
    margin-top: unset;
  }
`;

const LaFormationParVAE = styled.div`
  ${SegoeuiRegularNormalDoveGray20px}

  .groupe-1907.groupe-1932  & {
    max-height: 178px;
    height: 178px;
    margin-top: unset;
  }
`;

const LeSystmeDeCours = styled.div`
  ${SegoeuiRegularNormalDoveGray20px}

  .groupe-1907.groupe-1933  & {
    max-height: 115px;
    height: 115px;
    margin-top: unset;
  }
`;

const LaFormationDista = styled.div`
  ${SegoeuiRegularNormalDoveGray20px}

  .groupe-1907.groupe-1935  & {
    max-height: 146px;
    height: 146px;
    margin-top: unset;
  }
`;

export default Groupe1907;
