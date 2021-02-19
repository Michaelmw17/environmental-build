import React from 'react'

import Spinner from 'react-bootstrap/Spinner';
class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
hideSpinner = () => {
    this.setState({
      loading: false
    });
  };
render() {
    return (
      <div className="container rsvp-wrapper">
        {this.state.loading ? (
          <Spinner
            className="loading text-center"
            name="three-bounce"
            color="white"
            fadeIn="none"
          />
        ) : null}
        <iframe
                            id="JotFormIFrame-210464245644857"
                            title="my Contact"
                            onload="window.parent.scrollTo(0,0)"
                            allowtransparency="true"
                            allowfullscreen="true"
                            allow="geolocation; microphone; camera"
                            src="https://form.jotform.com/210464245644857"
                            frameborder="0"
                            style={{paddingTop:'40px',minWidth: '100%',height:'300vh',
                            border:'none'}}
                            scrolling="no"
                            >
                    </iframe>
      </div>
    );
  }
}

// const ContactForm = () => {
//     return (
//         <div className="container">
//             <div className="git-cont row">
//                         <div className="col-12 col-sm-12 half">
//                             <iframe
//                             id="JotFormIFrame-210483002658046"
//                             title="my Contact"
//                             onload="window.parent.scrollTo(0,0)"
//                             allowtransparency="true"
//                             allowfullscreen="true"
//                             allow="geolocation; microphone; camera"
//                             src="https://form.jotform.com/210464245644857"
//                             frameborder="0"
//                             style={{paddingTop:'40px',minWidth: '100%',height:'200vh',
//                             border:'none'}}
//                             scrolling="no"
//                             >
//                     </iframe>
//                     </div>
//                     </div>
//                     </div>
//     )
// }

export default ContactForm;



// import React from 'react';
// import emailjs from 'emailjs-com';
// import './style.css'


// export default function ContactForm() {
//     function sendEmail(e) {
//     e.preventDefault();

//         emailjs.sendForm(
//                 "service_i1fajuk",
//                 "template_lmdja97",
//                 e.target,
//                 "user_jsnJWEQR5CCPz5u6Zz6bJ"
//         )
//         .then((result) => {
//             console.log(result.text);
//         }, (error) => {
//             console.log(error.text);
//         });
//     }

//     return (
//         <div>
//             <div className="form-group"onSubmit={sendEmail}>
//                     {/* <ButtonExampleConditionals/> */}
//                     <div className="container">
//                     <form>
//                     <div className="row">
//                         <div className="col-25">
//                         <label htmlFor="fname">Full Name</label>
//                         </div>
//                         <div className="col-75">
//                         <input type="text" id="fname" name="firstName" minLength="1"  required="required" placeholder="Your Full name.." />
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-25">
//                         <label htmlFor="Email">Email</label>
//                         </div>
//                         <div className="col-75">
//                                 <input type="email" name="email" required="required" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="JohnSmith@email.com" />
//                         </div>
//                         </div>
//                         <div className="row">
//                         <div className="col-25">
//                         <label htmlFor="Subject">Subject </label>
//                         </div>
//                         <div className="col-75">
//                         <input type="text"  name="subject" placeholder="Your Subject.." required="required" />
//                         </div>
//                     </div>
//                         <div className="row">
//                         <div className="col-25">
//                         <label htmlFor="startDate">Start Date </label>
//                         </div>
//                         <div className="col-75">
//                         <input type="date"  min="2021-01-01"  max="2022-01-01"   name="startDate" pattern="(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))"  required="required"/>
//                         </div>
//                         <div className="col-25">
//                         <label htmlFor="endDate">End Date </label>
//                         </div>
//                         <div className="col-75">
//                         <input type="date" min="2021-01-01"  max="2022-01-01"    name="endDate"   pattern="(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))"  required="required"/>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-25">
//                         <label htmlFor="subject">Message</label>
//                         </div>
//                         <div className="col-75">
//                         <textarea id="subject" name="message" minLength="5" required="required" placeholder="Write something.." style={{height: '200px', maxHeight: '300px'}} defaultValue={""} />
//                         </div>
//                     </div>
//                     <div className="row-btn">
//                         <input type="submit" value="Send" id='btn'/>
//                     </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }
