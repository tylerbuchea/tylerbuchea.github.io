import React, {
  Component,
  PropTypes,
} from 'react';

export default class Card extends Component {

  static defaultProps = {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
    heroImg: 'http://placehold.it/300x225',
    logoImg: 'http://placehold.it/64x64',
    title: 'John Smith',
    url: 'example.com',
  }

  static propTypes = {
    description: PropTypes.string,
    details: PropTypes.string,
    heroImg: PropTypes.string,
    logoImg: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
  }

  render() {
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image is-5by3">
            <img src={this.props.heroImg} alt="" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-5">{this.props.title}</p>
              <p className="subtitle is-6">
                <a href={this.props.url}>{this.props.url}</a>
              </p>
            </div>
          </div>
          <div className="content">
            {this.props.description}
          </div>
        </div>
        <footer className="card-footer">
          <a className="card-footer-item" onClick={() => this.props.openModal()}>
            Details
          </a>
        </footer>
      </div>
    );
  }

}
