
import React from 'react';
import Container from 'react-bootstrap/Container'
import HeaderLocation from './LocationHeader'



const  LocationDescription = ()  => {
    
        return (
            <div className="LocationDescriptionDiv">
                <Container>
                    <HeaderLocation/>
                    <hr className="hrAbout" style={{ borderTop: '1px solid rgba(63, 81, 181, 0.5)' }} />
                </Container>
            </div>
        );
    
}

export default LocationDescription;