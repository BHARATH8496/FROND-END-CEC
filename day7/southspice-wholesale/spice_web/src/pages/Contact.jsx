const Contact = () => (
 <section className="contact-section">
   <h2>Contact Us</h2>


   <div className="contact-container">
     {/* Left: Form */}
     <form className="contact-form">
       <input type="text" placeholder="Your Name" />
       <input type="email" placeholder="Your Email" />
       <textarea placeholder="Message" rows="4"></textarea>
       <button type="submit">Send Message</button>
     </form>


     {/* Right: Map */}
     <div className="contact-map">
       <iframe
         title="All india chicken Location"
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15552.135672289673!2d77.41281875!3d12.96968145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3a2d64ee41d5%3A0x89fcacb7c99ad4de!2sHonnaganahatti%20Cricket%20ground%20Bangalore%20South%20Ground!5e0!3m2!1sen!2sin!4v1760712227403!5m2!1sen!2sin" 
          width="100%"
         height="200%"
         style={{ border: 0 }}
         allowFullScreen=""
         loading="lazy"
        
       ></iframe>
     </div>
   </div>


   <p className="contact-info">📍 Address: No. 45,magadi main Road, honnaganahatti,bengaluru</p>
   <p className="contact-info">📞 Phone: +91 12345 67890</p>
 </section>
);


export default Contact;