import React from 'react';
import PropTypes from "prop-types"

export default class Modal extends React.Component {
  static defaultProps = {};

  static propTypes = {
    close: PropTypes.func,
    modal: PropTypes.object,
  };

  componentDidMount() {
    document.documentElement.style.overflow = 'hidden'
  }

  componentWillUnmount() {
    document.documentElement.style.overflow = 'visible'
  }

  render() {
    return (
      <div className="modal is-active">
        <div className="modal-background" onClick={() => this.props.close()} />
        <div className="modal-content">
          <section className="modal-card-body">
            <button className="modal-close" onClick={() => this.props.close()} />
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
                    <a href={this.props.modal.url} className={!!this.props.modal.disabled ? "disabled" : ""}>
                      {this.props.modal.urlText || this.props.modal.url}
                    </a>
                  </p>
                </div>
              </div>
              <div className="content">{this.props.modal.description}</div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
