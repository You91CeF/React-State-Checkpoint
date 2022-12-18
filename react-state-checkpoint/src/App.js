import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
    person: {
      fullName: 'Sanji Vinsmoke',
      bio: 'A Cook with experience in Battle',
      imgSrc: 'https://sites.google.com/site/mangasekaios/_/rsrc/1472860586982/one-piece/personnages/sanji/insane12.jpg?height=320&width=319',
      profession: 'Pirate Cook',
    },
    shows: false,
  }

  toggleShow = () => {
    this.setState(prevState => ({
      shows: !prevState.shows,
    }));
  }

  componentDidMount() {
    this.startTime = Date.now();
  }

  render() {
    const { person, shows } = this.state;
    const elapsedTime = (Date.now() - this.startTime) / 1000;

    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Show</button>
        {shows && (
          <div>
            <h1>{person.fullName}</h1>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>{person.bio}</p>
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <p>Time since component was mounted: {elapsedTime} seconds</p>
      </div>
    );
  }
}
export default App;
