import React, {
  Component,
} from 'react';

export default class Header extends Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container-restricted">
        <header className="header row">
          <h1><a href="http://tylerbuchea.com">Tyler Buchea</a> <div>[ boo • shay ]</div></h1>
          <h2>Software Engineer</h2>

          <hr className="divider" />

          <nav className="navbar">
            <div className="container">
              <ul className="navbar-list">

                <li className="navbar-item">
                  <a className="icon navbar-link" href="http://blog.tylerbuchea.com">
                    <i className="fa fa-pencil"></i>
                  </a>
                </li>

                <li className="navbar-item">
                  <a className="icon navbar-link" href="https://stackoverflow.com/jobs/cv/employer/321320">
                    <i className="fa fa-stack-overflow"></i>
                  </a>
                </li>

                <li className="navbar-item">
                  <a className="icon navbar-link" href="https://github.com/tylerbuchea">
                    <i className="fa fa-github"></i>
                  </a>
                </li>

                <li className="navbar-item">
                  <a className="icon navbar-link" href="https://itunes.apple.com/us/developer/tyler-buchea/id1039566131">
                    <i className="fa fa-apple"></i>
                  </a>
                </li>

                <li className="navbar-item">
                  <a className="icon navbar-link" href="https://play.google.com/store/apps/developer?id=Tyler+Buchea+LLC">
                    <i className="fa fa-android"></i>
                  </a>
                </li>

                <li className="navbar-item">
                  <a className="icon navbar-link" href="https://twitter.com/tylerbuchea">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>

                <li className="navbar-item">
                  <a className="icon navbar-link" href="https://www.linkedin.com/in/tyler-buchea-b3a43376">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>

              </ul>
            </div>
          </nav>
        </header>

        <section className="content row" role="main">
          <article className="content-item content-contact">

            <h2 className="title is-2">Let's Chat!</h2>
            <ul className="contact-list">
              <li>
                <i className="fa fa-phone"></i> <a href="tel:5034278672" onClick={() => window.ga('send', 'event', 'Contact Request', 'Phone Number', 'Tried to contact me via phone')}>503 • 427 • 8672</a>
              </li>
              <li>
                <i className="fa fa-envelope"></i> <a href="mailto:tyler@buchea.com" target="_blank" onClick={() => window.ga('send', 'event', 'Contact Request', 'Email', 'Tried to contact me via email')}>Tyler@Buchea.com</a>
              </li>
              <li>
                <i className="fa fa-twitter"></i> <a href="https://twitter.com/tylerbuchea" target="_blank" onClick={() => window.ga('send', 'event', 'Contact Request', 'Twitter', 'Tried to contact me via Twitter')}> @TylerBuchea</a>
              </li>
              <li>
                <form action="//formspree.io/tyler@buchea.com" method="POST">
                  <input type="email" name="_replyto" placeholder="your-email@example.com" style={{ fontSize: 12.5 }} />
                  &nbsp;
                  <input type="submit" value="SEND" />
                </form>
              </li>
            </ul>

          </article>

          <article className="content-item content-direct">
            <div className="about">
              <div className="about-copy">
                <h2 className="title is-2">Howdy,</h2>
                <p>
                  I'm Tyler Buchea, I'm a full stack JavaScript developer working
                  and living in the Portland area. I like React, React Native,
                  Redux, Express, NodeJS, GraphQL, and Relay. Add me on Snapchat: <strong>tylerbuchea</strong>.
                </p>
              </div>
              <img src="img/icon-avatar.jpg" className="icon-avatar" role="presentation" />
            </div>
            <hr />
          </article>

        </section>
      </div>
    );
  }

}
