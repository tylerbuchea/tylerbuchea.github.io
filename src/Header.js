import React, { Component } from 'react';

export default class Header extends Component {
  static defaultProps = {};

  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container-restricted">
        <header className="header row">
          <h1>
            <a href="http://tylerbuchea.com">Tyler Buchea</a>{' '}
            <div>[ boo • shay ]</div>
          </h1>
          <h2>Software Engineer</h2>

          <hr className="divider" />

          <nav className="navbar">
            <div className="container">
              <ul className="navbar-list">
                <li className="navbar-item">
                  <a
                    className="icon navbar-link"
                    href="http://blog.tylerbuchea.com"
                  >
                    <i className="fa fa-pencil" />
                  </a>
                </li>

                <li className="navbar-item">
                  <a
                    className="icon navbar-link"
                    href="https://github.com/tylerbuchea"
                  >
                    <i className="fa fa-github" />
                  </a>
                </li>

                <li className="navbar-item">
                  <a
                    className="icon navbar-link"
                    href="https://twitter.com/tylerbuchea"
                  >
                    <i className="fa fa-twitter" />
                  </a>
                </li>

                <li className="navbar-item">
                  <a
                    className="icon navbar-link"
                    href="https://twitch.com/tylerbuchea"
                  >
                    <i className="fa fa-twitch" />
                  </a>
                </li>

                <li className="navbar-item">
                  <a
                    className="icon navbar-link"
                    href="https://itunes.apple.com/us/developer/tyler-buchea/id1039566131"
                  >
                    <i className="fa fa-apple" />
                  </a>
                </li>

                <li className="navbar-item">
                  <a
                    className="icon navbar-link"
                    href="https://play.google.com/store/apps/developer?id=Tyler+Buchea+LLC"
                  >
                    <i className="fa fa-android" />
                  </a>
                </li>

                <li className="navbar-item">
                  <a
                    className="icon navbar-link"
                    href="https://angel.co/tyler-buchea"
                  >
                    <i className="fa fa-angellist" />
                  </a>
                </li>

                <li className="navbar-item">
                  <a
                    className="icon navbar-link"
                    href="https://stackoverflow.com/jobs/cv/employer/321320"
                  >
                    <i className="fa fa-stack-overflow" />
                  </a>
                </li>

                <li className="navbar-item">
                  <a
                    className="icon navbar-link"
                    href="https://www.linkedin.com/in/tyler-buchea-b3a43376"
                  >
                    <i className="fa fa-linkedin" />
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
                <i className="fa fa-calendar" />{' '}
                <a
                  href="https://calendly.com/tylerbuchea"
                  onClick={() =>
                    window.ga(
                      'send',
                      'event',
                      'Contact Request',
                      'Calendly',
                      'Tried to schedule a calendly meeting'
                    )
                  }
                >
                  Schedule a meeting
                </a>
              </li>
              <li>
                <i className="fa fa-twitter" />{' '}
                <a
                  href="https://twitter.com/tylerbuchea"
                  target="_blank"
                  onClick={() =>
                    window.ga(
                      'send',
                      'event',
                      'Contact Request',
                      'Twitter',
                      'Tried to contact me via Twitter'
                    )
                  }
                >
                  Tweet at me
                </a>
              </li>
              <li>
                <i className="fa fa-envelope" />{' '}
                <a
                  href="mailto:tyler@buchea.com"
                  target="_blank"
                  onClick={() =>
                    window.ga(
                      'send',
                      'event',
                      'Contact Request',
                      'Email',
                      'Tried to contact me via email'
                    )
                  }
                >
                  Send me an email
                </a>
              </li>
              <li>
                <form action="//formspree.io/tyler@buchea.com" method="POST">
                  <input
                    type="email"
                    name="_replyto"
                    placeholder="your-email@example.com"
                    style={{ fontSize: 12.5 }}
                  />
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
                  I'm Tyler Buchea, I'm a full stack JavaScript developer
                  working and living in Portland. I like React, React Native,
                  Redux, NodeJS, and Docker. Add me on Instagram:{' '}
                  <a href="https://www.instagram.com/tylerbuchea/">
                    @tylerbuchea
                  </a>.
                </p>
              </div>
              <img
                src="img/icon-avatar.jpg"
                className="icon-avatar"
                role="presentation"
              />
            </div>
            <hr />
          </article>
        </section>
      </div>
    );
  }
}
