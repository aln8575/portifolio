import { useState } from 'react';
import './Contato.css';
import TrackVisibility from 'react-on-screen';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contato = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                  src={contactImg}
                  alt="Contact Us"
                />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Entre em contato</h2>
                  <form
                    action="https://formsubmit.co/alan84515@gmail.com"
                    method="POST"
                  >
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="name"
                          placeholder="Primeiro Nome"
                          onChange={(e) => setName(e.target.value)}
                          value={name}
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          name="email"
                          placeholder="Digite seu email"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          required
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          className="textarea"
                          name="message"
                          placeholder="Digite sua mensagem..."
                          onChange={(e) => setMessage(e.target.value)}
                          value={message}
                          required
                        />
                        <input
                          className="buttonForm"
                          type="submit"
                          value="Enviar"
                        />
                      </Col>
                    </Row>

                    {/* Configurações extras */}
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_next" value="https://seusite.com/obrigado" />
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
