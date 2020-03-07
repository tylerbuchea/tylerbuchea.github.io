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
            <ul className="navbar-list">
              <li className="navbar-item">
                <a
                  target="_blank"
                  className="icon navbar-link"
                  href="http://blog.tylerbuchea.com"
                >
                  <i className="fa fa-pencil-alt" />
                </a>
              </li>

              <li className="navbar-item">
                <a
                  target="_blank"
                  className="icon navbar-link"
                  href="https://github.com/tylerbuchea"
                >
                  <i className="fab fa-github" />
                </a>
              </li>

              <li className="navbar-item">
                <a
                  target="_blank"
                  className="icon navbar-link"
                  href="https://www.youtube.com/channel/UCjGfHpKjVrp7MZ45hiwgD_A"
                >
                  <i className="fab fa-youtube" />
                </a>
              </li>

              <li className="navbar-item">
                <a
                  target="_blank"
                  className="icon navbar-link"
                  href="https://anchor.fm/remote-guys-night"
                >
                  <i className="fa fa-podcast" />
                </a>
              </li>

              <li className="navbar-item">
                <a
                  target="_blank"
                  className="icon navbar-link"
                  href="https://twitter.com/tylerbuchea"
                >
                  <i className="fab fa-twitter" />
                </a>
              </li>

              <li className="navbar-item">
                <a
                  target="_blank"
                  className="icon navbar-link"
                  href="https://itunes.apple.com/us/developer/tyler-buchea/id1039566131"
                >
                  <i className="fab fa-apple" />
                </a>
              </li>

              <li className="navbar-item">
                <a
                  target="_blank"
                  className="icon navbar-link"
                  href="https://play.google.com/store/apps/developer?id=Tyler+Buchea+LLC"
                >
                  <i className="fab fa-android" />
                </a>
              </li>

              <li className="navbar-item">
                <a
                  target="_blank"
                  className="icon navbar-link"
                  href="https://angel.co/tyler-buchea"
                >
                  <i className="fab fa-angellist" />
                </a>
              </li>

              <li className="navbar-item">
                <a
                  target="_blank"
                  className="icon navbar-link"
                  href="https://stackoverflow.com/jobs/cv/employer/321320"
                >
                  <i className="fab fa-stack-overflow" />
                </a>
              </li>

              <li className="navbar-item">
                <a
                  target="_blank"
                  className="icon navbar-link"
                  href="https://www.linkedin.com/in/tyler-buchea-b3a43376"
                >
                  <i className="fab fa-linkedin" />
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <section className="content row" role="main">
          <article className="content-item content-contact">
            <h2 className="title is-2">Let's Chat!</h2>
            <ul className="contact-list">
              <li>
                <i className="fa fa-calendar-alt" />{' '}
                <a
                  href="https://calendly.com/tylerbuchea"
                  target="_blank"
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
                <i className="fab fa-twitter" />{' '}
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
                <p style={{ paddingRight: 5 }}>
                  I'm a full stack JavaScript developer living in Portland and
                  working remotely. I like React, React Native, GraphQL, and
                  NodeJS. Add me on Instagram:{' '}
                  <a target="_blank" href="https://www.instagram.com/tylerbuchea/">
                    @tylerbuchea
                  </a>
                  .
                </p>
              </div>
              <img
                src="img/new_avatar_square_optimized.jpg"
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
