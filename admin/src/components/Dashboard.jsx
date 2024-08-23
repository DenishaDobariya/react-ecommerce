import React from 'react';
import UpperHeader from './UpperHeader';

const data = [
  { title: 'Total Order', value: '3458' },
  { title: 'New Leads', value: '2356' },
  { title: 'Deals', value: '441' },
  { title: 'Revenue', value: '$95.3k' }
];

function Dashboard() {
  return (
    <>
      <div className="dashboard vh-100">
        <div className="div">
          <UpperHeader />
        </div>
        <div className="container">
          <div className="row px-4 pt-4">
            {data.map((item, index) => (
              <div className="col-sm-6 mb-4" key={index}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
