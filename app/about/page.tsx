// Images
import aboutImg from "@/assets/images/about.jpg";

function About() {
  return (
    <main className="page-background">
      <div id="content" className="site-content">
        <div className="content-holder center-relative content-1170">
          <div style={{ textAlign: "center" }}>
            <img
              src={aboutImg.src}
              alt="Dulan Chathuranga"
              style={{
                width: "15%",
                height: "auto",
                margin: "0 auto",
                display: "block",
                marginBottom: "20px",
                borderRadius: "15%",
              }}
            />
          </div>
          <h1 className="entry-title2 page-title center-text">
            dcmagic! by Dulan Chathuranga <br />
          </h1>

          <p className="description-main2 center-text">
            Animator, Designer, Illustrator, and Editing Enthusiast with a
            passion for creating captivating visual experiences and bringing
            ideas to life through motion and design.
          </p>

          <div className="one_half">
            <ul className="timeline-holder">
              <li className="timeline-event">
                <span className="timeline-circle"></span>
                <div className="timeline-event-content">
                  Began the creative journey at University of Kelaniya,
                  Department of MIT, discovering a passion for graphic design
                  and animation through academic projects. Started building
                  fundamental skills in motion graphics and visual storytelling.
                </div>
                <div className="timeline-event-date">2021</div>
              </li>

              <li className="timeline-event">
                <span className="timeline-circle"></span>
                <div className="timeline-event-content">
                  Appointed as Media Director for the Department of MIT at
                  University of Kelaniya. Led creative teams in producing
                  departmental promotional materials, event coverage, and
                  digital content that elevated the department's visual
                  identity.
                </div>
                <div className="timeline-event-date">2022</div>
              </li>

              <li className="timeline-event">
                <span className="timeline-circle"></span>
                <div className="timeline-event-content">
                  Collaborated with various local projects on a series of
                  animated explainer videos and promotional content. These
                  partnerships marked the transition from university-based
                  projects to professional industry work with established
                  brands.
                </div>
                <div className="timeline-event-date">2023</div>
              </li>

              <li className="timeline-event">
                <span className="timeline-circle"></span>
                <div className="timeline-event-content">
                  Established dcmagic as a full-service creative studio,
                  securing projects with Design Plastica and Fragrances by
                  Chris. Expanded service offerings to include comprehensive
                  brand animation, event coverage, and specialized design
                  solutions for corporate clients.
                </div>
                <div className="timeline-event-date">2024</div>
              </li>
            </ul>
          </div>

          <div className="one_half last">
            <p className="description-Second">
              With expertise spanning animation, graphic design, illustration,
              and video editing, We transform concepts into compelling visual
              narratives that captivate audiences and deliver messages with
              impact. Our journey began in 2021 with university graphic projects
              that quickly revealed an exceptional output for visual
              storytelling and motion design.
              <br />
            </p>
            {/* <p className="description-Second">
              <br />
              While pursuing studies in the Department of MIT at the University
              of Kelaniya, Dulan balanced academic excellence with a growing
              freelance portfolio, designing magazines, creating videos, and
              eventually serving as Media Director for his department. This
              foundation of diverse project experience provided the perfect
              launchpad for collaborations with industry leaders.
              <br />
            </p> */}
            <p className="description-Second">
              <br />
              Today, dcmagic's client roster includes prestigious names like
              Microsoft with Trident Corporation among others. Each project
              reflects our commitment to originality, technical excellence, and
              strategic creative thinking that helps brands communicate
              effectively through premium visual content.
            </p>
          </div>

          <div className="clear"></div>
          {/* 
          <div className="social-holder center-text top-60">
            <a className="social-text" href="https://www.twitter.com/">
              TWITTER
            </a>
            <a className="social-text" href="https://www.facebook.com/">
              FACEBOOK
            </a>
            <a className="social-text" href="https://www.instagram.com/">
              INSTAGRAM
            </a>
          </div> */}
        </div>
      </div>
    </main>
  );
}

export default About;
