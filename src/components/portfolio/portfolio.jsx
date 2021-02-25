import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Masonry from "react-masonry-css";
//Scss
import "./portfolio.scss";
//Assets
import Arrow from "../../assets/portfolio/arrow.svg";
import songcriminaldefence from "../../assets/portfolio/notetaker.png";
import memychefi from "../../assets/portfolio/memychefi.png";
import eatBurger from "../../assets/portfolio/eatBurger.png";
import jobLogger from "../../assets/portfolio/jobLogger.png";
import weather from "../../assets/portfolio/weather.png";
import scheduler from "../../assets/portfolio/scheduler.png";
import notetaker from "../../assets/portfolio/notetaker.png";
//Components
import Button from "../ui-components/button/button";
import Title from "../ui-components/title/title";
import ProjectBox from "../ui-components/projectBox/projectBox";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // PORTFOLIO PROJECTS
      projects: [
        {
          id: "1",
          preview: songcriminaldefence,
          title: "Song Criminal Defence",
          tag: "HTML/CSS",
          desc: "This is the website for criminal defence law firm with SEO skills included.",
          weblink: "https://songcriminaldefence.com",
        },
        {
          id: "2",
          preview: memychefi,
          title: "Me MyChef & I",
          tag: "MERN",
          desc: "An app that users can keep track what is in their fridge and can search for recipe based on its ingredients.",
          weblink: "https://lit-badlands-54539.herokuapp.com/",
          gitlink: "https://github.com/tndus604/Me-My-Chef-and-I",
        },
        {
          id: "3",
          preview: eatBurger,
          title: "Eat-Da-Burger!",
          tag: "MERN",
          desc: "Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.",
          weblink: "https://warm-island-93846.herokuapp.com/",
          gitlink: "https://github.com/tndus604/Eat-Da-Burger",
        },
        {
          id: "4",
          preview: jobLogger,
          title: "JobLogger",
          tag: "MERN",
          desc: "JobLogger helps you keep track of all that in a central location, as well as offering a portal to search for jobs and easily save them.",
          weblink: "https://joblogger-loc.herokuapp.com/",
          gitlink: "https://github.com/nuleeannajeon/JobLogger",
        },
        {
          id: "5",
          preview: weather,
          title: "Weather Dashboard",
          tag: "Javascript",
          desc: "Search for multi-day weather forecasts of any particular city.",
          weblink: "https://tndus604.github.io/Weather-dashboard/",
          gitlink: "https://github.com/tndus604/Weather-dashboard",
        },
        {
          id: "6",
          preview: scheduler,
          title: "Daily Scheduler",
          tag: "Javascript",
          desc: "Put your schedules in this daily schduler.",
          weblink: "https://tndus604.github.io/Work-Day-Scheduler/",
          gitlink: "https://github.com/tndus604/Work-Day-Scheduler",
        },
        {
          id: "7",
          preview: notetaker,
          title: "Note Taker",
          tag: "MERN",
          desc: "A server-based application that can write, save and delete the notes.",
          weblink: "https://frozen-beyond-47225.herokuapp.com/",
          gitlink: "https://github.com/tndus604/Note-Taker",
        },
      ],
      // PORTFOLIO GALLERY WILL LOAD THIS AFTER FUNCTION "filterGallery" FINISH FILTERING
      filterResult: null,
      pickedFilter: "all",
      filterMenuActive: false,
      pickedFilterDropdown: "NEWEST"
    };
  }

  // FIRST LOAD
  componentDidMount() {
    this.filterGallery("all");
  }

  //FILTER PORTFOLIO FUNCTION
  filterGallery = (target) => {
    let projectsArr = [...this.state.projects];
    let result;

    if (target !== "all") {
      result = projectsArr.filter((project) => project.tag === target);
    } else {
      result = projectsArr;
    }

    this.setState({ filterResult: result, pickedFilter: target, pickedFilterDropdown: "NEWEST" });
  };

  // FILTER DROP DOWN HOVER MENU FUNCTION
  filterMenuHover = (event) => {
    if(event) {
      this.setState({ filterMenuActive: true });
    }else {
      this.setState({ filterMenuActive: false });
    }
  }

  // FILTER DROP DOWN HANDLER
  filterDropDownHandler = (filter) => {
    this.setState({ pickedFilterDropdown: filter, filterMenuActive: false });

    let projectsArr = [...this.state.filterResult];
    let result;

    if (filter === "NEWEST") {
      result = projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1));
    }else if (filter === "OLDEST") {
      result = projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1)).reverse();
    }

    this.setState({ filterResult: result});
  }

  // RENDER
  render() {
    // PORTFOLIO GALLERY RENDER
    let projectsRender = null;
    if (this.state.filterResult) {
      projectsRender = this.state.filterResult.map((project) => (
        <ProjectBox preview={project.preview} key={project.id} title={project.title} tag={project.tag} desc={project.desc} weblink={project.weblink} gitlink={project.gitlink}/>
      ));
    }
    // PORTFOLIO GALLERY BREAKPOINTS
    const portfolioBreakpoints = {
      default: 3,
      1100: 3,
      700: 2,
      500: 1,
    };
    // PORTFOLIO FILTER DROPDOWN MENY RENDER
    let filterDroppDown = null;
    if(this.state.filterMenuActive) {
      filterDroppDown = (
        <div className="portfolio__filter-menu shadow">
          <p className="font12" onClick={() => this.filterDropDownHandler("NEWEST")}>
            NEWEST
          </p>
          <p className="font12" onClick={() => this.filterDropDownHandler("OLDEST")}>
            OLDEST
          </p>
        </div>
      );
    }

    return (
      <div id="portfolio">
        <div className="wrapper">
          <Title title="Portfolio" />
          <Row>
            <Col xs={12} sm={12} md={8} lg={9}>
              <div className="portfolio__nav">
                <ul>
                  <li className={this.state.pickedFilter === "all" ? "portfolio__nav-active font12" : "font12"} onClick={() => this.filterGallery("all")}>
                    ALL
                  </li>
                  <li
                    className={this.state.pickedFilter === "branding" ? "portfolio__nav-active font12" : "font12"}
                    onClick={() => this.filterGallery("HTML/CSS")}
                  >
                    HTML/CSS
                  </li>
                  <li
                    className={this.state.pickedFilter === "illustrations" ? "portfolio__nav-active font12" : "font12"}
                    onClick={() => this.filterGallery("Javascript")}
                  >
                    JAVASCRIPT
                  </li>
                  <li className={this.state.pickedFilter === "web" ? "portfolio__nav-active font12" : "font12"} onClick={() => this.filterGallery("MERN")}>
                    MERN
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={3}>
              <div className="portfolio__filter" onMouseEnter={() => this.filterMenuHover(true)} onMouseLeave={() => this.filterMenuHover(false)}>
                <p className="font12">{this.state.pickedFilterDropdown} FIRST</p>
                <img src={Arrow} alt="arrow" />
                {filterDroppDown}
              </div>
            </Col>
          </Row>
          <Masonry breakpointCols={portfolioBreakpoints} className="my-masonry-grid" columnClassName="mint__gallery">
            {projectsRender}
          </Masonry>
          <Row className="flex-center padding40">
            <Button label="HAVE WORK FOR US?" target={"contact"} />
          </Row>
        </div>
      </div>
    );
  }
}

export default Portfolio;
