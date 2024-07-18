import React,{useState} from 'react';
import './modal.css';

const Modal = ({ closeModal, handleAddProfile }) => {
    const [activeTab, setActiveTab] = useState('Basic');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [instaLink, setInstaLink] = useState('');
    const [youtubeLink, setYoutubeLink] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newProfile = { name, email, phone, instaLink, youtubeLink };
      handleAddProfile(newProfile);
    };
    
  return (
    <div className="modal">
    <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <form onSubmit={handleSubmit}>
        <h2>Add New Profile</h2>
        <div className="tab">
            <button className={`tablinks ${activeTab === 'Basic' ? 'active' : ''}`} onClick={() => setActiveTab('Basic')}>Basic</button>
            <button className={`tablinks ${activeTab === 'Contact' ? 'active' : ''}`} onClick={() => setActiveTab('Contact')}>Social</button>
        </div>
        <div id="Basic" className={`tabcontent ${activeTab === 'Basic' ? 'active' : ''}`}>
            <label htmlFor="name">Enter Name*</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Eg. John Doe"required />
            <i className="bi bi-list mobile-icon"></i>

            <label htmlFor="email">Enter Email*</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="Eg. John@xyz.com" required />

            <label htmlFor="phone">Enter Phone*</label>
            <input type="tel" id="phone" name="phone" placeholder="Eg. 9123456789"value={phone} onChange={(e) => setPhone(e.target.value)}required />
            <button className="next" onClick={() => setActiveTab('Contact')}>Next</button>
         
        </div>
        <div id="Contact" className={`tabcontent ${activeTab === 'Contact' ? 'active' : ''}`}>
        <label htmlFor="instalink">Instagram Link(optional)</label>
            <input type="link" id="insta" name="insta"value={instaLink} onChange={(e) => setInstaLink(e.target.value)} />

            <label htmlFor="Youtube">Youtube Link(optional)</label>
            <input type="yt" id="yt" name="Youtube-link"value={youtubeLink} onChange={(e) => setYoutubeLink(e.target.value)} />  
            <div className='alignbtn'>
            <button className="back" onClick={()=>setActiveTab('Basic')}>Back</button>
            <button className="done" type='submit'>Done</button>
            </div>
           
        </div>
        </form>
        
      
    </div>
</div>
  );
};
export default Modal;

