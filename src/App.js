import React, {
  Component,
} from 'react';
import 'bulma/css/bulma.css';
import cards from './cards.json';
import Contact from './Contact';
import Card from './Card';
// import Details from './Details';
import Modal from './Modal';
// import Tile from './Tile';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cards,
      details: {
        description: 'I\'m a full stack JavaScript developer working and living in the Portland area. Add me on Snapchat: tylerbuchea.',
        name: 'Tyler Buchea',
        twitter: '@tylerbuchea',
      },
      modal: null,
    };
  }

  closeModal = () => this.setState({ modal: null });
  openModal = (card) => this.setState({ modal: card })

  renderHeader = (details) =>
    <section className="hero is-primary">
      <div className="hero-body container columns is-vcentered">
        <div className="column is-one-third">
          <div className="has-padding is-vcentered">
            <figure className="image is-96x96">
              <img className="has-border is-circle" src="img/icon-avatar.jpg" alt="" />
            </figure>
            <div className="is-pulled-left">
              <h1 className="title">
                Tyler Buchea
              </h1>
              <h2 className="subtitle">
                Portfolio
              </h2>
            </div>
          </div>
        </div>
        {/*<div className="column">
          <Details {...details} />
        </div>*/}
      </div>
    </section>

  renderContact = () =>
    <section className="section">
      <div className="container">
        <div className="content">
          <Contact />
        </div>
      </div>
    </section>

  renderCards = (cards) =>
    <section className="section">
      <h2 className="title is-2">Portfolio</h2>
      <div className="columns">
        {cards.map((card, index) =>
          <div className="column is-one-third" key={index}>
            <Card
              {...card}
              openModal={() => this.openModal(card)}
            />
          </div>
        )}
      </div>
    </section>

  renderFooter = () =>
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <p>
            <strong>Want to see more?</strong> You can find me all over the internet. Below are some of the places I frequent.
          </p>
          <p>
            <a className="icon" href="http://blog.tylerbuchea.com">
              <i className="fa fa-pencil"></i>
            </a>
            <a className="icon" href="https://stackoverflow.com/jobs/cv/employer/321320">
              <i className="fa fa-stack-overflow"></i>
            </a>
            <a className="icon" href="https://github.com/tylerbuchea">
              <i className="fa fa-github"></i>
            </a>
            <a className="icon" href="https://itunes.apple.com/us/developer/tyler-buchea/id1039566131">
              <i className="fa fa-apple"></i>
            </a>
            <a className="icon" href="https://play.google.com/store/apps/developer?id=Tyler+Buchea+LLC">
              <i className="fa fa-android"></i>
            </a>
            <a className="icon" href="https://twitter.com/tylerbuchea">
              <i className="fa fa-twitter"></i>
            </a>
            <a className="icon" href="https://www.linkedin.com/in/tyler-buchea-b3a43376">
              <i className="fa fa-linkedin"></i>
            </a>
          </p>
        </div>
      </div>
    </footer>

  render() {
    const header = this.renderHeader(this.state.details);
    const contact = this.renderContact();
    const cards = this.renderCards(this.state.cards);
    const footer = this.renderFooter();
    return (
      <div>
        <Modal
          close={this.closeModal}
          modal={this.state.modal}
        />
        {header}
        {contact}
        {cards}
        {footer}
      </div>
    );
  }

}
