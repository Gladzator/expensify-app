import React from 'react';
import Modal from 'react-modal';

class RemoveModal extends React.Component {
  constructor(props) {
    super(props);
  }
  render (){
    return(
      <Modal
        isOpen={!!this.props.selectedOption}
        onRequestClose={this.closeModal}
        contentLabel="Are You Sure?"
        className="modal"
      >
        <h3 className="modal__title">Are you sure?</h3>
        <div className="modal__body">
          <button className="modalButton" onClick={this.props.removeExpense}>I'm Sure</button>
          <button className="modalButton" onClick={this.props.closeModal}>Go Back</button>
        </div>
    </Modal>
    )
  }
};
export default RemoveModal;
