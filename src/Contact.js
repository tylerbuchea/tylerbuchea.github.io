import React, {
  Component,
} from 'react';

const styles = {
  li: {
    marginTop: 10,
  },
};

export default class Contact extends Component {

  render() {
    return (
      <section className="section">
        <h2 className="title is-2">Let's Chat!</h2>
        <div className="container">
          <div className="content">
            <article className="content-item content-contact">
            <div className="card">
              <div className="card-content">
                <ul className="contact-list no-decoration">
                  <li style={styles.li}>
                    <i className="fa fa-phone"></i>
                    &nbsp;
                    <a
                      href="tel:5034278672"
                      onClick={() => window.ga('send', 'event', 'Contact Request', 'Phone Number', 'Tried to contact me via phone')}
                    >
                      503 • 427 • 8672
                    </a>
                  </li>
                  <li style={styles.li}>
                    <i className="fa fa-envelope"></i>
                    &nbsp;
                    <a
                      href="mailto:tyler@buchea.com"
                      target="_blank"
                      onClick={() => window.ga('send', 'event', 'Contact Request', 'Email', 'Tried to contact me via email')}
                    >
                      tyler@buchea.com
                    </a>
                  </li>
                  <li style={styles.li}>
                    <i className="fa fa-twitter"></i>
                    &nbsp;
                    <a
                      href="https://twitter.com/tylerbuchea"
                      target="_blank"
                      onClick={() => window.ga('send', 'event', 'Contact Request', 'Twitter', 'Tried to contact me via Twitter')}
                    >
                      @tylerbuchea
                    </a>
                  </li>
                  <li style={styles.li}>
                    <form action="//formspree.io/tyler@buchea.com" method="POST">
                      <p className="control">
                        <input className="input" type="email" name="_replyto" placeholder="your-email@example.com" />
                      </p>
                      <input className="button is-primary" type="submit" value="SEND" />
                    </form>
                  </li>
                </ul>
              </div>
            </div>

            </article>
          </div>
        </div>
      </section>
    );
  }

}
