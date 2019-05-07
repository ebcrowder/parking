import * as React from 'react';
import Entry from '../components/Entry';
import ToggleModal from '../components/ToggleModal';
import Modal from '../components/Modal';

const Index = () => (
  <div>
    <ToggleModal
      toggle={show => <button onClick={show}>Open</button>}
      content={hide => (
        <Modal>
          hi
          <button onClick={hide}>Close</button>
        </Modal>
      )}
    />
    <Entry />
  </div>
);

export default Index;
