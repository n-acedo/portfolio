import React, { Component } from "react";
import { FooterWrapper, FooterInfo, ImageWrapper, ContactImg } from "./style";
import GitHub from "../../assets/github.png";
import GitHubColor from "../../assets/github-color.png";
import Linkedin from "../../assets/linkedin.png";
import LinkedinColor from "../../assets/linkedin-color.png";
import Instagram from "../../assets/instagram.png";
import InstagramColor from "../../assets/instagram-color.png";

class Footer extends Component {
  state = {
    hoverGithub: false,
    hoverInstagram: false,
    hoverLinkedin: false,
  };

  turnsTrueGitHub = () => {
    this.setState({ hoverGithub: true });
  };

  turnsFalseGithub = () => {
    this.setState({ hoverGithub: false });
  };

  turnsTrueLinkedin = () => {
    this.setState({ hoverLinkedin: true });
  };

  turnsFalseLinkedin = () => {
    this.setState({ hoverLinkedin: false });
  };

  turnsTrueInstagram = () => {
    this.setState({ hoverInstagram: true });
  };

  turnsFalseInstagram = () => {
    this.setState({ hoverInstagram: false });
  };

  renderGithubIcon = (hover) => {
    if (!hover) {
      return (
        <ContactImg
          src={GitHub}
          onMouseEnter={this.turnsTrueGitHub}
          onMouseLeave={this.turnsFalseGithub}
        />
      );
    }

    return (
      <ContactImg
        src={GitHubColor}
        onMouseEnter={this.turnsTrueGitHub}
        onMouseLeave={this.turnsFalseGithub}
      />
    );
  };

  renderLinkedinIcon = (hover) => {
    if (!hover) {
      return (
        <ContactImg
          src={Linkedin}
          onMouseEnter={this.turnsTrueLinkedin}
          onMouseLeave={this.turnsFalseLinkedin}
        />
      );
    }

    return (
      <ContactImg
        src={LinkedinColor}
        onMouseEnter={this.turnsTrueLinkedin}
        onMouseLeave={this.turnsFalseLinkedin}
      />
    );
  };

  renderInstagramIcon = (hover) => {
    if (!hover) {
      return (
        <ContactImg
          src={Instagram}
          onMouseEnter={this.turnsTrueInstagram}
          onMouseLeave={this.turnsFalseInstagram}
        />
      );
    }

    return (
      <ContactImg
        src={InstagramColor}
        onMouseEnter={this.turnsTrueInstagram}
        onMouseLeave={this.turnsFalseInstagram}
      />
    );
  };

  render() {
    return (
      <FooterWrapper>
        <FooterInfo>
          <div>
            <p>Entre em contato</p>
            <p>
              Se quiser saber mais sobre mim e meus projetos, me envie uma
              mensagem!
            </p>
            <ImageWrapper>
              <a href="https://github.com/n-acedo" target="blank">{this.renderGithubIcon(this.state.hoverGithub)}</a>

              <a href="https://linkedin.com/in/n-acedo/" target="blank">{this.renderLinkedinIcon(this.state.hoverLinkedin)}</a>

              <a href="https://www.instagram.com/n_acedo/" target="blank">{this.renderInstagramIcon(this.state.hoverInstagram)}</a>
            </ImageWrapper>
            <p>
              <strong>e-mail:</strong> n.alves.acedo@gmail.com
            </p>
          </div>
        </FooterInfo>
      </FooterWrapper>
    );
  }
}

export default Footer;
