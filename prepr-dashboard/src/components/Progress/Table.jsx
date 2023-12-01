import './Table.scss'; 

const data = [
  [<img src="https://preprlabs.org/assets/images/dashboard/challenge-leaf-1.svg" alt="" />, 'Projects Submitted', '3'],
  [<img src="https://preprlabs.org/assets/images/dashboard/challenge-leaf-2.svg" alt="" />, 'Projects Created', '3'],
  [<img src="https://preprlabs.org/assets/images/dashboard/challenge-leaf-3.svg" alt="" />, 'Invited', '0'],
  [<img src="https://preprlabs.org/assets/images/dashboard/challenge-leaf-4.svg" alt="" />, 'Followed', '0'],
];

const Table = () => {
    return (
      <table className="grid-table">
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table;