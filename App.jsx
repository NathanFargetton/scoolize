
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Inscription from "./components/Inscription";
import InscriptionRussie from "./components/InscriptionRussie";
import EnregistrementTablissement from "./components/EnregistrementTablissement";
import Diplomes from "./components/Diplomes";
import Coles2 from "./components/Coles2";
import Filires from "./components/Filires";
import PageDaccueil2 from "./components/PageDaccueil2";
import Validation1 from "./components/Validation1";
import InscriptionTablissementRussis from "./components/InscriptionTablissementRussis";
import PageDaccueil from "./components/PageDaccueil";
import Formation2 from "./components/Formation2";
import TrouverCole113 from "./components/TrouverCole113";
import Web192010 from "./components/Web192010";
import TrouverCole13 from "./components/TrouverCole13";
import TestOrientation from "./components/TestOrientation";
import TrouverCole1 from "./components/TrouverCole1";
import TrouverCole112 from "./components/TrouverCole112";
import Liste3 from "./components/Liste3";
import TrouverCole14 from "./components/TrouverCole14";
import TrouverCole11 from "./components/TrouverCole11";
import Liste2 from "./components/Liste2";
import Validation2 from "./components/Validation2";
import TrouverCole15 from "./components/TrouverCole15";
import TrouverCole12 from "./components/TrouverCole12";
import Validation from "./components/Validation";
import PageDaccueil1 from "./components/PageDaccueil1";
import TrouverCole110 from "./components/TrouverCole110";
import Liste1 from "./components/Liste1";
import TrouverCole17 from "./components/TrouverCole17";
import TrouverCole19 from "./components/TrouverCole19";
import TrouverCole18 from "./components/TrouverCole18";
import TrouverCole111 from "./components/TrouverCole111";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/inscription">
          <Inscription {...inscriptionData} />
        </Route>
        <Route path="/inscription-reussie">
          <InscriptionRussie {...inscriptionRussieData} />
        </Route>
        <Route path="/enregistrement-etablissement">
          <EnregistrementTablissement {...enregistrementTablissementData} />
        </Route>
        <Route path="/diplomes">
          <Diplomes {...diplomesData} />
        </Route>
        <Route path="/ecoles">
          <Coles2 {...coles22Data} />
        </Route>
        <Route path="/filieres">
          <Filires {...filiresData} />
        </Route>
        <Route path="/page-d-accueil-2">
          <PageDaccueil2 {...pageDaccueil2Data} />
        </Route>
        <Route path="/validation-1">
          <Validation1
            bulletinsScolaires="Bulletins scolaires"
            aucunBulletinTransmis="Aucun bulletin transmis"
            composant1091Props={validation1Data.composant1091Props}
            composant1101Props={validation1Data.composant1101Props}
            composant1111Props={validation1Data.composant1111Props}
          />
        </Route>
        <Route path="/inscription-etablissement-reussis">
          <InscriptionTablissementRussis {...inscriptionTablissementRussisData} />
        </Route>
        <Route path="/:path(|page-d-accueil)">
          <PageDaccueil {...pageDaccueilData} />
        </Route>
        <Route path="/formation">
          <Formation2 {...formation22Data} />
        </Route>
        <Route path="/trouver-ecole-1-13">
          <TrouverCole113 {...trouverCole113Data} />
        </Route>
        <Route path="/web-1920-10">
          <Web192010 {...web192010Data} />
        </Route>
        <Route path="/trouver-ecole-1-3">
          <TrouverCole13 {...trouverCole13Data} />
        </Route>
        <Route path="/test-orientation">
          <TestOrientation {...testOrientationData} />
        </Route>
        <Route path="/trouver-ecole-1">
          <TrouverCole1 {...trouverCole1Data} />
        </Route>
        <Route path="/trouver-ecole-1-12">
          <TrouverCole112 {...trouverCole112Data} />
        </Route>
        <Route path="/liste-3">
          <Liste3 {...liste3Data} />
        </Route>
        <Route path="/trouver-ecole-1-4">
          <TrouverCole14 {...trouverCole14Data} />
        </Route>
        <Route path="/trouver-ecole-1-1">
          <TrouverCole11 {...trouverCole11Data} />
        </Route>
        <Route path="/liste-2">
          <Liste2 {...liste2Data} />
        </Route>
        <Route path="/validation-2">
          <Validation2 {...validation2Data} />
        </Route>
        <Route path="/trouver-ecole-1-5">
          <TrouverCole15 {...trouverCole15Data} />
        </Route>
        <Route path="/trouver-ecole-1-2">
          <TrouverCole12 {...trouverCole12Data} />
        </Route>
        <Route path="/validation">
          <Validation {...validationData} />
        </Route>
        <Route path="/page-d-accueil-1">
          <PageDaccueil1 {...pageDaccueil1Data} />
        </Route>
        <Route path="/trouver-ecole-1-10">
          <TrouverCole110 {...trouverCole110Data} />
        </Route>
        <Route path="/liste-1">
          <Liste1 {...liste1Data} />
        </Route>
        <Route path="/trouver-ecole-1-7">
          <TrouverCole17 {...trouverCole17Data} />
        </Route>
        <Route path="/trouver-ecole-1-9">
          <TrouverCole19 {...trouverCole19Data} />
        </Route>
        <Route path="/trouver-ecole-1-8">
          <TrouverCole18 {...trouverCole18Data} />
        </Route>
        <Route path="/trouver-ecole-1-11">
          <TrouverCole111 {...trouverCole111Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const boutonData = {
    src: "/img/trac--433-11@1x.png",
    className: "",
};

const navigation42Data = {
    boutonProps: boutonData,
};

const iconData = {
    className: "",
};

const titleData = {
    iconProps: iconData,
};

const projectHeader2Data = {
    iconProps: titleData,
};

const projectHeaderData = {
    projectHeader2Props: projectHeader2Data,
};

const filliresData = {
    children: "Fili??res",
};

const composant301Data = {
    children: "Diplome-Docus avis",
};

const composant3012Data = {
    children: "S??lection d?????coles",
    className: "composant-31-23",
};

const composant321Data = {
    children: "S??lection de dipl??mes",
};

const composant3013Data = {
    children: "Liste des dipl??mes",
    className: "composant-34-12",
};

const composant3212Data = {
    children: "Que faire apr??s le bac",
};

const composant3014Data = {
    children: "Acc??s ??tablissement",
    className: "composant-30-24",
};

const composant3015Data = {
    children: "R??f??rencer son ??tablissement",
    className: "composant-31-24",
};

const composant401Data = {
    src: "/img/trac--1999-10@1x.png",
};

const composant411Data = {
    src: "/img/trac--2000-10@1x.png",
};

const composant421Data = {
    src: "/img/trac--2001-10@1x.png",
};

const composant4112Data = {
    src: "/img/instagram-10@1x.png",
    className: "icons",
};

const inscriptionData = {
    x12: "/img/12-10@1x.png",
    overlapGroup1: "/img/amphi-de-fac-3@1x.png",
    groupe1880: "/img/trac--2003@1x.png",
    groupe1877: "/img/groupe-1877-1@1x.png",
    textSubtitle: "Cliquez ici si vous repr??sentez un ??tablissement",
    spanText: "J'accepte les ",
    spanText2: "termes & conditions",
    image13: "/img/image-13-1@1x.png",
    propos: "?? PROPOS",
    accsDirect: "ACC??S DIRECT",
    tablissements: "??TABLISSEMENTS",
    connect: "CONNECT",
    copyright: "?? 2021",
    navigation42Props: navigation42Data,
    projectHeaderProps: projectHeaderData,
    filliresProps: filliresData,
    composant301Props: composant301Data,
    composant3012Props: composant3012Data,
    composant321Props: composant321Data,
    composant3013Props: composant3013Data,
    composant3212Props: composant3212Data,
    composant3014Props: composant3014Data,
    composant3015Props: composant3015Data,
    composant401Props: composant401Data,
    composant411Props: composant411Data,
    composant421Props: composant421Data,
    composant4112Props: composant4112Data,
};

const bouton2Data = {
    src: "/img/trac--433-11@1x.png",
    className: "",
};

const navigation62Data = {
    boutonProps: bouton2Data,
};

const icon2Data = {
    className: "",
};

const title2Data = {
    iconProps: icon2Data,
};

const projectHeader22Data = {
    iconProps: title2Data,
};

const projectHeader3Data = {
    className: "project-header-2",
    projectHeader2Props: projectHeader22Data,
};

const fillires2Data = {
    children: "Fili??res",
};

const groupe18822Data = {
    className: "groupe-1882-1",
};

const composant3016Data = {
    children: "Diplome-Docus avis",
};

const composant3017Data = {
    children: "S??lection d?????coles",
    className: "composant-31-23-1",
};

const composant3213Data = {
    children: "S??lection de dipl??mes",
};

const composant3018Data = {
    children: "Liste des dipl??mes",
    className: "composant-34-12-1",
};

const composant3214Data = {
    children: "Que faire apr??s le bac",
};

const composant3019Data = {
    children: "Acc??s ??tablissement",
    className: "composant-30-24-1",
};

const composant30110Data = {
    children: "R??f??rencer son ??tablissement",
    className: "composant-31-24-1",
};

const composant4012Data = {
    src: "/img/trac--1999-10@1x.png",
};

const composant4113Data = {
    src: "/img/trac--2000-10@1x.png",
    className: "",
};

const composant4212Data = {
    src: "/img/trac--2001-10@1x.png",
    className: "",
};

const composant4114Data = {
    src: "/img/instagram-10@1x.png",
    className: "icons-1",
};

const title32Data = {
    className: "title-2",
};

const footerData = {
    composant301Props: composant3016Data,
    composant3012Props: composant3017Data,
    composant321Props: composant3213Data,
    composant3013Props: composant3018Data,
    composant3212Props: composant3214Data,
    composant3014Props: composant3019Data,
    composant3015Props: composant30110Data,
    composant401Props: composant4012Data,
    composant411Props: composant4113Data,
    composant421Props: composant4212Data,
    composant4112Props: composant4114Data,
    composant401Props2: title32Data,
};

const inscriptionRussieData = {
    x12: "/img/12-10@1x.png",
    groupe2022: "/img/amphi-de-fac-2@1x.png",
    x3388631: "/img/3388631-1@1x.png",
    textH5Sele: "Inscription r??ussie, bienvenue chez Diplome-Docus!",
    overlapGroup: "/img/trac--1991-2@1x.png",
    suivant: "SUIVANT",
    navigation62Props: navigation62Data,
    projectHeaderProps: projectHeader3Data,
    filliresProps: fillires2Data,
    groupe1882Props: groupe18822Data,
    footerProps: footerData,
};

const bouton3Data = {
    src: "/img/trac--433-10@1x.png",
    className: "bouton-2",
};

const navigation622Data = {
    boutonProps: bouton3Data,
};

const icon3Data = {
    className: "",
};

const title4Data = {
    iconProps: icon3Data,
};

const projectHeader23Data = {
    iconProps: title4Data,
};

const projectHeader4Data = {
    className: "project-header-3",
    projectHeader2Props: projectHeader23Data,
};

const fillires3Data = {
    children: "Fili??res",
};

const groupe18823Data = {
    className: "groupe-1882-2",
};

const iconPermIdentityFilledData = {
    src: "/img/trac--1990@1x.png",
};

const iconVisibilityFilled2Data = {
    className: "icon-visibility-filled-1",
};

const textFieldOutlinedUnfilledEnabledData = {
    motDePasse: "Mot de passe",
    iconVisibilityFilledProps: iconVisibilityFilled2Data,
};

const composant211Data = {
    src: "/img/trac--1991-1@1x.png",
};

const buttonsContainedEnabledData = {
    sEnregistrerPasserAuFormulaire: "S'ENREGISTRER & PASSER AU FORMULAIRE",
    composant211Props: composant211Data,
};

const composant141Data = {
    overlapGroup2: "/img/shadow---04dp@1x.png",
    adresseLctronique: "Adresse ??l??ctronique",
    iconPermIdentityFilledProps: iconPermIdentityFilledData,
    textFieldOutlinedUnfilledEnabledProps: textFieldOutlinedUnfilledEnabledData,
    buttonsContainedEnabledProps: buttonsContainedEnabledData,
};

const textFieldOutlinedUnfilledEnabled22Data = {
    className: "text-field-outlined-unfilled-enabled-3",
};

const composant202Data = {
    groupe1879: "/img/trac--2004@1x.png",
    numroDeSiret: "Num??ro de siret",
    composant141Props: composant141Data,
    textFieldOutlinedUnfilledEnabled2Props: textFieldOutlinedUnfilledEnabled22Data,
};

const selectionControlCheckboxOffEnabledData = {
    src: "/img/selection-control---checkbox---off---enabled@1x.png",
};

const composant30111Data = {
    children: "Diplome-Docus avis",
};

const composant30112Data = {
    children: "S??lection d?????coles",
    className: "composant-31-23-2",
};

const composant3215Data = {
    children: "S??lection de dipl??mes",
};

const composant30113Data = {
    children: "Liste des dipl??mes",
    className: "composant-34-12-2",
};

const composant3216Data = {
    children: "Que faire apr??s le bac",
};

const composant30114Data = {
    children: "Acc??s ??tablissement",
    className: "composant-30-24-2",
};

const composant30115Data = {
    children: "R??f??rencer son ??tablissement",
    className: "composant-31-24-2",
};

const composant4013Data = {
    src: "/img/trac--1999-10@1x.png",
};

const composant4115Data = {
    src: "/img/trac--2000-10@1x.png",
    className: "",
};

const composant4213Data = {
    src: "/img/trac--2001-10@1x.png",
    className: "",
};

const composant4116Data = {
    src: "/img/instagram-10@1x.png",
    className: "icons-2",
};

const title33Data = {
    className: "title-3",
};

const footer2Data = {
    className: "footer-2",
    composant301Props: composant30111Data,
    composant3012Props: composant30112Data,
    composant321Props: composant3215Data,
    composant3013Props: composant30113Data,
    composant3212Props: composant3216Data,
    composant3014Props: composant30114Data,
    composant3015Props: composant30115Data,
    composant401Props: composant4013Data,
    composant411Props: composant4115Data,
    composant421Props: composant4213Data,
    composant4112Props: composant4116Data,
    composant401Props2: title33Data,
};

const enregistrementTablissementData = {
    x12: "/img/12-10@1x.png",
    overlapGroup5: "/img/amphi-de-fac-1@1x.png",
    vrificationDuMotDePasse: "V??rification du mot de passe",
    spanText: "J'accepte les ",
    spanText2: "termes & conditions",
    textSubtitle: "Cliquez ici si vous ??tes un ??tudiant",
    image13: "/img/image-13@1x.png",
    navigation62Props: navigation622Data,
    projectHeaderProps: projectHeader4Data,
    filliresProps: fillires3Data,
    groupe1882Props: groupe18823Data,
    composant202Props: composant202Data,
    selectionControlCheckboxOffEnabledProps: selectionControlCheckboxOffEnabledData,
    footerProps: footer2Data,
};

const button4Data = {
    className: "button-2",
};

const bouton4Data = {
    src: "/img/trac--433-11@1x.png",
};

const icon4Data = {
    className: "",
};

const title5Data = {
    iconProps: icon4Data,
};

const projectHeader24Data = {
    iconProps: title5Data,
};

const projectHeader5Data = {
    className: "project-header-4",
    projectHeader2Props: projectHeader24Data,
};

const diplme4Data = {
    className: "diplme-3",
};

const coles4Data = {
    className: "coles-2",
};

const fillires4Data = {
    children: "Fili??res",
    className: "fillires-2",
};

const mtiers4Data = {
    className: "mtiers-6",
};

const formation4Data = {
    className: "formation-2",
};

const groupe18824Data = {
    className: "groupe-1882-3",
};

const groupe1907Data = {
    quappelleTOnFormation: <>Quel dipl??me choisir ?<br />Dipl??mes reconnus et Labels, qui sont-ils ?</>,
    uneFormationEstUn: <>Choisir son ??cole n???est pas toujours facile quand on sort ?? peine du lyc??e. Parmi les crit??res de s??lection des bacheliers, celui qui se classe en t??te de liste est la reconnaissance du dipl??me. En effet, nombreux sont les ??tudiants qui s???inqui??tent, et ?? juste titre, de savoir si leur futur dipl??me sera reconnu par l&#x27;??tat???! Parmi tous les labels, certificats et autres termes, comment trouver la bonne formation???? Diplomeo vous apporte des ??l??ments de r??ponse :<br /><br />Indispensables pour exercer une profession donn??e, les Dipl??mes d?????tat (DE) sont nombreux, notamment dans les secteurs sociaux et param??dicaux. La Commission Nationale des Certifications Professionnelles (CNCP) enregistre ou inscrit quant ?? elle dans le R??pertoire National des Certifications Professionnelles (RNCP) ce que l???on appelle les ?? certifications professionnelles ??. Ce sont des dipl??mes ou des titres. Lorsque ces derniers sont inscrits au RNCP, ils sont directement associ??s ?? un niveau, allant de V (un CAP par exemple) ?? I pour un Master. Ce niveau constitue un crit??re d?????quivalence professionnelle et indique le cursus pr??par?? par l?????tudiant.<br /><br />Mais attention, si le r??pertoire utilise comme r??f??rence les dipl??mes de l?????ducation nationale, la commission ne juge pas la qualit?? de la formation et cela ne veut pas automatiquement dire qu???il y aura une ??quivalence sur le plan acad??mique. Si vous ??tes par exemple titulaire d???un titre de niveau II qui ??quivaut ?? un Bac+3, rien ne vous assure de pouvoir int??grer directement un Master. L???enregistrement de votre dipl??me garantit n??anmoins que le cursus que vous avez suivi vous a apport?? des comp??tences bien pr??cises dans un milieu.</>,
};

const groupe1906Data = {
    lesDiplmesViss: "Les dipl??mes vis??s",
    tousLesDiplmesNa: `Tous les dipl??mes nationaux comme les BTS, DUT ou licences sont des dipl??mes vis??s. La liste des dipl??mes d??tenant la mention "visa" est publi??e chaque ann??e au ?? Bulletin officiel de l?????ducation Nationale ??. Cela veut tout simplement dire qu'ils b??n??ficient de la garantie de l'??tat. Il sont donc d??livr??s au nom de l'??tat qui exerce un contr??le p??dagogique sur les formations. Le BTS, par exemple, est un dipl??me national. Peu importe l?????tablissement dans lequel vous le pr??parerez, que ce soit dans le public, dans le priv?? ou encore par correspondance, il sera reconnu par l?????tat en tant que dipl??me.`,
};

const groupe1905Data = {
    lesDees: "Les DEES",
    leDeesDiplmeEur: "Le DEES, Dipl??me Europ??en d?????tudes Sup??rieures, est un dipl??me d??livr?? par la ?? F??d??ration Europ??enne des ??coles ??, une association qui regroupe des ??coles priv??es. Il n???est absolument pas vis?? par l?????tat fran??ais. Aucune garantie donc d?????tre accept?? en ??quivalence dans une Fac fran??aise m??me si ce dipl??me est souvent reconnu par les entreprises.",
};

const groupe19062Data = {
    lesDiplmesViss: "Les Bachelors",
    tousLesDiplmesNa: "Le Bachelor est un dipl??me post-bac d??livrant un niveau Bac+3 et 180 cr??dits ECTS. Il d??signe un premier cycle d???enseignement sup??rieur, souvent tourn?? vers l???international puisque l???anglais y est enseign?? de mani??re tr??s importante. Ce dipl??me permet souvent de se pr??parer ?? des m??tiers li??s au commerce international, ?? la finance, au management, au marketing, ?? la communication, aux ressources humaines ou ?? la vente. Les Bachelors dispens??s en ??coles priv??es peuvent ??tre vis??s par l?????tat ou enregistr??s au RNCP.",
    className: "groupe-1904",
};

const groupe19063Data = {
    lesDiplmesViss: "Le DCG et DSCG",
    tousLesDiplmesNa: "Le Dipl??me de Comptabilit?? et de Gestion (DCG) et le Dipl??me Sup??rieur de Comptabilit?? et de Gestion (DSCG) sont des dipl??mes d'??tat de niveaux Bac+3 et Bac+5 dans le domaine de la comptabilit?? et de la gestion. Ces dipl??mes permettent d'envisager une poursuite d'??tude jusqu'?? Bac+8 avec un DEC (Dipl??me d'Expertise-Comptable).",
    className: "groupe-1903",
};

const groupe19052Data = {
    lesDees: "Les labels des ??coles de commerce et de management",
    leDeesDiplmeEur: "AACSB, EPAS, EQUIS??? Il existe de nombreux labels d??livr??s par des institutions internationales et non par l?????tat fran??ais. R??put??s pour leur exigence, ces labels sont souvent accord??s ?? des dipl??mes pr??par??s dans les business schools. Aujourd???hui peu d?????coles ont obtenu le label am??ricain AACSB qui est un symbole d???excellence. Ces labels garantissent g??n??ralement un bon enseignement et un corps professoral de qualit??. Attention tout de m??me, car certaines ??coles font simplement parties de l???association et affichent le logo AACSB sur leur plaquette alors qu???elles ne sont pas accr??dit??es. Les labels EQUIS et EPAS sont quant ?? eux accord??s par l???EFMD, un organisme bas?? ?? Bruxelles.",
    className: "groupe-1902",
};

const composant30116Data = {
    children: "Diplome-Docus avis",
};

const composant30117Data = {
    children: "S??lection d?????coles",
    className: "composant-31-5",
};

const composant3217Data = {
    children: "S??lection de dipl??mes",
};

const composant30118Data = {
    children: "Liste des dipl??mes",
    className: "composant-34-3",
};

const composant3218Data = {
    children: "Que faire apr??s le bac",
};

const composant30119Data = {
    children: "Acc??s ??tablissement",
    className: "composant-30-6",
};

const composant30120Data = {
    children: "R??f??rencer son ??tablissement",
    className: "composant-31-6",
};

const composant4014Data = {
    src: "/img/trac--1999-10@1x.png",
};

const composant4117Data = {
    src: "/img/trac--2000-10@1x.png",
    className: "",
};

const composant4214Data = {
    src: "/img/trac--2001-17@1x.png",
    className: "groupe-1936-1",
};

const composant4118Data = {
    src: "/img/instagram-10@1x.png",
    className: "icons-3",
};

const title34Data = {
    className: "title-4",
};

const footer3Data = {
    className: "footer-3",
    composant301Props: composant30116Data,
    composant3012Props: composant30117Data,
    composant321Props: composant3217Data,
    composant3013Props: composant30118Data,
    composant3212Props: composant3218Data,
    composant3014Props: composant30119Data,
    composant3015Props: composant30120Data,
    composant401Props: composant4014Data,
    composant411Props: composant4117Data,
    composant421Props: composant4214Data,
    composant4112Props: composant4118Data,
    composant401Props2: title34Data,
};

const diplomesData = {
    lesConditionsGnr: "Les conditions g??n??rales et la politique de confidentialit??",
    x12: "/img/12-10@1x.png",
    scoolizeLogoPalettes1: "/img/scoolize-logo---palettes--1--1@1x.png",
    trac1992: "/img/trac--1992-1@1x.png",
    quelDiplmeChoisir: `"Quel dipl??me choisir ?"`,
    cEstNormalQuOnVousAideUnPeu: "C'est normal qu'on vous aide un peu ????",
    bonCEstPartiSuivezNous: "Bon c'est parti ?! Suivez nous ????",
    buttonProps: button4Data,
    boutonProps: bouton4Data,
    projectHeaderProps: projectHeader5Data,
    diplmeProps: diplme4Data,
    colesProps: coles4Data,
    filliresProps: fillires4Data,
    mtiersProps: mtiers4Data,
    formationProps: formation4Data,
    groupe1882Props: groupe18824Data,
    groupe1907Props: groupe1907Data,
    groupe1906Props: groupe1906Data,
    groupe1905Props: groupe1905Data,
    groupe19062Props: groupe19062Data,
    groupe19063Props: groupe19063Data,
    groupe19052Props: groupe19052Data,
    footerProps: footer3Data,
};

const button22Data = {
    children: "S'inscrire / Se Connecter",
};

const bouton5Data = {
    src: "/img/trac--433-11@1x.png",
};

const icon5Data = {
    className: "icon-3",
};

const title6Data = {
    iconProps: icon5Data,
};

const projectHeader25Data = {
    iconProps: title6Data,
};

const projectHeader6Data = {
    className: "project-header-5",
    projectHeader2Props: projectHeader25Data,
};

const coles5Data = {
    className: "coles-3",
};

const fillires5Data = {
    children: "Fili??res",
};

const groupe18825Data = {
    className: "groupe-1882-4",
};

const groupe19072Data = {
    quappelleTOnFormation: "Quel type d'??cole faut-il choisir ?",
    uneFormationEstUn: <>R??ussir son orientation ou sa r??orientation et bien engager sa carri??re, c&#x27;est d&#x27;abord bien s&#x27;informer afin de choisir dans les meilleures conditions.<br /><br />Il n???est pas toujours simple pour certains ??tudiants d???expliquer clairement les v??ritables motivations qui les ont conduits ?? jeter leur d??volu sur telle ??cole plut??t que telle autre. L???excellence p??dagogique ne pr??side pas toujours ?? leurs aspirations. Bien au contraire.<br />Certes il existe des crit??res de qualit?? qui font foi, mais pour nombre d???entre eux, pass?? le cap des concours, d???autres ??l??ments de comparaison vont entrer en ligne de compte. Le fait est que tout le monde ne peut pas int??grer HEC ou Polytechnique.<br />Il existe moult raisons de tirer parti de ses ann??es ??tudiantes tant sur le plan personnel que sur le plan professionnel. ?? vous donc de trouver l?????cole correspondant le mieux ?? votre projet professionnel.</>,
    className: "groupe-1907-1",
};

const groupe19073Data = {
    quappelleTOnFormation: "L???ambiance et la qualit?? de vie",
    uneFormationEstUn: <>La qualit?? de vie est un crit??re important. Viser l???ESC Pau ou l???Estia Bidart parce que l???on pratique intens??ment le surf n???a rien de fantaisiste. Entre air, eau, neige et terre, Grenoble ??cole de management et les ??coles de Grenoble INP attirent &quot;sans complexe&quot; les fanas de ski et de nouvelles technologies.<br />Certains ??tudiants se sentiront plus ?? l???aise sur un petit campus, d???autres ??prouveront le besoin d?????voluer ?? proximit?? d???une grande ville. Les uns opteront pour un lieu donn?? en raison de sa proximit?? avec leur r??sidence familiale, d???autres seront sensibles ?? l???ambiance g??n??rale qui r??gne sur le campus. s.</>,
    className: "groupe-1915",
};

const groupe19074Data = {
    quappelleTOnFormation: "Dynamisme ??conomique r??gional",
    uneFormationEstUn: "Rares sont les candidats ?? en tenir compte, mais le positionnement r??gional, comme l???environnement ??conomique, les partenariats industriels d???une ??cole sont ??galement des crit??res importants. Ils sont d??terminants dans les d??veloppements p??dagogiques et ont des incidences sur les stages ou les opportunit??s offertesen alternance et en apprentissage, l???emploi et les enseignements. Toutes les ??coles entretiennent des rapports ??troits avec les acteurs territoriaux (collectivit??s locales, CCI, etc.). D???autres ??coles d??veloppent leurs formations en fonction de leur positionnement frontalier (franco-espagnol, franco-germanique, etc.).",
    className: "groupe-1916",
};

const groupe19075Data = {
    quappelleTOnFormation: "Une vie associative de premier plan",
    uneFormationEstUn: "De moindre importance au premier abord, la vie associative d???une ??cole est en r??alit?? primordiale. Se plonger dans les activit??s extrascolaires d???un ??tablissement se r??v??le souvent tr??s enrichissant et tr??s formateur. Les ??tudiants qui s???engagent dans les activit??s associatives en parall??le (BDE, sport, junior entreprise, solidarit??, culturel???) de leur formation peuvent ainsi concr??tiser leur passion et utiliser leurs savoirs dans le cadre d???ambitieux projets. Sachez ??galement que les recruteurs sont tr??s sensibles aux ??tudiants ayant particip?? ?? la vie associative de leur ??cole.",
    className: "groupe-1917",
};

const groupe19076Data = {
    quappelleTOnFormation: "D???autres crit??res pour choisir",
    uneFormationEstUn: `Enfin, les d??bouch??s, l???insertion professionnelle ou "l???employabilit??" des ??coles, l???origine scolaire et g??ographique des ??tudiants, les possibilit??s de poursuite d?????tudes, les conditions p??dagogiques (pr??dominance des cours en amphi ou de cours en petites sections), l???efficacit?? du r??seau des anciens ??l??ves, les ??changes internationaux, l???environnement de l?????cole (locaux, situation g??ographique, transports, restauration, logement???) sont aussi des crit??res ?? prendre en compte dans le choix d???une ??cole.`,
    className: "groupe-1918",
};

const groupe19077Data = {
    quappelleTOnFormation: "Un dernier conseil ?",
    uneFormationEstUn: `Rencontrez les ??coles directement sur les salons d???orientation, discutez avec les ??tudiants. Comme vous, ils ont connu les m??mes pr??occupations, les m??mes questionnements, les m??mes h??sitations. Puis, dans la mesure du possible, essayez de vous rendre sur place. Il est important de pouvoir "prendre l???ambiance" des lieux o?? vous allez ??tudier pendant plusieurs ann??es.`,
    className: "groupe-1919",
};

const composant30121Data = {
    children: "Diplome-Docus avis",
};

const composant30122Data = {
    children: "S??lection d?????coles",
    className: "composant-31-1",
};

const composant3219Data = {
    children: "S??lection de dipl??mes",
};

const composant30123Data = {
    children: "Liste des dipl??mes",
    className: "composant-34-1",
};

const composant32110Data = {
    children: "Que faire apr??s le bac",
};

const composant30124Data = {
    children: "Acc??s ??tablissement",
    className: "composant-30-2",
};

const composant30125Data = {
    children: "R??f??rencer son ??tablissement",
    className: "composant-31-2",
};

const composant4015Data = {
    src: "/img/trac--1999-10@1x.png",
};

const composant4119Data = {
    src: "/img/trac--2000-10@1x.png",
    className: "",
};

const composant4215Data = {
    src: "/img/trac--2001-17@1x.png",
    className: "groupe-1936-1",
};

const composant41110Data = {
    src: "/img/instagram-10@1x.png",
    className: "icons-4",
};

const title35Data = {
    className: "title-5",
};

const footer4Data = {
    className: "footer-4",
    composant301Props: composant30121Data,
    composant3012Props: composant30122Data,
    composant321Props: composant3219Data,
    composant3013Props: composant30123Data,
    composant3212Props: composant32110Data,
    composant3014Props: composant30124Data,
    composant3015Props: composant30125Data,
    composant401Props: composant4015Data,
    composant411Props: composant4119Data,
    composant421Props: composant4215Data,
    composant4112Props: composant41110Data,
    composant401Props2: title35Data,
};

const coles22Data = {
    lesConditionsGnr: "Les conditions g??n??rales et la politique de confidentialit??",
    x12: "/img/12-10@1x.png",
    scoolizeLogoPalettes1: "/img/scoolize-logo---palettes--1--1@1x.png",
    trac1992: "/img/trac--1992-1@1x.png",
    quelTypeDColeFautIlChoisir: `"Quel type d'??cole faut-il choisir ?"`,
    cEstNormalQuOnVousAideUnPeu: "C'est normal qu'on vous aide un peu ????",
    bonCEstPartiSuivezNous: "Bon c'est parti ?! Suivez nous ????",
    button2Props: button22Data,
    boutonProps: bouton5Data,
    projectHeaderProps: projectHeader6Data,
    colesProps: coles5Data,
    filliresProps: fillires5Data,
    groupe1882Props: groupe18825Data,
    groupe1907Props: groupe19072Data,
    groupe19072Props: groupe19073Data,
    groupe19073Props: groupe19074Data,
    groupe19074Props: groupe19075Data,
    groupe19075Props: groupe19076Data,
    groupe19076Props: groupe19077Data,
    footerProps: footer4Data,
};

const icon6Data = {
    className: "icon-4",
};

const title7Data = {
    iconProps: icon6Data,
};

const projectHeader32Data = {
    titleProps: title7Data,
};

const fillires6Data = {
    children: "Fili??res",
    className: "fillires-3",
};

const formation6Data = {
    className: "formation-3",
};

const groupe18826Data = {
    className: "groupe-1882-5",
};

const groupe19364Data = {
    className: "groupe-1936-2",
};

const navigation3Data = {
    groupe1936Props: groupe19364Data,
};

const bouton6Data = {
    src: "/img/trac--433-11@1x.png",
};

const navigation52Data = {
    boutonProps: navigation3Data,
    boutonProps2: bouton6Data,
};

const groupe19078Data = {
    quappelleTOnFormation: "Les fili??res d'??tudes dans l'Enseignement Sup??rieur",
    uneFormationEstUn: "Quel que soit votre projet professionnel, vos envies et votre niveau, que vous soyez ??tudiant en formation initiale ou professionnel en formation contnue, il existe forc??ment en France, une formation dans l'enseignement sup??rieur qui vous permettra de trouver un poste dans votre secteur de pr??dilection.",
    className: "groupe-1907-2",
};

const composant30126Data = {
    children: "Diplome-Docus avis",
};

const composant30127Data = {
    children: "S??lection d?????coles",
    className: "composant-31-1-1",
};

const composant32111Data = {
    children: "S??lection de dipl??mes",
};

const composant30128Data = {
    children: "Liste des dipl??mes",
    className: "composant-34-1-1",
};

const composant32112Data = {
    children: "Que faire apr??s le bac",
};

const composant30129Data = {
    children: "Acc??s ??tablissement",
    className: "composant-30-2-1",
};

const composant30130Data = {
    children: "R??f??rencer son ??tablissement",
    className: "composant-31-2-1",
};

const composant4016Data = {
    src: "/img/trac--1999-12@1x.png",
    className: "groupe-1936-1",
};

const composant41111Data = {
    src: "/img/trac--2000-12@1x.png",
    className: "groupe-1936-1",
};

const composant4216Data = {
    src: "/img/trac--2001-11@1x.png",
    className: "groupe-1936-1",
};

const composant41112Data = {
    src: "/img/instagram-10@1x.png",
    className: "icons-5",
};

const title36Data = {
    className: "title-6",
};

const footer32Data = {
    composant301Props: composant30126Data,
    composant3012Props: composant30127Data,
    composant321Props: composant32111Data,
    composant3013Props: composant30128Data,
    composant3212Props: composant32112Data,
    composant3014Props: composant30129Data,
    composant3015Props: composant30130Data,
    composant401Props: composant4016Data,
    composant411Props: composant41111Data,
    composant421Props: composant4216Data,
    composant4112Props: composant41112Data,
    composant401Props2: title36Data,
};

const filiresData = {
    x12: "/img/12-10@1x.png",
    scoolizeLogoPalettes1: "/img/scoolize-logo---palettes--1--1@1x.png",
    trac1992: "/img/trac--1992-1@1x.png",
    lesFiliresToujoursUneGalre: `"Les fili??res toujours une gal??re"`,
    cEstNormalQuOnVousAideUnPeu: "C'est normal qu'on vous aide un peu ????",
    bonCEstPartiSuivezNous: "Bon c'est parti ?! Suivez nous ????",
    image9: "/img/image-9@1x.png",
    projectHeader3Props: projectHeader32Data,
    filliresProps: fillires6Data,
    formationProps: formation6Data,
    groupe1882Props: groupe18826Data,
    navigation52Props: navigation52Data,
    groupe1907Props: groupe19078Data,
    footer32Props: footer32Data,
};

const groupe19365Data = {
    className: "groupe-1936-3",
};

const navigation32Data = {
    groupe1936Props: groupe19365Data,
};

const bouton7Data = {
    src: "/img/trac--433-11@1x.png",
};

const navigation522Data = {
    boutonProps: navigation32Data,
    boutonProps2: bouton7Data,
};

const icon7Data = {
    className: "icon-5",
};

const title8Data = {
    iconProps: icon7Data,
};

const projectHeader26Data = {
    iconProps: title8Data,
};

const projectHeader7Data = {
    className: "project-header-6",
    projectHeader2Props: projectHeader26Data,
};

const fillires7Data = {
    children: "Fili??res",
};

const fillires8Data = {
    children: "M??tiers",
    className: "mtiers",
};

const groupe18827Data = {
    className: "groupe-1882-6",
};

const groupe19079Data = {
    quappelleTOnFormation: "Quel m??tier choisir ?",
    uneFormationEstUn: <>Il existe deux fa??ons d&#x27;envisager l&#x27;avenir professionnel : en se basant sur la r??ussite, ou en se focalisant sur un projet. L&#x27;id??al est de r??aliser un r??ve, c&#x27;est pourquoi le m??tier doit ??tre envisag?? sous cet angle m??me si la raison est ??galement importante. Si, enfant, la majorit?? r??ve d&#x27;aventure, une fois dans l&#x27;enseignement sup??rieur, les choix d??pendent davantage de crit??res plus terre ?? terre : il faut rentabiliser les ??tudes, privil??gier la s??curit?????<br /><br />Parmi les questions que doit se poser l&#x27;??l??ve lorsqu&#x27;il r??fl??chit ?? l&#x27;orientation qu&#x27;il doit prendre, il y a celle qui le concerne personnellement (qui veut-il ??tre ?) et celle qui concerne sa conception de la vie (que veut-il poss??der ?).<br /><br />Il faut ??galement garder en t??te que la r??ussite ne passe pas forc??ment par l&#x27;obtention d&#x27;un CDI. Etre en CDD fournit de l&#x27;exp??rience, et c&#x27;est elle qui int??resse aujourd&#x27;hui les recruteurs. Elle permet d&#x27;obtenir un meilleur salaire et facilite les recherches. Au moment de l&#x27;orientation, il ne faut donc pas forc??ment privil??gier les domaines qui semblent le plus embaucher (m??me s&#x27;ils ne sont pas ?? n??gliger) mais rester optimiste et motiv??.<br /><br />Les choix ne doivent pas ??tre d??termin??s par la peur de l&#x27;??chec ou d&#x27;un salaire trop faible. Une bonne orientation passe par du courage et engage la responsabilit?? personnelle de chacun.</>,
    className: "groupe-1907-3",
};

const groupe190710Data = {
    quappelleTOnFormation: "L???ambiance et la qualit?? de vie",
    uneFormationEstUn: <>La qualit?? de vie est un crit??re important. Viser l???ESC Pau ou l???Estia Bidart parce que l???on pratique intens??ment le surf n???a rien de fantaisiste. Entre air, eau, neige et terre, Grenoble ??cole de management et les ??coles de Grenoble INP attirent &quot;sans complexe&quot; les fanas de ski et de nouvelles technologies.<br />Certains ??tudiants se sentiront plus ?? l???aise sur un petit campus, d???autres ??prouveront le besoin d?????voluer ?? proximit?? d???une grande ville. Les uns opteront pour un lieu donn?? en raison de sa proximit?? avec leur r??sidence familiale, d???autres seront sensibles ?? l???ambiance g??n??rale qui r??gne sur le campus. s.</>,
    className: "groupe-1915-1",
};

const groupe190711Data = {
    quappelleTOnFormation: "Et si l'on n'a pas d'id??e ?",
    uneFormationEstUn: "Contrairement ?? ce que l'on pourrait penser, de nombreux ??l??ves de lyc??es voire qui font d??j?? partie de l'enseignement sup??rieur ne savent pas quoi faire comme m??tier ou vers quel domaine se diriger. Il s'agit d'une v??ritable source d'angoisse, la pression existant autour de l'orientation ??tant bien r??elle. Tr??s t??t, les ??l??ves sont sollicit??s et doivent d??cider d'un chemin et m??me si les r??orientations sont possible et de plus en plus facilit??es, la notion de perte de temps qui plane sur ceux qui n'ont pas encore fait leur choix est constante.",
    className: "groupe-1916-1",
};

const groupe190712Data = {
    quappelleTOnFormation: "Se poser les bonnes questions",
    uneFormationEstUn: <>Ce genre de situation peut ainsi mener ?? de mauvaises orientations et l&#x27;??l??ve se retrouve en situation d&#x27;??chec. Pourtant, il existe des fa??ons d&#x27;y voir plus clair et de trouver une piste.<br /><br />L&#x27;orientation est une des premi??res grandes d??cisions dans la vie d&#x27;un individu. Pour ??tre r??ussie, elle doit ??tre ??tudi??e. En d&#x27;autres termes, l&#x27;orientation se pr??pare, il faut emmagasiner le plus d&#x27;informations possibles afin de faire le choix le plus judicieux. Or, comme il s&#x27;agit d&#x27;un processus angoissant, certains vont avoir tendance ?? le repousser et se retrouvent ?? choisir dans l&#x27;urgence une formation pas adapt??e. La premi??re chose ?? faire est d&#x27;??tre pragmatique. La question ?? se poser n&#x27;est pas &quot;quel m??tier je souhaite faire&quot; mais &quot;dans les 5 ou 10 prochaines ann??es, que veux-je faire ?&quot;.<br /><br />Pour y r??pondre, il faut se conna??tre. En cela les tests d&#x27;orientation sont int??ressants, il en existe de nombreux sur internet et certains sont gratuits. Ils permettent d&#x27;obtenir quelques pistes. Celles-ci ne doivent pas ??tre prises comme des v??rit??s mais sont l?? pour aider l&#x27;??l??ve ?? se diriger et ?? se poser d&#x27;autres questions plus pr??cises. On peut ??galement interroger les professeurs, les parents, les amis qui ont un regard ext??rieur, ce qui peut ??tre int??ressant. Les activit??s et loisirs pratiqu??s sont ??galement de bons indicateurs.<br /><br />Deuxi??me chose, faire une liste des besoins et des envies. Ces deux notions sont tr??s diff??rentes mais d&#x27;une importance capitale. Avoir envie de voyager n&#x27;est pas compatible avec tous les m??tiers, de m??me que le besoin de dormir ou la n??cessit?? d&#x27;avoir des horaires fixes par exemple.</>,
    className: "groupe-1917-1",
};

const groupe190713Data = {
    quappelleTOnFormation: "Faire de l'investigation",
    uneFormationEstUn: <>L&#x27;argument qui revient le plus fr??quemment chez les ??l??ves qui ne savent pas quelle orientation emprunter concerne les m??tiers ?? proprement parler. Beaucoup regrettent de ne pas avoir davantage d&#x27;informations sur certains postes voire domaines et certains avouent d??couvrir des m??tiers ou formations qui auraient pu les int??resser alors qu&#x27;ils ont d??j?? termin?? leurs ??tudes ou fait leurs premiers pas dans la vie active. Difficile d??s lors d&#x27;oser tout quitter pour recommencer.<br /><br />C&#x27;est pourquoi il est important d&#x27;effectuer une v??ritable investigation. Cela peut commencer par la consultation de fiches m??tiers, disponibles en ligne, dans les ??tablissements, les centres d&#x27;orientation??? Il faut garder en t??te cependant que la r??alit?? du m??tier n&#x27;est pas sur le papier, elle change, surtout en ce qui concerne les nouveaux postes, notamment ceux li??s au num??rique, mais aussi ?? la finance??? On peut aussi opter pour les pr??sentations de m??tiers en vid??os, plus percutantes.<br /><br />De m??me, il faut s&#x27;interroger sur l&#x27;environnement que l&#x27;on convoite. Travailler dans les ressources humaines au sein d&#x27;une entreprise locale n&#x27;a rien ?? voir avec le m??me m??tier mais effectuer dans une soci??t?? internationale par exemple. Start-up, multinationales, ?? son compte, les possibilit??s sont multiples et les postes le sont tout autant. L?? encore, inutile de se projeter dans 25 ans, il faut rester focalis?? sur les premi??res ann??es professionnelles.</>,
    className: "groupe-1918-1",
};

const groupe190714Data = {
    quappelleTOnFormation: "Un dernier conseil ?",
    uneFormationEstUn: `Rencontrez les ??coles directement sur les salons d???orientation, discutez avec les ??tudiants. Comme vous, ils ont connu les m??mes pr??occupations, les m??mes questionnements, les m??mes h??sitations. Puis, dans la mesure du possible, essayez de vous rendre sur place. Il est important de pouvoir "prendre l???ambiance" des lieux o?? vous allez ??tudier pendant plusieurs ann??es.`,
    className: "groupe-1919-1",
};

const groupe190715Data = {
    quappelleTOnFormation: "??tre s??r de ne pas faire d'erreur",
    uneFormationEstUn: <>Difficile malgr?? toutes les recherches que l&#x27;on effectue de s&#x27;assurer que l&#x27;orientation choisie est la bonne. C&#x27;est l?? qu&#x27;entre en jeu l&#x27;exp??rience sur le terrain. Elle est un excellent moyen de se confronter ?? une certaine r??alit?? de l&#x27;emploi. Certes il est possible d&#x27;effectuer des stages, mais ceux-ci ne sont pas toujours faciles ?? obtenir ni ?? mener lorsque l&#x27;on est encore lyc??en ou que l&#x27;on n&#x27;a pas de dipl??me. La solution est d&#x27;aller au-devant des professionnels directement. Nombreux sont ceux qui se montreront enthousiastes ?? l&#x27;id??e de partager leur exp??rience, ne serait-ce que le temps d&#x27;une conversation. Pour les rencontrer, il suffit de savoir activer son r??seau. Chez un commer??ant, engager la conversation peut mener ?? une rencontre !<br /><br />Ensuite, il faudra pr??parer l&#x27;entretien, r??fl??chir ?? certaines questions notamment celles qui concernent le parcours effectu?? pour en arriver ?? ce m??tier.<br /><br /> <br /><br />C&#x27;est ?? ce moment-l?? qu&#x27;il faudra se pr??occuper des ??tudes, r??fl??chir au chemin ?? emprunter pour arriver au poste convoit??.<br /><br />L&#x27;orientation, ce n&#x27;est pas choisir un parcours pour ensuite faire un m??tier mais bien choisir un m??tier puis effectuer les bonnes ??tudes. S&#x27;interroger, s&#x27;informer, ??changer, rencontrer sont donc autant d&#x27;??tapes qui permettent de choisir un m??tier, une orientation.</>,
    className: "groupe-1926",
};

const composant30131Data = {
    children: "Diplome-Docus avis",
};

const composant30132Data = {
    children: "S??lection d?????coles",
    className: "composant-31-1-2",
};

const composant32113Data = {
    children: "S??lection de dipl??mes",
};

const composant30133Data = {
    children: "Liste des dipl??mes",
    className: "composant-34-1-2",
};

const composant32114Data = {
    children: "Que faire apr??s le bac",
};

const composant30134Data = {
    children: "Acc??s ??tablissement",
    className: "composant-30-2-2",
};

const composant30135Data = {
    children: "R??f??rencer son ??tablissement",
    className: "composant-31-2-2",
};

const composant4017Data = {
    src: "/img/trac--1999-12@1x.png",
    className: "groupe-1936-1",
};

const composant41113Data = {
    src: "/img/trac--2000-12@1x.png",
    className: "groupe-1936-1",
};

const composant4217Data = {
    src: "/img/trac--2001-17@1x.png",
    className: "groupe-1936-1",
};

const composant41114Data = {
    src: "/img/instagram-10@1x.png",
    className: "icons-6",
};

const title37Data = {
    className: "title-7",
};

const footer322Data = {
    className: "footer-21",
    composant301Props: composant30131Data,
    composant3012Props: composant30132Data,
    composant321Props: composant32113Data,
    composant3013Props: composant30133Data,
    composant3212Props: composant32114Data,
    composant3014Props: composant30134Data,
    composant3015Props: composant30135Data,
    composant401Props: composant4017Data,
    composant411Props: composant41113Data,
    composant421Props: composant4217Data,
    composant4112Props: composant41114Data,
    composant401Props2: title37Data,
};

const pageDaccueil2Data = {
    x12: "/img/12-10@1x.png",
    scoolizeLogoPalettes1: "/img/scoolize-logo---palettes--1--1@1x.png",
    trac1992: "/img/trac--1992-1@1x.png",
    quEstCeQueTuVe: `"Qu'est ce que tu veux faire plus tard ? As-tu d??j?? choisi ton futur m??tier ?"`,
    cEstNormalQuOnVousAideUnPeu: "C'est normal qu'on vous aide un peu ????",
    bonCEstPartiSuivezNous: "Bon c'est parti ?! Suivez nous ????",
    navigation52Props: navigation522Data,
    projectHeaderProps: projectHeader7Data,
    filliresProps: fillires7Data,
    fillires2Props: fillires8Data,
    groupe1882Props: groupe18827Data,
    groupe1907Props: groupe19079Data,
    groupe19072Props: groupe190710Data,
    groupe19073Props: groupe190711Data,
    groupe19074Props: groupe190712Data,
    groupe19075Props: groupe190713Data,
    groupe19076Props: groupe190714Data,
    groupe19077Props: groupe190715Data,
    footer32Props: footer322Data,
};

const composant1091Data = {
    trac2012: "/img/trac--2012@1x.png",
    trac2013: "/img/trac--2013@1x.png",
    trac2014: "/img/trac--2014@1x.png",
    tlchargerLesBulletins: "T??l??charger les bulletins",
};

const composant1101Data = {
    iconAwesomeArrowAltCircleLeft: "/img/icon-awesome-arrow-alt-circle-left-1@1x.png",
    laisserPourAprs: "Laisser pour apr??s",
};

const composant1111Data = {
    iconAwesomePenNib: "/img/icon-awesome-pen-nib@1x.png",
    entrerLesDonnesLaMain: "Entrer les donn??es ?? la main",
};

const validation1Data = {
    composant1091Props: composant1091Data,
    composant1101Props: composant1101Data,
    composant1111Props: composant1111Data,
};

const bouton8Data = {
    src: "/img/trac--433-10@1x.png",
    className: "bouton-3",
};

const navigation422Data = {
    className: "navigation-2",
    boutonProps: bouton8Data,
};

const icon8Data = {
    className: "icon-6",
};

const title9Data = {
    iconProps: icon8Data,
};

const projectHeader27Data = {
    iconProps: title9Data,
};

const projectHeader8Data = {
    className: "project-header-7",
    projectHeader2Props: projectHeader27Data,
};

const fillires9Data = {
    children: "Fili??res",
};

const groupe18828Data = {
    className: "groupe-1882-7",
};

const composant30136Data = {
    children: "Diplome-Docus avis",
};

const composant30137Data = {
    children: "S??lection d?????coles",
    className: "composant-31-23-3",
};

const composant32115Data = {
    children: "S??lection de dipl??mes",
};

const composant30138Data = {
    children: "Liste des dipl??mes",
    className: "composant-34-12-3",
};

const composant32116Data = {
    children: "Que faire apr??s le bac",
};

const composant30139Data = {
    children: "Acc??s ??tablissement",
    className: "composant-30-24-3",
};

const composant30140Data = {
    children: "R??f??rencer son ??tablissement",
    className: "composant-31-24-3",
};

const composant4018Data = {
    src: "/img/trac--1999-10@1x.png",
};

const composant41115Data = {
    src: "/img/trac--2000-10@1x.png",
    className: "",
};

const composant4218Data = {
    src: "/img/trac--2001-10@1x.png",
    className: "",
};

const composant41116Data = {
    src: "/img/instagram-10@1x.png",
    className: "icons-7",
};

const title38Data = {
    className: "title-8",
};

const footer5Data = {
    composant301Props: composant30136Data,
    composant3012Props: composant30137Data,
    composant321Props: composant32115Data,
    composant3013Props: composant30138Data,
    composant3212Props: composant32116Data,
    composant3014Props: composant30139Data,
    composant3015Props: composant30140Data,
    composant401Props: composant4018Data,
    composant411Props: composant41115Data,
    composant421Props: composant4218Data,
    composant4112Props: composant41116Data,
    composant401Props2: title38Data,
};

const inscriptionTablissementRussisData = {
    x12: "/img/12-10@1x.png",
    groupe2020: "/img/amphi-de-fac-2@1x.png",
    x3388631: "/img/3388631-1@1x.png",
    textH5Sele: <>Inscription r??ussie, nous vous recontacterons sous<br />peu pour vous donner l&#x27;acc??s ?? la modification du<br />profil de votre ??tablissement!</>,
    overlapGroup: "/img/trac--1991@1x.png",
    modifierLeProfilDTablissement: "MODIFIER LE PROFIL D'??TABLISSEMENT",
    lienDuFormulaire: "Lien du formulaire: https://forms.gle/Chk7HpX9tQ52jXh66",
    navigation42Props: navigation422Data,
    projectHeaderProps: projectHeader8Data,
    filliresProps: fillires9Data,
    groupe1882Props: groupe18828Data,
    footerProps: footer5Data,
};

const button8Data = {
    className: "button-3",
};

const bouton9Data = {
    src: "/img/trac--433-11@1x.png",
};

const icon9Data = {
    className: "",
};

const title10Data = {
    iconProps: icon9Data,
};

const projectHeader28Data = {
    iconProps: title10Data,
};

const projectHeader9Data = {
    className: "project-header-8",
    projectHeader2Props: projectHeader28Data,
};

const fillires10Data = {
    children: "Fili??res",
};

const formation9Data = {
    className: "formation-4",
};

const composant291Data = {
    btsAgPmePmi: "BTS AG PME PMI",
};

const composant2912Data = {
    btsAgPmePmi: "BTS Gestion de projet",
    className: "composant-29-3",
};

const composant2913Data = {
    btsAgPmePmi: "BTS MCO",
    className: "composant-29-4",
};

const composant2914Data = {
    btsAgPmePmi: "BTS CG",
};

const composant2915Data = {
    btsAgPmePmi: "BTS Communication digitale",
    className: "composant-29-6",
};

const composant2916Data = {
    btsAgPmePmi: "BTS Gestion du patrimoine",
    className: "composant-29-7",
};

const composant2917Data = {
    btsAgPmePmi: "BTS MUC",
    className: "composant-29-8",
};

const composant2918Data = {
    btsAgPmePmi: "BTS CGO",
};

const composant2919Data = {
    btsAgPmePmi: "BTS GPME",
    className: "composant-29-10",
};

const composant29110Data = {
    btsAgPmePmi: "BTS Gestion du personnel",
    className: "composant-29-11",
};

const composant29111Data = {
    btsAgPmePmi: "BTS Marketing Digital",
    className: "composant-29-12",
};

const formationsLesPlusRecherchesData = {
    composant291Props: composant291Data,
    composant2912Props: composant2912Data,
    composant2913Props: composant2913Data,
    composant2914Props: composant2914Data,
    composant2915Props: composant2915Data,
    composant2916Props: composant2916Data,
    composant2917Props: composant2917Data,
    composant2918Props: composant2918Data,
    composant2919Props: composant2919Data,
    composant29110Props: composant29110Data,
    composant29111Props: composant29111Data,
};

const composant30141Data = {
    children: "Diplome-Docus avis",
};

const composant30142Data = {
    children: "S??lection d?????coles",
    className: "composant-31-1-3",
};

const composant32117Data = {
    children: "S??lection de dipl??mes",
};

const composant30143Data = {
    children: "Liste des dipl??mes",
    className: "composant-34-1-3",
};

const composant32118Data = {
    children: "Que faire apr??s le bac",
};

const composant30144Data = {
    children: "Acc??s ??tablissement",
    className: "composant-30-2-3",
};

const composant30145Data = {
    children: "R??f??rencer son ??tablissement",
    className: "composant-31-2-3",
};

const composant4019Data = {
    src: "/img/trac--1999-10@1x.png",
};

const composant41117Data = {
    src: "/img/trac--2000-10@1x.png",
    className: "",
};

const composant4219Data = {
    src: "/img/trac--2001-10@1x.png",
    className: "",
};

const composant41118Data = {
    src: "/img/instagram-10@1x.png",
    className: "icons-8",
};

const title39Data = {
    className: "title-9",
};

const footer6Data = {
    className: "footer-6",
    composant301Props: composant30141Data,
    composant3012Props: composant30142Data,
    composant321Props: composant32117Data,
    composant3013Props: composant30143Data,
    composant3212Props: composant32118Data,
    composant3014Props: composant30144Data,
    composant3015Props: composant30145Data,
    composant401Props: composant4019Data,
    composant411Props: composant41117Data,
    composant421Props: composant4219Data,
    composant4112Props: composant41118Data,
    composant401Props2: title39Data,
};

const pageDaccueilData = {
    lesConditionsGnr: "Les conditions g??n??rales et la politique de confidentialit??",
    x12: "/img/12-10@1x.png",
    ic_Search_24Px: "/img/ic-search-24px-10@1x.png",
    scoolizeLogoPalettes1: "/img/scoolize-logo---palettes--1--1@1x.png",
    trac1992: "/img/trac--1992-1@1x.png",
    onSaitQuOnAppre: `"On sait qu'on apprend tout au long de nos vies mais avez-vous appris ?? choisir vos ??tudes ?"`,
    cEstNormalQuOnVousAideUnPeu: "C'est normal qu'on vous aide un peu ????",
    bonCEstPartiSuivezNous: "Bon c'est parti ?! Suivez nous ????",
    jeSouhaiteApprofon: "Je souhaite approfondir mes recherches..",
    buttonProps: button8Data,
    boutonProps: bouton9Data,
    projectHeaderProps: projectHeader9Data,
    filliresProps: fillires10Data,
    formationProps: formation9Data,
    formationsLesPlusRecherchesProps: formationsLesPlusRecherchesData,
    footerProps: footer6Data,
};

const bouton10Data = {
    src: "/img/trac--433-11@1x.png",
};

const icon10Data = {
    className: "",
};

const title11Data = {
    iconProps: icon10Data,
};

const projectHeader29Data = {
    iconProps: title11Data,
};

const projectHeader10Data = {
    className: "project-header-9",
    projectHeader2Props: projectHeader29Data,
};

const fillires11Data = {
    children: "Fili??res",
};

const groupe18829Data = {
    className: "groupe-1882-8",
};

const groupe190716Data = {
    quappelleTOnFormation: "Qu???appelle-t-on formation????",
    uneFormationEstUn: <>Une formation est un temps que vous allez prendre pour apprendre de nouvelles notions. La formation peut prendre de tr??s nombreuses formes. De l?????cole maternelle ?? la formation professionnelle en cours de carri??re, nous sommes toujours en cours d???apprentissage. La formation est le fait de gagner des connaissances et des comp??tences.<br /><br />Les formations que Diplomeo peut vous aider ?? trouver sont de diff??rentes dur??es : de quelques semaines ?? plusieurs ann??es???; de diff??rents niveaux : du niveau troisi??me au master???; certifiantes ou dipl??mantes???; dans de grandes ??coles comme dans des centres de formation plus personnalis??s ou m??me depuis chez vous, etc.</>,
    className: "groupe-1907-4",
};

const groupe190717Data = {
    quappelleTOnFormation: "Quels sont les diff??rents types de formations en France????",
    uneFormationEstUn: "Quel que soit votre profil, vous ??tes concern?? par la formation. Que ce soit pour vous lancer dans les ??tudes sup??rieures apr??s le bac, pour changer de m??tier ou pour faire ??voluer votre carri??re par exemple. Voici les diff??rents types de formation qui existent.",
    className: "groupe-1915-2",
};

const groupe190718Data = {
    quappelleTOnFormation: "La formation initiale",
    uneFormationEstUn: "Le terme de formation initiale d??signe une formation suivie dans son int??gralit?? en pr??sentiel et sans alternance. La formation initiale est dans la continuit?? d???une scolarit?? : vous suivez une formation initiale si vous entrez en ??tudes sup??rieures apr??s le bac par exemple. En revanche, si vous d??cidez d???arr??ter vos ??tudes et de les reprendre plus de deux ans apr??s, vous allez suivre des formations professionnelles ou formations continues.",
    className: "groupe-1916-2",
};

const groupe190719Data = {
    quappelleTOnFormation: "La formation continue",
    uneFormationEstUn: "La formation continue s???oppose ?? la formation initiale. On parle de ce type de formation dans le cas de reprises d?????tudes notamment. Vous ??tes en formation continue si vous d??cidez de reprendre le chemin de l?????cole pour vous former ?? de nouvelles comp??tences, mais ??galement si vous participez ?? une formation dans le cadre de votre emploi actuel. En somme, la formation continue se destine aux personnes qui ont d??j?? de l???exp??rience et qui souhaitent soit changer d???horizon et apprendre un nouveau m??tier, soit se former pour faire ??voluer leur activit?? actuelle. Par exemple, si vous travaillez dans un service commercial et souhaitez apprendre de nouvelles notions de comptabilit??, vous pourrez suivre une formation dans le cadre de votre m??tier. De m??me si vous ??tes m??canicien et souhaitez totalement changer de m??tier pour travailler dans la communication par exemple.",
    className: "groupe-1917-2",
};

const groupe190720Data = {
    quappelleTOnFormation: "La formation professionnelle",
    uneFormationEstUn: "La formation professionnelle s???apparente beaucoup ?? la formation continue. Elle vise ?? gagner de nouvelles comp??tences n??cessaires ?? une ??volution ou ?? un changement de m??tier. Les formations professionnelles peuvent s???inscrire dans le plan de formation de votre entreprise ou ??maner de votre demande personnelle. Elles peuvent durer quelques jours (une formation au tri dans l???entreprise par exemple) ?? plusieurs semaines (une formation ?? un nouvel outil tr??s technique par exemple).",
    className: "groupe-1918-2",
};

const groupe190721Data = {
    quappelleTOnFormation: "La formation en alternance",
    uneFormationEstUn: <>La formule de l???alternance est de plus en plus propos??e par les ??tablissements de formation. Que ce soit en contrat d???apprentissage ou en contrat de professionnalisation, vous trouverez des formations en alternance pour tous les niveaux : du CAP au master, en passant par le bachelor ou le BTS.<br /><br />Le principe de l???alternance est d???alterner entre p??riodes de cours et de formation th??oriques et p??riodes de travail en entreprise. Ces temps de formation sur le terrain permettent de mettre en application les notions de cours et d???acqu??rir une premi??re exp??rience professionnelle. Que ce soit au niveau des ??tudiants, des entreprises ou des ??coles, tout le monde y trouve son compte. La formation en alternance permet ?? l?????tudiant de se former gratuitement tout en ??tant pay??. L???entreprise b??n??ficie d???une main-d?????uvre form??e aux m??thodes de son entreprise et donc facilement employable par la suite. L?????cole, quant ?? elle, forme des ??tudiants qui s???ins??reront facilement sur le march?? de l???emploi et qui ont une bonne ma??trise de l???environnement de travail dans lequel ils vont ??voluer.</>,
    className: "groupe-1919-2",
};

const groupe190722Data = {
    quappelleTOnFormation: "La formation ?? distance",
    uneFormationEstUn: "C???est la formule qui convient aux personnes qui n???ont pas envie de mettre ou de remettre les pieds dans une ??cole. La formation ?? distance correspond au fait de recevoir des cours, des exercices, des examens blancs, des conseils??? et de les suivre depuis chez soi. Vous pourrez recevoir les cours par courrier ou sur une plateforme de formation en ligne. La formation ?? distance permet notamment aux personnes qui souhaitent se reconvertir de suivre des cours en parall??le de leur activit?? actuelle.",
    className: "groupe-1926-1",
};

const groupe190723Data = {
    quappelleTOnFormation: "La formation en ligne",
    uneFormationEstUn: <>Comme la formation ?? distance, la formation en ligne est le fait de se former via des plateformes d??di??es sur internet. Vous trouverez des formations dipl??mantes, certifiantes ou simplement pour votre culture. C???est notamment le cas des MOOCs (Massive Online Open Courses) qui permettent ?? tout le monde de suivre de petites formations en ligne et de gagner en comp??tences ou en culture personnelle. Ce mode de formation permet de gagner du temps et de suivre la formation lorsque l???on peut et veut se connecter. En ligne, vous pourrez aussi trouver des formations de haut niveau et dipl??mantes comme des bachelors ou des CAP par exemple. Seul inconv??nient, vous devrez vous exercer seul, car la pratique est exclue des cours en ligne.<br /><br />Les formations en ligne sont souvent utilis??es en entreprise lorsque les managers veulent faire ??voluer des employ??s en leur demandant d???apprendre de nouvelles notions.</>,
    className: "groupe-1907-5",
};

const groupe190724Data = {
    quappelleTOnFormation: "La formation pour adulte",
    uneFormationEstUn: "En soi, la formation pour adultes concerne la formation professionnelle et la formation continue. Ces modes de formation ne sont pas r??serv??s aux adultes, mais c???est g??n??ralement ce public en qu??te de nouvelles comp??tences ou d???une nouvelle carri??re qui se lance. De nombreuses solutions existent pour financer les formations des adultes qui reprennent des ??tudes ou m??me une formation courte. L???important lorsque l???on est adulte et que l???on veut se former, c???est de se lancer et de savoir r??ellement quel projet nous ??panouirait le plus.",
    className: "groupe-1915-3",
};

const groupe190725Data = {
    quappelleTOnFormation: "Qu???est-ce qu???un organisme/centre de formation????",
    uneFormationEstUn: "Pour se former, plusieurs types de formations existent, mais aussi plusieurs lieux. En tout cas, pour les personnes qui ne choisissent pas la formation en ligne ou ?? distance. Des grandes universit??s aux ??coles de commerce, en passant par les petits centres de formation professionnelle : chaque formation ?? son lieu d??di??.",
    className: "groupe-1916-3",
};

const groupe190726Data = {
    quappelleTOnFormation: "L???universit?? ou la facult??",
    uneFormationEstUn: <>D??di??e aux ??tudes universitaires, l???universit?? propose des formations assez th??oriques et peu tourn??es vers la pratique. Vous pourrez notamment trouver des licences (en trois ans apr??s le bac) ou des masters (deux ans apr??s un bac+3), des doctorats (deux ans apr??s le bac+5) ou encore des formations professionnelles. Les facult??s abrit??es par les universit??s d??finissent les sp??cialisations des formations : sant??, lettres, sciences, sciences humaines, etc. Ces grands ??tablissements sont accessibles ?? la fois apr??s le bac, mais aussi pour des formations de plus haut niveau.<br /><br />Ils accueillent g??n??ralement de nombreux ??tudiants et sont situ??s dans les grandes villes, avec des campus annexes dans des villes de taille moyenne.</>,
    className: "groupe-1917-3",
};

const groupe190727Data = {
    quappelleTOnFormation: "Les ??coles",
    uneFormationEstUn: <>Les ??coles de l???enseignement sup??rieur sont nombreuses et leurs sp??cialisations sont tout aussi vari??es. Parmi les plus nombreuses et les plus connues : les ??coles de commerce et les ??coles d???ing??nieurs. Vous trouverez des ??coles, priv??es ou publiques, pour tous les secteurs de formation : de la sant?? aux sciences, en passant par la communication, les arts ou encore le sport. Il existe des centaines d?????tablissements sp??cialis??s en France.<br /><br />Les programmes propos??s par ces ??coles sont tr??s vari??s. Ils vont g??n??ralement du BTS (bac+2) au mast??re sp??cialis?? (bac+5), toujours en passant par des formations pour les professionnels.</>,
    className: "groupe-1918-3",
};

const groupe190728Data = {
    quappelleTOnFormation: "Les grandes ??coles",
    uneFormationEstUn: "Ce qu???on appelle grandes ??coles sont des ??coles pr??c??demment cit??es (??coles de commerce ou d???ing??nieurs notamment) qui jouissent de belles places dans les classements et par la m??me occasion, de bonnes r??putations. Ces ??coles proposent g??n??ralement des formations difficiles d???acc??s et de tr??s haut niveau. Dans chaque secteur, des ??coles se d??tachent du lot et prennent ainsi le titre de grande ??cole. D??s que le nom r??sonne en t??te du grand public (l???ENA, SciencesPo, Polytechnique, etc.), on peut dire que l???on est face ?? une grande ??cole en somme.",
    className: "groupe-1927",
};

const groupe190729Data = {
    quappelleTOnFormation: "Comment suivre une formation????",
    uneFormationEstUn: "Pour suivre une formation, vous aurez plusieurs modes d???apprentissage. Selon votre situation actuelle, en reconversion ou en post-bac par exemple, vous pourrez choisir l???un des moyens de formation suivant.",
    className: "groupe-1928",
};

const groupe190730Data = {
    quappelleTOnFormation: "En continu",
    uneFormationEstUn: "Comme nous vous le disons plus haut, la formation continue est faite pour les personnes qui souhaitent compl??ter ou varier leurs connaissances et comp??tences. Vous pourrez donc suivre une formation continue entre deux p??riodes de travail. Les formations propos??es par votre employeur sont incluses ?? votre emploi du temps et vous ??tes d??tach?? de votre poste le temps de la formation.",
    className: "groupe-1930",
};

const groupe190731Data = {
    quappelleTOnFormation: "En CPF",
    uneFormationEstUn: "Le Compte Personnel de Formation (CPF) est un compte sur lequel tout un chacun cumule, au long de sa carri??re, qu???il travaille ou non, des heures de formation. Ces heures peuvent ??tre utilis??es lors d???un cong?? de formation (lire CIF ci-dessous) ou dans le cadre d???un changement d???activit?? ou d???une recherche d???emploi n??cessitant des comp??tences compl??mentaires par exemple. Ce compte vous suit tout au long de votre vie et vous permet de suivre des formations diverses en comptabilit??, photo, expression orale, cuisine, conduite, etc. Ces heures de formation sont un vrai atout pour acc??der ?? de nouveaux horizons???!",
    className: "groupe-1929",
};

const groupe190732Data = {
    quappelleTOnFormation: "En CIF",
    uneFormationEstUn: "Le Cong?? Individuel de Formation (CIF) est donc un temps durant lequel vous pourrez suivre une formation financ??e, en totalit?? ou en partie, par les heures cumul??es sur votre CPF (lire ci-dessus). Ce cong?? doit ??tre accept?? par votre employeur, sauf cas particulier (p??riode d???activit?? intense, sous-effectif, etc.). Vous pourrez ainsi prendre le temps d???obtenir une certification ou m??me un dipl??me lors de vos quelques jours, semaines ou m??me mois de cong??s.",
    className: "groupe-1931",
};

const groupe190733Data = {
    quappelleTOnFormation: "En VAE",
    uneFormationEstUn: "La formation par VAE (Validation des acquis de l???exp??rience) est le fait de valider des comp??tences et connaissances que vous avez d??j?? apprises sur le terrain. Concr??tement, si vous exercer dans une cr??che depuis des ann??es et souhaitez obtenir le titre de pu??ricultrice, vous pourrez passer un CAP petite enfance par le biais de la VAE. Pour ne pas faire doublon avec tout ce que vous savez d??j?? faire, vous n???avez qu???un minimum de cours pour vous pr??parer ?? l???examen. La VAE est un moyen de faire ??voluer sa carri??re en obtenant des dipl??mes ou certifications qui pourront vous faire monter dans l???entreprise par exemple.",
    className: "groupe-1932",
};

const groupe190734Data = {
    quappelleTOnFormation: "Par des cours du soir",
    uneFormationEstUn: "Le syst??me de cours du soir est assez r??pandu dans des centres de formation professionnelle. Vous pourrez ainsi poursuivre votre activit?? la journ??e et d??dier vos soir??es ?? des cours en pr??sentiel. Les cours du soir sont propos??s dans diff??rents domaines et permettent d???obtenir des certifications professionnelles ou des dipl??mes (CAP par exemple). Certains cours peuvent m??me avoir lieu le week-end.",
    className: "groupe-1933",
};

const groupe190735Data = {
    quappelleTOnFormation: "Par correspondance",
    uneFormationEstUn: "La formation ?? distance ou par correspondance est ??galement un moyen de se former le soir, mais de fa??on diff??rente et plus autonome. Vous allez recevoir des cours et pourrez apprendre les notions par vous-m??me. Vous aurez tout de m??me contact avec des professionnels qui pourront vous conseiller, vous aider dans vos exercices, dans la pr??paration de votre examen (ou concours), r??pondre ?? vos questions, etc. Ce mode de formation convient bien aux personnes qui ont peu de temps pour se former et qui veulent acqu??rir de nouvelles comp??tences ?? leur rythme.",
    className: "groupe-1935",
};

const composant30146Data = {
    children: "Diplome-Docus avis",
};

const composant30147Data = {
    children: "S??lection d?????coles",
    className: "composant-31-1-4",
};

const composant32119Data = {
    children: "S??lection de dipl??mes",
};

const composant30148Data = {
    children: "Liste des dipl??mes",
    className: "composant-34-1-4",
};

const composant32120Data = {
    children: "Que faire apr??s le bac",
};

const composant30149Data = {
    children: "Acc??s ??tablissement",
    className: "composant-30-2-4",
};

const composant30150Data = {
    children: "R??f??rencer son ??tablissement",
    className: "composant-31-2-4",
};

const composant40110Data = {
    src: "/img/trac--1999-12@1x.png",
    className: "groupe-1936-1",
};

const composant41119Data = {
    src: "/img/trac--2000-12@1x.png",
    className: "groupe-1936-1",
};

const composant42110Data = {
    src: "/img/trac--2001-17@1x.png",
    className: "groupe-1936-1",
};

const composant41120Data = {
    src: "/img/instagram-10@1x.png",
    className: "icons-9",
};

const title310Data = {
    className: "title-10",
};

const footer323Data = {
    className: "footer-22",
    composant301Props: composant30146Data,
    composant3012Props: composant30147Data,
    composant321Props: composant32119Data,
    composant3013Props: composant30148Data,
    composant3212Props: composant32120Data,
    composant3014Props: composant30149Data,
    composant3015Props: composant30150Data,
    composant401Props: composant40110Data,
    composant411Props: composant41119Data,
    composant421Props: composant42110Data,
    composant4112Props: composant41120Data,
    composant401Props2: title310Data,
};

const formation22Data = {
    lesConditionsGnr: "Les conditions g??n??rales et la politique de confidentialit??",
    x12: "/img/12-10@1x.png",
    bonCEstPartiSuivezNous: "Bon c'est parti ?! Suivez nous ????",
    scoolizeLogoPalettes1: "/img/scoolize-logo---palettes--1--1@1x.png",
    trac1992: "/img/trac--1992-1@1x.png",
    commentVousAider: `"Comment vous aider ?? trouver votre formation ?"`,
    cEstNormalQuOnVousAideUnPeu: "C'est normal qu'on vous aide un peu ????",
    boutonProps: bouton10Data,
    projectHeaderProps: projectHeader10Data,
    filliresProps: fillires11Data,
    groupe1882Props: groupe18829Data,
    groupe1907Props: groupe190716Data,
    groupe19072Props: groupe190717Data,
    groupe19073Props: groupe190718Data,
    groupe19074Props: groupe190719Data,
    groupe19075Props: groupe190720Data,
    groupe19076Props: groupe190721Data,
    groupe19077Props: groupe190722Data,
    groupe19078Props: groupe190723Data,
    groupe19079Props: groupe190724Data,
    groupe190710Props: groupe190725Data,
    groupe190711Props: groupe190726Data,
    groupe190712Props: groupe190727Data,
    groupe190713Props: groupe190728Data,
    groupe190714Props: groupe190729Data,
    groupe190715Props: groupe190730Data,
    groupe190716Props: groupe190731Data,
    groupe190717Props: groupe190732Data,
    groupe190718Props: groupe190733Data,
    groupe190719Props: groupe190734Data,
    groupe190720Props: groupe190735Data,
    footer32Props: footer323Data,
};

const icon11Data = {
    className: "",
};

const title12Data = {
    iconProps: icon11Data,
};

const projectHeader33Data = {
    titleProps: title12Data,
};

const fillires12Data = {
    children: "Fili??res",
};

const groupe188210Data = {
    className: "groupe-1882-9",
};

const nameData = {
    productOwner: "Terminale ES",
    emileeSimchenko: "Tom Maugis",
};

const userInfoData = {
    userpic: "/img/userpic-2@1x.png",
    nameProps: nameData,
};

const bouton11Data = {
    src: "/img/trac--433-10@1x.png",
    className: "bouton-4",
};

const groupe1970Data = {
    children: <>Liste des ??tablissements correspondant ?? votre recherche de :<br />Master Informatique en temps plein ?? Lyon</>,
};

const groupe1992Data = {
    groupe1970Props: groupe1970Data,
};

const groupe20042Data = {
    className: "groupe-2006",
};

const layer2Data = {
    src: "/img/layer-2-2@1x.png",
};

const composant30151Data = {
    children: "Diplome-Docus avis",
};

const composant30152Data = {
    children: "S??lection d?????coles",
    className: "composant-31-9",
};

const composant32121Data = {
    children: "S??lection de dipl??mes",
};

const composant30153Data = {
    children: "Liste des dipl??mes",
    className: "composant-34-5",
};

const composant32122Data = {
    children: "Que faire apr??s le bac",
};

const composant30154Data = {
    children: "Acc??s ??tablissement",
    className: "composant-30-10",
};

const composant30155Data = {
    children: "R??f??rencer son ??tablissement",
    className: "composant-31-10",
};

const composant40111Data = {
    src: "/img/trac--1999-10@1x.png",
};

const composant41121Data = {
    src: "/img/trac--2000-10@1x.png",
    className: "",
};

const composant42111Data = {
    src: "/img/trac--2001-3@1x.png",
    className: "groupe-1936-1",
};

const composant41122Data = {
    src: "/img/instagram-10@1x.png",
    className: "icons-10",
};

const title311Data = {
    className: "title-11",
};

const footer7Data = {
    className: "footer-7",
    composant301Props: composant30151Data,
    composant3012Props: composant30152Data,
    composant321Props: composant32121Data,
    composant3013Props: composant30153Data,
    composant3212Props: composant32122Data,
    composant3014Props: composant30154Data,
    composant3015Props: composant30155Data,
    composant401Props: composant40111Data,
    composant411Props: composant41121Data,
    composant421Props: composant42111Data,
    composant4112Props: composant41122Data,
    composant401Props2: title311Data,
};

const trouverCole113Data = {
    x12: "/img/12-10@1x.png",
    myTasks: "Mes voeux",
    myTasks2: "??ligibilit?? bourse ??tudiante",
    iconAwesomeCompass: "/img/icon-awesome-compass-1@1x.png",
    myTasks3: "Langue",
    groupe1997: "/img/icon-awesome-globe-1@1x.png",
    groupe1996: "/img/icon-awesome-money-bill-wave-1@1x.png",
    groupe1995: "/img/icon-awesome-newspaper-1@1x.png",
    ligne15: "/img/ligne-11-1@1x.png",
    masterProfessionnel: "Master Professionnel Ing??nierie Informatique (Mast??re)",
    uneFilireDeForma: "Une fili??re de formations compl??te d??livrant des titres certifi??s par l???Etat inscrits au RNCP de l???IPI du niveau IV (??quivalent Bac) au niveau I (??quivalent Bac+5).",
    trac2010: "/img/trac--2010-12@1x.png",
    trac2011: "/img/trac--2011-10@1x.png",
    plusDInfos: "Plus d'infos",
    image19: "/img/image-19-1@1x.png",
    masterProfessionnel2: "Master Professionnel Ing??nierie Informatique (Mast??re)",
    image18: "/img/image-18-1@1x.png",
    image17: "/img/image-17-1@1x.png",
    ligne13: "/img/ligne-11-1@1x.png",
    masterProfessionnel3: "Master Professionnel Ing??nierie Informatique (Mast??re)",
    formationIntelligen: <>Formation Intelligence Artificielle et Big Data ?? LYON<br /><br />L???IA School d??livre un dipl??me certifiant une double comp??tence, technique (programmation, codage, et math??matiques appliqu??es ?? la computer science) et en Management (marketing, comptabilit??, finance notamment). Votre profil ?? la fois technique et business vous permettra de doubler vos comp??tences op??rationnelles et d???appr??hender des probl??matiques transversales.</>,
    trac20102: "/img/trac--2010-12@1x.png",
    trac20112: "/img/trac--2011-10@1x.png",
    trac20103: "/img/trac--2010-12@1x.png",
    trac20113: "/img/trac--2011-10@1x.png",
    ligne14: "/img/ligne-11-1@1x.png",
    x5AnsPourDevenirU: <>5 ans pour devenir un expert reconnu<br />Dans ce parcours, les ??tudiants peuvent int??grer Epitech Technology dans l???un des 15 campus en France. C???est dans ce campus choisi que se d??roulent les 3 premi??res ann??es de formation.<br /><br />En 4e ann??e, la scolarit?? se d??roule ?? l???International. Les ??tudiants partent pour une ann??e dans l???une des 100 universit??s partenaires partout dans le monde ou dans l&#x27;un des campus d&#x27;Epitech Technology en Europe.</>,
    imageContainer: "/img/image-16-10@1x.png",
    image16: "/img/image-16-10@1x.png",
    image162: "/img/image-16-10@1x.png",
    image163: "/img/image-16-10@1x.png",
    trac20104: "/img/trac--2010-15@1x.png",
    trac20114: "/img/trac--2011-14@1x.png",
    moinsDInfos: "Moins d'infos",
    ligne11: "/img/ligne-11-1@1x.png",
    masterProfessionnel4: "Master Professionnel Ing??nierie Informatique (Mast??re)",
    expertEnInformat: <>&quot; Expert en informatique et syst??me d&#x27;information&quot;<br /><br />Certification EPSI de niveau 1 (FR) et de niveau 7 (Eu), enregistr?? au RNCP</>,
    epsiLcoleQuiF: <>EPSI : L?????COLE QUI FORME LES ESPRITS INNOVANTS AUX COMP??TENCES INFORMATIQUES.<br />L???ACQUISITION DE COMP??TENCES : LE COEUR DE NOTRE SYST??ME D???ADMISSION<br /><br />Le programme modulaire, bas?? sur l???acquisition des comp??tences du parcours Ing??nierie Informatique, permet toutes les admissions post-Bac, Bac+2, Bac+3 et sous conditions, les admissions parall??les.<br /><br /> L???EPSI analyse chaque dossier individuellement afin de proposer les solutions d???accompagnement ad??quat ?? l???atteinte de l???objectif d???acquisition de comp??tences du futur apprenant.<br /><br />Notre outil d?????valuation des comp??tences vous permet d???int??grer l???EPSI tout au long de l???ann??e.<br /><br />Salari??s, demandeurs d???emplois, vous pouvez ??galement int??grer l???EPSI et b??n??ficier de la VAE (Validation des Acquis et de l???Exp??rience).<br /><br />Les formations de l???EPSI sont ??ligibles au CPF (Compte Personnel de Formation)</>,
    candidater: "Candidater",
    projectHeader3Props: projectHeader33Data,
    filliresProps: fillires12Data,
    groupe1882Props: groupe188210Data,
    userInfoProps: userInfoData,
    boutonProps: bouton11Data,
    groupe1992Props: groupe1992Data,
    groupe2004Props: groupe20042Data,
    layer2Props: layer2Data,
    footerProps: footer7Data,
};

const icon12Data = {
    className: "",
};

const title13Data = {
    iconProps: icon12Data,
};

const projectHeader210Data = {
    iconProps: title13Data,
};

const projectHeader11Data = {
    className: "project-header-10",
    projectHeader2Props: projectHeader210Data,
};

const fillires13Data = {
    children: "Fili??res",
};

const groupe188211Data = {
    className: "groupe-1882-10",
};

const name2Data = {
    productOwner: "Proviseur",
    emileeSimchenko: "Martin Bulot",
};

const userInfo2Data = {
    userpic: "/img/userpic-5@1x.png",
    nameProps: name2Data,
};

const web192010Data = {
    x12: "/img/12-10@1x.png",
    myTasks: "Mes voeux",
    myTasks2: "??ligibilit?? bourse ??tudiante",
    iconAwesomeCompass: "/img/icon-awesome-compass-1@1x.png",
    myTasks3: "Langue",
    groupe1997: "/img/icon-awesome-globe-1@1x.png",
    groupe1996: "/img/icon-awesome-money-bill-wave-1@1x.png",
    groupe1995: "/img/icon-awesome-newspaper-1@1x.png",
    image8: "/img/image-8-2@1x.png",
    sorbonneUniversit: "Sorbonne Universit?? - Facult?? des Lettres",
    text1: "...",
    iconAwesomePen: "/img/icon-awesome-pen-1@1x.png",
    projectHeaderProps: projectHeader11Data,
    filliresProps: fillires13Data,
    groupe1882Props: groupe188211Data,
    userInfoProps: userInfo2Data,
};

const groupe19368Data = {
    className: "groupe-1936-4",
};

const navigation33Data = {
    groupe1936Props: groupe19368Data,
};

const bouton12Data = {
    src: "/img/trac--433-11@1x.png",
    className: "",
};

const navigation2Data = {
    boutonProps: navigation33Data,
    boutonProps2: bouton12Data,
};

const icon13Data = {
    className: "icon-7",
};

const title14Data = {
    iconProps: icon13Data,
};

const projectHeader34Data = {
    titleProps: title14Data,
};

const fillires14Data = {
    children: "Fili??res",
};

const groupe188212Data = {
    className: "groupe-1882-11",
};

const groupe1944Data = {
    lycen: "Lyon",
    className: "",
};

const groupe19702Data = {
    quandSouhaitezVous: "O?? souhaitez-vous suivre votre formation ? Choisissez votre acad??mie",
    groupe1944Props: groupe1944Data,
};

const composant1031Data = {
    children: "Aix-En-Provence",
};

const composant10312Data = {
    children: "Ajaccio",
    className: "composant-73-1",
};

const composant10313Data = {
    children: "Amiens",
    className: "composant-74-1",
};

const composant10314Data = {
    children: "Anger",
    className: "composant-72-3",
};

const composant10315Data = {
    children: "Bastia",
    className: "composant-73-3",
};

const composant10316Data = {
    children: "Besan??on",
    className: "composant-74-3",
};

const composant10317Data = {
    children: "Bordeaux",
    className: "composant-72-4",
};

const composant891Data = {
    children: "Caen",
};

const composant951Data = {
    children: "Clermont-Ferrand",
};

const composant10318Data = {
    children: "Cr??teil",
    className: "composant-72-5",
};

const composant8912Data = {
    children: "Dijon",
    className: "composant-73-5",
};

const composant10319Data = {
    children: "Grenoble",
    className: "composant-74-5",
};

const composant103110Data = {
    children: "Lille",
    className: "composant-72-6",
};

const composant8913Data = {
    children: "Limoges",
    className: "composant-73-6",
};

const composant9512Data = {
    children: "Lyon",
    className: "composant-74-6",
};

const composant103111Data = {
    children: "Marseille",
    className: "composant-72-7",
};

const composant8914Data = {
    children: "Metz",
};

const composant8915Data = {
    children: "Montpellier",
    className: "composant-74-7",
};

const composant103112Data = {
    children: "Nancy",
    className: "composant-72-8",
};

const composant103113Data = {
    children: "Nantes",
    className: "composant-73-8",
};

const composant9513Data = {
    children: "Nice",
    className: "composant-74-8",
};

const composant103114Data = {
    children: "Orl??an",
    className: "composant-72-9",
};

const composant8916Data = {
    children: "Paris",
    className: "composant-73-9",
};

const composant103115Data = {
    children: "Poitier",
    className: "composant-74-9",
};

const composant103116Data = {
    children: "Reims",
    className: "composant-72-10",
};

const composant8917Data = {
    children: "Rennes",
    className: "composant-73-10",
};

const composant8918Data = {
    children: "Rouens",
    className: "composant-74-10",
};

const composant103117Data = {
    children: "Strasbourg",
    className: "composant-72-11",
};

const composant103118Data = {
    children: "Toulouse",
    className: "composant-73-11",
};

const composant8919Data = {
    children: "Tours",
    className: "composant-74-11",
};

const composant103119Data = {
    children: "Versailles",
    className: "composant-72-12",
};

const composant30156Data = {
    children: "Diplome-Docus avis",
};

const composant30157Data = {
    children: "S??lection d?????coles",
    className: "composant-31-1-5",
};

const composant32123Data = {
    children: "S??lection de dipl??mes",
};

const composant30158Data = {
    children: "Liste des dipl??mes",
    className: "composant-34-1-5",
};

const composant32124Data = {
    children: "Que faire apr??s le bac",
};

const composant30159Data = {
    children: "Acc??s ??tablissement",
    className: "composant-30-2-5",
};

const composant30160Data = {
    children: "R??f??rencer son ??tablissement",
    className: "composant-31-2-5",
};

const composant40112Data = {
    src: "/img/trac--1999-10@1x.png",
};

const composant41123Data = {
    src: "/img/trac--2000-10@1x.png",
    className: "",
};

const composant42112Data = {
    src: "/img/trac--2001-11@1x.png",
    className: "groupe-1936-1",
};

const composant41124Data = {
    src: "/img/instagram-10@1x.png",
    className: "icons-11",
};

const title312Data = {
    className: "title-12",
};

const footer8Data = {
    className: "footer-8",
    composant301Props: composant30156Data,
    composant3012Props: composant30157Data,
    composant321Props: composant32123Data,
    composant3013Props: composant30158Data,
    composant3212Props: composant32124Data,
    composant3014Props: composant30159Data,
    composant3015Props: composant30160Data,
    composant401Props: composant40112Data,
    composant411Props: composant41123Data,
    composant421Props: composant42112Data,
    composant4112Props: composant41124Data,
    composant401Props2: title312Data,
};

const trouverCole13Data = {
    x12: "/img/12-10@1x.png",
    franceEntire: "France enti??re",
    distanceMonRythme: "?? distance / ?? mon rythme",
    navigation2Props: navigation2Data,
    projectHeader3Props: projectHeader34Data,
    filliresProps: fillires14Data,
    groupe1882Props: groupe188212Data,
    groupe19702Props: groupe19702Data,
    composant1031Props: composant1031Data,
    composant10312Props: composant10312Data,
    composant10313Props: composant10313Data,
    composant10314Props: composant10314Data,
    composant10315Props: composant10315Data,
    composant10316Props: composant10316Data,
    composant10317Props: composant10317Data,
    composant891Props: composant891Data,
    composant951Props: composant951Data,
    composant10318Props: composant10318Data,
    composant8912Props: composant8912Data,
    composant10319Props: composant10319Data,
    composant103110Props: composant103110Data,
    composant8913Props: composant8913Data,
    composant9512Props: composant9512Data,
    composant103111Props: composant103111Data,
    composant8914Props: composant8914Data,
    composant8915Props: composant8915Data,
    composant103112Props: composant103112Data,
    composant103113Props: composant103113Data,
    composant9513Props: composant9513Data,
    composant103114Props: composant103114Data,
    composant8916Props: composant8916Data,
    composant103115Props: composant103115Data,
    composant103116Props: composant103116Data,
    composant8917Props: composant8917Data,
    composant8918Props: composant8918Data,
    composant103117Props: composant103117Data,
    composant103118Props: composant103118Data,
    composant8919Props: composant8919Data,
    composant103119Props: composant103119Data,
    footerProps: footer8Data,
};

const button11Data = {
    className: "button-4",
};

const bouton13Data = {
    src: "/img/trac--433-11@1x.png",
};

const icon14Data = {
    className: "icon-8",
};

const title15Data = {
    iconProps: icon14Data,
};

const projectHeader35Data = {
    titleProps: title15Data,
};

const fillires15Data = {
    children: "Fili??res",
};

const groupe188213Data = {
    className: "groupe-1882-12",
};

const composant461Data = {
    children: "https://marco.jobteaser.com/fr/",
};

const composant471Data = {
    children: "https://www.16personalities.com/fr",
};

const composant4612Data = {
    children: "https://generationzebree.fr/",
};

const composant30161Data = {
    children: "Diplome-Docus avis",
};

const composant30162Data = {
    children: "S??lection d?????coles",
    className: "composant-31-1-6",
};

const composant32125Data = {
    children: "S??lection de dipl??mes",
};

const composant30163Data = {
    children: "Liste des dipl??mes",
    className: "composant-34-1-6",
};

const composant32126Data = {
    children: "Que faire apr??s le bac",
};

const composant30164Data = {
    children: "Acc??s ??tablissement",
    className: "composant-30-2-6",
};

const composant30165Data = {
    children: "R??f??rencer son ??tablissement",
    className: "composant-31-2-6",
};

const composant40113Data = {
    src: "/img/trac--1999-10@1x.png",
};

const composant41125Data = {
    src: "/img/trac--2000-10@1x.png",
    className: "",
};

const composant42113Data = {
    src: "/img/trac--2001-17@1x.png",
    className: "groupe-1936-1",
};

const composant41126Data = {
    src: "/img/instagram-10@1x.png",
    className: "icons-12",
};

const title313Data = {
    className: "title-13",
};

const footer9Data = {
    className: "footer-9",
    composant301Props: composant30161Data,
    composant3012Props: composant30162Data,
    composant321Props: composant32125Data,
    composant3013Props: composant30163Data,
    composant3212Props: composant32126Data,
    composant3014Props: composant30164Data,
    composant3015Props: composant30165Data,
    composant401Props: composant40113Data,
    composant411Props: composant41125Data,
    composant421Props: composant42113Data,
    composant4112Props: composant41126Data,
    composant401Props2: title313Data,
};

const testOrientationData = {
    lesConditionsGnr: "Les conditions g??n??rales et la politique de confidentialit??",
    x12: "/img/12-10@1x.png",
    scoolizeLogoPalettes1: "/img/scoolize-logo---palettes--1--1@1x.png",
    trac1992: "/img/trac--1992-1@1x.png",
    unTestDOrientati: `"Un test d'orientation ? C'est quoi et pourquoi faire ?`,
    cEstNormalQuOnVousAideUnPeu: "C'est normal qu'on vous aide un peu ????",
    bonCEstPartiSuivezNous: "Bon c'est parti ?! Suivez nous ????",
    unTestDOrientatio: "Un test d'orientation pour faire le bilan",
    exploronsPlusEnD: <>Explorons plus en d??tail les raisons pour lesquelles ce test est un atout de taille pour mener ?? bien votre nouveau choix de carri??re.<br /><br />Le grand avantage d???un test d???orientation professionnelle, c???est qu???il vous permet de vous situer. C???est l???instrument id??al pour savoir o?? vous en ??tes professionnellement. Votre job g??n??re-t-il un mal-??tre ou des frustrations ? Est-il temps pour vous de passer ?? autre chose ? Avez-vous r??ellement conscience de tout votre potentiel ?<br /><br />Vous ne devez pas rester seul avec de tels questionnements. L&#x27;id??e de changer votre vie a germ?? en vous et personne ne peut pr??tendre ?? op??rer un tel changement tout seul. L&#x27;??tre humain se d??finit comme un ??tre social : tout d??sir de changement est le fruit de rencontres et d&#x27;exposition ?? l&#x27;autre. En r??alisant un test, vous creuserez davantage votre id??e et pourrez mettre des mots sur ce qu&#x27;il vous faut.</>,
    unTestDOrientatio2: "Un test d'orientation pour comprendre vos points forts",
    voiciQuelquesLiens: "Voici quelques liens pour faire vos test !",
    ligne11: "/img/ligne-11-3@1x.png",
    dcouvrezVosIntr: <>D??couvrez vos int??r??ts professionnels (et plus) en 8 minutes !<br />Pourquoi ce test ?<br />On passe environ 90 000 heures de sa vie ?? travailler, soit 10 fois l&#x27;aller-retour entre Paris et Shanghai ?? pied.<br />En vous permettant d&#x27;identifier votre compatibilit?? avec certaines familles d&#x27;activit??s professionnelles, Marco vous aide ?? choisir la bonne paire de baskets au moment de vous mettre en route</>,
    image10: "/img/image-10@1x.png",
    ligne112: "/img/ligne-11-3@1x.png",
    nosLecteursDisent: <>Nos lecteurs disent que le test de 16Personalities est si exact qu??? ?? il fait un peu peur ??.<br />Obtenez une description concr??te et exacte de qui vous ??tes et de la raison pour laquelle vous faites les choses de la fa??on dont vous les faites.<br />Il dure moins de 12 minutes.<br />R??pondez avec honn??tet?? (m??me si vous n???aimez pas la r??ponse).</>,
    image11: "/img/image-11@1x.png",
    ligne113: "/img/ligne-11-3@1x.png",
    besoinDaidePourT: <>Besoin d???aide pour trouver une formation ou un m??tier qui te correspondent ?<br />D??termine ton profil gr??ce ?? un test de personnalit??<br />D??couvre les m??tiers qui te correspondent<br />Compare les voies qui t???int??ressent et choisis la tienne<br />S??lectionne les formations qui te permettront de r??aliser tes r??ves</>,
    image12: "/img/image-12@1x.png",
    buttonProps: button11Data,
    boutonProps: bouton13Data,
    projectHeader3Props: projectHeader35Data,
    filliresProps: fillires15Data,
    groupe1882Props: groupe188213Data,
    composant461Props: composant461Data,
    composant471Props: composant471Data,
    composant4612Props: composant4612Data,
    footerProps: footer9Data,
};

const button12Data = {
    className: "button-5",
};

const bouton14Data = {
    src: "/img/trac--433-11@1x.png",
};

const icon15Data = {
    className: "icon-9",
};

const title16Data = {
    iconProps: icon15Data,
};

const projectHeader36Data = {
    titleProps: title16Data,
};

const fillires16Data = {
    children: "Fili??res",
};

const groupe188214Data = {
    className: "groupe-1882-13",
};

const groupe19442Data = {
    lycen: "BTS",
    className: "groupe-1944-1",
};

const composant103120Data = {
    children: "Bachelor",
    className: "groupe-1955",
};

const composant961Data = {
    children: "Dipl??me d'ing??nieur",
};

const composant9612Data = {
    children: "Mast??re sp??cialis??",
};

const composant9514Data = {
    children: "Formation Professionnelle",
    className: "groupe-1967",
};

const composant30166Data = {
    children: "Diplome-Docus avis",
};

const composant30167Data = {
    children: "S??lection d?????coles",
    className: "composant-31-1-7",
};

const composant32127Data = {
    children: "S??lection de dipl??mes",
};

const composant30168Data = {
    children: "Liste des dipl??mes",
    className: "composant-34-1-7",
};

const composant32128Data = {
    children: "Que faire apr??s le bac",
};

const composant30169Data = {
    children: "Acc??s ??tablissement",
    className: "composant-30-2-7",
};

const composant30170Data = {
    children: "R??f??rencer son ??tablissement",
    className: "composant-31-2-7",
};

const composant40114Data = {
    src: "/img/trac--1999-10@1x.png",
};

const composant41127Data = {
    src: "/img/trac--2000-10@1x.png",
    className: "",
};

const composant42114Data = {
    src: "/img/trac--2001-11@1x.png",
    className: "groupe-1936-1",
};

const composant41128Data = {
    src: "/img/instagram-10@1x.png",
    className: "icons-13",
};

const title314Data = {
    className: "title-14",
};

const footer10Data = {
    className: "footer-10",
    composant301Props: composant30166Data,
    composant3012Props: composant30167Data,
    composant321Props: composant32127Data,
    composant3013Props: composant30168Data,
    composant3212Props: composant32128Data,
    composant3014Props: composant30169Data,
    composant3015Props: composant30170Data,
    composant401Props: composant40114Data,
    composant411Props: composant41127Data,
    composant421Props: composant42114Data,
    composant4112Props: composant41128Data,
    composant401Props2: title314Data,
};

const trouverCole1Data = {
    lesConditionsGnr: "Les conditions g??n??rales et la politique de confidentialit??",
    x12: "/img/12-10@1x.png",
    quelDiplmeSouhaitezVousPrparer: "Quel dipl??me souhaitez-vous pr??parer  ?",
    capOuQuivalent: "CAP ou ??quivalent",
    bp: "BP",
    brevetProfessionnel: "Brevet Professionnel",
    place: "CAP",
    certificatDAptitudeProfessionnelle: "Certificat d'aptitude professionnelle",
    bac1Bac2: "Bac+1 ?? Bac+2",
    bp2: "BP",
    brevetDeTechnicienSuprieur: "Brevet de Technicien Sup??rieur",
    dut: "DUT",
    diplmeDeTechnicienSuprieur: "Dipl??me de technicien sup??rieur",
    prpa: "PR??PA",
    classePrparatoire: " classe pr??paratoire",
    bac3: "Bac+3",
    dcg: "DCG",
    diplmeDeComptabilitEtDeGestion: "dipl??me de comptabilit?? et de gestion",
    licence: "Licence",
    licencePro: "Licence Pro",
    bac4Bac5: "Bac+4 ?? Bac+5",
    dscg: "DSCG",
    diplmeSuprieurDe: "Dipl??me Sup??rieur de Comptabilit?? et Gestion",
    master: "Master",
    bac6EtPlus: "Bac+6 et plus",
    mba: "MBA",
    masterOfBusinessAdministration: "Master of Business Administration",
    autres: "Autres",
    cqr: "CQR",
    certificatsDeQuali: "Certificats de Qualification Professionnelle",
    formationQualifiante: "Formation Qualifiante",
    buttonProps: button12Data,
    boutonProps: bouton14Data,
    projectHeader3Props: projectHeader36Data,
    filliresProps: fillires16Data,
    groupe1882Props: groupe188214Data,
    groupe1944Props: groupe19442Data,
    composant1031Props: composant103120Data,
    composant961Props: composant961Data,
    composant9612Props: composant9612Data,
    composant951Props: composant9514Data,
    footerProps: footer10Data,
};

const icon16Data = {
    className: "",
};

const title17Data = {
    iconProps: icon16Data,
};

const projectHeader37Data = {
    titleProps: title17Data,
};

const fillires17Data = {
    children: "Fili??res",
};

const groupe188215Data = {
    className: "groupe-1882-14",
};

const count3Data = {
    className: "count-2",
};

const menuData = {
    countProps: count3Data,
};

const name3Data = {
    productOwner: "Terminale ES",
    emileeSimchenko: "Tom Maugis",
};

const userInfo3Data = {
    userpic: "/img/userpic-2@1x.png",
    nameProps: name3Data,
};

const bouton15Data = {
    src: "/img/trac--433-10@1x.png",
    className: "bouton-5",
};

const navigationData = {
    userInfoProps: menuData,
    userInfoProps2: userInfo3Data,
    boutonProps: bouton15Data,
};

const groupe19703Data = {
    children: "R??daction de la lettre de motivation",
};

const groupe19922Data = {
    className: "groupe-1992-1",
    groupe1970Props: groupe19703Data,
};

const groupe20044Data = {
    className: "groupe-2006-1",
};

const layer22Data = {
    src: "/img/layer-2-1@1x.png",
    className: "layer-2-1",
};

const composant30171Data = {
    children: "Diplome-Docus avis",
};

const composant30172Data = {
    children: "S??lection d?????coles",
    className: "composant-31-9-1",
};

const composant32129Data = {
    children: "S??lection de dipl??mes",
};

const composant30173Data = {
    children: "Liste des dipl??mes",
    className: "composant-34-5-1",
};

const composant32130Data = {
    children: "Que faire apr??s le bac",
};

const composant30174Data = {
    children: "Acc??s ??tablissement",
    className: "composant-30-10-1",
};

const composant30175Data = {
    children: "R??f??rencer son ??tablissement",
    className: "composant-31-10-1",
};

const composant40115Data = {
    src: "/img/trac--1999-10@1x.png",
};

const composant41129Data = {
    src: "/img/trac--2000-10@1x.png",
    className: "",
};

const composant42115Data = {
    src: "/img/trac--2001-3@1x.png",
    className: "groupe-1936-1",
};

const composant41130Data = {
    src: "/img/instagram-10@1x.png",
    className: "icons-14",
};

const title315Data = {
    className: "title-15",
};

const footer11Data = {
    className: "footer-11",
    composant301Props: composant30171Data,
    composant3012Props: composant30172Data,
    composant321Props: composant32129Data,
    composant3013Props: composant30173Data,
    composant3212Props: composant32130Data,
    composant3014Props: composant30174Data,
    composant3015Props: composant30175Data,
    composant401Props: composant40115Data,
    composant411Props: composant41129Data,
    composant421Props: composant42115Data,
    composant4112Props: composant41130Data,
    composant401Props2: title315Data,
};

const trouverCole112Data = {
    x12: "/img/12-10@1x.png",
    ligne15: "/img/ligne-11-1@1x.png",
    masterProfessionnel: "Master Professionnel Ing??nierie Informatique (Mast??re)",
    uneFilireDeForma: "Une fili??re de formations compl??te d??livrant des titres certifi??s par l???Etat inscrits au RNCP de l???IPI du niveau IV (??quivalent Bac) au niveau I (??quivalent Bac+5).",
    trac2010: "/img/trac--2010-12@1x.png",
    trac2011: "/img/trac--2011-10@1x.png",
    plusDInfos: "Plus d'infos",
    image19: "/img/image-19-1@1x.png",
    masterProfessionnel2: "Master Professionnel Ing??nierie Informatique (Mast??re)",
    image18: "/img/image-18-1@1x.png",
    image17: "/img/image-17-1@1x.png",
    ligne13: "/img/ligne-11-1@1x.png",
    masterProfessionnel3: "Master Professionnel Ing??nierie Informatique (Mast??re)",
    formationIntelligen: <>Formation Intelligence Artificielle et Big Data ?? LYON<br /><br />L???IA School d??livre un dipl??me certifiant une double comp??tence, technique (programmation, codage, et math??matiques appliqu??es ?? la computer science) et en Management (marketing, comptabilit??, finance notamment). Votre profil ?? la fois technique et business vous permettra de doubler vos comp??tences op??rationnelles et d???appr??hender des probl??matiques transversales.</>,
    trac20102: "/img/trac--2010-12@1x.png",
    trac20112: "/img/trac--2011-10@1x.png",
    trac20103: "/img/trac--2010-12@1x.png",
    trac20113: "/img/trac--2011-10@1x.png",
    ligne14: "/img/ligne-11-1@1x.png",
    x5AnsPourDevenirU: <>5 ans pour devenir un expert reconnu<br />Dans ce parcours, les ??tudiants peuvent int??grer Epitech Technology dans l???un des 15 campus en France. C???est dans ce campus choisi que se d??roulent les 3 premi??res ann??es de formation.<br /><br />En 4e ann??e, la scolarit?? se d??roule ?? l???International. Les ??tudiants partent pour une ann??e dans l???une des 100 universit??s partenaires partout dans le monde ou dans l&#x27;un des campus d&#x27;Epitech Technology en Europe.</>,
    image16: "/img/image-16-4@1x.png",
    rdigezVotreLettreDeMotivation: "R??digez votre lettre de motivation..",
    x05000Mots: "0/5000 mots",
    candidater: "Candidater",
    rdigezVotreProjetProfessionnel: "R??digez votre projet professionnel..",
    x05000Mots2: "0/5000 mots",
    projectHeader3Props: projectHeader37Data,
    filliresProps: fillires17Data,
    groupe1882Props: groupe188215Data,
    navigationProps: navigationData,
    groupe1992Props: groupe19922Data,
    groupe2004Props: groupe20044Data,
    layer2Props: layer22Data,
    footerProps: footer11Data,
};

const bouton16Data = {
    src: "/img/trac--433-10@1x.png",
    className: "bouton-6",
};

const icon17Data = {
    className: "icon-10",
};

const title18Data = {
    iconProps: icon17Data,
};

const projectHeader211Data = {
    iconProps: title18Data,
};

const projectHeader12Data = {
    className: "project-header-11",
    projectHeader2Props: projectHeader211Data,
};

const diplme17Data = {
    className: "diplme-4",
};

const coles17Data = {
    className: "coles-4",
};

const fillires18Data = {
    children: "Fili??res",
    className: "fillires-4",
};

const fillires19Data = {
    children: "M??tiers",
    className: "mtiers-1",
};

const groupe188216Data = {
    className: "groupe-1882-15",
};

const top2Data = {
    projectHeader2Props: projectHeader12Data,
    projectHeader2Props2: diplme17Data,
    filliresProps: coles17Data,
    filliresProps2: fillires18Data,
    fillires2Props: fillires19Data,
    groupe1882Props: groupe188216Data,
};

const composant30176Data = {
    children: "Diplome-Docus avis",
};

const composant30177Data = {
    children: "S??lection d?????coles",
    className: "composant-31-25",
};

const composant32131Data = {
    children: "S??lection de dipl??mes",
};

const composant30178Data = {
    children: "Liste des dipl??mes",
    className: "composant-34-13",
};

const composant32132Data = {
    children: "Que faire apr??s le bac",
};

const composant30179Data = {
    children: "Acc??s ??tablissement",
    className: "composant-30-26",
};

const composant30180Data = {
    children: "R??f??rencer son ??tablissement",
    className: "composant-31-26",
};

const composant40116Data = {
    src: "/img/trac--1999-12@1x.png",
    className: "groupe-1936-1",
};

const composant41131Data = {
    src: "/img/trac--2000-12@1x.png",
    className: "groupe-1936-1",
};

const composant42116Data = {
    src: "/img/trac--2001-17@1x.png",
    className: "groupe-1936-1",
};

const composant41132Data = {
    src: "/img/instagram-10@1x.png",
    className: "icons-15",
};

const title316Data = {
    className: "title-16",
};

const footer22Data = {
    composant301Props: composant30176Data,
    composant3012Props: composant30177Data,
    composant321Props: composant32131Data,
    composant3013Props: composant30178Data,
    composant3212Props: composant32132Data,
    composant3014Props: composant30179Data,
    composant3015Props: composant30180Data,
    composant401Props: composant40116Data,
    composant411Props: composant41131Data,
    composant421Props: composant42116Data,
    composant4112Props: composant41132Data,
    composant401Props2: title316Data,
};

const liste3Data = {
    souhait: " Souhait",
    rponse: "R??ponse",
    classement: "Classement",
    x1smd7: "",
    kF2t3: "",
    trac2009: "/img/trac--2009@1x.png",
    gfny8: "",
    eB9dV: "",
    number: "1",
    number2: "2",
    number3: "3",
    number4: "4",
    number5: "5",
    number6: "6",
    number7: "7",
    number8: "8",
    number9: "9",
    number10: "10",
    colePolytechniquePalaiseau: <>??cole Polytechnique<br />Palaiseau</>,
    dfavorable: "D??favorable",
    enAttente: "En attente",
    favorable: "Favorable",
    spanText: "323",
    spanText2: "/300",
    spanText3: "234",
    spanText4: "/240",
    spanText5: "498",
    spanText6: "/180",
    ligne12: "/img/ligne-12@1x.png",
    sorbonneUniversit: <>Sorbonne Universit?? <br />Facult?? des Lettres</>,
    ufrInformatiqueUniversitDeParis: <>UFR Informatique<br />Universit?? de Paris</>,
    x1828739: "/img/1828739-1@1x.png",
    x4225636: "/img/4225636-1@1x.png",
    x18287392: "/img/1828739-1@1x.png",
    x42256362: "/img/4225636-1@1x.png",
    x18287393: "/img/1828739-5@1x.png",
    x42256363: "/img/4225636-1@1x.png",
    myTasks: "Langue",
    iconAwesomeGlobe: "/img/icon-awesome-globe-1@1x.png",
    iconAwesomeMoneyBillWave: "/img/icon-awesome-money-bill-wave-1@1x.png",
    iconAwesomeNewspaper: "/img/icon-awesome-newspaper-1@1x.png",
    iconAwesomeCompass: "/img/icon-awesome-compass-1@1x.png",
    epsiLyon: "EPSI Lyon",
    dfavorable2: "D??favorable",
    spanText7: "999",
    spanText8: "/100",
    x42256364: "/img/4225636-1@1x.png",
    x18287394: "/img/1828739-1@1x.png",
    menuBase: "/img/menu-base-1@1x.png",
    moreIcon: "/img/more-icon-10@1x.png",
    userpic: "/img/userpic-2@1x.png",
    productOwner: "Terminale ES",
    emileeSimchenko: "Tom Maugis",
    myTasks2: "Mes voeux",
    myTasks3: "??ligibilit?? bourse ??tudiante",
    iconAwesomeCompass2: "/img/icon-awesome-compass-1@1x.png",
    myTasks4: "Langue",
    groupe1997: "/img/icon-awesome-globe-1@1x.png",
    groupe1996: "/img/icon-awesome-money-bill-wave-1@1x.png",
    groupe1995: "/img/icon-awesome-newspaper-1@1x.png",
    boutonProps: bouton16Data,
    top2Props: top2Data,
    footer2Props: footer22Data,
};

const groupe19369Data = {
    className: "groupe-1936-5",
};

const navigation34Data = {
    groupe1936Props: groupe19369Data,
};

const bouton17Data = {
    src: "/img/trac--433-11@1x.png",
    className: "",
};

const navigation22Data = {
    className: "navigation-23",
    boutonProps: navigation34Data,
    boutonProps2: bouton17Data,
};

const icon18Data = {
    className: "icon-11",
};

const title19Data = {
    iconProps: icon18Data,
};

const projectHeader38Data = {
    titleProps: title19Data,
};

const fillires20Data = {
    children: "Fili??res",
};

const groupe188217Data = {
    className: "groupe-1882-16",
};

const groupe19443Data = {
    lycen: "Lyc??en",
    className: "groupe-1944-2",
};

const groupe197022Data = {
    quandSouhaitezVous: "Qui ??tes vous ?",
    groupe1944Props: groupe19443Data,
};

const composant103121Data = {
    children: "Coll??gien",
    className: "composant-72-1-1",
};

const composant103122Data = {
    children: "Lyc??en",
    className: "composant-73-1-1",
};

const composant103123Data = {
    children: "??tudiant",
    className: "composant-74-1-1",
};

const composant103124Data = {
    children: "En activit??",
    className: "composant-72-3-1",
};

const composant89110Data = {
    children: "Sans emplois",
    className: "composant-73-3-1",
};

const composant30181Data = {
    children: "Diplome-Docus avis",
};

const composant30182Data = {
    children: "S??lection d?????coles",
    className: "composant-31-1-8",
};

const composant32133Data = {
    children: "S??lection de dipl??mes",
};

const composant30183Data = {
    children: "Liste des dipl??mes",
    className: "composant-34-1-8",
};

const composant32134Data = {
    children: "Que faire apr??s le bac",
};

const composant30184Data = {
    children: "Acc??s ??tablissement",
    className: "composant-30-2-8",
};

const composant30185Data = {
    children: "R??f??rencer son ??tablissement",
    className: "composant-31-2-8",
};

const composant40117Data = {
    src: "/img/trac--1999-12@1x.png",
    className: "groupe-1936-1",
};

const composant41133Data = {
    src: "/img/trac--2000-12@1x.png",
    className: "groupe-1936-1",
};

const composant42117Data = {
    src: "/img/trac--2001-11@1x.png",
    className: "groupe-1936-1",
};

const composant41134Data = {
    src: "/img/instagram-10@1x.png",
    className: "icons-16",
};

const title317Data = {
    className: "title-17",
};

const footer324Data = {
    className: "footer-23",
    composant301Props: composant30181Data,
    composant3012Props: composant30182Data,
    composant321Props: composant32133Data,
    composant3013Props: composant30183Data,
    composant3212Props: composant32134Data,
    composant3014Props: composant30184Data,
    composant3015Props: composant30185Data,
    composant401Props: composant40117Data,
    composant411Props: composant41133Data,
    composant421Props: composant42117Data,
    composant4112Props: composant41134Data,
    composant401Props2: title317Data,
};

const trouverCole14Data = {
    x12: "/img/12-10@1x.png",
    navigation2Props: navigation22Data,
    projectHeader3Props: projectHeader38Data,
    filliresProps: fillires20Data,
    groupe1882Props: groupe188217Data,
    groupe19702Props: groupe197022Data,
    composant1031Props: composant103121Data,
    composant10312Props: composant103122Data,
    composant10313Props: composant103123Data,
    composant10314Props: composant103124Data,
    composant891Props: composant89110Data,
    footer32Props: footer324Data,
};

const button14Data = {
    className: "button-6",
};

const bouton18Data = {
    src: "/img/trac--433-11@1x.png",
};

const icon19Data = {
    className: "icon-12",
};

const title20Data = {
    iconProps: icon19Data,
};

const projectHeader39Data = {
    titleProps: title20Data,
};

const fillires21Data = {
    children: "Fili??res",
};

const groupe188218Data = {
    className: "groupe-1882-17",
};

const groupe19444Data = {
    lycen: "Commerce",
    className: "groupe-1944-3",
};

const groupe197023Data = {
    quandSouhaitezVous: "Dans quelle fili??re souhaitez-vous effectuer votre formation ?",
    className: "groupe-1970-4",
    groupe1944Props: groupe19444Data,
};

const composant491Data = {
    children: "Agriculture, Environnement",
};

const groupe1971Data = {
    composant491Props: composant491Data,
};

const composant501Data = {
    children: "Art, Culture, Design, Mode",
};

const composant511Data = {
    children: "Bien-??tre, Beaut??",
};

const composant521Data = {
    children: "Commerce, Management",
};

const composant531Data = {
    children: "Droit, Sc.Politiques",
};

const composant541Data = {
    children: "Finance, Comptabilit??",
};

const composant551Data = {
    children: "Fonction publique",
};

const composant561Data = {
    children: "H??tellerie, Tourisme",
};

const composant571Data = {
    children: "Image, Son, Animation 2/3D",
};

const composant581Data = {
    children: "Informatique",
};

const composant591Data = {
    children: "Ing??nierie, Sciences",
};

const composant601Data = {
    children: "Langues, Sc.Humaines",
};

const composant4912Data = {
    children: "Marketing, Communication",
};

const groupe19712Data = {
    className: "groupe-1983",
    composant491Props: composant4912Data,
};

const composant621Data = {
    children: "Sant??",
};

const composant631Data = {
    children: "Sport, Social, Animation",
};

const groupe19682Data = {
    className: "groupe-1968-2",
};

const composant30186Data = {
    children: "Diplome-Docus avis",
};

const composant30187Data = {
    children: "S??lection d?????coles",
    className: "composant-31-1-9",
};

const composant32135Data = {
    children: "S??lection de dipl??mes",
};

const composant30188Data = {
    children: "Liste des dipl??mes",
    className: "composant-34-1-9",
};

const composant32136Data = {
    children: "Que faire apr??s le bac",
};

const composant30189Data = {
    children: "Acc??s ??tablissement",
    className: "composant-30-2-9",
};

const composant30190Data = {
    children: "R??f??rencer son ??tablissement",
    className: "composant-31-2-9",
};

const composant40118Data = {
    src: "/img/trac--1999-10@1x.png",
};

const composant41135Data = {
    src: "/img/trac--2000-10@1x.png",
    className: "",
};

const composant42118Data = {
    src: "/img/trac--2001-11@1x.png",
    className: "groupe-1936-1",
};

const composant41136Data = {
    src: "/img/instagram-10@1x.png",
    className: "icons-17",
};

const title318Data = {
    className: "title-18",
};

const footer12Data = {
    className: "footer-12",
    composant301Props: composant30186Data,
    composant3012Props: composant30187Data,
    composant321Props: composant32135Data,
    composant3013Props: composant30188Data,
    composant3212Props: composant32136Data,
    composant3014Props: composant30189Data,
    composant3015Props: composant30190Data,
    composant401Props: composant40118Data,
    composant411Props: composant41135Data,
    composant421Props: composant42118Data,
    composant4112Props: composant41136Data,
    composant401Props2: title318Data,
};

const trouverCole11Data = {
    lesConditionsGnr: "Les conditions g??n??rales et la politique de confidentialit??",
    x12: "/img/12-10@1x.png",
    buttonProps: button14Data,
    boutonProps: bouton18Data,
    projectHeader3Props: projectHeader39Data,
    filliresProps: fillires21Data,
    groupe1882Props: groupe188218Data,
    groupe19702Props: groupe197023Data,
    groupe1971Props: groupe1971Data,
    composant501Props: composant501Data,
    composant511Props: composant511Data,
    composant521Props: composant521Data,
    composant531Props: composant531Data,
    composant541Props: composant541Data,
    composant551Props: composant551Data,
    composant561Props: composant561Data,
    composant571Props: composant571Data,
    composant581Props: composant581Data,
    composant591Props: composant591Data,
    composant601Props: composant601Data,
    groupe19712Props: groupe19712Data,
    composant621Props: composant621Data,
    composant631Props: composant631Data,
    groupe1968Props: groupe19682Data,
    footerProps: footer12Data,
};

const count5Data = {
    className: "count-3",
};

const menu2Data = {
    countProps: count5Data,
};

const name4Data = {
    productOwner: "Terminale ES",
    emileeSimchenko: "Tom Maugis",
};

const bouton19Data = {
    src: "/img/trac--433-10@1x.png",
    className: "bouton-7",
};

const icon20Data = {
    className: "",
};

const title21Data = {
    iconProps: icon20Data,
};

const projectHeader212Data = {
    iconProps: title21Data,
};

const projectHeader13Data = {
    className: "project-header-12",
    projectHeader2Props: projectHeader212Data,
};

const diplme20Data = {
    className: "diplme-5",
};

const coles20Data = {
    className: "coles-5",
};

const fillires22Data = {
    children: "Fili??res",
    className: "fillires-5",
};

const fillires23Data = {
    children: "M??tiers",
    className: "mtiers-2",
};

const groupe188219Data = {
    className: "groupe-1882-18",
};

const top22Data = {
    projectHeader2Props: projectHeader13Data,
    projectHeader2Props2: diplme20Data,
    filliresProps: coles20Data,
    filliresProps2: fillires22Data,
    fillires2Props: fillires23Data,
    groupe1882Props: groupe188219Data,
};

const groupe20362Data = {
    className: "groupe-2036",
};

const composant30191Data = {
    children: "Diplome-Docus avis",
};

const composant30192Data = {
    children: "S??lection d?????coles",
    className: "composant-31-27",
};

const composant32137Data = {
    children: "S??lection de dipl??mes",
};

const composant30193Data = {
    children: "Liste des dipl??mes",
    className: "composant-34-14",
};

const composant32138Data = {
    children: "Que faire apr??s le bac",
};

const composant30194Data = {
    children: "Acc??s ??tablissement",
    className: "composant-30-28",
};

const composant30195Data = {
    children: "R??f??rencer son ??tablissement",
    className: "composant-31-28",
};

const composant40119Data = {
    src: "/img/trac--1999-12@1x.png",
    className: "groupe-1936-1",
};

const composant41137Data = {
    src: "/img/trac--2000-12@1x.png",
    className: "groupe-1936-1",
};

const composant42119Data = {
    src: "/img/trac--2001-17@1x.png",
    className: "groupe-1936-1",
};

const composant41138Data = {
    src: "/img/instagram-10@1x.png",
    className: "icons-18",
};

const title319Data = {
    className: "title-19",
};

const footer23Data = {
    className: "footer-26",
    composant301Props: composant30191Data,
    composant3012Props: composant30192Data,
    composant321Props: composant32137Data,
    composant3013Props: composant30193Data,
    composant3212Props: composant32138Data,
    composant3014Props: composant30194Data,
    composant3015Props: composant30195Data,
    composant401Props: composant40119Data,
    composant411Props: composant41137Data,
    composant421Props: composant42119Data,
    composant4112Props: composant41138Data,
    composant401Props2: title319Data,
};

const liste2Data = {
    userpic: "/img/userpic-2@1x.png",
    moreIcon: "/img/more-icon-10@1x.png",
    myTasks: "Mes voeux",
    myTasks2: "??ligibilit?? bourse ??tudiante",
    iconAwesomeCompass: "/img/icon-awesome-compass-1@1x.png",
    myTasks3: "Langue",
    groupe1997: "/img/icon-awesome-globe-1@1x.png",
    groupe1996: "/img/icon-awesome-money-bill-wave-1@1x.png",
    groupe1995: "/img/icon-awesome-newspaper-1@1x.png",
    vousAvezTRetenuPour: "Vous avez ??t?? retenu pour:",
    sorbonneUniversit: <>Sorbonne Universit??<br /> Facult?? des Lettres</>,
    image8: "/img/image-8-1@1x.png",
    voir: "Voir",
    annuler: "Annuler",
    menuProps: menu2Data,
    nameProps: name4Data,
    boutonProps: bouton19Data,
    top2Props: top22Data,
    groupe2036Props: groupe20362Data,
    footer2Props: footer23Data,
};

const groupe193610Data = {
    className: "groupe-1936-6",
};

const navigation35Data = {
    groupe1936Props: groupe193610Data,
};

const bouton20Data = {
    src: "/img/trac--433-11@1x.png",
};

const navigation523Data = {
    className: "navigation-11",
    boutonProps: navigation35Data,
    boutonProps2: bouton20Data,
};

const icon21Data = {
    className: "icon-13",
};

const title22Data = {
    iconProps: icon21Data,
};

const projectHeader310Data = {
    titleProps: title22Data,
};

const fillires24Data = {
    children: "Fili??res",
};

const groupe188220Data = {
    className: "groupe-1882-19",
};

const groupe19445Data = {
    lycen: "Lyc??en",
    className: "groupe-1944-4",
};

const groupe197024Data = {
    quandSouhaitezVous: "En quelle classe ??tes-vous ?",
    className: "groupe-1970-5",
    groupe1944Props: groupe19445Data,
};

const composant103125Data = {
    children: "Terminale",
    className: "composant-72-1-2",
};

const composant103126Data = {
    children: "Premi??re",
    className: "composant-73-1-2",
};

const composant9515Data = {
    children: "Seconde",
    className: "composant-74-1-2",
};

const composant30196Data = {
    children: "Diplome-Docus avis",
};

const composant30197Data = {
    children: "S??lection d?????coles",
    className: "composant-31-1-10",
};

const composant32139Data = {
    children: "S??lection de dipl??mes",
};

const composant30198Data = {
    children: "Liste des dipl??mes",
    className: "composant-34-1-10",
};

const composant32140Data = {
    children: "Que faire apr??s le bac",
};

const composant30199Data = {
    children: "Acc??s ??tablissement",
    className: "composant-30-2-10",
};

const composant301100Data = {
    children: "R??f??rencer son ??tablissement",
    className: "composant-31-2-10",
};

const composant40120Data = {
    src: "/img/trac--1999-12@1x.png",
    className: "groupe-1936-1",
};

const composant41139Data = {
    src: "/img/trac--2000-12@1x.png",
    className: "groupe-1936-1",
};

const composant42120Data = {
    src: "/img/trac--2001-11@1x.png",
    className: "groupe-1936-1",
};

const composant41140Data = {
    src: "/img/instagram-10@1x.png",
    className: "icons-19",
};

const title320Data = {
    className: "title-20",
};

const footer325Data = {
    className: "footer-24",
    composant301Props: composant30196Data,
    composant3012Props: composant30197Data,
    composant321Props: composant32139Data,
    composant3013Props: composant30198Data,
    composant3212Props: composant32140Data,
    composant3014Props: composant30199Data,
    composant3015Props: composant301100Data,
    composant401Props: composant40120Data,
    composant411Props: composant41139Data,
    composant421Props: composant42120Data,
    composant4112Props: composant41140Data,
    composant401Props2: title320Data,
};

const trouverCole15Data = {
    x12: "/img/12-10@1x.png",
    navigation52Props: navigation523Data,
    projectHeader3Props: projectHeader310Data,
    filliresProps: fillires24Data,
    groupe1882Props: groupe188220Data,
    groupe19702Props: groupe197024Data,
    composant1031Props: composant103125Data,
    composant10312Props: composant103126Data,
    composant951Props: composant9515Data,
    footer32Props: footer325Data,
};

const groupe193611Data = {
    className: "groupe-1936-7",
};

const navigation36Data = {
    groupe1936Props: groupe193611Data,
};

const bouton21Data = {
    src: "/img/trac--433-11@1x.png",
    className: "",
};

const navigation23Data = {
    className: "navigation-24",
    boutonProps: navigation36Data,
    boutonProps2: bouton21Data,
};

const icon22Data = {
    className: "icon-14",
};

const title23Data = {
    iconProps: icon22Data,
};

const projectHeader311Data = {
    titleProps: title23Data,
};

const fillires25Data = {
    children: "Fili??res",
};

const groupe188221Data = {
    className: "groupe-1882-20",
};

const groupe19446Data = {
    lycen: "Pr??sentiel",
    className: "groupe-1944-5",
};

const groupe197025Data = {
    quandSouhaitezVous: "Comment souhaitez-vous suivre votre formation ?",
    groupe1944Props: groupe19446Data,
};

const composant103127Data = {
    children: "Pr??sentiel",
    className: "composant-72-1-3",
};

const composant89111Data = {
    children: "Alternance",
    className: "composant-73-1-3",
};

const composant9516Data = {
    children: "?? distance / ?? mon rythme",
    className: "composant-74-1-3",
};

const composant751Data = {
    children: "CPF, CIF, PTP",
};

const groupe19683Data = {
    className: "groupe-1968-3",
};

const composant301101Data = {
    children: "Diplome-Docus avis",
};

const composant301102Data = {
    children: "S??lection d?????coles",
    className: "composant-31-1-11",
};

const composant32141Data = {
    children: "S??lection de dipl??mes",
};

const composant301103Data = {
    children: "Liste des dipl??mes",
    className: "composant-34-1-11",
};

const composant32142Data = {
    children: "Que faire apr??s le bac",
};

const composant301104Data = {
    children: "Acc??s ??tablissement",
    className: "composant-30-2-11",
};

const composant301105Data = {
    children: "R??f??rencer son ??tablissement",
    className: "composant-31-2-11",
};

const composant40121Data = {
    src: "/img/trac--1999-10@1x.png",
};

const composant41141Data = {
    src: "/img/trac--2000-10@1x.png",
    className: "",
};

const composant42121Data = {
    src: "/img/trac--2001-11@1x.png",
    className: "groupe-1936-1",
};

const composant41142Data = {
    src: "/img/instagram-10@1x.png",
    className: "icons-20",
};

const title321Data = {
    className: "title-21",
};

const footer13Data = {
    className: "footer-13",
    composant301Props: composant301101Data,
    composant3012Props: composant301102Data,
    composant321Props: composant32141Data,
    composant3013Props: composant301103Data,
    composant3212Props: composant32142Data,
    composant3014Props: composant301104Data,
    composant3015Props: composant301105Data,
    composant401Props: composant40121Data,
    composant411Props: composant41141Data,
    composant421Props: composant42121Data,
    composant4112Props: composant41142Data,
    composant401Props2: title321Data,
};

const trouverCole12Data = {
    x12: "/img/12-10@1x.png",
    navigation2Props: navigation23Data,
    projectHeader3Props: projectHeader311Data,
    filliresProps: fillires25Data,
    groupe1882Props: groupe188221Data,
    groupe19702Props: groupe197025Data,
    composant1031Props: composant103127Data,
    composant891Props: composant89111Data,
    composant951Props: composant9516Data,
    composant751Props: composant751Data,
    groupe1968Props: groupe19683Data,
    footerProps: footer13Data,
};

const icon23Data = {
    className: "icon-15",
};

const title24Data = {
    iconProps: icon23Data,
};

const projectHeader213Data = {
    iconProps: title24Data,
};

const projectHeader14Data = {
    className: "project-header-13",
    projectHeader2Props: projectHeader213Data,
};

const fillires26Data = {
    children: "Fili??res",
};

const formation24Data = {
    className: "formation-5",
};

const groupe188222Data = {
    className: "groupe-1882-21",
};

const count6Data = {
    className: "count-4",
};

const menu3Data = {
    countProps: count6Data,
};

const name5Data = {
    productOwner: "Terminale ES",
    emileeSimchenko: "Tom Maugis",
};

const userInfo4Data = {
    userpic: "/img/userpic-2@1x.png",
    nameProps: name5Data,
};

const bouton22Data = {
    src: "/img/trac--433-11@1x.png",
};

const calendarPart2Data = {
    className: "calendar-part-1",
};

const partieOrientation2Data = {
    className: "partie-orientation-1",
};

const composant29112Data = {
    btsAgPmePmi: "BTS AG PME PMI",
};

const composant29113Data = {
    btsAgPmePmi: "BTS Gestion de projet",
    className: "composant-29-3-1",
};

const composant29114Data = {
    btsAgPmePmi: "BTS MCO",
    className: "composant-29-4-1",
};

const composant29115Data = {
    btsAgPmePmi: "BTS CG",
};

const composant29116Data = {
    btsAgPmePmi: "BTS Communication digitale",
    className: "composant-29-6-1",
};

const composant29117Data = {
    btsAgPmePmi: "BTS Gestion du patrimoine",
    className: "composant-29-7-1",
};

const composant29118Data = {
    btsAgPmePmi: "BTS MUC",
    className: "composant-29-8-1",
};

const composant29119Data = {
    btsAgPmePmi: "BTS CGO",
};

const composant29120Data = {
    btsAgPmePmi: "BTS GPME",
    className: "composant-29-10-1",
};

const composant29121Data = {
    btsAgPmePmi: "BTS Gestion du personnel",
    className: "composant-29-11-1",
};

const composant29122Data = {
    btsAgPmePmi: "BTS Marketing Digital",
    className: "composant-29-12-1",
};

const formationsLesPlusRecherches2Data = {
    className: "formations-les-plus-recherches-1",
    composant291Props: composant29112Data,
    composant2912Props: composant29113Data,
    composant2913Props: composant29114Data,
    composant2914Props: composant29115Data,
    composant2915Props: composant29116Data,
    composant2916Props: composant29117Data,
    composant2917Props: composant29118Data,
    composant2918Props: composant29119Data,
    composant2919Props: composant29120Data,
    composant29110Props: composant29121Data,
    composant29111Props: composant29122Data,
};

const objectifs2Data = {
    className: "objectifs-1",
};

const colesLesPlusRecherches2Data = {
    className: "coles-les-plus-recherches-1",
};

const composant301106Data = {
    children: "Diplome-Docus avis",
};

const composant301107Data = {
    children: "S??lection d?????coles",
    className: "composant-31-1-12",
};

const composant32143Data = {
    children: "S??lection de dipl??mes",
};

const composant301108Data = {
    children: "Liste des dipl??mes",
    className: "composant-34-1-12",
};

const composant32144Data = {
    children: "Que faire apr??s le bac",
};

const composant301109Data = {
    children: "Acc??s ??tablissement",
    className: "composant-30-2-12",
};

const composant301110Data = {
    children: "R??f??rencer son ??tablissement",
    className: "composant-31-2-12",
};

const composant40122Data = {
    src: "/img/trac--1999-10@1x.png",
};

const composant41143Data = {
    src: "/img/trac--2000-10@1x.png",
    className: "",
};

const composant42122Data = {
    src: "/img/trac--2001-11@1x.png",
    className: "groupe-1936-1",
};

const composant41144Data = {
    src: "/img/instagram-10@1x.png",
    className: "icons-21",
};

const title322Data = {
    className: "title-22",
};

const footer14Data = {
    className: "footer-14",
    composant301Props: composant301106Data,
    composant3012Props: composant301107Data,
    composant321Props: composant32143Data,
    composant3013Props: composant301108Data,
    composant3212Props: composant32144Data,
    composant3014Props: composant301109Data,
    composant3015Props: composant301110Data,
    composant401Props: composant40122Data,
    composant411Props: composant41143Data,
    composant421Props: composant42122Data,
    composant4112Props: composant41144Data,
    composant401Props2: title322Data,
};

const pageDaccueil1Data = {
    x12: "/img/12-10@1x.png",
    menuBase: "/img/menu-base-1@1x.png",
    myTasks: "Mes voeux",
    myTasks2: "??ligibilit?? bourse ??tudiante",
    iconAwesomeCompass: "/img/icon-awesome-compass-1@1x.png",
    myTasks3: "Langue",
    groupe1997: "/img/icon-awesome-globe-1@1x.png",
    groupe1996: "/img/icon-awesome-money-bill-wave-1@1x.png",
    groupe1995: "/img/icon-awesome-newspaper-1@1x.png",
    scoolizeLogoPalettes1: "/img/scoolize-logo---palettes--1--1@1x.png",
    trac1992: "/img/trac--1992-1@1x.png",
    onSaitQuOnAppre: `"On sait qu'on apprend tout au long de nos vies mais avez-vous appris ?? choisir vos ??tudes ?"`,
    cEstNormalQuOnVousAideUnPeu: "C'est normal qu'on vous aide un peu ????",
    bonCEstPartiSuivezNous: "Bon c'est parti ?! Suivez nous ????",
    jeSouhaiteApprofon: "Je souhaite approfondir mes recherches..",
    projectHeaderProps: projectHeader14Data,
    filliresProps: fillires26Data,
    formationProps: formation24Data,
    groupe1882Props: groupe188222Data,
    menuProps: menu3Data,
    userInfoProps: userInfo4Data,
    boutonProps: bouton22Data,
    calendarPartProps: calendarPart2Data,
    partieOrientationProps: partieOrientation2Data,
    formationsLesPlusRecherchesProps: formationsLesPlusRecherches2Data,
    objectifsProps: objectifs2Data,
    colesLesPlusRecherchesProps: colesLesPlusRecherches2Data,
    footerProps: footer14Data,
};

const groupe193612Data = {
    className: "groupe-1936-8",
};

const navigation37Data = {
    groupe1936Props: groupe193612Data,
};

const bouton23Data = {
    src: "/img/trac--433-10@1x.png",
    className: "bouton-8",
};

const navigation24Data = {
    className: "navigation-25",
    boutonProps: navigation37Data,
    boutonProps2: bouton23Data,
};

const icon24Data = {
    className: "",
};

const title25Data = {
    iconProps: icon24Data,
};

const projectHeader312Data = {
    titleProps: title25Data,
};

const fillires27Data = {
    children: "Fili??res",
};

const groupe188223Data = {
    className: "groupe-1882-22",
};

const composant89112Data = {
    children: "Arts",
    className: "composant-94-1",
};

const composant971Data = {
    humanits: "Humanit??s",
};

const composant1011Data = {
    children: "Math??matiques",
};

const composant89113Data = {
    children: "SES",
    className: "composant-104-1",
};

const composant9517Data = {
    children: "Biologie-??cologie",
    className: "composant-95-1",
};

const composant9518Data = {
    children: "Langues",
    className: "composant-98-1",
};

const composant89114Data = {
    children: "Num??rique",
    className: "composant-102-1",
};

const composant1061Data = {
    sciencesDeLIngnieur: "Sciences de l'ing??nieur",
};

const composant9613Data = {
    children: "Histoire-g??ographie",
};

const composant1001Data = {
    littratures: "Litt??ratures",
};

const composant103128Data = {
    children: "Physique-chimie",
    className: "composant-103-1",
};

const composant103129Data = {
    children: "SVT",
    className: "composant-107-1",
};

const composant896Data = {
    src: "/img/sti2d@1x.png",
};

const composant89115Data = {
    children: "ST2S",
    className: "composant-90-6",
};

const composant89116Data = {
    children: "STL",
    className: "composant-89-7",
};

const composant89117Data = {
    children: "TMD",
    className: "composant-90-7",
};

const groupe1991Data = {
    composant891Props: composant89116Data,
    composant8912Props: composant89117Data,
};

const composant103130Data = {
    children: "STD2A",
    className: "composant-89-8",
};

const composant89118Data = {
    children: "STHR",
    className: "composant-90-8",
};

const composant89119Data = {
    children: "STAV",
    className: "composant-89-9",
};

const composant89120Data = {
    children: "Pro",
    className: "composant-89-10",
};

const composant103131Data = {
    children: "STMG",
    className: "composant-90-9",
};

const composant301111Data = {
    children: "Diplome-Docus avis",
};

const composant301112Data = {
    children: "S??lection d?????coles",
    className: "composant-31-1-13",
};

const composant32145Data = {
    children: "S??lection de dipl??mes",
};

const composant301113Data = {
    children: "Liste des dipl??mes",
    className: "composant-34-1-13",
};

const composant32146Data = {
    children: "Que faire apr??s le bac",
};

const composant301114Data = {
    children: "Acc??s ??tablissement",
    className: "composant-30-2-13",
};

const composant301115Data = {
    children: "R??f??rencer son ??tablissement",
    className: "composant-31-2-13",
};

const composant40123Data = {
    src: "/img/trac--1999-10@1x.png",
};

const composant41145Data = {
    src: "/img/trac--2000-12@1x.png",
    className: "groupe-1936-1",
};

const composant42123Data = {
    src: "/img/trac--2001-11@1x.png",
    className: "groupe-1936-1",
};

const composant41146Data = {
    src: "/img/instagram-10@1x.png",
    className: "icons-22",
};

const title323Data = {
    className: "title-23",
};

const footer15Data = {
    className: "footer-15",
    composant301Props: composant301111Data,
    composant3012Props: composant301112Data,
    composant321Props: composant32145Data,
    composant3013Props: composant301113Data,
    composant3212Props: composant32146Data,
    composant3014Props: composant301114Data,
    composant3015Props: composant301115Data,
    composant401Props: composant40123Data,
    composant411Props: composant41145Data,
    composant421Props: composant42123Data,
    composant4112Props: composant41146Data,
    composant401Props2: title323Data,
};

const trouverCole110Data = {
    x12: "/img/12-10@1x.png",
    enQuelleTerminaleTesVous: "En quelle terminale ??tes-vous ?",
    gnraleSlectionn: <>G??n??rale<br /><br />S??lectionnez vos 2 sp??cialit??s</>,
    jeValideMaSlection: "Je valide ma s??lection",
    technologique: "Technologique",
    navigation2Props: navigation24Data,
    projectHeader3Props: projectHeader312Data,
    filliresProps: fillires27Data,
    groupe1882Props: groupe188223Data,
    composant891Props: composant89112Data,
    composant971Props: composant971Data,
    composant1011Props: composant1011Data,
    composant8912Props: composant89113Data,
    composant951Props: composant9517Data,
    composant9512Props: composant9518Data,
    composant8913Props: composant89114Data,
    composant1061Props: composant1061Data,
    composant961Props: composant9613Data,
    composant1001Props: composant1001Data,
    composant1031Props: composant103128Data,
    composant10312Props: composant103129Data,
    composant896Props: composant896Data,
    composant8914Props: composant89115Data,
    groupe1991Props: groupe1991Data,
    composant10313Props: composant103130Data,
    composant8915Props: composant89118Data,
    composant8916Props: composant89119Data,
    composant8917Props: composant89120Data,
    composant10314Props: composant103131Data,
    footerProps: footer15Data,
};

const icon25Data = {
    className: "icon-2",
};

const more25Data = {
    className: "more-1",
};

const projectHeader52Data = {
    websiteRedesign: "Diplome-Docus",
    iconProps: icon25Data,
    moreProps: more25Data,
};

const diplme25Data = {
    className: "diplme-6",
};

const coles26Data = {
    className: "coles-6",
};

const fillires28Data = {
    children: "Fili??res",
    className: "fillires-6",
};

const fillires29Data = {
    children: "M??tiers",
    className: "mtiers-3",
};

const groupe188224Data = {
    className: "groupe-1882-23",
};

const liste1Data = {
    trac1993: "/img/trac--1993@1x.png",
    bzzus: "",
    teXV5: "",
    number: "1",
    number2: "2",
    number3: "3",
    number4: "4",
    number5: "5",
    number6: "6",
    number7: "7",
    number8: "8",
    number9: "9",
    number10: "10",
    number11: "11",
    number12: "12",
    number13: "13",
    number14: "14",
    rponse: "R??ponse",
    colePolytechniquePalaiseau: <>??cole Polytechnique<br />Palaiseau</>,
    dfavorable: "D??favorable",
    enAttente: "En attente",
    spanText: "323",
    spanText2: "/300",
    spanText3: "498",
    spanText4: "/180",
    ligne10: "/img/ligne-10@1x.png",
    ufrInformatiqueUniversitDeParis: <>UFR Informatique<br />Universit?? de Paris</>,
    x1828739: "/img/1828739-1@1x.png",
    x4225636: "/img/4225636-1@1x.png",
    x18287392: "/img/1828739-1@1x.png",
    x42256362: "/img/4225636-1@1x.png",
    x12: "/img/12-10@1x.png",
    listeDesVoeux: "Liste des voeux",
    aprtI: "",
    gk3o2: "",
    souhait: " Souhait",
    classement: "Classement",
    projectHeader5Props: projectHeader52Data,
    diplmeProps: diplme25Data,
    colesProps: coles26Data,
    filliresProps: fillires28Data,
    fillires2Props: fillires29Data,
    groupe1882Props: groupe188224Data,
};

const groupe193613Data = {
    className: "groupe-1936-9",
};

const navigation38Data = {
    groupe1936Props: groupe193613Data,
};

const bouton24Data = {
    src: "/img/trac--433-10@1x.png",
    className: "bouton-9",
};

const navigation25Data = {
    className: "navigation-26",
    boutonProps: navigation38Data,
    boutonProps2: bouton24Data,
};

const icon26Data = {
    className: "",
};

const title26Data = {
    iconProps: icon26Data,
};

const projectHeader313Data = {
    titleProps: title26Data,
};

const fillires30Data = {
    children: "Fili??res",
};

const groupe188225Data = {
    className: "groupe-1882-24",
};

const groupe19704Data = {
    children: "Comment souhaitez-vous financer votre formation ?",
    className: "groupe-1970-2",
};

const composant911Data = {
    children: "Pr??t bancaire",
};

const composant921Data = {
    children: "Financement Personnel",
};

const composant301116Data = {
    children: "Diplome-Docus avis",
};

const composant301117Data = {
    children: "S??lection d?????coles",
    className: "composant-31-1-14",
};

const composant32147Data = {
    children: "S??lection de dipl??mes",
};

const composant301118Data = {
    children: "Liste des dipl??mes",
    className: "composant-34-1-14",
};

const composant32148Data = {
    children: "Que faire apr??s le bac",
};

const composant301119Data = {
    children: "Acc??s ??tablissement",
    className: "composant-30-2-14",
};

const composant301120Data = {
    children: "R??f??rencer son ??tablissement",
    className: "composant-31-2-14",
};

const composant40124Data = {
    src: "/img/trac--1999-10@1x.png",
};

const composant41147Data = {
    src: "/img/trac--2000-10@1x.png",
    className: "",
};

const composant42124Data = {
    src: "/img/trac--2001-7@1x.png",
    className: "groupe-1936-1",
};

const composant41148Data = {
    src: "/img/instagram-10@1x.png",
    className: "icons-23",
};

const title324Data = {
    className: "title-24",
};

const footer16Data = {
    className: "footer-16",
    composant301Props: composant301116Data,
    composant3012Props: composant301117Data,
    composant321Props: composant32147Data,
    composant3013Props: composant301118Data,
    composant3212Props: composant32148Data,
    composant3014Props: composant301119Data,
    composant3015Props: composant301120Data,
    composant401Props: composant40124Data,
    composant411Props: composant41147Data,
    composant421Props: composant42124Data,
    composant4112Props: composant41148Data,
    composant401Props2: title324Data,
};

const trouverCole17Data = {
    x12: "/img/12-10@1x.png",
    gnraleSlectionn: <>G??n??rale<br /><br />S??lectionnez vos 2 sp??cialit??s</>,
    jeNeSaisPas: "Je ne sais pas",
    navigation2Props: navigation25Data,
    projectHeader3Props: projectHeader313Data,
    filliresProps: fillires30Data,
    groupe1882Props: groupe188225Data,
    groupe1970Props: groupe19704Data,
    composant911Props: composant911Data,
    composant921Props: composant921Data,
    footerProps: footer16Data,
};

const groupe193614Data = {
    className: "groupe-1936-10",
};

const navigation39Data = {
    groupe1936Props: groupe193614Data,
};

const bouton25Data = {
    src: "/img/trac--433-10@1x.png",
    className: "bouton-10",
};

const navigation26Data = {
    className: "navigation-27",
    boutonProps: navigation39Data,
    boutonProps2: bouton25Data,
};

const icon27Data = {
    className: "",
};

const title27Data = {
    iconProps: icon27Data,
};

const projectHeader314Data = {
    titleProps: title27Data,
};

const fillires31Data = {
    children: "Fili??res",
};

const groupe188226Data = {
    className: "groupe-1882-25",
};

const groupe19705Data = {
    children: <>Liste des ??tablissements correspondant ?? votre recherche de :<br />Master Informatique en temps plein ?? Lyon</>,
};

const groupe19923Data = {
    groupe1970Props: groupe19705Data,
};

const layer23Data = {
    src: "/img/layer-2-2@1x.png",
    className: "layer-2-2",
};

const groupe20046Data = {
    className: "groupe-2006-2",
};

const layer24Data = {
    src: "/img/layer-2-2@1x.png",
    className: "layer-2-3",
};

const layer25Data = {
    src: "/img/layer-2-2@1x.png",
    className: "layer-2-4",
};

const layer26Data = {
    src: "/img/layer-2-2@1x.png",
    className: "layer-2-5",
};

const composant301121Data = {
    children: "Diplome-Docus avis",
};

const composant301122Data = {
    children: "S??lection d?????coles",
    className: "composant-31-1-15",
};

const composant32149Data = {
    children: "S??lection de dipl??mes",
};

const composant301123Data = {
    children: "Liste des dipl??mes",
    className: "composant-34-1-15",
};

const composant32150Data = {
    children: "Que faire apr??s le bac",
};

const composant301124Data = {
    children: "Acc??s ??tablissement",
    className: "composant-30-2-15",
};

const composant301125Data = {
    children: "R??f??rencer son ??tablissement",
    className: "composant-31-2-15",
};

const composant40125Data = {
    src: "/img/trac--1999-10@1x.png",
};

const composant41149Data = {
    src: "/img/trac--2000-12@1x.png",
    className: "groupe-1936-1",
};

const composant42125Data = {
    src: "/img/trac--2001-11@1x.png",
    className: "groupe-1936-1",
};

const composant41150Data = {
    src: "/img/instagram-10@1x.png",
    className: "icons-24",
};

const title325Data = {
    className: "title-25",
};

const footer17Data = {
    className: "footer-17",
    composant301Props: composant301121Data,
    composant3012Props: composant301122Data,
    composant321Props: composant32149Data,
    composant3013Props: composant301123Data,
    composant3212Props: composant32150Data,
    composant3014Props: composant301124Data,
    composant3015Props: composant301125Data,
    composant401Props: composant40125Data,
    composant411Props: composant41149Data,
    composant421Props: composant42125Data,
    composant4112Props: composant41150Data,
    composant401Props2: title325Data,
};

const trouverCole19Data = {
    x12: "/img/12-10@1x.png",
    imageContainer: "/img/image-16-10@1x.png",
    image16: "/img/image-16-10@1x.png",
    image162: "/img/image-16-10@1x.png",
    image163: "/img/image-16-10@1x.png",
    ligne11: "/img/ligne-11-1@1x.png",
    masterProfessionnel: "Master Professionnel Ing??nierie Informatique (Mast??re)",
    expertEnInformat: <>&quot; Expert en informatique et syst??me d&#x27;information&quot;<br /><br />Certification EPSI de niveau 1 (FR) et de niveau 7 (Eu), enregistr?? au RNCP</>,
    plusDInfos: "Plus d'infos",
    trac2010: "/img/trac--2010-10@1x.png",
    trac2011: "/img/trac--2011-10@1x.png",
    plusDInfos2: "Plus d'infos",
    plusDInfos3: "Plus d'infos",
    plusDInfos4: "Plus d'infos",
    iconIonicIosArrowDropdown: "/img/trac--2010-10@1x.png",
    ligne15: "/img/ligne-11-1@1x.png",
    masterProfessionnel2: "Master Professionnel Ing??nierie Informatique (Mast??re)",
    uneFilireDeForma: "Une fili??re de formations compl??te d??livrant des titres certifi??s par l???Etat inscrits au RNCP de l???IPI du niveau IV (??quivalent Bac) au niveau I (??quivalent Bac+5).",
    trac20102: "/img/trac--2010-10@1x.png",
    trac20112: "/img/trac--2011-10@1x.png",
    plusDInfos5: "Plus d'infos",
    image19: "/img/image-19-1@1x.png",
    masterProfessionnel3: "Master Professionnel Ing??nierie Informatique (Mast??re)",
    image18: "/img/image-18-1@1x.png",
    image17: "/img/image-17-1@1x.png",
    ligne13: "/img/ligne-11-1@1x.png",
    masterProfessionnel4: "Master Professionnel Ing??nierie Informatique (Mast??re)",
    formationIntelligen: <>Formation Intelligence Artificielle et Big Data ?? LYON<br /><br />L???IA School d??livre un dipl??me certifiant une double comp??tence, technique (programmation, codage, et math??matiques appliqu??es ?? la computer science) et en Management (marketing, comptabilit??, finance notamment). Votre profil ?? la fois technique et business vous permettra de doubler vos comp??tences op??rationnelles et d???appr??hender des probl??matiques transversales.</>,
    trac20103: "/img/trac--2010-10@1x.png",
    trac20113: "/img/trac--2011-10@1x.png",
    trac20104: "/img/trac--2010-10@1x.png",
    trac20114: "/img/trac--2011-10@1x.png",
    ligne14: "/img/ligne-11-1@1x.png",
    x5AnsPourDevenirU: <>5 ans pour devenir un expert reconnu<br />Dans ce parcours, les ??tudiants peuvent int??grer Epitech Technology dans l???un des 15 campus en France. C???est dans ce campus choisi que se d??roulent les 3 premi??res ann??es de formation.<br /><br />En 4e ann??e, la scolarit?? se d??roule ?? l???International. Les ??tudiants partent pour une ann??e dans l???une des 100 universit??s partenaires partout dans le monde ou dans l&#x27;un des campus d&#x27;Epitech Technology en Europe.</>,
    navigation2Props: navigation26Data,
    projectHeader3Props: projectHeader314Data,
    filliresProps: fillires31Data,
    groupe1882Props: groupe188226Data,
    groupe1992Props: groupe19923Data,
    layer2Props: layer23Data,
    groupe2004Props: groupe20046Data,
    layer22Props: layer24Data,
    layer23Props: layer25Data,
    layer24Props: layer26Data,
    footerProps: footer17Data,
};

const groupe193615Data = {
    className: "groupe-1936-11",
};

const navigation310Data = {
    groupe1936Props: groupe193615Data,
};

const bouton26Data = {
    src: "/img/trac--433-10@1x.png",
    className: "bouton-11",
};

const navigation27Data = {
    className: "navigation-28",
    boutonProps: navigation310Data,
    boutonProps2: bouton26Data,
};

const icon28Data = {
    className: "",
};

const title28Data = {
    iconProps: icon28Data,
};

const projectHeader315Data = {
    titleProps: title28Data,
};

const fillires32Data = {
    children: "Fili??res",
};

const groupe188227Data = {
    className: "groupe-1882-26",
};

const groupe19447Data = {
    lycen: "Lyc??en",
    className: "groupe-1944-6",
};

const groupe197026Data = {
    quandSouhaitezVous: "Quand souhaitez-vous d??buter votre formation ?",
    className: "groupe-1970-6",
    groupe1944Props: groupe19447Data,
};

const composant89121Data = {
    children: "2021",
    className: "composant-89-1",
};

const composant89122Data = {
    children: "2022",
    className: "composant-90-1",
};

const groupe19912Data = {
    className: "groupe-1991",
    composant891Props: composant89121Data,
    composant8912Props: composant89122Data,
};

const composant301126Data = {
    children: "Diplome-Docus avis",
};

const composant301127Data = {
    children: "S??lection d?????coles",
    className: "composant-31-1-16",
};

const composant32151Data = {
    children: "S??lection de dipl??mes",
};

const composant301128Data = {
    children: "Liste des dipl??mes",
    className: "composant-34-1-16",
};

const composant32152Data = {
    children: "Que faire apr??s le bac",
};

const composant301129Data = {
    children: "Acc??s ??tablissement",
    className: "composant-30-2-16",
};

const composant301130Data = {
    children: "R??f??rencer son ??tablissement",
    className: "composant-31-2-16",
};

const composant40126Data = {
    src: "/img/trac--1999-10@1x.png",
};

const composant41151Data = {
    src: "/img/trac--2000-10@1x.png",
    className: "",
};

const composant42126Data = {
    src: "/img/trac--2001-3@1x.png",
    className: "groupe-1936-1",
};

const composant41152Data = {
    src: "/img/instagram-10@1x.png",
    className: "icons-25",
};

const title326Data = {
    className: "title-26",
};

const footer18Data = {
    className: "footer-18",
    composant301Props: composant301126Data,
    composant3012Props: composant301127Data,
    composant321Props: composant32151Data,
    composant3013Props: composant301128Data,
    composant3212Props: composant32152Data,
    composant3014Props: composant301129Data,
    composant3015Props: composant301130Data,
    composant401Props: composant40126Data,
    composant411Props: composant41151Data,
    composant421Props: composant42126Data,
    composant4112Props: composant41152Data,
    composant401Props2: title326Data,
};

const trouverCole18Data = {
    x12: "/img/12-10@1x.png",
    rentreScolaire: "Rentr??e Scolaire",
    navigation2Props: navigation27Data,
    projectHeader3Props: projectHeader315Data,
    filliresProps: fillires32Data,
    groupe1882Props: groupe188227Data,
    groupe19702Props: groupe197026Data,
    groupe1991Props: groupe19912Data,
    footerProps: footer18Data,
};

const groupe193616Data = {
    className: "groupe-1936-12",
};

const navigation311Data = {
    groupe1936Props: groupe193616Data,
};

const bouton27Data = {
    src: "/img/trac--433-10@1x.png",
    className: "bouton-12",
};

const navigation28Data = {
    className: "navigation-29",
    boutonProps: navigation311Data,
    boutonProps2: bouton27Data,
};

const icon29Data = {
    className: "",
};

const title29Data = {
    iconProps: icon29Data,
};

const projectHeader316Data = {
    titleProps: title29Data,
};

const fillires33Data = {
    children: "Fili??res",
};

const groupe188228Data = {
    className: "groupe-1882-27",
};

const groupe19706Data = {
    children: <>Liste des ??tablissements correspondant ?? votre recherche de :<br />Master Informatique en temps plein ?? Lyon</>,
};

const groupe19924Data = {
    groupe1970Props: groupe19706Data,
};

const groupe20048Data = {
    className: "groupe-2006-3",
};

const layer27Data = {
    src: "/img/layer-2-2@1x.png",
    className: "layer-2-6",
};

const composant301131Data = {
    children: "Diplome-Docus avis",
};

const composant301132Data = {
    children: "S??lection d?????coles",
    className: "composant-31-9-2",
};

const composant32153Data = {
    children: "S??lection de dipl??mes",
};

const composant301133Data = {
    children: "Liste des dipl??mes",
    className: "composant-34-5-2",
};

const composant32154Data = {
    children: "Que faire apr??s le bac",
};

const composant301134Data = {
    children: "Acc??s ??tablissement",
    className: "composant-30-10-2",
};

const composant301135Data = {
    children: "R??f??rencer son ??tablissement",
    className: "composant-31-10-2",
};

const composant40127Data = {
    src: "/img/trac--1999-10@1x.png",
};

const composant41153Data = {
    src: "/img/trac--2000-12@1x.png",
    className: "groupe-1936-1",
};

const composant42127Data = {
    src: "/img/trac--2001-11@1x.png",
    className: "groupe-1936-1",
};

const composant41154Data = {
    src: "/img/instagram-10@1x.png",
    className: "icons-26",
};

const title327Data = {
    className: "title-27",
};

const footer19Data = {
    className: "footer-19",
    composant301Props: composant301131Data,
    composant3012Props: composant301132Data,
    composant321Props: composant32153Data,
    composant3013Props: composant301133Data,
    composant3212Props: composant32154Data,
    composant3014Props: composant301134Data,
    composant3015Props: composant301135Data,
    composant401Props: composant40127Data,
    composant411Props: composant41153Data,
    composant421Props: composant42127Data,
    composant4112Props: composant41154Data,
    composant401Props2: title327Data,
};

const trouverCole111Data = {
    x12: "/img/12-10@1x.png",
    ligne15: "/img/ligne-11-1@1x.png",
    masterProfessionnel: "Master Professionnel Ing??nierie Informatique (Mast??re)",
    uneFilireDeForma: "Une fili??re de formations compl??te d??livrant des titres certifi??s par l???Etat inscrits au RNCP de l???IPI du niveau IV (??quivalent Bac) au niveau I (??quivalent Bac+5).",
    trac2010: "/img/trac--2010-10@1x.png",
    trac2011: "/img/trac--2011-10@1x.png",
    plusDInfos: "Plus d'infos",
    image19: "/img/image-19-1@1x.png",
    masterProfessionnel2: "Master Professionnel Ing??nierie Informatique (Mast??re)",
    image18: "/img/image-18-1@1x.png",
    image17: "/img/image-17-1@1x.png",
    ligne13: "/img/ligne-11-1@1x.png",
    masterProfessionnel3: "Master Professionnel Ing??nierie Informatique (Mast??re)",
    formationIntelligen: <>Formation Intelligence Artificielle et Big Data ?? LYON<br /><br />L???IA School d??livre un dipl??me certifiant une double comp??tence, technique (programmation, codage, et math??matiques appliqu??es ?? la computer science) et en Management (marketing, comptabilit??, finance notamment). Votre profil ?? la fois technique et business vous permettra de doubler vos comp??tences op??rationnelles et d???appr??hender des probl??matiques transversales.</>,
    trac20102: "/img/trac--2010-10@1x.png",
    trac20112: "/img/trac--2011-10@1x.png",
    trac20103: "/img/trac--2010-10@1x.png",
    trac20113: "/img/trac--2011-10@1x.png",
    ligne14: "/img/ligne-11-1@1x.png",
    x5AnsPourDevenirU: <>5 ans pour devenir un expert reconnu<br />Dans ce parcours, les ??tudiants peuvent int??grer Epitech Technology dans l???un des 15 campus en France. C???est dans ce campus choisi que se d??roulent les 3 premi??res ann??es de formation.<br /><br />En 4e ann??e, la scolarit?? se d??roule ?? l???International. Les ??tudiants partent pour une ann??e dans l???une des 100 universit??s partenaires partout dans le monde ou dans l&#x27;un des campus d&#x27;Epitech Technology en Europe.</>,
    imageContainer: "/img/image-16-10@1x.png",
    image16: "/img/image-16-10@1x.png",
    image162: "/img/image-16-10@1x.png",
    image163: "/img/image-16-10@1x.png",
    trac20104: "/img/trac--2010-15@1x.png",
    trac20114: "/img/trac--2011-14@1x.png",
    moinsDInfos: "Moins d'infos",
    ligne11: "/img/ligne-11-1@1x.png",
    masterProfessionnel4: "Master Professionnel Ing??nierie Informatique (Mast??re)",
    expertEnInformat: <>&quot; Expert en informatique et syst??me d&#x27;information&quot;<br /><br />Certification EPSI de niveau 1 (FR) et de niveau 7 (Eu), enregistr?? au RNCP</>,
    epsiLcoleQuiF: <>EPSI : L?????COLE QUI FORME LES ESPRITS INNOVANTS AUX COMP??TENCES INFORMATIQUES.<br />L???ACQUISITION DE COMP??TENCES : LE COEUR DE NOTRE SYST??ME D???ADMISSION<br /><br />Le programme modulaire, bas?? sur l???acquisition des comp??tences du parcours Ing??nierie Informatique, permet toutes les admissions post-Bac, Bac+2, Bac+3 et sous conditions, les admissions parall??les.<br /><br /> L???EPSI analyse chaque dossier individuellement afin de proposer les solutions d???accompagnement ad??quat ?? l???atteinte de l???objectif d???acquisition de comp??tences du futur apprenant.<br /><br />Notre outil d?????valuation des comp??tences vous permet d???int??grer l???EPSI tout au long de l???ann??e.<br /><br />Salari??s, demandeurs d???emplois, vous pouvez ??galement int??grer l???EPSI et b??n??ficier de la VAE (Validation des Acquis et de l???Exp??rience).<br /><br />Les formations de l???EPSI sont ??ligibles au CPF (Compte Personnel de Formation)</>,
    candidater: "Candidater",
    navigation2Props: navigation28Data,
    projectHeader3Props: projectHeader316Data,
    filliresProps: fillires33Data,
    groupe1882Props: groupe188228Data,
    groupe1992Props: groupe19924Data,
    groupe2004Props: groupe20048Data,
    layer2Props: layer27Data,
    footerProps: footer19Data,
};

const validation2Data = {
    profil: "Profil",
    userpic: "/img/userpic-1@1x.png",
    productOwner: "Terminale ES",
    emileeSimchenko: "Tom Maugis",
    base: "/img/base-1@1x.png",
    changerDePhotoDeProfil: <>Changer de photo<br /> de profil</>,
    iconAwesomePen: "/img/icon-awesome-pen@1x.png",
    iconAwesomeFolderPlus: "/img/icon-awesome-folder-plus@1x.png",
    ajouterDesDocuments: "Ajouter des documents",
    iconAwesomePowerOff: "/img/icon-awesome-power-off@1x.png",
};

const validationData = {
    iconAwesomeArrowLeft: "/img/icon-awesome-arrow-left@1x.png",
    image8: "/img/image-8-2@1x.png",
    sorbonneUniversit: "Sorbonne Universit?? - Facult?? des Lettres",
    cetTablissementN: "Cet ??tablissement n'a pas personalis?? la page Dipl??me-Docus",
    groupe1943: "/img/4225636-2@1x.png",
    refuserLaProposition: "Refuser la proposition",
    iconAwesomeArrowAltCircleLeft: "/img/icon-awesome-arrow-alt-circle-left@1x.png",
    laisserCeVuEnAttente: "Laisser ce v??u en attente",
    x1828739: "/img/1828739-2@1x.png",
    accepterLaProposition: "Accepter la proposition",
};

