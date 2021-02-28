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
      <div>
      <div className="container rsvp-wrapper">
        {this.state.loading ? (
          <Spinner
            className="loading... text-center"
            name="three-bounce"
            color="white"
          />
        ) : null}
                    <iframe
                            id="JotFormIFrame-210464245644857"
                            title="my Contact"//eslint-disable-next-line
                            allowtransparency="true"
                            allowFullScreen={true}
                            allow="geolocation; microphone; camera"
                            src="https://form.jotform.com/210464245644857"
                            frameBorder="0"
                            style={{
                              paddingTop: '40px', 
                              minWidth: '100%',
                              height: '500vh',
                              border:'none'}}
                            scrolling="no"
                            >
        </iframe>
      </div>
      </div>
    );
  }
}
export default ContactForm;