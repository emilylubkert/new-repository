import Modal from 'react-modal';
Modal.setAppElement('#root');

function BudgetModal({
  type,
  setShowModal,
  showModal,
  prompt,
  newAmount,
  handleChange,
  handleSubmit,
}) {
  function closeModal() {
    setShowModal(false);
  }
  return (
    <div>
      <Modal isOpen={showModal} onRequestClose={closeModal} className='modal'>
        <div className={`${type}-modal`}>
          <h3 className='modal-title'>Enter Amount</h3>
          <form onSubmit={handleSubmit}>
            <label hidden>Enter amount</label>
            <input value={newAmount} type='number' onChange={handleChange} />
            <p>{prompt}</p>
            <button onClick={closeModal}>No</button>
            <input className='submit' type='submit' value='Yes' />
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default BudgetModal;
