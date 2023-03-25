import './App.css'
import Jumbotron from './components/Jumbotron'
import Navbar from './components/Navbar'
import background from './assets/hero-bg.jpg'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import { useState } from 'react'

function App() {
  // const [tableData, setTableData] = useState([])
  const [formInputData, setformInputData] = useState(
    {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    }
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const checkEmptyInput = !Object.values(formInputData).every(res => res === "")
    if (checkEmptyInput) {
      // const newData = (data) => ([...data, formInputData])
      // setTableData(newData);
      alert("First Name : " + formInputData.firstName +
        ", Last Name : " + formInputData.lastName +
        ", Email : " + formInputData.email +
        ", Message : " + formInputData.message
      )
      const emptyInput = {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      }
      setformInputData(emptyInput)
    }
  }

  const handleChange = (event) => {
    const newInput = (data) => ({ ...data, [event.target.name]: event.target.value })
    setformInputData(newInput)
    console.log(`${event.target.name}  :  ${event.target.value}`);
    console.log(formInputData)
  }

  return (
    <div >
      <section className="welcome" style={{ backgroundImage: `url(${background})` }}>
        <div className="container welcome-con">

          <Navbar />
          <Jumbotron />

        </div>
      </section>
      <ContactUs handleChange={handleChange} formInputData={formInputData} handleSubmit={handleSubmit} />
      <AboutUs />
      <Footer />

    </div>
  )
}

export default App
