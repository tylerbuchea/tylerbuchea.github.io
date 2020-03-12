import React from 'react';
import 'bulma/css/bulma.css';

import './skeleton.css';
import './overrides.css';
import './dark-theme.css';
import cards from './cards';
import Card from './Card';
import Header from './Header';
import Modal from './Modal';

export default class Home extends React.Component {
  state = {
    cards,
    modal: null,
  }

  closeModal = () => this.setState({ modal: null });

  openModal = card => this.setState({ modal: card });

  renderCards = cards => (
    <section className="section">
      <h2 className="title is-2 has-text-centered">Portfolio</h2>
      <div className="container">
        <div className="columns is-multiline">
          {cards.map((card, index) => (
            <div
              className="column is-one-third-tablet is-one-quarter-desktop"
              key={index}
            >
              <Card {...card} openModal={() => this.openModal(card)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  renderFooter = () => (
    <div className="container-restricted" style={{ paddingBottom: 30 }}>
      <div className="has-text-centered">
        <hr />
        ©{new Date().getFullYear()} Tyler Buchea. All Rights Reserved.
      </div>
    </div>
  );

  render() {
    const cards = this.renderCards(this.state.cards);
    const footer = this.renderFooter();
    return (
      <div>
        {!!this.state.modal &&
          <Modal close={this.closeModal} modal={this.state.modal} />
        }
        <Header />
        {cards}
        {footer}
      </div>
    );
  }
}
