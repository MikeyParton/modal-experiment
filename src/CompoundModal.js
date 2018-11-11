import React, { Component } from 'react';
import BodyScrollLock from 'react-scrolllock';
import styled from 'styled-components';
import { Transition } from 'react-spring'
import Button from './Button';

const FullScreenContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
`

const InnerModal = styled.div`
  z-index: 2;
  width: 200px;
  margin: 50px auto;
  padding: 10px;
  background-color: white;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
`
const Overlay = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.5;
  z-index: 1;
`

const Body = styled.div`
  flex-grow: 1;
  overflow-y: scroll;
`

const Footer = styled.div`
  flex-shrink: 1
`

const Header = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: flex-end;
`

class Modal extends React.Component {

  static Body = ({ children }) => (
    <Body>
      {children}
    </Body>
  )

  static Footer = ({ children }) => (
    <Footer>
      {children}
    </Footer>
  )

  render() {
    const { show, onClose, children } = this.props;
    return (
      <Transition
        items={show}
        from={{ opacity: 0, transform: 'translate(0, 40px)' }}
        enter={{ opacity: 1, transform: 'translate(0, 0)'  }}
        leave={{ opacity: 0, transform: 'translate(0, 40px)'  }}>
          {show => show && (props => (
            <FullScreenContainer style={{ opacity: props.opacity }}>
              <BodyScrollLock />
              <Overlay onClick={onClose} />
              <InnerModal style={{ transform: props.transform }}>
                <Header>
                  <Button onClick={onClose}>X</Button>
                </Header>
                {children}
              </InnerModal>
            </FullScreenContainer>
          ))}
      </Transition>
    )
  }
}

export default Modal;
