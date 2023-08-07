import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import '../App.css'
class UrlCover extends React.Component {
  constructor(props) {
    super(props);
    this.player = React.createRef(); // initialize your ref
  }
  render() {
    return (
    
      <Player
        ref={this.player} // set the ref to your class instance
        autoplay={true}
        loop={true}
        controls={true}
        src="https://lottie.host/33046a62-40af-4ede-90cc-8d6b86dabe58/SB3zuIG6w5.json"
     
      ></Player>
    );
  }
}

export default UrlCover;