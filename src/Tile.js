import React, {
  Component,
  PropTypes,
} from 'react';

export default class Tile extends Component {

  static defaultProps = {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
    heroImg: 'http://placehold.it/300x225',
    logoImg: 'http://placehold.it/64x64',
    title: 'John Smith',
    url: 'example.com',
  }

  static propTypes = {
    description: PropTypes.string,
    heroImg: PropTypes.string,
    logoImg: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
  }

  render() {
    return (
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child">
                sup
              </article>
              <article className="tile is-child">
                do
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child">
                what
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child">
              chue
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child">
            sippin on
          </article>
        </div>
      </div>
    );
  }

}
