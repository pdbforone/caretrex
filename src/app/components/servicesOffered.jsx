import styles from '../styles/servicesOffered.module.css'
export default function ServicesOffered ()  {
    const services = [
        {
          icon: '/rex.jpg', // Replace with your image path
          title: 'Nurse-Assisted Medical Transport',
          description: 'Non-emergency medical transport within Hays: Monday - Friday. Longer transports and trips are available by appointment.',
        },
        // ... other services
      ];
    
      return (
        <section id="services" className={styles.container}>
        <div className={styles.box}>
          <h2 className={styles.heading}>Our Services – Tailored to Your Needs</h2>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <img src={service.icon} alt={service.title} className={styles.serviceImage} />
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
          <p className={styles.concludingStatement}>
            Our services are designed with your health and safety as our top priority.
          </p>
          </div>
        </section>
      );
    };
    