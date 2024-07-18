import React,{useState} from 'react';
import './dashboard.css';
import Modal from './Modal';
import { Bar,Doughnut } from 'react-chartjs-2';

import 'chart.js/auto';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);



    const Dashboard = () => {
    
        const barData = {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
          datasets: [
            {
              label: 'Guest',
              data: [400, 300, 200, 300],
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
            },
            {
              label: 'User',
              data: [500, 400, 300, 200],
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        };
   
        const doughnutData = {
         
          labels: ['Basic Tees', 'Custom Short Pants', 'Super Hoodies'],
          datasets: [
            {
              data: [55, 31, 14],
              backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
              hoverBackgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
            },
          ],
        };
      
  const options = {
    plugins: {
      legend: {
        display: false, 
      },
    },
    maintainAspectRatio:false,
  };
  const chartStyle = {
    width: '300px', 
    height: '18vh',
  };
  const labelstyle={
    fontSize:'12px',
    marginLeft:'1px',
  };
  const valueStyle={
    fontSize:'10px',
    color:'#666'
  };
  
  const [profiles, setProfiles] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleAddProfile = (newProfile) => {
    setProfiles([...profiles, newProfile]);
    closeModal();
  };


  const openModal = () => 
    {console.log("open");
      setShowModal(true);
    }
  const closeModal = () => {
 
    setShowModal(false);

  };
  return (
    <div>
     <div className="dashboard-container">
      <div className='sidebar col-12 col-md-3 col-lg-2 p-0'>
        <div className='sidebar-header'>
           <div className='logo'>
           <h1>Board.</h1>
            </div> 
            <div className='content'>
            <a href="/" className="sidebar-link">
              <i className="fas fa-tachometer"></i>Dashboard
            </a>
            <a href="/" className="sidebar-link">
              <i className="fas fa-exchange"></i> Transactions
            </a>
            <a href="/" className="sidebar-link">
              <i className="fas fa-calendar"></i> Schedules
            </a>
            <a href="/" className="sidebar-link">
              <i className="fas fa-users"></i> Users
            </a>
            <a href="/" className="sidebar-link">
              <i className="fas fa-cog"></i> Settings
            </a>

            </div>
        </div>
        <div className='sidebar-footer'>
          <li>Help</li>
          <li>Contact</li>
        </div>
    
      </div>
        <div className='Main-content col-12 col-md-9 col-lg-10'>
            <div className='header mb-4'>
                <h1>Dashboard</h1>
                <div className='user-actions d-flex flex-column flex-md-row gap-2'>
                    <input type="text" className='form-control' placeholder="search..."/>
                    <i className='fas fa-bell'></i>
                    <i className='fas fa-user-circle'></i>
                </div>
      </div>
      <div className='cards row'>
        <div className='card col-12 col-md-3 col-lg-2.1'>
        <i className="fas fa-money-bill icon"></i>
            <h3>Total Revenues</h3>
            <p> $2,129,430<span className='green-text'>+2.5%</span></p>
            </div>
            <div className="card col-12 col-md-3 col-lg-2.1">
            <i className="fas fa-bookmark"></i>
            <h3>Total Transactions</h3>
       
            <p>1,520 <span className="green-text">+1.7%</span></p>
          </div>
          <div className="card col-12 col-md-3 col-lg-2.1">
          <i className="fas fa-thumbs-up"></i>
            <h3>Total Likes</h3>
            <p>9,721 <span className="green-text">+1.4%</span></p>
          </div>
          <div className="card col-12 col-md-3 col-lg-2">
          <i className="fas fa-users user-icon"></i>
            <h3>Total Users</h3>
            <p>9,721 <span className="green-text">+4.2%</span></p>
          </div>
        </div>
        <div className="charts row">
          <div className="chart col-12">
            <h3>Activities</h3>
            <Bar data={barData} />
            </div>    
          </div>
          
          <div className="addcard" style={{ display: 'flex', flexDirection:'row'}}>
          <div className="pie-chart">
            
            <div style={{ display: 'flex', flexDirection:'column',marginTop:'18px'}}>
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
            <h2 style={{ fontSize: '16px'}}>Top products</h2>
            <span style={{padding:'2px' ,fontSize: '12px', color: '#888' }}>May - June 2021</span>
            </div>
            <div style={{ display: 'flex'}}>
      <div style={chartStyle}>
        <Doughnut data={doughnutData} options={options} />
      </div>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
          {doughnutData.labels.map((label, index) => (
            <li key={index} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '5px' }}>
              <div style={{ display: 'flex'}}>
              <span
                style={{
                
                  width: '8px',
                  height: '8px',
                  backgroundColor: doughnutData.datasets[0].backgroundColor[index],
               
                }}
              ></span>
            <span style={labelstyle}>{label}</span>
            </div>
             <span style={valueStyle}>{doughnutData.datasets[0].data[index]}%</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
      </div>
      
               
      <div className='container'>
        <div className='profile-box'>
        {profiles.length === 0 ? (
        <div className='addp'>
      <div className="icon-container" onClick={openModal}>
        <span className="plus-icon">+</span>
      </div>
      <button className="add-profile-text"  onClick={openModal}>Add Profile</button>
      
    </div>
        ):(
      <div className="added-profiles">
          {profiles.map((profile, index) => (
            <div key={index} className="added-profile">
               <div className="contact-card">
                <div className='name'>
        {profile.name}
       </div>
        <div className='email-phone'>
          <div className='email'>

         <i className="fas fa-envelope" ></i> {profile.email}
         </div>
         <div className='phone'>

        <i className="fas fa-phone green-phone-icon"></i> {profile.phone}
        </div>
        </div>
        <div className="social-links">
          <div className='instagram'>
         <i className="fab fa-instagram instagram-icon"></i> {profile.instaLink || 'N/A'}
         </div>
         <div className='youtube'>

         <i className="fab fa-youtube"></i> {profile.youtubeLink || 'N/A'}
         </div>
         </div>
      </div>
    
      </div>
           
            ))}
    </div>
        )
      }
    </div>
    </div>
    </div>
    {showModal && <Modal closeModal={closeModal} handleAddProfile={handleAddProfile} />}
 </div>
 </div>
 

  </div>
  );
};


export default Dashboard;
