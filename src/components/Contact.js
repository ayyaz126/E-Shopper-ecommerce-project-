import React from 'react'

function Contact() {
  return (
    <div>
            {/* Page Header Start */}
        <div className="container-fluid bg-secondary mb-5">
          <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: '300px'}}>
            <h1 className="font-weight-semi-bold text-uppercase mb-3">Contact Us</h1>
            <div className="d-inline-flex">
              <p className="m-0"><a href>Home</a></p>
              <p className="m-0 px-2">-</p>
              <p className="m-0">Contact</p>
            </div>
          </div>
        </div>
        {/* Page Header End */}
        {/* Contact Start */}
        <div className="container-fluid pt-5">
          <div className="text-center mb-4">
            <h2 className="section-title px-5"><span className="px-2">Contact For Any Queries</span></h2>
          </div>
          <div className="row px-xl-5">
            <div className="col-lg-7 mb-5">
              <div className="contact-form">
                <div id="success" />
                <form name="sentMessage" id="contactForm" noValidate="novalidate">
                  <div className="control-group">
                    <input type="text" className="form-control" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                    <p className="help-block text-danger" />
                  </div>
                  <div className="control-group">
                    <input type="email" className="form-control" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                    <p className="help-block text-danger" />
                  </div>
                  <div className="control-group">
                    <input type="text" className="form-control" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                    <p className="help-block text-danger" />
                  </div>
                  <div className="control-group">
                    <textarea className="form-control" rows={6} id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message" defaultValue={""} />
                    <p className="help-block text-danger" />
                  </div>
                  <div>
                    <button className="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Send
                      Message</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5 mb-5">
              <h5 className="font-weight-semi-bold mb-3">Get In Touch</h5>
              <p>Justo sed diam ut sed amet duo amet lorem amet stet sea ipsum, sed duo amet et. Est elitr dolor elitr erat sit sit. Dolor diam et erat clita ipsum justo sed.</p>
              <div className="d-flex flex-column mb-3">
                <h5 className="font-weight-semi-bold mb-3">Store 1</h5>
                <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3" />123 Street, New York, USA</p>
                <p className="mb-2"><i className="fa fa-envelope text-primary mr-3" />info@example.com</p>
                <p className="mb-2"><i className="fa fa-phone-alt text-primary mr-3" />+012 345 67890</p>
              </div>
              <div className="d-flex flex-column">
                <h5 className="font-weight-semi-bold mb-3">Store 2</h5>
                <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3" />123 Street, New York, USA</p>
                <p className="mb-2"><i className="fa fa-envelope text-primary mr-3" />info@example.com</p>
                <p className="mb-0"><i className="fa fa-phone-alt text-primary mr-3" />+012 345 67890</p>
              </div>
            </div>
          </div>
        </div>
        {/* Contact End */}
              {/* Back to Top */}
      <a href="#" className="btn btn-primary back-to-top"><i className="fa fa-angle-double-up" /></a>
    </div>
  )
}

export default Contact