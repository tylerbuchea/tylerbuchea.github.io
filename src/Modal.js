import React, {
  Component,
  PropTypes,
} from 'react';

export default class Modal extends Component {

  static defaultProps = {}

  static propTypes = {
    close: PropTypes.func,
    modal: PropTypes.object,
  }

  render() {
    if (!this.props.modal) {
      return null;
    }
    return (
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="modal-card">
            <section className="modal-card-body">
              <h3 className="title is-3">My Role</h3>
              {this.props.modal.details}
              <hr />
              <div className="card-image">
                <figure className="image is-5by3">
                  <img src={this.props.modal.heroImg} alt="" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-5">{this.props.modal.title}</p>
                    <p className="subtitle is-6">
                      <a href={this.props.modal.url}>{this.props.modal.url}</a>
                    </p>
                  </div>
                </div>
                <div className="content">
                  {this.props.modal.description}
                </div>
              </div>
            </section>
          </div>
        </div>
        <button
          className="modal-close"
          onClick={() => this.props.close()}
        ></button>
      </div>
    );
  }

}
