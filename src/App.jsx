import { useEffect, useState } from "react";
import logo from "./assets/buildlink-logo.png";

const navItems = [
  ["About", "about"],
  ["Services", "services"],
  ["Our Approach", "approach"],
  ["Projects", "projects"],
  ["Our Team", "team"],
  ["Core Values", "values"],
  ["Our Commitment", "commitment"],
  ["Contact", "contact"],
];

const services = [
  {
    number: "01",
    title: "DESIGN SERVICES",
    subtitle: "Turning ideas into practical solutions.",
    text: "We translate our clients' ideas, requirements and aspirations into practical and functional design solutions.",
    items: ["Architectural and building design", "Concept development", "Design development", "Space planning", "3D visualisation and modelling", "Design coordination"],
  },
  {
    number: "02",
    title: "BUILDING CONSTRUCTION",
    subtitle: "Building with quality and precision.",
    text: "We provide construction solutions focused on quality, functionality and lasting value.",
    items: ["Residential construction", "Commercial construction", "General building works", "Renovation and refurbishment", "Building maintenance and associated works"],
  },
  {
    number: "03",
    title: "CIVIL ENGINEERING",
    subtitle: "Engineering the foundation of every project.",
    text: "We provide technical civil engineering solutions that support safe, functional and sustainable development.",
    items: ["Civil works", "Earthworks", "Concrete works", "Drainage works", "Site development", "Infrastructure-related works"],
  },
  {
    number: "04",
    title: "QUANTITY SURVEYING & COST MANAGEMENT",
    subtitle: "Managing cost. Maximising value.",
    text: "Our Quantity Surveying expertise brings commercial discipline to the construction process, helping clients understand and manage the financial aspects of their projects.",
    items: ["Cost estimation", "Bills of Quantities", "Cost planning", "Tender documentation", "Measurement and valuation", "Cost monitoring and control", "Procurement support"],
  },
  {
    number: "05",
    title: "PROJECT MANAGEMENT & COORDINATION",
    subtitle: "Connecting every part of the project.",
    text: "We support the effective coordination of technical, commercial and operational requirements throughout project delivery.",
    items: ["Project coordination", "Contractor coordination", "Progress monitoring", "Cost monitoring", "Quality coordination", "Client and stakeholder communication"],
  },
];

const approach = [
  ["01", "LISTEN", "We understand the client's needs, objectives, expectations and challenges."],
  ["02", "ADVISE", "We use our professional expertise to recommend practical and quality-focused solutions."],
  ["03", "DESIGN", "We translate the client's vision into functional and practical design solutions."],
  ["04", "PLAN", "We establish the technical, commercial and operational requirements of the project."],
  ["05", "BUILD", "We execute the project with attention to quality, efficiency and professional standards."],
  ["06", "DELIVER", "We work toward completing the project responsibly while creating lasting value for the client."],
];

const values = [
  {
    number: "01",
    title: "QUALITY",
    quote: "We strive to be better in everything we do.",
    items: ["Technical Excellence", "Problem Solving", "Continuous Improvement"],
  },
  {
    number: "02",
    title: "CLIENT-CENTRICITY",
    quote: "We listen before we act.",
    items: ["Professional Advisory", "Active Listening", "Responsiveness"],
  },
  {
    number: "03",
    title: "INTEGRITY",
    quote: "We build trust through how we work.",
    items: ["Commercial Awareness", "Relationship Building", "Transparency"],
  },
];

function SectionLabel({ number, children, light = false }) {
  return (
    <div className={`section-label ${light ? "section-label--light" : ""}`}>
      <span>{number} —</span> {children}
    </div>
  );
}

function Arrow() {
  return <span aria-hidden="true">→</span>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach((el) => reveal.observe(el));
    return () => reveal.disconnect();
  }, []);

  const goTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const submitForm = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="site">
      <header className="site-header">
        <button className="brand" onClick={() => goTo("home")} aria-label="Go to Buildlink home">
          <img src={logo} alt="Buildlink" />
        </button>

        <button
          className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        >
          <span></span><span></span>
        </button>
      </header>

      <div className={`menu-panel ${menuOpen ? "is-open" : ""}`} id="main-navigation">
        <div className="menu-panel__inner">
          <div>
            <p className="menu-kicker">BUILDLINK</p>
            <p className="menu-intro">Construction and engineering expertise connected across the project lifecycle.</p>
          </div>
          <nav aria-label="Main navigation">
            {navItems.map(([label, id], index) => (
              <button key={id} onClick={() => goTo(id)}>
                <span>0{index + 1}</span>
                {label}
              </button>
            ))}
          </nav>
          <button className="menu-cta" onClick={() => goTo("contact")}>DISCUSS YOUR PROJECT <Arrow /></button>
        </div>
      </div>

      <main>
        <section className="hero" id="home">
          <div className="hero__image" />
          <div className="hero__overlay" />
          <div className="hero__content">
            <p className="eyebrow">CONSTRUCTION &amp; ENGINEERING</p>
            <h1>
              BUILDING<br />
              BEYOND <em>TODAY</em>
            </h1>
            <div className="gold-line" />
            <p className="hero__lead">Buildlink connects design, engineering, cost and construction expertise, from first idea to final handover.</p>
            <div className="hero__actions">
              <button className="button button--gold" onClick={() => goTo("contact")}>DISCUSS YOUR PROJECT <Arrow /></button>
              <button className="text-button text-button--light" onClick={() => goTo("services")}>EXPLORE OUR SERVICES <Arrow /></button>
            </div>
          </div>
          <div className="hero__bottom">BUILDING BEYOND TODAY</div>
        </section>

        <section className="section section--ivory" id="about">
          <div className="container split reveal">
            <div>
              <SectionLabel number="01">ABOUT BUILDLINK</SectionLabel>
              <h2>CONNECTED<br />EXPERTISE<br />ACROSS THE<br /><span>BUILT ENVIRONMENT</span></h2>
            </div>
            <div className="copy-block">
              <p className="lead-copy">Buildlink Construction Company Limited is a construction and engineering company committed to delivering quality, reliable and value-driven solutions across the built environment.</p>
              <p>We provide design, civil engineering, quantity surveying, construction and project coordination services, enabling us to support clients throughout different stages of their projects from initial concept and planning to construction and completion.</p>
              <p>Our approach is centred on understanding our clients' needs, providing professional advice and developing practical solutions that balance quality, functionality, cost and time.</p>
              <p>We believe that successful construction is built on more than technical expertise. It requires careful planning, clear communication, responsible decision-making and strong relationships throughout the project.</p>
              <p>At Buildlink, we are committed to continuously improving how we work, using our technical expertise and creative problem-solving to deliver solutions that create lasting value.</p>
              <button className="text-button" onClick={() => goTo("values")}>LEARN MORE ABOUT US <Arrow /></button>
            </div>
          </div>
          <div className="vision-strip reveal">
            <div>
              <SectionLabel number="05">VISION</SectionLabel>
              <h3>To become a trusted and reliable construction company, recognised for quality, professional advice and exceptional service.</h3>
            </div>
            <div className="vision-note">Building a company that clients can rely on for construction, knowledge, guidance and professionalism.</div>
          </div>
        </section>

        <section className="section section--light" id="services">
          <div className="container">
            <div className="section-heading reveal">
              <SectionLabel number="02">SERVICES</SectionLabel>
              <h2>FROM CONCEPT<br />TO <span>COMPLETION</span></h2>
              <p>Buildlink brings together design, engineering, commercial and construction expertise to provide clients with coordinated solutions throughout the project lifecycle.</p>
            </div>
            <div className="service-list">
              {services.map((service) => (
                <article className="service reveal" key={service.number}>
                  <div className="service__number">{service.number}</div>
                  <div className="service__main">
                    <h3>{service.title}</h3>
                    <h4>{service.subtitle}</h4>
                    <p>{service.text}</p>
                  </div>
                  <ul>
                    {service.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section approach" id="approach">
          <div className="container">
            <div className="section-heading section-heading--light reveal">
              <SectionLabel number="03" light>OUR APPROACH</SectionLabel>
              <h2>ONE PROJECT.<br />ONE CONNECTED<br /><span>PROCESS.</span></h2>
              <p>Buildlink connects design, cost, engineering and construction expertise across the whole project lifecycle so that nothing is lost between stages.</p>
            </div>
            <div className="process">
              {approach.map(([number, title, text]) => (
                <article className="process__item reveal" key={number}>
                  <div className="process__top"><span>{number}</span><span className="process__arrow">↗</span></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <div className="process-line">LISTEN <i>→</i> ADVISE <i>→</i> DESIGN <i>→</i> PLAN <i>→</i> BUILD <i>→</i> DELIVER</div>
          </div>
        </section>

        <section className="section section--ivory" id="values">
          <div className="container">
            <div className="section-heading reveal">
              <SectionLabel number="04">CORE VALUES</SectionLabel>
              <h2>WHAT WE<br /><span>BUILD WITH</span></h2>
            </div>
            <div className="values-grid">
              {values.map((value) => (
                <article className="value-card reveal" key={value.number}>
                  <span className="value-number">{value.number}</span>
                  <h3>{value.title}</h3>
                  <p className="value-quote">“{value.quote}”</p>
                  <ul>{value.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
            <div className="mission reveal">
              <div>
                <SectionLabel number="06">MISSION</SectionLabel>
                <h3>Delivering quality construction solutions by understanding our clients, providing professional advice and delivering reliable services with transparency, creativity and efficiency.</h3>
              </div>
              <div className="mission-mark">BL<span>•</span></div>
            </div>
          </div>
        </section>

        <section className="section projects" id="projects">
          <div className="projects__image" />
          <div className="projects__overlay" />
          <div className="container projects__content reveal">
            <SectionLabel number="06" light>PROJECTS</SectionLabel>
            <h2>OUR<br /><span>PROJECTS</span></h2>
            <p>Selected projects will be showcased here.</p>
            <div className="placeholder-project">
              <span>PROJECT PORTFOLIO</span>
              <small>Project images, names, types, locations, descriptions and services provided can be added here without redesigning the section.</small>
            </div>
          </div>
        </section>

        <section className="section section--ivory team" id="team">
          <div className="container">
            <div className="section-heading reveal">
              <SectionLabel number="07">OUR TEAM</SectionLabel>
              <h2>THE PEOPLE<br />BEHIND THE <span>BUILD</span></h2>
              <p>The company is founded on complementary expertise in Quantity Surveying and Civil Engineering.</p>
            </div>
            <div className="founders">
              <article className="founder reveal"><span>01</span><h3>[NAME]</h3><p>Founder | Quantity Surveyor</p><small>Professional biography to be added.</small></article>
              <article className="founder reveal"><span>02</span><h3>[NAME]</h3><p>Founder | Civil Engineer</p><small>Professional biography to be added.</small></article>
            </div>
            <div className="org-placeholder reveal">
              <span>OUR TEAM</span>
              <h3>Organisation Structure</h3>
              <p>Organisation structure to be added when available.</p>
            </div>
          </div>
        </section>

        <section className="commitment" id="commitment">
          <div className="commitment__image" />
          <div className="commitment__overlay" />
          <div className="container commitment__content reveal">
            <SectionLabel number="08" light>OUR COMMITMENT</SectionLabel>
            <h2>BUILDING<br /><span>BEYOND TODAY</span></h2>
            <div className="commitment-grid">
              <div>
                <p className="commitment-lead">Every project represents more than bricks, concrete and steel.</p>
                <p>It represents:</p>
              </div>
              <div className="commitment-words">
                <span>AN INVESTMENT</span><span>A VISION</span><span>A HOME</span><span>A WORKPLACE</span><span>AN OPPORTUNITY</span><span>A FUTURE</span>
              </div>
            </div>
            <p className="commitment-text">We approach every project with the understanding that what we build today can create value long after the project is completed.</p>
            <p className="commitment-text">Our commitment is to build with quality, listen with purpose, advise with expertise and work with integrity.</p>
            <div className="commitment-end">BUILDING BEYOND TODAY</div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="container contact-grid reveal">
            <div>
              <SectionLabel number="09">CONTACT</SectionLabel>
              <h2>LET'S BUILD<br />SOMETHING<br /><span>BEYOND TODAY.</span></h2>
              <p className="contact-intro">Have a project in mind? Tell us what you are planning and the official Buildlink team can follow up with you.</p>
              <div className="contact-details">
                <div><small>ADDRESS</small><strong>To be added</strong></div>
                <div><small>PHONE</small><strong>To be added</strong></div>
                <div><small>EMAIL</small><strong>To be added</strong></div>
              </div>
            </div>
            <form className="contact-form" onSubmit={submitForm}>
              <label>Name<input required name="name" placeholder="Your name" /></label>
              <label>Company<input name="company" placeholder="Company name" /></label>
              <div className="form-row">
                <label>Email<input required type="email" name="email" placeholder="you@example.com" /></label>
                <label>Phone<input name="phone" placeholder="Phone number" /></label>
              </div>
              <label>Project Type<select name="projectType" defaultValue=""><option value="" disabled>Select project type</option><option>Design Services</option><option>Building Construction</option><option>Civil Engineering</option><option>Quantity Surveying & Cost Management</option><option>Project Management & Coordination</option></select></label>
              <label>Message<textarea required name="message" rows="5" placeholder="Tell us about your project"></textarea></label>
              <button className="button button--navy" type="submit">SEND INQUIRY <Arrow /></button>
              {sent && <p className="form-note">Your inquiry form is ready. Connect this form to the official Buildlink email or form service when the business contact details are available.</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__top">
          <div>
            <img src={logo} alt="Buildlink" />
            <p>BUILDING BEYOND TODAY</p>
          </div>
          <div className="footer__nav">
            {navItems.slice(0, 6).map(([label, id]) => <button key={id} onClick={() => goTo(id)}>{label}</button>)}
          </div>
          <div className="footer__contact">
            <span>CONTACT</span>
            <p>Details to be added</p>
          </div>
        </div>
        <div className="container footer__bottom">
          <span>© Buildlink Construction Company Limited</span>
          <span>BUILDING BEYOND TODAY</span>
        </div>
      </footer>
    </div>
  );
}