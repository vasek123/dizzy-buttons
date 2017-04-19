import React from 'react';
import PropTypes from 'prop-types';
import BasicWrapper from './BasicWrapper';

class DizzyButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appliedStyles: [],
      running: true
    }

    this.getStyle = this.getStyle.bind(this);
    this.changeFonts = this.changeFonts.bind(this);

    setInterval(this.changeFonts, props.interval);
  }

  componentWillMount() {
    let appliedStyles = [];
    this.props.children.split(this.props.separator).forEach(() => {
      appliedStyles.push(this.getStyle())
    })
    this.setState({ appliedStyles });
  }

  getStyle() {
    return {
      ...this.props.baseStyle,
      ...this.props.fontsStyles[Math.round(Math.random() * (this.props.fontsStyles.length - 1))]
    }
  }

  changeFonts() {
    if (!this.state.running) return;
    let appliedStyles = this.state.appliedStyles.slice();
    this.props.children.split(this.props.separator).forEach((str, i) => {
      if (Math.random() > (this.props.randomness || 0.5)) return;
      appliedStyles[i] = this.getStyle();
    })
    this.setState({ appliedStyles });
  }

  switch() {
    this.setState({ running: !this.state.running });
  }

  render() {
    const Container = this.props.component;
    return (
      <Container onClick={this.props.onClick}>
        {
          this.props.children.split(this.props.separator).map((str, i) => <span key={i} style={this.state.appliedStyles[i]}>{str + " "}</span>)
        }
      </Container>
    )
  }
}

DizzyButton.propTypes = {
  baseStyle: PropTypes.object,
  fontsStyles: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func
  ]),
  separator: PropTypes.string,
  interval: PropTypes.number,
  randomness: PropTypes.number,
  onClick: PropTypes.func
}

DizzyButton.defaultProps = {
  baseStyle: {},
  component: BasicWrapper,
  separator: " ",
  interval: 500,
  randomness: 0.5
}



export default DizzyButton;
