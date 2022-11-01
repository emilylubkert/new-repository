import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

function BudgetChart({ spending, total, budgetName, imgSrc }) {
  function formatNums(num) {
    return num.toLocaleString('en-US');
  }

  const data = [
    { name: 'spending to date', value: spending },
    { name: 'remaining', value: total - spending },
  ];

  function addToBudget(amount) {
    spending += amount;
    console.log(spending)
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
    <div className='budget-container'>
      <div className='charts-container'>
        <h2 className='chart-heading'>{budgetName} Budget</h2>
        {/* <ResponsiveContainer width='100%' height='100%'> */}
        <PieChart width={200} height={200}>
          <Pie
            dataKey='value'
            isAnimationActive={false}
            data={data}
            cx='50%'
            cy='50%'
            outerRadius={80}
            fill='#EAF6ED'
            label
          >
            <Cell fill='#67C587' />
          </Pie>
          <Tooltip content={<CustomTooltip />} />{' '}
        </PieChart>
        {/* </ResponsiveContainer> */}
        <p className='fraction'>
          ${formatNums(spending)} / ${formatNums(total)}
        </p>
        <button className='edit-btn'>Edit Goal</button>
        <button className='add-btn' onClick={() => addToBudget(100)}>Add Money</button>
      </div>
      <img src={imgSrc} />
    </div>
  );
}

export default BudgetChart;
