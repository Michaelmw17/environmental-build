import React from 'react';
// import Form from 'react-bootstrap/Form'
import emailjs from 'emailjs-com';
import './style.css'


export default function ContactForm() {
     function sendEmail(e) {
    e.preventDefault();

        emailjs.sendForm(    "service_i1fajuk",
                "template_lmdja97",e.target,  "user_jsnJWEQR5CCPz5u6Zz6bJ")
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div>
            <div className="form-group"onSubmit={sendEmail}>
                    {/* <ButtonExampleConditionals/> */}
                    <div className="container">
                    <form>
                    <div className="row">
                        <div className="col-25">
                        <label htmlFor="fname">Full Name</label>
                        </div>
                        <div className="col-75">
                        <input type="text" id="fname" name="firstName" placeholder="Your Full name.." />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                        <label htmlFor="lname">Email</label>
                        </div>
                        <div className="col-75">
                        <input type="text" name="email"  placeholder="Your  email.." />
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-25">
                        <label htmlFor="fname">Subject </label>
                        </div>
                        <div className="col-75">
                        <input type="text"  name="subject"placeholder="Your Subject.." />
                        </div>
                    </div>
                        <div className="row">
                        <div className="col-25">
                        <label htmlFor="startDate">Start Date </label>
                        </div>
                        <div className="col-75">
                        <input type="date" name="startDate" />
                        </div>
                        <div className="col-25">
                        <label htmlFor="endDate">End Date </label>
                        </div>
                        <div className="col-75">
                        <input type="date" name="endDate" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                        <label htmlFor="subject">Message</label>
                        </div>
                        <div className="col-75">
                        <textarea id="subject" name="message" placeholder="Write something.." style={{height: '200px'}} defaultValue={""} />
                        </div>
                    </div>
                    <div className="row">
                        <input type="submit" value="Send" lg />
                    </div>
                    </form>
                </div>
            </div>
            
            
            {/* <Form>
    <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        We'll never share your email with anyone else.
        </Form.Text>
                </Form.Group>
            </Form> */}
  </div>

    );


}
