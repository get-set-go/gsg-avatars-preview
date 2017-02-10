import React from 'react';

export default class GSGGravatarPreview extends React.Component {
  render() {
    const gravatarURL = `https://s.gravatar.com/avatar/${this.props.hash}?s=${this.props.bSize}`;

    return(
      <img src={gravatarURL} alt={this.props.hash} />
    );
  }
};

GSGGravatarPreview.defaultProps = {
  bSize: 80
};
