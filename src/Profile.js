import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      interval: null,
    };
  }

  componentDidMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({ timer: this.state.timer + 1 });
      }, 1000),
    });
  }

  render() {
    return (
      <div>
        <h1>Timer: {this.state.timer} </h1>
        <h1>FullName: {this.props.fullName}</h1>
        <h1>Bio: {this.props.bio}</h1>
        <img src={this.props.imgSRC} alt=""></img>
        <h1>Profession: {this.props.profession}</h1>
      </div>
    );
  }
}

export default Profile;
