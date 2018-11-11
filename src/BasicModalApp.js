import React, { Component } from 'react';
import Modal from './BasicModal';
import Button from './Button';

class App extends Component {
  state = { show: false }

  toggleModal = () => {
    this.setState({ show: !this.state.show })
  }

  render() {
    return (
      <div>
        {Array.from(Array(100)).map(() => (
          <p>Page Contents yay</p>
        ))}
        <Button onClick={this.toggleModal}>Modal</Button>
        <Modal show={this.state.show} onClose={this.toggleModal}>
          {Array.from(Array(100)).map(() => (
            <p>Modal Contents yay</p>
          ))}
        </Modal>
      </div>
    );
  }
}

export default App;
