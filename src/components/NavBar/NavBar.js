import { Navbar, NavbarBrand, Nav, NavItem } from "react-bootstrap";
import GitHubButton from "react-github-btn";

const NavBar = () => {
  return (
    <nav>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
          <NavbarBrand href="/">CV Generator App</NavbarBrand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavItem className="px-lg-3">
                {/* github fork repo button */}
                <GitHubButton
                  href="https://github.com/Ali-Tahir4024/cv-generator-app-reactjs/fork"
                  data-icon="octicon-repo-forked"
                  aria-label="Fork Ali-Tahir4024/cv-generator-app-reactjs on GitHub"
                >
                  Fork
                </GitHubButton>
              </NavItem>
              <NavItem className="px-lg-3">
                {/* github star repo button */}
                <GitHubButton
                  href="https://github.com/Ali-Tahir4024/cv-generator-app-reactjs"
                  data-icon="octicon-star"
                  aria-label="Star Ali-Tahir4024/cv-generator-app-reactjs on GitHub"
                >
                  Star
                </GitHubButton>
              </NavItem>
              <NavItem className="px-lg-3">
                {/* github download repo button */}
                <GitHubButton
                  href="https://github.com/Ali-Tahir4024/cv-generator-app-reactjs/archive/master.zip"
                  data-icon="octicon-download"
                  aria-label="Download Ali-Tahir4024/cv-generator-app-reactjs on GitHub"
                >
                  Download
                </GitHubButton>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </nav>
  );
};

export default NavBar;