import React from 'react';
import './Table.css'
// var i =0;
// let prop = [];


const AllCountryData = ({props}) => {
    console.log("Props : " ,props)

    return (
       <table>
           <thead>
               <tr>
                    <th>Country</th>
               </tr>
           </thead>
           <tbody>
               {/* {props.length > 0 ? null: <h1>Loading....</h1>} */}
           </tbody>
       </table>
    );
}

export default AllCountryData;