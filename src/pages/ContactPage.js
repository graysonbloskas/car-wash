// import React, { useState } from 'react';
// import '../App.css';

// function ContactPage() {
//   const [status, setStatus] = useState('Submit');
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus('Sending...');

//     const { name, email, message } = e.target.elements;
//     let details = {
//       name: name.value,
//       email: email.value,
//       message: message.value,
//     };

//     let response = await fetch('http://localhost:3000/contact', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json;charset=utf-8',
//       },
//       body: JSON.stringify(details),
//     });

//     setStatus("Submit");
//     let result = await response.json();
//     alert(result.status)
//   };

//   return (
//       <form onSubmit={handleSubmit} className="form">
//           <div>
//               <label htmlFor="name" required>Name</label>
//               <input type="text" id="name" required />
//           </div>
//           <div>
//               <label htmlFor="email" required>Email</label>
//               <input type="email" id="email" required />
//           </div>
//           <div>
//               <label htmlFor="message" required>Desired Cleaning Package and Location of Car Wash</label>
//               <textarea id="message" type="message" required />
//           </div>
//           <button type="submit">{status}</button>
//       </form>
//   )
// }

// export default ContactPage;


import React from 'react'

function ContactPage() {
    return (
        <div>
            <h1>
                <span>Contact Us</span> 
            </h1>
        </div>
    )
}

export default ContactPage
