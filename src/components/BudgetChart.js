import { useState } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from 'recharts';
import BudgetModal from './BudgetModal';



function BudgetChart({ progress, total, budgetName, imgSrc }) {
  const [currentProgress, setCurrentProgress] = useState(progress);
  const [currentTotal, setCurrentTotal] = useState(total);
  const [newAmount, setNewAmount] = useState('');
  const [newTotal, setNewTotal] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const addPrompt = `Are you sure you want to add this amount to ${budgetName}?`;
  const editPrompt = `Are you sure you want to change your ${budgetName} budget goal?`;

  const data = [
    { name: 'progress to date', value: currentProgress },
    { name: 'remaining', value: currentTotal - currentProgress },
  ];

  function formatNums(num) {
    return num.toLocaleString('en-US');
  }

  function handleAddChange(event) {
    event.preventDefault();
    setNewAmount(Number(event.target.value));
  }

  function handleEditChange(event) {
    event.preventDefault();
    setNewTotal(Number(event.target.value));
  }

  function addToBudget() {
    if (currentProgress + newAmount > currentTotal) {
      alert(
        `You have reached your budget goal! You have $${
          currentProgress + newAmount - currentTotal
        } surplus!`
      );
      setCurrentProgress(currentTotal);
    } else setCurrentProgress(currentProgress + newAmount);
  }

  function editBudget() {
    setCurrentTotal(newTotal);
  }

  function handleAddSubmit(event) {
    event.preventDefault();
    addToBudget();
    setNewAmount('');
    setShowAddModal(false);
  }

  function handleEditSubmit(event) {
    event.preventDefault();
    editBudget();
    setNewTotal('');
    setShowEditModal(false);
  }

  function openAddModal() {
    setShowAddModal(true);
  }

  function openEditModal() {
    setShowEditModal(true);
  }
  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div
          className='custom-tooltip'
          style={{
            backgroundColor: '#ffff',
            padding: '5px',
            border: '1px solid #cccc',
          }}
        >
          <label>{`${payload[0].name} : ${payload[0].value}`}</label>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <div className='budget-container'>
        <div className='charts-container'>
          <h2 className='chart-heading'>{budgetName} Budget</h2>
          <PieChart width={200} height={200}>
            <Pie
              dataKey='value'
              isAnimationActive={false}
              data={data}
              cx='50%'
              cy='50%'
              outerRadius={80}
              fill='#EAF6ED'
            >
              <Cell fill='#67C587' />
            </Pie>
            <Tooltip content={<CustomTooltip />} />{' '}
          </PieChart>
          <p className='fraction'>
            ${formatNums(currentProgress)} / ${formatNums(currentTotal)}
          </p>
          <button className='edit-btn' onClick={openEditModal}>
            Edit Goal
          </button>
          <button className='add-btn' onClick={openAddModal}>
            Add Money
          </button>
        </div>
        <img className="budget-img" src={imgSrc} />
      </div>
      <BudgetModal
        type='edit'
        setShowModal={setShowEditModal}
        showModal={showEditModal}
        prompt={editPrompt}
        newAmount={newTotal}
        handleChange={handleEditChange}
        handleSubmit={handleEditSubmit}
      />
      <BudgetModal
        type='add'
        setShowModal={setShowAddModal}
        showModal={showAddModal}
        prompt={addPrompt}
        newAmount={newAmount}
        handleChange={handleAddChange}
        handleSubmit={handleAddSubmit}
      />
    </>
  );
}

export default BudgetChart;
