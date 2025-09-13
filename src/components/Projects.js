import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import pagueMenos from "../assets/img/pague-menos-home.png";
import pagueMenos2 from "../assets/img/pague-menos.png";
import maeztra from "../assets/img/maeztra.jpg";
import grarepresentacao from "../assets/img/grarepresentacao.jpg";
import amazonFishing from "../assets/img/amazonFishing.png";
import topPerformace from "../assets/img/topPerformace.png";
import advogadoLp from "../assets/img/advogadoLp.png";
import sorrisoOdonto from "../assets/img/sorrisoOdonto.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Pague Menos",
      description: "Desenvolvimento Home Page",
      imgUrl: pagueMenos,
    },
    {
      title: "Pague Menos",
      description: "Desenvolvimento Lp Freestyle Libre",
      imgUrl: pagueMenos2,
    },
    {
      title: "Maeztra",
      description: "Desenvolvimento de Lp para clientes",
      imgUrl: maeztra,
    },
    {
      title: "GRA representações",
      description: "Desenvolvimento de LP",
      imgUrl: grarepresentacao,
    },
        {
      title: "Top Performace",
      description: "Desenvolvimento de uma LP para loja de veículos",
      imgUrl: topPerformace,
    },
    {
      title: "Amazon Fishing Wild",
      description: "Desenvolvimento de uma LP para viagem de pesca",
      imgUrl: amazonFishing,
    },
    {
      title: "Sorriso Odonto",
      description: "Desenvolvimento de uma LP para clínica odontológica",
      imgUrl: sorrisoOdonto,
    },
        {
      title: "Advocacia",
      description: "Desenvolvimento de uma LP para escritório de advocacia",
      imgUrl: advogadoLp,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projetos</h2>
                <p>Demonstração dos projetos já feitos por mim durante a minha carreira como Dev. Projetos todos feitos nas empresas que já passei.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projetos</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}