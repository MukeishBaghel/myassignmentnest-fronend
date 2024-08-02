import { useLocation } from "react-router-dom";
import { testimonials } from "../constants/StaticData";
import "../assets/css/index.css";
import img1 from "../assets/images/content/bg/1.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

const BASE_URL = import.meta.env.VITE_BASE_URL2;
type PageData = {
  country_id: string;
  location: string;
  page_url: string;
  hero_title: string;
  hero_sub_title: string;
  section_1_title_1: string;
  section_1_content_1: string;
  section_1_title_2: string;
  section_1_content_2: string;
  conference_pricing_text: string;
  sponsor_section_text: string;
};
const Location = () => {
  const [pageData, setPageData] = useState<PageData>({
    country_id: "",
    location: "",
    page_url: "",
    hero_title: "",
    hero_sub_title: "",
    section_1_title_1: "",
    section_1_content_1: "",
    section_1_title_2: "",
    section_1_content_2: "",
    conference_pricing_text: "",
    sponsor_section_text: "",
  });

  const experts = [
    {
      id: 1,
      name: "Elijah Bickett",
      profileImage:
        "https://www.newassignmenthelpaus.com/assets/images/writers/666993914d1aa_elijah bickett.jpeg",
      ratingImage:
        "https://www.newassignmenthelpaus.com/assets/images/common/5_star.png",
      profileLink:
        "https://www.newassignmenthelpaus.com/experts-profile/elijah-bickett",
      subjectLink:
        "https://www.newassignmenthelpaus.com/computer-science-assignment-help",
      subject: "Computer Science",
      description: `I have been working in this field for the past 9 years and have delivered the best possible computer science assignments. With my Doctorate in Computer Science, I'm your best bet <a class="viewBtn" href="https://www.newassignmenthelpaus.com/experts-profile/elijah-bickett" tabindex="0">...Continue</a>`,
      experience: "9+ years",
      completedOrders: "543 completed Orders",
      ordersInProgress: "4 Orders in Progress",
      hireLink:
        "https://www.newassignmenthelpaus.com/order-now.php?writer=72b32a1f754ba1c09b3695e0cb6cde7f",
    },
    {
      id: 2,
      name: "Elijah Bickett",
      profileImage:
        "https://www.newassignmenthelpaus.com/assets/images/writers/666993914d1aa_elijah bickett.jpeg",
      ratingImage:
        "https://www.newassignmenthelpaus.com/assets/images/common/5_star.png",
      profileLink:
        "https://www.newassignmenthelpaus.com/experts-profile/elijah-bickett",
      subjectLink:
        "https://www.newassignmenthelpaus.com/computer-science-assignment-help",
      subject: "Computer Science",
      description: `I have been working in this field for the past 9 years and have delivered the best possible computer science assignments. With my Doctorate in Computer Science, I'm your best bet <a class="viewBtn" href="https://www.newassignmenthelpaus.com/experts-profile/elijah-bickett" tabindex="0">...Continue</a>`,
      experience: "9+ years",
      completedOrders: "543 completed Orders",
      ordersInProgress: "4 Orders in Progress",
      hireLink:
        "https://www.newassignmenthelpaus.com/order-now.php?writer=72b32a1f754ba1c09b3695e0cb6cde7f",
    },
    {
      id: 3,
      name: "Elijah Bickett",
      profileImage:
        "https://www.newassignmenthelpaus.com/assets/images/writers/666993914d1aa_elijah bickett.jpeg",
      ratingImage:
        "https://www.newassignmenthelpaus.com/assets/images/common/5_star.png",
      profileLink:
        "https://www.newassignmenthelpaus.com/experts-profile/elijah-bickett",
      subjectLink:
        "https://www.newassignmenthelpaus.com/computer-science-assignment-help",
      subject: "Computer Science",
      description: `I have been working in this field for the past 9 years and have delivered the best possible computer science assignments. With my Doctorate in Computer Science, I'm your best bet <a class="viewBtn" href="https://www.newassignmenthelpaus.com/experts-profile/elijah-bickett" tabindex="0">...Continue</a>`,
      experience: "9+ years",
      completedOrders: "543 completed Orders",
      ordersInProgress: "4 Orders in Progress",
      hireLink:
        "https://www.newassignmenthelpaus.com/order-now.php?writer=72b32a1f754ba1c09b3695e0cb6cde7f",
    },
  ];

  const features = [
    {
      id: 1,
      icon: "ion-settings",
      title: "Plagiarism Checker",
      description:
        "Submit plagiarism work with our AI plagiarism-checking tool. Unique solutions are guaranteed.",
    },
    {
      id: 2,
      icon: "ion-network",
      title: "Paraphrase Tool",
      description:
        "Avoid the hassle of rewriting your entire paper by using our paraphrase tool for quick solutions.",
    },
    {
      id: 3,
      icon: "ion-earth",
      title: "Spell Checker",
      description:
        "Don’t let incorrect spellings keep you from top grades. Try our spell checker for perfect writing!",
    },
    {
      id: 4,
      icon: "ion-calculator",
      title: "Grammar Checker",
      description:
        "Leave your worries about grammatical errors behind by making the most of our grammar checker.",
    },
    {
      id: 5,
      icon: "ion-settings",
      title: "Word Counter",
      description:
        "Keep track of your task's length with accurate word count, paragraph count, page count, and more.",
    },
    {
      id: 6,
      icon: "ion-network",
      title: "Resume Builder",
      description:
        "Impress all working professionals with a custom-built resume generated from our resume builder.",
    },
    {
      id: 7,
      icon: "ion-earth",
      title: "Equation Solver",
      description:
        "Solve all complex mathematical equations in the blink of an eye thanks to our equation solver.",
    },
    {
      id: 8,
      icon: "ion-calculator",
      title: "Other Tools",
      description:
        "Try out our other tools like citation generators, essay typer, PDF summarizer, and more.",
    },
  ];

  const faqs = [
    {
      id: 1,
      question: "Which payment methods do you accept?",
      answer:
        "Aenean quis varius massa nam gravida elementum venenatis on nulla id efficitur diam. Morbi et blandit esta donec scelerisque sit amet eros pretium facilisis, vestibulum ullamcorper odio ini eget nunc faucibus porta non dignissim.",
    },
    {
      id: 2,
      question: "Which document can I bring to meeting?",
      answer:
        "Aenean quis varius massa nam gravida elementum venenatis on nulla id efficitur diam. Morbi et blandit esta donec scelerisque sit amet eros pretium facilisis, vestibulum ullamcorper odio ini eget nunc faucibus porta non dignissim.",
    },
    {
      id: 3,
      question: "Can I invite my friends to join this conference?",
      answer:
        "Aenean quis varius massa nam gravida elementum venenatis on nulla id efficitur diam. Morbi et blandit esta donec scelerisque sit amet eros pretium facilisis, vestibulum ullamcorper odio ini eget nunc faucibus porta non dignissim.",
    },
    {
      id: 4,
      question: "Who can join at the Meetup venue?",
      answer:
        "Aenean quis varius massa nam gravida elementum venenatis on nulla id efficitur diam. Morbi et blandit esta donec scelerisque sit amet eros pretium facilisis, vestibulum ullamcorper odio ini eget nunc faucibus porta non dignissim.",
    },
  ];

  const { '*': location } = useParams();
  
  useEffect(() => {
    (async function () {
      const response = await axios(`${BASE_URL}/api/page/${location}`);
      setPageData(response.data.data);
    })();
  }, [location]);

  return (
    <div id="body-wrap" className="bg-white">
      {/* <nav
          id="navigation"
          className="navbar navbar-conference navbar-landing navbar-affix scrollspy"
        >
          <div className="Container">
            <div className="navbar-brand">
              <a href="index.html">
                <img
                  src="https://myassignmentnest.com/assets/images/logo.jpg"
                  alt="Logo"
                />
              </a>
            </div>
            <ul className="nav">
              <li className="nav-menu-btn">
                <a href="#" className="nav-link">
                  Get an Enquiry
                </a>
              </li>
            </ul>
            <div className="nav-btn-mobile">
              <a href="#" className="navbar-btn-toggle">
                <i className="ion ion-android-menu"></i>
              </a>
            </div>
          </div>
        </nav> */}

      <header id="header" className="header-conference affa-bg-img text-white">
        <div className="header-overlay bg-color-overlay90">
          <div className="Container">
            <div className="row">
              <div className="col-md-6">
                <div className="header-txt header-banner">
                  <h1>{pageData.hero_title}</h1>
                  <p>{pageData.hero_sub_title}</p>
                  <ul>
                    <li>
                      Plagiarism &amp; Error Free Assignments By Subject Experts
                    </li>
                    <li>Affordable prices and discounts for students</li>
                    <li>On-time delivery before the expected deadline</li>
                  </ul>
                  <div className="review-strip">
                    <a
                      href="https://g.page/r/CTTZB1lBxWy2EBA"
                      target="_blank"
                      rel="nofollow"
                    >
                      <figure>&nbsp;</figure>
                      <label>
                        Google Review
                        <img
                          src="https://www.newassignmenthelpaus.com/assets/images/reviews/5_star.png"
                          alt="Google Review 4.9"
                          width="90"
                          height="18"
                        />
                      </label>
                      <strong className="ratings">4.9</strong>
                    </a>
                    <a
                      href="https://www.truelocal.com.au/business/new-assignment-help-australia/sydney"
                      target="_blank"
                      rel="nofollow"
                    >
                      <figure>&nbsp;</figure>
                      <label>
                        True Local
                        <img
                          src="https://www.newassignmenthelpaus.com/assets/images/reviews/4.5_star.png"
                          alt="Review 4.7"
                          width="90"
                          height="18"
                        />
                      </label>
                      <strong className="ratings">4.7</strong>
                    </a>
                    <a
                      href="https://birdeye.com/new-assignment-help-australia-170601176728845"
                      target="_blank"
                      rel="nofollow"
                    >
                      <figure>&nbsp;</figure>
                      <label>
                        Birdeye
                        <img
                          src="https://www.newassignmenthelpaus.com/assets/images/reviews/5_star.png"
                          alt="Brideye Review 4.9"
                          width="90"
                          height="18"
                        />
                      </label>
                      <strong className="ratings">4.9</strong>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-5 offset-xl-1">
                <div
                  className="header-form bg-dark-overlay80 animation"
                  data-animation="animation-fade-in-down"
                  data-delay="500"
                  data-nooffset="true"
                >
                  <h4 className="text-center">Enjoy 35% Off.</h4>
                  <form
                    method="post"
                    action="#"
                    className="affa-form-signup form-conference"
                  >
                    <div className="submit-status"></div>
                    <input
                      type="text"
                      className="form-input"
                      name="name"
                      placeholder="Name"
                    />
                    <input
                      type="text"
                      className="form-input"
                      name="email"
                      placeholder="Email"
                    />
                    <input
                      type="submit"
                      className="submit-button"
                      name="submit"
                      value="Sign Up Now!"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <figure
          className="bg-img-base loaded"
          style={{ backgroundImage: `url(${img1})` }}
        ></figure>
      </header>

      <div className="affa-bg-white padding-top30-sm padding-top30 padding-bottom40-sm padding-bottom30">
        <div
          id="speakers"
          className="padding-top40-sm padding-top30 padding-bottom0-sm padding-bottom10"
        >
          <div className="Container">
            <div className="post-heading-left-conference">
              <h2>{pageData.section_1_title_1}</h2>
              <p>{pageData.section_1_content_1}</p>
              <h3>{pageData.section_1_title_2}</h3>
              <p>{pageData.section_1_content_2}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="affa-bg-grey padding-top0-sm padding-top0 padding-bottom40-sm padding-bottom50">
        <div
          id="features"
          className="padding-top40-sm padding-top50 padding-bottom10-sm padding-bottom20"
        >
          <div className="Container">
            <div className="post-heading-left-conference">
              <h2>Our Top Work Features</h2>
              <p>
                Discover why we’re the top choice for professional writing
                assistance.
              </p>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="affa-feature-conference">
                  <img
                    src="https://myassignmentnest.com/assets/icons/quality.svg"
                    alt="Icon"
                  />
                  <h4>High-Quality Writing</h4>
                  <p>
                    Our assignment writing service has helped thousands of
                    students improve their grades. We guarantee the highest
                    quality writing at all times.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="affa-feature-conference">
                  <img
                    src="https://myassignmentnest.com/assets/icons/ontime.svg%20fill.svg"
                    alt="Icon"
                  />
                  <h4>Timely Submissions</h4>
                  <p>
                    If you need assignments on time, we are the best option for
                    you. Beat impossible deadlines with our 24-hour delivery for
                    urgent papers.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="affa-feature-conference">
                  <img
                    src="https://myassignmentnest.com/assets/icons/e-homework.svg"
                    alt="Icon"
                  />
                  <h4>Friendly Policies</h4>
                  <p>
                    Our student-friendly policies include a money-back
                    guarantee. Rest assured that we’ll take responsibility for
                    all papers.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="affa-feature-conference">
                  <img
                    src="https://myassignmentnest.com/assets/icons/e-assignment-writing.svg"
                    alt="Icon"
                  />
                  <h4>Reliable Experts</h4>
                  <p>
                    Every assignment writer on our website has completed their
                    Master’s or Doctorate degree. Rely on them for all types of
                    academic assistance.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="affa-feature-conference">
                  <img
                    src="https://myassignmentnest.com/assets/icons/lowest-price.svg"
                    alt="Icon"
                  />
                  <h4>Pocket-Friendly Services</h4>
                  <p>
                    We always ensure to provide affordable services through our
                    dynamic pricing system. Make the most use of our discounts
                    and bonuses.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="affa-feature-conference">
                  <img
                    src="https://myassignmentnest.com/assets/icons/24x7-support.svg"
                    alt="Icon"
                  />
                  <h4>24/7 Availability</h4>
                  <p>
                    Feel free to get in touch with our academic writers whenever
                    you want. Send in your queries, and they'll get back to you
                    ASAP.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="affa-bg-white padding-top0-sm padding-top0">
        <div id="schedule" className="padding-top40-sm padding-top50">
          <div className="Container">
            <div className="post-heading-left-conference">
              <h2>How Our Online Assignment Help Services Work?</h2>
              <p>
                Donec volutpat justo lectus, vel sollicitudin sem euismod amet
                eleifend ipsum. Praesent porttitor, enim nani rhoncus interdum,
                lacus dictum enim turpis, vel luctus massa ante sed mi, donec et
                ante nunc.
              </p>
            </div>
            <div className="affa-tabs-conference margin-bottom-min">
              <div className="tab-content">
                <div
                  id="schedule-tab-content-1"
                  className="tab-pane fade show active"
                >
                  <div className="row">
                    <div className="col-md-12">
                      <div className="affa-schedules-conference">
                        <div className="schedule-item mb-3">
                          <div className="schedule-wrap">
                            <span className="schedule-icon">
                              <img
                                src="https://myassignmentnest.com/assets/icons/form.svg"
                                alt="Form"
                              />
                            </span>
                            <h4>Fill order form</h4>
                            <p>
                              Specify the deadline and assignment duration on
                              the order form.
                            </p>
                          </div>
                        </div>
                        <div className="schedule-item mb-3">
                          <div className="schedule-wrap">
                            <span className="schedule-icon">
                              <img
                                src="https://myassignmentnest.com/assets/icons/courierservices.svg"
                                alt="Courier Services"
                              />
                            </span>
                            <h4>Pay for Services</h4>
                            <p>
                              After payment, your order is confirmed, and we
                              offer various convenient payment methods.
                            </p>
                          </div>
                        </div>
                        <div className="schedule-item mb-3">
                          <div className="schedule-wrap">
                            <span className="schedule-icon">
                              <img
                                src="https://myassignmentnest.com/assets/icons/Solution.svg"
                                alt="Solution"
                              />
                            </span>
                            <h4>View the solution</h4>
                            <p>
                              Assignment writer notifies upon completion. View
                              the solution in the user account.
                            </p>
                          </div>
                        </div>
                        <input
                          type="submit"
                          name="submit"
                          value="Book Now!"
                          className="mb-5 submit-button"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="affa-bg-color text-white padding-top140-sm padding-top150 padding-bottom40-sm padding-bottom50">
        <div
          id="spotlight"
          className="padding-top40-sm padding-top50 padding-bottom0-sm padding-bottom10"
        >
          <div className="Container">
            <div className="row">
              <div className="col-md-12 col-lg-12 col-xl-12">
                <div className="text-center-sm padding-top40-lg padding-top70-xl margin-bottom40">
                  <div className="post-heading-left-conference margin-bottom30-sm margin-bottom40">
                    <h2>Get assignment help to Score A+ Grades in the exam</h2>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: pageData.sponsor_section_text,
                      }}
                    />
                  </div>
                  <p>
                    If finding the best assignment help became a tough job for
                    college students, then taking assignment assistance from Our
                    top PhD writers would defiantly be a good choice to pick.
                    Don't let poor grades affect your future career, Just hire
                    an expert writer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="clients"
          className="padding-top20-sm padding-top20 padding-bottom20-sm padding-bottom20"
        >
          <div className="Container">
            <h3 className="text-center-sm margin-bottom40-sm margin-bottom50 carousel-title">
              Our excellent sponsors make LeadPro Conference possible:
            </h3>
            <div className="carousel-slider clients-conference-slider">
              <div className="slick-slide">
                <figure className="affa-client-conference">
                  <img
                    src="/src/assets/images/content/clients/1.png"
                    alt="Logo"
                  />
                </figure>
              </div>
              <div className="slick-slide">
                <figure className="affa-client-conference">
                  <img
                    src="/src/assets/images/content/clients/2.png"
                    alt="Logo"
                  />
                </figure>
              </div>
              <div className="slick-slide">
                <figure className="affa-client-conference">
                  <img
                    src="/src/assets/images/content/clients/3.png"
                    alt="Logo"
                  />
                </figure>
              </div>
              <div className="slick-slide">
                <figure className="affa-client-conference">
                  <img
                    src="/src/assets/images/content/clients/4.png"
                    alt="Logo"
                  />
                </figure>
              </div>
              <div className="slick-slide">
                <figure className="affa-client-conference">
                  <img
                    src="/src/assets/images/content/clients/5.png"
                    alt="Logo"
                  />
                </figure>
              </div>
              <div className="slick-slide">
                <figure className="affa-client-conference">
                  <img
                    src="/src/assets/images/content/clients/3.png"
                    alt="Logo"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="order-by-whatsapp">
        <div className="Container">
          <div className="title">
            <strong>Get 35% OFF </strong>on Your First Order!
          </div>
          <p>Type your WhatsApp number to get an exclusive code.</p>
          <form className="form-box">
            <select
              aria-label="Country Code"
              className="country_code_list"
              name="country_code"
            >
              <option value="Australia@#$?+61">
                +61&nbsp;&nbsp;&nbsp;&nbsp; Australia{" "}
              </option>
              <option value="United Kingdom@#$?+44">
                +44&nbsp;&nbsp;&nbsp;&nbsp; United Kingdom{" "}
              </option>
              <option value="United States@#$?+1">
                +1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; United States
              </option>
              <option value="Canada@#$?+1">
                +1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Canada{" "}
              </option>
              <option value="New Zealand@#$?+64">
                +64&nbsp;&nbsp;&nbsp;&nbsp; New Zealand{" "}
              </option>
              <option value="Malaysia@#$?+60">
                +60&nbsp;&nbsp;&nbsp;&nbsp; Malaysia{" "}
              </option>
              <option value="United Arab Emirates@#$?+971">
                +971&nbsp;&nbsp; United Arab Emirates{" "}
              </option>
              <option value="Afghanistan@#$?+93">
                +93&nbsp;&nbsp;&nbsp;&nbsp; Afghanistan{" "}
              </option>
              <option value="Aaland Islands@#$?+358">
                +358&nbsp;&nbsp; Aaland Islands{" "}
              </option>
              <option value="Albania@#$?+355">+355&nbsp;&nbsp; Albania </option>
              <option value="Algeria@#$?+213">+213&nbsp;&nbsp; Algeria </option>
              <option value="American Samoa-1@#$?+1">
                +1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; American Samoa-1
              </option>
              <option value="American Samoa-684@#$?+684">
                +684&nbsp;&nbsp; American Samoa-684{" "}
              </option>
              <option value="Andorra@#$?+376">+376&nbsp;&nbsp; Andorra </option>
              <option value="Angola@#$?+244">+244&nbsp;&nbsp; Angola </option>
              <option value="Anguilla-1@#$?+1">
                +1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Anguilla-1{" "}
              </option>
              <option value="Anguilla-264@#$?+264">
                +264&nbsp;&nbsp; Anguilla-264{" "}
              </option>
              <option value="Antarctica@#$?+672">
                +672&nbsp;&nbsp; Antarctica{" "}
              </option>
              <option value="Antigua and Barbuda-1@#$?+1">
                +1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Antigua and Barbuda-1{" "}
              </option>
              <option value="Antigua and Barbuda-268@#$?+268">
                +268&nbsp;&nbsp; Antigua and Barbuda-268
              </option>
              <option value="Argentina@#$?+54">
                +54&nbsp;&nbsp;&nbsp;&nbsp; Argentina{" "}
              </option>
              <option value="Armenia@#$?+374">+374&nbsp;&nbsp; Armenia </option>
              <option value="Aruba@#$?+297">+297&nbsp;&nbsp; Aruba </option>
              <option value="Austria@#$?+43">
                +43&nbsp;&nbsp;&nbsp;&nbsp; Austria{" "}
              </option>
              <option value="Azerbaijan@#$?+994">
                +994&nbsp;&nbsp; Azerbaijan{" "}
              </option>
              <option value="Bahamas-1@#$?+1">
                +1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Bahamas-1{" "}
              </option>
              <option value="Bahamas-242@#$?+242">
                +242&nbsp;&nbsp; Bahamas-242{" "}
              </option>
              <option value="Bahrain@#$?+973">+973&nbsp;&nbsp; Bahrain </option>
              <option value="Bangladesh@#$?+880">
                +880&nbsp;&nbsp; Bangladesh{" "}
              </option>
              <option value="Barbados-1@#$?+1">
                +1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Barbados-1{" "}
              </option>
              <option value="Barbados-246@#$?+246">
                +246&nbsp;&nbsp; Barbados-246{" "}
              </option>
              <option value="Belarus@#$?+375">+375&nbsp;&nbsp; Belarus </option>
              <option value="Belgium@#$?+32">
                +32&nbsp;&nbsp;&nbsp;&nbsp; Belgium{" "}
              </option>
              <option value="Belize@#$?+501">+501&nbsp;&nbsp; Belize </option>
              <option value="Benin@#$?+229">+229&nbsp;&nbsp; Benin </option>
              <option value="Bermuda-1@#$?+1">
                +1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Bermuda-1{" "}
              </option>
              <option value="Bermuda-441@#$?+441">
                +441&nbsp;&nbsp; Bermuda-441{" "}
              </option>
              <option value="Bhutan@#$?+975">+975&nbsp;&nbsp; Bhutan </option>
              <option value="Bolivia@#$?+591">+591&nbsp;&nbsp; Bolivia </option>
              <option value="Bonaire, Sint Eustatius and Saba@#$?+599">
                +599&nbsp;&nbsp; Bonaire, Sint Eustatius and Saba{" "}
              </option>
              <option value="Bosnia and Herzegovina@#$?+387">
                +387&nbsp;&nbsp; Bosnia and Herzegovina{" "}
              </option>
              <option value="Botswana@#$?+267">
                +267&nbsp;&nbsp; Botswana{" "}
              </option>
              <option value="Bouvet Island@#$?+47">
                +47&nbsp;&nbsp;&nbsp;&nbsp; Bouvet Island{" "}
              </option>
              <option value="Brazil@#$?+55">
                +55&nbsp;&nbsp;&nbsp;&nbsp; Brazil{" "}
              </option>
              <option value="British Indian Ocean Territory@#$?+246">
                +246&nbsp;&nbsp; British Indian Ocean Territory{" "}
              </option>
              <option value="Brunei Darussalam@#$?+673">
                +673&nbsp;&nbsp; Brunei Darussalam{" "}
              </option>
              <option value="Bulgaria@#$?+359">
                +359&nbsp;&nbsp; Bulgaria{" "}
              </option>
              <option value="Burkina Faso@#$?+226">
                +226&nbsp;&nbsp; Burkina Faso{" "}
              </option>
              <option value="Burundi@#$?+257">+257&nbsp;&nbsp; Burundi </option>
              <option value="Cambodia@#$?+855">
                +855&nbsp;&nbsp; Cambodia{" "}
              </option>
              <option value="Cameroon@#$?+237">
                +237&nbsp;&nbsp; Cameroon{" "}
              </option>
              <option value="Canary Islands@#$?+34">
                +34&nbsp;&nbsp;&nbsp;&nbsp; Canary Islands{" "}
              </option>
              <option value="Cape Verde@#$?+238">
                +238&nbsp;&nbsp; Cape Verde{" "}
              </option>
              <option value="Cayman Islands-1@#$?+1">
                +1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cayman Islands-1
              </option>
              <option value="Cayman Islands-345@#$?+345">
                +345&nbsp;&nbsp; Cayman Islands-345{" "}
              </option>
              <option value="Central African Republic@#$?+236">
                +236&nbsp;&nbsp; Central African Republic
              </option>
              <option value="Chad@#$?+235">+235&nbsp;&nbsp; Chad </option>
              <option value="Chile@#$?+56">
                +56&nbsp;&nbsp;&nbsp;&nbsp; Chile{" "}
              </option>
              <option value="China@#$?+86">
                +86&nbsp;&nbsp;&nbsp;&nbsp; China{" "}
              </option>
              <option value="Christmas Island@#$?+61">
                +61&nbsp;&nbsp;&nbsp;&nbsp; Christmas Island{" "}
              </option>
              <option value="Cocos-Keeling Islands@#$?+61">
                +61&nbsp;&nbsp;&nbsp;&nbsp; Cocos-Keeling Islands
              </option>
              <option value="Colombia@#$?+57">
                +57&nbsp;&nbsp;&nbsp;&nbsp; Colombia{" "}
              </option>
              <option value="Comoros@#$?+269">+269&nbsp;&nbsp; Comoros </option>
              <option value="Congo@#$?+242">+242&nbsp;&nbsp; Congo </option>
              <option value="Cook Islands@#$?+682">
                +682&nbsp;&nbsp; Cook Islands{" "}
              </option>
              <option value="Costa Rica@#$?+506">
                +506&nbsp;&nbsp; Costa Rica{" "}
              </option>
              <option value="Cote D'Ivoire@#$?+225">
                +225&nbsp;&nbsp; Cote D'Ivoire{" "}
              </option>
              <option value="Croatia@#$?+385">+385&nbsp;&nbsp; Croatia </option>
              <option value="Cuba@#$?+53">
                +53&nbsp;&nbsp;&nbsp;&nbsp; Cuba{" "}
              </option>
              <option value="Curacao@#$?+358">+358&nbsp;&nbsp; Curacao </option>
              <option value="Cyprus@#$?+357">+357&nbsp;&nbsp; Cyprus </option>
              <option value="Czech Republic@#$?+420">
                +420&nbsp;&nbsp; Czech Republic{" "}
              </option>
              <option value="Democratic Republic of Congo@#$?+243">
                +243&nbsp;&nbsp; Democratic Republic of Congo{" "}
              </option>
              <option value="Denmark@#$?+45">
                +45&nbsp;&nbsp;&nbsp;&nbsp; Denmark{" "}
              </option>
              <option value="Djibouti@#$?+253">
                +253&nbsp;&nbsp; Djibouti{" "}
              </option>
              <option value="Dominica-1@#$?+1">
                +1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Dominica-1{" "}
              </option>
              <option value="Dominica-767@#$?+767">
                +767&nbsp;&nbsp; Dominica-767{" "}
              </option>
              <option value="Dominican Republic-1@#$?+1">
                +1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Dominican Republic-1{" "}
              </option>
              <option value="Dominican Republic-809@#$?+809">
                +809&nbsp;&nbsp; Dominican Republic-809{" "}
              </option>
              <option value="Dominican Republic-829@#$?+829">
                +829&nbsp;&nbsp; Dominican Republic-829{" "}
              </option>
              <option value="Dominican Republic-849@#$?+849">
                +849&nbsp;&nbsp; Dominican Republic-849{" "}
              </option>
              <option value="East Timor@#$?+670">
                +670&nbsp;&nbsp; East Timor{" "}
              </option>
              <option value="Ecuador@#$?+593">+593&nbsp;&nbsp; Ecuador </option>
              <option value="Egypt@#$?+20">
                +20&nbsp;&nbsp;&nbsp;&nbsp; Egypt{" "}
              </option>
              <option value="El Salvador@#$?+503">
                +503&nbsp;&nbsp; El Salvador{" "}
              </option>
              <option value="Equatorial Guinea@#$?+240">
                +240&nbsp;&nbsp; Equatorial Guinea{" "}
              </option>
              <option value="Eritrea@#$?+291">+291&nbsp;&nbsp; Eritrea </option>
              <option value="Estonia@#$?+372">+372&nbsp;&nbsp; Estonia </option>
              <option value="Ethiopia@#$?+251">
                +251&nbsp;&nbsp; Ethiopia{" "}
              </option>
              <option value="Falkland Islands-Malvinas@#$?+500">
                +500&nbsp;&nbsp; Falkland Islands-Malvinas
              </option>
              <option value="Faroe Islands@#$?+298">
                +298&nbsp;&nbsp; Faroe Islands{" "}
              </option>
              <option value="Federated States of Micronesia@#$?+691">
                +691&nbsp;&nbsp; Federated States of Micronesia{" "}
              </option>
              <option value="Fiji@#$?+679">+679&nbsp;&nbsp; Fiji </option>
              <option value="Finland@#$?+358">+358&nbsp;&nbsp; Finland </option>
              <option value="France-Metropolitan@#$?+33">
                +33&nbsp;&nbsp;&nbsp;&nbsp; France-Metropolitan
              </option>
              <option value="French Guiana@#$?+594">
                +594&nbsp;&nbsp; French Guiana{" "}
              </option>
              <option value="French Polynesia@#$?+689">
                +689&nbsp;&nbsp; French Polynesia{" "}
              </option>
              <option value="French Southern Territories@#$?+262">
                +262&nbsp;&nbsp; French Southern Territories
              </option>
              <option value="FYROM@#$?+389">+389&nbsp;&nbsp; FYROM </option>
              <option value="Gabon@#$?+241">+241&nbsp;&nbsp; Gabon </option>
              <option value="Gambia@#$?+220">+220&nbsp;&nbsp; Gambia </option>
              <option value="Georgia@#$?+995">+995&nbsp;&nbsp; Georgia </option>
              <option value="Germany@#$?+49">
                +49&nbsp;&nbsp;&nbsp;&nbsp; Germany{" "}
              </option>
              <option value="Ghana@#$?+233">+233&nbsp;&nbsp; Ghana </option>
              <option value="Gibraltar@#$?+350">
                +350&nbsp;&nbsp; Gibraltar{" "}
              </option>
              <option value="Greece@#$?+30">
                +30&nbsp;&nbsp;&nbsp;&nbsp; Greece{" "}
              </option>
              <option value="Greenland@#$?+299">
                +299&nbsp;&nbsp; Greenland{" "}
              </option>
              <option value="Grenada-1@#$?+1">
                +1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Grenada-1{" "}
              </option>
              <option value="Grenada-473@#$?+473">
                +473&nbsp;&nbsp; Grenada-473{" "}
              </option>
              <option value="Guadeloupe@#$?+590">
                +590&nbsp;&nbsp; Guadeloupe{" "}
              </option>
              <option value="Guam-1@#$?+1">
                +1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Guam-1{" "}
              </option>
              <option value="Guam-671@#$?+671">
                +671&nbsp;&nbsp; Guam-671{" "}
              </option>
              <option value="Guatemala@#$?+502">
                +502&nbsp;&nbsp; Guatemala{" "}
              </option>
              <option value="Guernsey-44@#$?+44">
                +44&nbsp;&nbsp;&nbsp;&nbsp; Guernsey-44{" "}
              </option>
              <option value="Guernsey-1481@#$?+1481">
                +1481undefined Guernsey-1481{" "}
              </option>
              <option value="Guinea@#$?+224">+224&nbsp;&nbsp; Guinea </option>
              <option value="Guinea-Bissau@#$?+245">
                +245&nbsp;&nbsp; Guinea-Bissau{" "}
              </option>
              <option value="Guyana@#$?+592">+592&nbsp;&nbsp; Guyana </option>
              <option value="Haiti@#$?+509">+509&nbsp;&nbsp; Haiti </option>
              <option value="Heard and Mc Donald Islands@#$?+672">
                +672&nbsp;&nbsp; Heard and Mc Donald Islands
              </option>
              <option value="Honduras@#$?+504">
                +504&nbsp;&nbsp; Honduras{" "}
              </option>
              <option value="Hong Kong@#$?+852">
                +852&nbsp;&nbsp; Hong Kong{" "}
              </option>
              <option value="Hungary@#$?+36">
                +36&nbsp;&nbsp;&nbsp;&nbsp; Hungary{" "}
              </option>
              <option value="Iceland@#$?+354">+354&nbsp;&nbsp; Iceland </option>
              <option value="India@#$?+91">
                +91&nbsp;&nbsp;&nbsp;&nbsp; India{" "}
              </option>
              <option value="Indonesia@#$?+62">
                +62&nbsp;&nbsp;&nbsp;&nbsp; Indonesia{" "}
              </option>
              <option value="Iran@#$?+98">
                +98&nbsp;&nbsp;&nbsp;&nbsp; Iran{" "}
              </option>
              <option value="Iraq@#$?+964">+964&nbsp;&nbsp; Iraq </option>
              <option value="Ireland@#$?+353">+353&nbsp;&nbsp; Ireland </option>
              <option value="Israel@#$?+972">+972&nbsp;&nbsp; Israel </option>
              <option value="Italy@#$?+39">
                +39&nbsp;&nbsp;&nbsp;&nbsp; Italy{" "}
              </option>
              <option value="Jamaica-1@#$?+1">
                +1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Jamaica-1{" "}
              </option>
              <option value="Jamaica-876@#$?+876">
                +876&nbsp;&nbsp; Jamaica-876{" "}
              </option>
              <option value="Japan@#$?+81">
                +81&nbsp;&nbsp;&nbsp;&nbsp; Japan{" "}
              </option>
              <option value="Jersey-44@#$?+44">
                +44&nbsp;&nbsp;&nbsp;&nbsp; Jersey-44{" "}
              </option>
              <option value="Jersey-1534@#$?+1534">
                +1534undefined Jersey-1534{" "}
              </option>
              <option value="Jordan@#$?+962">+962&nbsp;&nbsp; Jordan </option>
              <option value="Kazakhstan@#$?+7">
                +7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kazakhstan{" "}
              </option>
              <option value="Kenya@#$?+254">+254&nbsp;&nbsp; Kenya </option>
              <option value="Kiribati@#$?+686">
                +686&nbsp;&nbsp; Kiribati{" "}
              </option>
              <option value="Kuwait@#$?+965">+965&nbsp;&nbsp; Kuwait </option>
              <option value="Kyrgyzstan@#$?+996">
                +996&nbsp;&nbsp; Kyrgyzstan{" "}
              </option>
              <option value="Laos@#$?+856">+856&nbsp;&nbsp; Laos </option>
              <option value="Latvia@#$?+371">+371&nbsp;&nbsp; Latvia </option>
              <option value="Lebanon@#$?+961">+961&nbsp;&nbsp; Lebanon </option>
              <option value="Lesotho@#$?+266">+266&nbsp;&nbsp; Lesotho </option>
              <option value="Liberia@#$?+231">+231&nbsp;&nbsp; Liberia </option>
              <option value="Libyan Arab Jamahiriya@#$?+218">
                +218&nbsp;&nbsp; Libyan Arab Jamahiriya{" "}
              </option>
              <option value="Liechtenstein@#$?+423">
                +423&nbsp;&nbsp; Liechtenstein{" "}
              </option>
              <option value="Lithuania@#$?+370">
                +370&nbsp;&nbsp; Lithuania{" "}
              </option>
              <option value="Luxembourg@#$?+352">
                +352&nbsp;&nbsp; Luxembourg{" "}
              </option>
              <option value="Macau@#$?+853">+853&nbsp;&nbsp; Macau </option>
              <option value="Madagascar@#$?+261">
                +261&nbsp;&nbsp; Madagascar{" "}
              </option>
              <option value="Malawi@#$?+265">+265&nbsp;&nbsp; Malawi </option>
              <option value="Maldives@#$?+960">
                +960&nbsp;&nbsp; Maldives{" "}
              </option>
              <option value="Mali@#$?+223">+223&nbsp;&nbsp; Mali </option>
              <option value="Malta@#$?+356">+356&nbsp;&nbsp; Malta </option>
              <option value="Marshall Islands@#$?+692">
                +692&nbsp;&nbsp; Marshall Islands{" "}
              </option>
              <option value="Martinique@#$?+596">
                +596&nbsp;&nbsp; Martinique{" "}
              </option>
              <option value="Mauritania@#$?+222">
                +222&nbsp;&nbsp; Mauritania{" "}
              </option>
              <option value="Mauritius@#$?+230">
                +230&nbsp;&nbsp; Mauritius{" "}
              </option>
              <option value="Mayotte@#$?+262">+262&nbsp;&nbsp; Mayotte </option>
              <option value="Mexico@#$?+52">
                +52&nbsp;&nbsp;&nbsp;&nbsp; Mexico{" "}
              </option>
              <option value="Monaco@#$?+377">+377&nbsp;&nbsp; Monaco </option>
              <option value="Mongolia@#$?+976">
                +976&nbsp;&nbsp; Mongolia{" "}
              </option>
              <option value="Montenegro@#$?+382">
                +382&nbsp;&nbsp; Montenegro{" "}
              </option>
              <option value="Montserrat-1@#$?+1">
                +1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Montserrat-1{" "}
              </option>
              <option value="Montserrat-664@#$?+664">
                +664&nbsp;&nbsp; Montserrat-664{" "}
              </option>
              <option value="Morocco@#$?+212">+212&nbsp;&nbsp; Morocco </option>
              <option value="Mozambique@#$?+258">
                +258&nbsp;&nbsp; Mozambique{" "}
              </option>
              <option value="Myanmar@#$?+95">
                +95&nbsp;&nbsp;&nbsp;&nbsp; Myanmar{" "}
              </option>
              <option value="Namibia@#$?+264">+264&nbsp;&nbsp; Namibia </option>
              <option value="Nauru@#$?+674">+674&nbsp;&nbsp; Nauru </option>
              <option value="Nepal@#$?+977">+977&nbsp;&nbsp; Nepal </option>
              <option value="Netherlands@#$?+31">
                +31&nbsp;&nbsp;&nbsp;&nbsp; Netherlands{" "}
              </option>
              <option value="Netherlands Antilles@#$?+599">
                +599&nbsp;&nbsp; Netherlands Antilles{" "}
              </option>
              <option value="New Caledonia@#$?+687">
                +687&nbsp;&nbsp; New Caledonia{" "}
              </option>
              <option value="Nicaragua@#$?+505">
                +505&nbsp;&nbsp; Nicaragua{" "}
              </option>
              <option value="Niger@#$?+227">+227&nbsp;&nbsp; Niger </option>
              <option value="Nigeria@#$?+234">+234&nbsp;&nbsp; Nigeria </option>
              <option value="Niue@#$?+683">+683&nbsp;&nbsp; Niue </option>
              <option value="Norfolk Island@#$?+672">
                +672&nbsp;&nbsp; Norfolk Island{" "}
              </option>
              <option value="North Korea@#$?+850">
                +850&nbsp;&nbsp; North Korea{" "}
              </option>
              <option value="Northern Mariana Islands-1@#$?+1">
                +1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Northern Mariana
                Islands-1{" "}
              </option>
              <option value="Northern Mariana Islands-670@#$?+670">
                +670&nbsp;&nbsp; Northern Mariana Islands-670{" "}
              </option>
              <option value="Norway@#$?+47">
                +47&nbsp;&nbsp;&nbsp;&nbsp; Norway{" "}
              </option>
              <option value="Oman@#$?+968">+968&nbsp;&nbsp; Oman </option>
              <option value="Pakistan@#$?+92">
                +92&nbsp;&nbsp;&nbsp;&nbsp; Pakistan{" "}
              </option>
              <option value="Palau@#$?+680">+680&nbsp;&nbsp; Palau </option>
              <option value="Palestinian Territory, Occupied@#$?+970">
                +970&nbsp;&nbsp; Palestinian Territory, Occupied{" "}
              </option>
              <option value="Panama@#$?+507">+507&nbsp;&nbsp; Panama </option>
              <option value="Papua New Guinea@#$?+675">
                +675&nbsp;&nbsp; Papua New Guinea{" "}
              </option>
              <option value="Paraguay@#$?+595">
                +595&nbsp;&nbsp; Paraguay{" "}
              </option>
              <option value="Peru@#$?+51">
                +51&nbsp;&nbsp;&nbsp;&nbsp; Peru{" "}
              </option>
              <option value="Philippines@#$?+63">
                +63&nbsp;&nbsp;&nbsp;&nbsp; Philippines{" "}
              </option>
              <option value="Pitcairn@#$?+64">
                +64&nbsp;&nbsp;&nbsp;&nbsp; Pitcairn{" "}
              </option>
              <option value="Poland@#$?+48">
                +48&nbsp;&nbsp;&nbsp;&nbsp; Poland{" "}
              </option>
              <option value="Portugal@#$?+351">
                +351&nbsp;&nbsp; Portugal{" "}
              </option>
              <option value="Puerto Rico-1@#$?+1">
                +1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Puerto Rico-1
              </option>
              <option value="Puerto Rico-1-787-787@#$?+787">
                +787&nbsp;&nbsp; Puerto Rico-1-787-787{" "}
              </option>
              <option value="Puerto Rico-1-939-939@#$?+939">
                +939&nbsp;&nbsp; Puerto Rico-1-939-939{" "}
              </option>
              <option value="Qatar@#$?+974">+974&nbsp;&nbsp; Qatar </option>
              <option value="Republic of Korea@#$?+82">
                +82&nbsp;&nbsp;&nbsp;&nbsp; Republic of Korea{" "}
              </option>
              <option value="Republic of Moldova@#$?+373">
                +373&nbsp;&nbsp; Republic of Moldova{" "}
              </option>
              <option value="Reunion@#$?+262">+262&nbsp;&nbsp; Reunion </option>
              <option value="Romania@#$?+40">
                +40&nbsp;&nbsp;&nbsp;&nbsp; Romania{" "}
              </option>
              <option value="Russian Federation@#$?+7">
                +7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Russian Federation{" "}
              </option>
              <option value="Rwanda@#$?+250">+250&nbsp;&nbsp; Rwanda </option>
              <option value="Saint Kitts and Nevis-1@#$?+1">
                +1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Saint Kitts and Nevis-1{" "}
              </option>
              <option value="Saint Kitts and Nevis-869@#$?+869">
                +869&nbsp;&nbsp; Saint Kitts and Nevis-869
              </option>
              <option value="Saint Lucia-1@#$?+1">
                +1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Saint Lucia-1
              </option>
              <option value="Saint Lucia-758@#$?+758">
                +758&nbsp;&nbsp; Saint Lucia-758{" "}
              </option>
              <option value="Saint Vincent and the Grenadines-1@#$?+1">
                +1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Saint Vincent and the
                Grenadines-1{" "}
              </option>
              <option value="Saint Vincent and the Grenadines-784@#$?+784">
                +784&nbsp;&nbsp; Saint Vincent and the Grenadines-784{" "}
              </option>
              <option value="Samoa@#$?+685">+685&nbsp;&nbsp; Samoa </option>
              <option value="San Marino@#$?+378">
                +378&nbsp;&nbsp; San Marino{" "}
              </option>
              <option value="Sao Tome and Principe@#$?+239">
                +239&nbsp;&nbsp; Sao Tome and Principe{" "}
              </option>
              <option value="Saudi Arabia@#$?+966">
                +966&nbsp;&nbsp; Saudi Arabia{" "}
              </option>
              <option value="Senegal@#$?+221">+221&nbsp;&nbsp; Senegal </option>
              <option value="Serbia@#$?+381">+381&nbsp;&nbsp; Serbia </option>
              <option value="Seychelles@#$?+248">
                +248&nbsp;&nbsp; Seychelles{" "}
              </option>
              <option value="Sierra Leone@#$?+232">
                +232&nbsp;&nbsp; Sierra Leone{" "}
              </option>
              <option value="Singapore@#$?+65">
                +65&nbsp;&nbsp;&nbsp;&nbsp; Singapore{" "}
              </option>
              <option value="Slovak Republic@#$?+421">
                +421&nbsp;&nbsp; Slovak Republic{" "}
              </option>
              <option value="Slovenia@#$?+386">
                +386&nbsp;&nbsp; Slovenia{" "}
              </option>
              <option value="Solomon Islands@#$?+677">
                +677&nbsp;&nbsp; Solomon Islands{" "}
              </option>
              <option value="Somalia@#$?+252">+252&nbsp;&nbsp; Somalia </option>
              <option value="South Africa@#$?+27">
                +27&nbsp;&nbsp;&nbsp;&nbsp; South Africa{" "}
              </option>
              <option value="South Georgia &amp; South Sandwich Islands@#$?+500">
                +500&nbsp;&nbsp; South Georgia &amp; South Sandwich Islands{" "}
              </option>
              <option value="South Sudan@#$?+211">
                +211&nbsp;&nbsp; South Sudan{" "}
              </option>
              <option value="Spain@#$?+34">
                +34&nbsp;&nbsp;&nbsp;&nbsp; Spain{" "}
              </option>
              <option value="Sri Lanka@#$?+94">
                +94&nbsp;&nbsp;&nbsp;&nbsp; Sri Lanka{" "}
              </option>
              <option value="St. Barthelemy@#$?+590">
                +590&nbsp;&nbsp; St. Barthelemy{" "}
              </option>
              <option value="St. Helena@#$?+290">
                +290&nbsp;&nbsp; St. Helena{" "}
              </option>
              <option value="St. Martin-French part@#$?+590">
                +590&nbsp;&nbsp; St. Martin-French part{" "}
              </option>
              <option value="St. Pierre and Miquelon@#$?+508">
                +508&nbsp;&nbsp; St. Pierre and Miquelon
              </option>
              <option value="Sudan@#$?+249">+249&nbsp;&nbsp; Sudan </option>
              <option value="Suriname@#$?+597">
                +597&nbsp;&nbsp; Suriname{" "}
              </option>
              <option value="Svalbard and Jan Mayen Islands@#$?+47">
                +47&nbsp;&nbsp;&nbsp;&nbsp; Svalbard and Jan Mayen Islands{" "}
              </option>
              <option value="Swaziland@#$?+268">
                +268&nbsp;&nbsp; Swaziland{" "}
              </option>
              <option value="Sweden@#$?+46">
                +46&nbsp;&nbsp;&nbsp;&nbsp; Sweden{" "}
              </option>
              <option value="Switzerland@#$?+41">
                +41&nbsp;&nbsp;&nbsp;&nbsp; Switzerland{" "}
              </option>
              <option value="Syrian Arab Republic@#$?+963">
                +963&nbsp;&nbsp; Syrian Arab Republic{" "}
              </option>
              <option value="Taiwan@#$?+886">+886&nbsp;&nbsp; Taiwan </option>
              <option value="Tajikistan@#$?+992">
                +992&nbsp;&nbsp; Tajikistan{" "}
              </option>
              <option value="Tanzania@#$?+255">
                +255&nbsp;&nbsp; Tanzania{" "}
              </option>
              <option value="Thailand@#$?+66">
                +66&nbsp;&nbsp;&nbsp;&nbsp; Thailand{" "}
              </option>
              <option value="Togo@#$?+228">+228&nbsp;&nbsp; Togo </option>
              <option value="Tokelau@#$?+690">+690&nbsp;&nbsp; Tokelau </option>
              <option value="Tonga@#$?+676">+676&nbsp;&nbsp; Tonga </option>
              <option value="Trinidad and Tobago-1@#$?+1">
                +1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Trinidad and Tobago-1{" "}
              </option>
              <option value="Trinidad and Tobago-868@#$?+868">
                +868&nbsp;&nbsp; Trinidad and Tobago-868
              </option>
              <option value="Tunisia@#$?+216">+216&nbsp;&nbsp; Tunisia </option>
              <option value="Turkey@#$?+90">
                +90&nbsp;&nbsp;&nbsp;&nbsp; Turkey{" "}
              </option>
              <option value="Turkmenistan@#$?+993">
                +993&nbsp;&nbsp; Turkmenistan{" "}
              </option>
              <option value="Turks and Caicos Islands-1@#$?+1">
                +1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Turks and Caicos
                Islands-1{" "}
              </option>
              <option value="Turks and Caicos Islands-649@#$?+649">
                +649&nbsp;&nbsp; Turks and Caicos Islands-649{" "}
              </option>
              <option value="Tuvalu@#$?+688">+688&nbsp;&nbsp; Tuvalu </option>
              <option value="Uganda@#$?+256">+256&nbsp;&nbsp; Uganda </option>
              <option value="Ukraine@#$?+380">+380&nbsp;&nbsp; Ukraine </option>
              <option value="United States Minor Outlying Islands-1@#$?+1">
                +1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; United States Minor
                Outlying Islands-1{" "}
              </option>
              <option value="United States Minor Outlying Islands-340@#$?+340">
                +340&nbsp;&nbsp; United States Minor Outlying Islands-340{" "}
              </option>
              <option value="Uruguay@#$?+598">+598&nbsp;&nbsp; Uruguay </option>
              <option value="Uzbekistan@#$?+998">
                +998&nbsp;&nbsp; Uzbekistan{" "}
              </option>
              <option value="Vanuatu@#$?+678">+678&nbsp;&nbsp; Vanuatu </option>
              <option value="Vatican City State-Holy See@#$?+379">
                +379&nbsp;&nbsp; Vatican City State-Holy See
              </option>
              <option value="Venezuela@#$?+58">
                +58&nbsp;&nbsp;&nbsp;&nbsp; Venezuela{" "}
              </option>
              <option value="Viet Nam@#$?+84">
                +84&nbsp;&nbsp;&nbsp;&nbsp; Viet Nam{" "}
              </option>
              <option value="Virgin Islands British-1@#$?+1">
                +1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Virgin Islands British-1{" "}
              </option>
              <option value="Virgin Islands British-284@#$?+284">
                +284&nbsp;&nbsp; Virgin Islands British-284
              </option>
              <option value="Virgin Islands U.S.-1@#$?+1">
                +1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Virgin Islands U.S.-1{" "}
              </option>
              <option value="Virgin Islands U.S.-340@#$?+340">
                +340&nbsp;&nbsp; Virgin Islands U.S.-340
              </option>
              <option value="Wallis and Futuna Islands@#$?+681">
                +681&nbsp;&nbsp; Wallis and Futuna Islands
              </option>
              <option value="Western Sahara@#$?+212">
                +212&nbsp;&nbsp; Western Sahara{" "}
              </option>
              <option value="Yemen@#$?+967">+967&nbsp;&nbsp; Yemen </option>
              <option value="Zambia@#$?+260">+260&nbsp;&nbsp; Zambia </option>
              <option value="Zimbabwe@#$?+263">
                +263&nbsp;&nbsp; Zimbabwe{" "}
              </option>
            </select>
            <input type="text" placeholder="Enter Your WhatsApp Number" />{" "}
            <button className="button-submit text-center">
              {" "}
              Get Offer On WhatsApp
            </button>
          </form>
        </div>
      </section>

      <section className="testimonials">
        <div className="Container">
          <div className="heading">
            <p>Customers Testimonials (4.9/5)</p>
          </div>
          <ul className="testimonials-carousel slick-initialized slick-slider">
            {/* <button
              className="slick-prev slick-arrow slick-disabled"
              aria-label="Previous"
              type="button"
              aria-disabled="true"
            >
              Previous
            </button> */}
            <div className="slick-list draggable">
              <div
                className="slick-track"
                style={{
                  opacity: 1,
                  width: "4050px",
                  transform: "translate3d(0px, 0px, 0px)",
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <li
                    key={index}
                    className={`slick-slide ${
                      index === 0 ? "slick-current slick-active" : ""
                    }`}
                    data-slick-index={index}
                    aria-hidden={index === 0 ? "false" : "true"}
                    tabIndex={index === 0 ? 0 : -1}
                    style={{ width: "430px" }}
                  >
                    <div className="top">
                      <div className="left">
                        <strong>Order id: {testimonial.id}</strong>
                        <small>{testimonial.location}</small>
                      </div>
                      <figure>
                        <img
                          className="lazy entered loaded"
                          data-src={testimonial.ratingSrc}
                          width="90"
                          height="14"
                          alt="4.9 rating for new assignment"
                          data-ll-status="loaded"
                          src={testimonial.ratingSrc}
                        />
                      </figure>
                    </div>
                    <p className="common-scrollbar">{testimonial.text}</p>
                  </li>
                ))}
              </div>
            </div>
            {/* <button
              className="slick-next slick-arrow"
              aria-label="Next"
              type="button"
              aria-disabled="false"
            >
              Next
            </button> */}
          </ul>
        </div>
      </section>

      <div className="affa-bg-white padding-top40-sm padding-top50 padding-bottom40-sm padding-bottom50">
        {/* #pricing */}
        <div
          id="pricing"
          className="padding-top40-sm padding-top50 padding-bottom0-sm padding-bottom10"
        >
          {/* .Container */}
          <div className="Container">
            <div className="post-heading-left-conference">
              {/* heading */}
              <h2>2018 Conference Pricing</h2>
              <p>
                Donec volutpat justo lectus, vel sollicitudin sem euismod amet
                eleifend ipsum. Praesent porttitor, enim nani rhoncus interdum,
                lacus dictum enim turpis, vel luctus massa ante sed mi, donec et
                ante nunc.
              </p>
            </div>

            {/* .tbl-pricing */}
            <div className="affa-tbl-pricing-conference row">
              {experts.map((expert) => (
                <div className="col-md-4" key={expert.id}>
                  <div className="writer-box">
                    <div className="top">
                      <div className="author-info">
                        <img
                          data-src={expert.profileImage}
                          alt={expert.name}
                          className="author lazy entered loaded"
                          width="60"
                          height="60"
                          src={expert.profileImage}
                          data-ll-status="loaded"
                        />
                        <div>
                          <span>
                            {expert.name} <i>&nbsp;</i>
                          </span>
                          <img
                            data-src={expert.ratingImage}
                            alt="ratings"
                            className="reviews lazy entered loaded"
                            width="100"
                            height="16"
                            data-ll-status="loaded"
                            src={expert.ratingImage}
                          />
                        </div>
                      </div>
                      <a
                        href={expert.profileLink}
                        className="viewBtn"
                        tabIndex={0}
                      >
                        View Profile
                      </a>
                    </div>
                    <div className="subject-area common-scrollbar">
                      <a href={expert.subjectLink} tabIndex={0}>
                        {expert.subject}
                      </a>
                    </div>
                    <p
                      dangerouslySetInnerHTML={{ __html: expert.description }}
                    ></p>
                    <ul>
                      <li>
                        <i>&nbsp;</i> Experience {expert.experience}
                      </li>
                      <li>
                        <i>&nbsp;</i> {expert.completedOrders}
                      </li>
                      <li>
                        <i>&nbsp;</i> {expert.ordersInProgress}
                      </li>
                    </ul>
                    <a
                      href={expert.hireLink}
                      className="action-btn"
                      tabIndex={0}
                    >
                      Hire experts
                    </a>
                  </div>
                </div>
              ))}

              <div className="top-content padding-top40-sm padding-top50">
                <h2 className="common-heading">
                  Why Student Take New Assignment Help Over Others?
                </h2>
                <div className="inner-box">
                  <div className="left-content common-scrollbar">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: pageData.conference_pricing_text,
                      }}
                    />
                  </div>
                  <div className="right-side">
                    <div className="inner-flex">
                      <p>
                        <strong>Affordable Prices</strong> Our Writing Services
                        Start at AU$ 10
                      </p>
                    </div>
                    <div className="inner-flex">
                      <p>
                        <strong>Plagiarism Score</strong> 100% Plagiarism Free
                        Paper
                      </p>
                    </div>
                    <div className="inner-flex">
                      <p>
                        <strong>Quick Response</strong> Get Quick response For
                        your Query
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* .tbl-pricing end */}
          </div>
          {/* .Container end */}
        </div>
        {/* #pricing end */}
      </div>

      <div className="affa-bg-grey padding-top30-sm padding-top30 padding-bottom830-sm padding-bottom30">
        {/* .Container */}
        <div className="Container">
          <div className="post-heading-left">
            {/* heading */}
            <p>What is our mission?</p>
            <h2>
              <span>Leading of Business Technology</span>
            </h2>
          </div>

          {/* .row */}
          <div className="row">
            {features.map((feature) => (
              <div className="col-md-3" key={feature.id}>
                <div className="affa-feature-icon">
                  <i className={`ion ${feature.icon}`}></i>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* .row end */}

          <div className="text-center padding-top20-sm padding-top40">
            <a href="#contact" className="btn-custom btn-lg smooth-scroll">
              Contact Us
            </a>
          </div>
        </div>
        {/* .Container end */}
      </div>

      <div className="affa-bg-grey padding-top40-sm padding-top0 padding-bottom40-sm padding-bottom50">
        {/* #faqs */}
        <div
          id="faqs"
          className="padding-top40-sm padding-top50 padding-bottom10-sm padding-bottom20"
        >
          {/* .Container */}
          <div className="Container">
            <div className="post-heading-left-conference">
              {/* heading */}
              <h2>Frequently Asked Questions</h2>
              <p>
                Donec volutpat justo lectus, vel sollicitudin sem euismod amet
                eleifend ipsum. Praesent porttitor, enim nani rhoncus interdum,
                lacus dictum enim turpis, vel luctus massa ante sed mi, donec et
                ante nunc.
              </p>
            </div>

            {/* .row */}
            <div className="row">
              {faqs.slice(0, 2).map((faq) => (
                <div className="col-md-6" key={faq.id}>
                  <div className="affa-faq-conference">
                    <h4>{faq.question}</h4>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* .row end */}

            {/* .row */}
            <div className="row">
              {faqs.slice(2).map((faq) => (
                <div className="col-md-6" key={faq.id}>
                  <div className="affa-faq-conference">
                    <h4>{faq.question}</h4>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* .row end */}
          </div>
          {/* .Container end */}
        </div>
        {/* #faqs end */}
      </div>

      <div
        id="contact"
        className="affa-bg-grey bg-img padding-top80-sm padding-top100 padding-bottom40-sm padding-bottom60"
        style={{
          backgroundImage: "url(/src/assets/images/content/bg/maps.png)",
        }}
      >
        {/* .Container */}
        <div className="Container">
          {/* .row */}
          <div className="row">
            <div className="col-md-6 col-xl-5">
              <form
                method="post"
                action="#"
                className="affa-form-contact form-general"
              >
                <div className="submit-status"></div>
                <input type="text" name="name" placeholder="Your Name" />
                <input type="text" name="email" placeholder="Your Email" />
                <textarea name="message" placeholder="Your Message"></textarea>
                <div className="form-submit">
                  <input
                    type="submit"
                    name="submit"
                    className="submit-button"
                    value="Send Message"
                  />
                </div>
              </form>
            </div>

            <div className="col-md-6 offset-xl-1">
              <div className="padding-top50-lg padding-top60-xl">
                {/* text */}
                <div className="post-heading-left margin-bottom30">
                  <p>Get in touch with us</p>
                  <h2>
                    <span>Have Questions?</span>
                  </h2>
                </div>
                <p className="text-md margin-bottom30">
                  Sed imperdiet, ante in porta ultrices, orci metus consequat
                  lacus, viverra magna odio at dui. Sed id congue velit, neca
                  gravida urna. Non vestibulum magna, dapibus molestie
                  vulputate.
                </p>
                <ul className="affa-info-list margin-bottom40">
                  <li>
                    <i className="ion ion-android-pin"></i> Delhi, India
                  </li>
                  <li>
                    <i className="ion ion-ios-telephone"></i>
                    <a href="#">+62 xxxxxxxx</a>
                  </li>
                  <li>
                    <i className="ion ion-android-mail"></i>
                    <a href="#">support@.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* .row end */}
        </div>
        {/* .Container end */}
      </div>

      {/* <footer id="footer" className="footer-conference footer-landing">
        <div className="footer-nav affa-bg-color text-white">
          <div className="Container">
            <div className="footer-logo">
              <img
                src="https://myassignmentnest.com/assets/images/logo.jpg"
                alt="Logo"
              />
            </div>

            <div className="footer-copyright">
              <p>
                &copy; All Right Reserved 2018 -{" "}
                <a href="#" target="_blank" rel="noopener noreferrer">
                  myassignmentnest
                </a>
              </p>
            </div>

            <ul className="footer-socials">
              <li>
                <a href="#" title="Facebook">
                  <i className="ion ion-social-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#" title="Twitter">
                  <i className="ion ion-social-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" title="Google Plus">
                  <i className="ion ion-social-googleplus"></i>
                </a>
              </li>
              <li>
                <a href="#" title="LinkedIn">
                  <i className="ion ion-social-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#" title="Dribbble">
                  <i className="ion ion-social-dribbble"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default Location;
