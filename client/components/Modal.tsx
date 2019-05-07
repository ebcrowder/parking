import * as React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 36px;
  background-color: white;
  border: 1px solid grey;
`;

const Modal = ({ children }) =>
  ReactDOM.createPortal(
    <ModalWrapper>{children}</ModalWrapper>,
    document.getElementById('modal-root')
  );

export default Modal;
