const services = [
  { title: "Wholesale Supply", desc: "We provide bulk orders for retailers, restaurants, and distributors." },
  { title: "Pan-South Delivery", desc: "Efficient logistics team ensuring timely deliveries." },
  { title: "Marketing & Branding", desc: "Support for promoting local and regional spice brands." },
];

const Services = () => (
  <section className="services-section">
    <h2>Our Services</h2>
    <div className="services-grid">
      {services.map((s) => (
        <div key={s.title} className="service-card">
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
        </div>
      ))}
    </div>

    <div className="services-video">
      <h3 className="videoservices">Watch Our Process</h3>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Q3pizujS-ng?si=pBYgUXHW7dZGWlZ8"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen

      ></iframe>
    </div>
    
  </section>
);

export default Services;
