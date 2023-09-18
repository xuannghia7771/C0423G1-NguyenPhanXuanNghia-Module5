import logo from './logo.svg';
import './App.css';


function App() {
  const students = [
    {
      company: 'Alfreds Futterkiste',
      contact: 'Maria Anders',
      country: 'Germany'
    },
    {
      company: 'Centro comercial Moctezuma',
      contact: 'Francisco Chang',
      country: 'Mexico'
    },
    {
      company: 'Ernst Handel',
      contact: 'Roland Mendel',
      country: 'Austria'
    },
    {
      company: 'Island Trading',
      contact: 'Helen Bennett',
      country: 'UK'
    },
    {
      company: 'Laughing Bacchus Winecellars',
      contact: 'Yoshi Tannamuri',
      country: 'Canada'
    },
    {
      company: 'Magazzini Alimentari Riuniti',
      contact: 'Giovanni Rovelli',
      country: 'Italy'
    }
  ]
  return (
      <>
        <h1>Students</h1>
        <table>
          <tr>
            <th>company</th>
            <th>contact</th>
            <th>country</th>
          </tr>
          {students.map(student => (
              <tr>
                <td>{student.company}</td>
                <td>{student.contact}</td>
                <td>{student.country}</td>
              </tr>
          ))}
        </table>
      </>
  );
}

export default App;
