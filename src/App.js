import React from "react";
import Header from "./components/header";
import Card from "./components/card";
import Footer from "./components/footer";
import {
  MainWrapper,
  CardsWrapper,
  Skills,
  WrapperInfo,
  Info,
  EducationImg,
  Surge,
  ProjectImg,
  Button,
} from "./style";
import Labenu from "./assets/labenu.png";
import Reprograma from "./assets/reprograma.svg";
import Mackenzie from "./assets/mackenzie.png";
import Eddit from "./assets/feather.svg";
import Planet from "./assets/space.png";
import Cookenu3 from "./assets/food-and-restaurant.png";

function App() {
  const techSkills = () => {
    return (
      <Skills>
        <li>Javascript</li>
        <li>React</li>
        <li>Typescript</li>
        <li>SQL</li>
        <li>Node.js</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Git, Github</li>
        <li>Jest</li>
      </Skills>
    );
  };

  const education = () => {
    return (
      <WrapperInfo>
        <Info>
          <p>Desenvolvimento Web Full Stack</p>
          <EducationImg src={Labenu} />
        </Info>

        <Info>
          <p>Programação Front-end</p>
          <EducationImg src={Reprograma} />
        </Info>

        <Info>
          <p>Graduação em Psicologia</p>
          <EducationImg src={Mackenzie} />
        </Info>
      </WrapperInfo>
    );
  };

  const projects = () => {
    return (
      <WrapperInfo>
        <Info>
          <Surge href="http://futurex-natalia.surge.sh" target="blank">
            <p>
              <strong>FutureX</strong>
              <br /> Projeto front-end feito com React
            </p>
            <ProjectImg src={Planet} />
          </Surge>

          <a href="https://github.com/n-acedo/futurex" target="blank">
            <Button>Ver no GitHub</Button>
          </a>
        </Info>

        <Info>
          <Surge href="http://4eddit-ln.surge.sh/" target="blank">
            <p>
              <strong>4eddit</strong>
              <br /> Projeto front-end feito com React
            </p>
            <ProjectImg src={Eddit} />
          </Surge>
          <a href="https://github.com/n-acedo/4eddit" target="blank">
            <Button>Ver no GitHub</Button>
          </a>
        </Info>

        <Info>
          <p>
            <strong>Cookenu</strong>
            <br /> Projeto back-end feito em Typescript
          </p>
          <ProjectImg src={Cookenu3} />

          <a href="https://github.com/n-acedo/cookenu" target="blank">
            <Button>Ver no GitHub</Button>
          </a>
        </Info>
      </WrapperInfo>
    );
  };

  return (
    <MainWrapper>
      <Header />
      <CardsWrapper>
        <Card
          title="perfil"
          description="Comecei minha carreira na área de Psicologia. Nesta profissão tive experiência como psióloga clínica de adultos, além de atendimentos e supervisão de crianças com desenvolvimento atípico."
          description2="Na metade de 2019 comecei a estudar programação. Tive a oportunidade de participar da turma online de 2019 da Reprograma. No decorrer do curso aprendi sobre HTML, CSS, Javascript e Bootstrap. Em 2020, realizei o curso de desenvolvimento Web Full Stack da Labenu."
        />
        <Card color="dark" title="formação" description={education()} />
        <Card title="tech skills" description={techSkills()} />
        <Card color="dark" title="projetos" description={projects()} />

        <Footer />
      </CardsWrapper>
    </MainWrapper>
  );
}

export default App;
