import "./index.css";
import Pill from "./components/Pill";
import ContentBox from "./components/ContentBox";
import WorkExperience from "./components/WorkExperience";
import Footer from "./components/footer";
import Link from "./components/Link";
import Select from "./components/Select";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="rectangle">
          <Select
            options={[
              { value: "en", children: "English" },
              { value: "lt", children: "Lietuvių" },
            ]}
          />
        </div>
        <article className="name-card">
          <section className="title">SIGITA GUOGAITĖ</section>
          <section className="black-title">PROGRAMMER</section>
        </article>
      </header>

      <main>
        <article className="first-container">
          <ContentBox title="LINKS">
            <List
              listClass="list"
              liElement={[
                {
                  children: (
                    <Link
                      classLink="link"
                      image
                      imgSrc="https://lightbulbgrip.com/wp-content/uploads/2018/11/linkedin-icon-png-transparent-background-13.png"
                      imgAlt="linkedin-logo"
                      link="https://www.linkedin.com/in/sigita-guogaite/"
                      imgClass="link-img"
                    >
                      LINKEDIN/sigita-guogaite
                    </Link>
                  ),
                },
                {
                  children: (
                    <Link
                      classLink="link"
                      image
                      imgSrc="https://icon-library.com/images/github-icon-for-resume/github-icon-for-resume-24.jpg"
                      imgAlt="behance-logo"
                      link="https://github.com/sigecuqui"
                      imgClass="link-img"
                    >
                      GITHUB/sigecuqui
                    </Link>
                  ),
                },
              ]}
            />
          </ContentBox>

          <ContentBox title="ABOUT ME">
            <p>
              Web Development skills:
              <br />
              Working on GITHUB; Server-side technologies (NodeJS, modern stack
              (ES2015, Flexbox, CSS Modules); Latest web standards in HTML, CSS,
              JavaScript; Develop front-end web applications that scale and
              perform well on all devices; etc.
              <br />
              Now learning React.js.
            </p>
          </ContentBox>
        </article>

        <article className="second-container">
          <ContentBox title="EDUCATION">
            <div>
              <List
                listClass="list"
                liElement={[
                  { children: "CODEACADEMY" },
                  { children: "2020 - 2021" },
                  { children: "Professional Diploma" },
                  { children: "Full-Stack Web Development" },
                ]}
              />
              <div className="line"></div>
              <List
                listClass="list"
                liElement={[
                  { children: "VYTAUTAS MAGNUS UNIVERSITY" },
                  { children: "2012 - 2016" },
                  { children: "Bachelor" },
                  { children: "Public Communication" },
                ]}
              />
            </div>
          </ContentBox>

          <ContentBox title="PERSONAL SKILLS">
            <Pill rate="best">CREATIVITY</Pill>
            <Pill rate="best">TEAMWORK</Pill>
            <Pill rate="good">ORGANIZATION</Pill>
          </ContentBox>

          <ContentBox title="TECHNICAL SKILLS">
            <Pill rate="best">HTML/CSS</Pill>
            <Pill rate="good">JAVASCRIPT</Pill>
            <Pill rate="good">PHP</Pill>
            <Pill rate="less">REACT.JS</Pill>
          </ContentBox>
        </article>

        <ContentBox title="WORK EXPERIENCE">
          <article className="third-container">
            <section className="border">
              <WorkExperience
                jobPosition="DIGITAL MARKETING INTERN"
                company="GV Group"
                date="2019"
              >
                <p>
                  Working on MAGENTO TVS with SEO keywords, writing SEO texts;
                  learning GOOGLE ADS and ANALYTICS.
                </p>
                <List
                  liElement={[
                    { children: "MAGENTO TVS" },
                    { children: "GOOGLE ADS" },
                    { children: "GOOGLE ANALYTICS" },
                    { children: "COPYWRITING" },
                  ]}
                />
              </WorkExperience>
            </section>

            <section className="border">
              <WorkExperience
                jobPosition="ADMIN"
                company="Publishing House BRIEDIS"
                date="2017-2019"
              >
                <p>
                  Working on company's marketing strategies; doing proofreading
                  on books templates; working with documents and other
                  administration works.
                </p>
                <List
                  liElement={[
                    { children: "OXID TVS" },
                    { children: "GOOGLE ADS" },
                    { children: "FACEBOOK BUSINESS" },
                    { children: "ADOBE INDESIGN" },
                    { children: "PROOFREADING" },
                    { children: "DOCUMENTS SYSTEMIZATION" },
                  ]}
                />
              </WorkExperience>
            </section>

            <section>
              <WorkExperience
                jobPosition="BOOKSTORE CONSULTANT"
                company="ALG knygynai"
                date="2016-2017"
              >
                <p>
                  Clients consultation in various genres of books: children,
                  history, science, classic, etc.
                </p>
                <List
                  liElement={[
                    { children: "CLIENTS CONSULTATION" },
                    { children: "BOOK MAINTENANCE" },
                    { children: "INTEREST IN VARIOUS GENRES" },
                  ]}
                />
              </WorkExperience>
            </section>
          </article>
        </ContentBox>
      </main>

      <footer className="footer">
        <Footer classLabel="black-title" title="LOCATION">
          <List listClass="list" liElement={[{ children: "Vilnius" }]} />
        </Footer>
        <Footer classLabel="black-title" title="CONTACT">
          <List
            listClass="list"
            liElement={[
              {
                children: (
                  <Link classLink="link-footer" link="tel:+37061481120">
                    +37061481120
                  </Link>
                ),
              },
              {
                children: (
                  <Link
                    classLink="link-footer"
                    link="mailto:sigita.guogaite@gmail.com"
                  >
                    sigita.guogaite@gmail.com
                  </Link>
                ),
              },
            ]}
          />
        </Footer>
        <Footer classLabel="black-title" title="SOCIAL">
          <List
            listClass="list"
            liElement={[
              {
                children: (
                  <Link
                    classLink="link-footer"
                    link="https://www.linkedin.com/in/sigita-guogaite/"
                  >
                    LINKEDIN/sigita-guogaite
                  </Link>
                ),
              },
              {
                children: (
                  <Link
                    classLink="link-footer"
                    link="https://github.com/sigecuqui"
                  >
                    GITHUB/sigecuqui
                  </Link>
                ),
              },
            ]}
          />
        </Footer>
      </footer>
    </div>
  );
}

export default App;
