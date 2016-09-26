import React, {
  Component,
  PropTypes,
} from 'react';

export default class Contact extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article className="content-item content-contact">
        <h2 className="title is-2">Let's Chat!</h2>
        <ul className="contact-list">
          <li>
            <i className="fa fa-phone"></i>
            &nbsp;
            <a
              href="tel:5034278672"
              onclick="ga('send', 'event', 'Contact Request', 'Phone Number', 'Tried to contact me via phone');"
            >
              503 • 427 • 8672
            </a>
          </li>
          <li>
            <i className="fa fa-envelope"></i>
            &nbsp;
            <a
              href="mailto:tyler@buchea.com"
              target="_blank"
              onclick="ga('send', 'event', 'Contact Request', 'Email', 'Tried to contact me via email');"
            >
              Tyler@Buchea.com
            </a>
          </li>
          <li>
            <i className="fa fa-twitter"></i>
            &nbsp;
            <a
              href="https://twitter.com/tylerbuchea"
              target="_blank"
              onclick="ga('send', 'event', 'Contact Request', 'Twitter', 'Tried to contact me via Twitter');"
            >
              @TylerBuchea
            </a>
          </li>
          <li>
            <form action="//formspree.io/tyler@buchea.com" method="POST">
              <p className="control">
                <input className="input" type="email" name="_replyto" placeholder="your-email@example.com" />
              </p>
              <input className="button is-primary" type="submit" value="SEND" />
            </form>
          </li>
        </ul>
      </article>
    );
  }

}
