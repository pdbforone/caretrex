import styles from '../styles/servicesOffered.module.css'
export default function ServicesOffered ()  {
    const services = [
        {
          icon: '/rex.jpg', // Replace with your image path
          title: 'Nurse-Assisted Medical Transport',
          description: 'Specialized transport for hospital visits, therapy sessions, and medical appointments, equipped with necessary medical equipment for continuous care.',
        },
        // ... other services
      ];
    
      return (
        <section id="services" className={styles.container}>
          <h2 className={styles.heading}>Our Services – Tailored to Your Needs</h2>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <img src={service.icon} alt={service.title} className={styles.serviceImage} />
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
          <p className={styles.concludingStatement}>
            All our services are designed with your health and safety as our top priority...
          </p>
        </section>
      );
    };
    