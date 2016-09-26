import React, {
  Component,
  PropTypes,
} from 'react';

export default class Details extends Component {

  static defaultProps = {
    name: PropTypes.string,
    description: PropTypes.string,
    twitter: PropTypes.string,
  }

  static propTypes = {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.',
    name: 'John Smith',
    twitter: '@johnsmith',
  }

  render() {
    return (
      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img src="http://placehold.it/128x128" />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{this.props.name}</strong> <small>{this.props.twitter}</small> <small>31m</small>
              <br />
              {this.props.description}
            </p>
          </div>
          <nav className="level">
            <div className="level-left">
              <a className="level-item">
                <span className="icon is-small"><i className="fa fa-reply"></i></span>
              </a>
              <a className="level-item">
                <span className="icon is-small"><i className="fa fa-retweet"></i></span>
              </a>
              <a className="level-item">
                <span className="icon is-small"><i className="fa fa-heart"></i></span>
              </a>
            </div>
          </nav>
        </div>
      </article>
    );
  }

}
