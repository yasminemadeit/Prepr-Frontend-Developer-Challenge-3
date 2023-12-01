import './progress.scss'
import Table from './Table'
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer, Label } from 'recharts';

const data = [
  { name: 'Completed', value: 5 },
  { name: 'Left to go', value: 30 },
];



function Progress () {

  
    return (

       <div className="progress">

            <h3>My Progress</h3>
            <p>You joined Preprlabs on Nov 13, 2023, here is your Challenge journey.</p>

        <ResponsiveContainer width="100%" height={300}>
       
       <PieChart width={400} height={400}>
         <Pie
         
           data={data}
           cx="50%"
           cy="50%"
           innerRadius={60}
           outerRadius={80}
           fill="#8884d8"
           dataKey="value"
       >
           <Label value="3/30 Tasks" position="center" fontSize={13} />
        </Pie >
       </PieChart>
     </ResponsiveContainer>

     <div className="progress-chart">
        <Table/>

    </div>



    </div>

      
    );
  
};



export default Progress
