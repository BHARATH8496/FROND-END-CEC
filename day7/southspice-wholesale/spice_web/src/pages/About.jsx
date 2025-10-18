const About = () => (
 <section className="about-section">
   <h2>About All india chicken's</h2>
   <p>
     Founded in 2020, All india chicken's is a wholesale company dedicated to
     connecting chicken's farmers with All Indian markets. Our marketing, sales,
     and delivery teams ensure every product reaches customers helthy and fast.
   </p>


   <div className="team-grid">
     {["Marketing Team", "Sales Team", "Delivery Team"].map((team) => (
       <div key={team} className="team-card">
         <h3>{team}</h3>
         <p>
           Dedicated professionals ensuring smooth operations across All India.
         </p>
       </div>
     ))}
   </div>
 </section>
);


export default About;