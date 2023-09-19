import logo from './logo.svg';
import './App.css';
import StudentInfoComponent from "./components/StudentInfoComponent";

function App(){
  const students = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      age: 30,
      address: "Hà Nội"
    },
    {
      id: 2,
      name: "Ngô Đình Quân",
      age: 25,
      address: "Đà Nẵng"
    },
    {
      id: 3,
      name: "Võ Nhân Trí",
      age: 29,
      address: "Hội An"
    },
    {
      id: 4,
      name: "Nguyễn Hồng Nguyên",
      age: 27,
      address: "Quảng Bình"
    }
  ]
  return (
        <StudentInfoComponent student={students}/>

  )
}

export default App;
