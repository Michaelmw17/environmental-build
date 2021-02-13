
import { Formik, Field, Form,  ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import React, {Component}  from 'react';
// import DatePicker from "react-datepicker"
// import "react-datepicker/dist/react-datepicker.css";
// import 'react-day-picker/lib/style.css';
import './style.css'
import { Button } from 'semantic-ui-react'
import emailjs from 'emailjs-com';

const ButtonExampleConditionals = () => (
  <Button.Group>
        <Button type='reset'>Cancel</Button>
        <Button.Or />
        <Button type='submit' positive>Save</Button>
  </Button.Group>
)

class FormContact extends Component{

                state = {
                    subject: '',
                    firstName: '',
                    lastName: '',
                    email: '',
                    message: '',
                    startDate: '',
                    endDate: ''
                };
    handleSubmit(e) {
        e.preventDefault();
        const { firstName, lastName, email, subject, message, startDate, endDate } = this.state;
        let templateParams = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        startDate: startDate,
        endDate: endDate,
        to_name: "michaelmw17@outlook.com",
        subject: subject,
        message: message,
        };
        emailjs
        .send(
            "service_i1fajuk",
            "template_lmdja97",
            templateParams,
            "user_jsnJWEQR5CCPz5u6Zz6bJ",
        )
        .then(
            function (response) {
            console.log("SUCCESS!", response.status, response.text);
            },
            function (error) {
            console.log("FAILED...", error);
            }
        );
        this.resetForm();
    }
    resetForm() {
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            message: '',
            startDate: '',
            endDate: ''
        });
    }
    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value });
    };
    render() {
        return (
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    message: '',
                    startDate: '',
                    endDate: ''
                }} 
                validationSchema={Yup.object().shape({
                    firstName: Yup.string()
                        .required('First Name is required'),
                    lastName: Yup.string()
                        .required('Last Name is required'),
                    email: Yup.string()
                        .email('Email is invalid')
                        .required('Email is required'),
                    message: Yup.string()
                        .min(6, 'Message must be at least 6 characters')
                        .required('message is required'),
                    startDate: Yup.string()
                        .required('startDate is required'),
                    endDate: Yup.string()
                        .required('endDate is required')
                })}
                
                render={({ errors, touched, isSubmitting, values, setFieldValue }) => (
                    <Form autoComplete='off'  onSubmit={this.handleSubmit.bind(this)}>
                                                    <Container>
                                                        <Row>
                                                            <Col xs={12} md={12} lg={12}>
                                                                    <div className="form-group">
                                                                    <label htmlFor="email">Email</label>
                                                                    <Field
                                                                        id="email"
                                                                        name="email"
                                                                        type="text"
                                                                        className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')}
                                                                    />
                                                                    <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                                                </div>
                                                            </Col>
                                                            <Col xs={12} md={6} lg={6}>
                                                                <div className="form-group">
                                                                    <label htmlFor="firstName">First Name</label>
                                                                    <Field
                                                                        id="firstName"
                                                                        name="firstName"
                                                                        type="text"
                                                                        className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                                                                    <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                                                                </div>
                                                                </Col>
                                                            <Col xs={12} md={6} lg={6}>
                                                                <div className="form-group">
                                                                    <label htmlFor="lastName">Last Name</label>
                                                                    <Field
                                                                        id="lastName"
                                                                        name="lastName"
                                                                        type="text"
                                                                        className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                                                                    <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                                                                </div>
                                                            </Col>
                                                                
                                                            </Row>
                                                                <Row>
                                                                <Col xs={12} md={6} lg={6}>
                                                                    <div className="form-group">
                                                                        <label htmlFor="message">Message</label>
                                                                        <Field
                                                                            id="message"
                                                                            name="message"
                                                                            type="message"
                                                                            as="textarea"
                                                                            className={'form-control' + (errors.message && touched.message ? ' is-invalid' : '')} />
                                                                        <ErrorMessage name="message" component="div" className="invalid-feedback" />
                                                                        </div>
                                                                    </Col>
                                                                <Col>
                                                                <div className="FirstDayPicker form-group">
                                                                    <Col xs={12} md={12} lg={12}>
                                                                        <div className="FirstDayPicker form-group">
                                                                            <label htmlFor="message">Start Date</label>
                                                                                        {/* <DatePicker 
                                                                                        selected={values.startDate}
                                                                                        dateFormat="MMMM d, yyyy"
                                                                                        className={'form-control' + (errors.startDate && touched.startDate ? ' is-invalid' : '')}
                                                                                        name="startDate"
                                                                                        id="startDate"                                                  
                                                                                        onChange={date => setFieldValue('startDate', date)}
                                                                                        autocomplete="off"
                                                                                    /> */}
                                                                                <ErrorMessage name="startDate" component="div" className="invalid-feedback" />
                                                                        </div>
                                                                    </Col>
                                                                    <Col xs={12} md={12} lg={12}>
                                                                        <div className="SecondDayPicker form-group">
                                                                            <label htmlFor="message">End Date</label>
                                                                                        {/* <DatePicker 
                                                                                        selected={values.endDate}
                                                                                        dateFormat="MMMM d, yyyy"
                                                                                        className={'form-control' + (errors.endDate && touched.endDate ? ' is-invalid' : '')}
                                                                                        name="endDate"
                                                                                        id="endDate"
                                                                                        onChange={date => setFieldValue('endDate', date)}
                                                                                        autocomplete="off" /> */}
                                                                                <ErrorMessage name="endDate" component="div" className="invalid-feedback" />
                                                                        </div>
                                                                    </Col>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Container>
                                                <Container>
                                            <Container>
                                        <Container>
                                <Row>
                            </Row>
                        </Container>
                    </Container>
                            <div className="form-group">
                                <ButtonExampleConditionals/>
                                </div>
                    </Container>
                </Form>
                )}
            />
        )
    }
    }

export default FormContact;