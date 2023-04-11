import React, { useState } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Row,
  Col,
} from "reactstrap";
import Footer from "../components/Footer/Footer";

import Bintang from '../asset/gambar/destination-detail/bintang.png'

// import ImagePantai1 from "../asset/gambar/destination-detail/pantai1.jpg";
// import ImagePantai2 from "../asset/gambar/destination-detail/pantai2.jpg";
// import ImagePantai3 from "../asset/gambar/destination-detail/pantai3.jpg";
// import ImagePantai4 from "../asset/gambar/destination-detail/pantai4.jpg";
// import ImagePantai5 from "../asset/gambar/destination-detail/pantai5.jpg";

function DestinationDetail() {
  const [activeTab, setActiveTab] = useState("1");

  const images = [
    {
      id: 0,
      value:
        "http://localhost:3000/static/media/pantai1.f0c95705e84a37b12a50.jpg",
    },
    {
      id: 1,
      value:
        "http://localhost:3000/static/media/pantai2.b10a41a3f67644f91b63.jpg",
    },
    {
      id: 2,
      value:
        "http://localhost:3000/static/media/pantai3.26cc6c1d7c410914b5c5.jpg",
    },
    {
      id: 3,
      value:
        "http://localhost:3000/static/media/pantai4.cd382a6d47ff827f9f59.jpg",
    },
    {
      id: 4,
      value:
        "http://localhost:3000/static/media/pantai5.672bc9979bf0f9a3be47.jpg",
    },
  ];

  const [destLiked] = useState([
    {
      id: 1,
      title: "Nusa Penida",
      img: "http://localhost:3000/static/media/Rectangle%2029.babf3c981c05c4854ff3.png",
      place: "Kelungkung, Bali",
    },
    {
      id: 2,
      title: "Pulau Komodo",
      img: "http://localhost:3000/static/media/Rectangle%2029%20(1).f72446c65f789d7b7633.png",
      place: "Nusa Tenggara Timur",
    },
    {
      id: 3,
      title: "Candi Borobudur",
      img: "http://localhost:3000/static/media/Rectangle%2029%20(2).8c45d8532d00dabb566b.png",
      place: "Nusa Tenggara Timur",
    },
    {
      id: 4,
      title: "Gunung Bromo",
      img: "http://localhost:3000/static/media/Rectangle%2029%20(3).b1b1719c71b48423f996.png",
      place: "Nusa Tenggara Timur",
    },
  ]);

  const [imageSlide, setImageSlide] = useState(images[0]);

  const handleClick = (index) => {
    const slider = images[index];
    setImageSlide(slider);
  };

  const DestinationLiked = () => {
    return destLiked.map((like) => {
      return (
        <div key={like.id} className="containerImg">
          <img src={like.img} alt="..." />
          <div className="bottomLeft">
            <span>{like.title}</span>
            <br />
            {like.place}
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <div className="section-detail">
        <div className="containerSectionD">
          <div className="content">
            <div className="content1">
              <h3>Nusa Penida, Kelungkung, Bali</h3>
              <div className="location">
                <p>
                  <i className="fa-solid fa-location-dot"></i> Island/Adventure
                </p>
                <p>
                  <i className="fa-solid fa-tag"></i> Island/Adventure
                </p>
              </div>
              <div className="gallery">
                <img src={imageSlide.value} />
                <div className="flexRow">
                  {images.map((data, i) => (
                    <div className="thumnail">
                      <img
                        className={imageSlide.id == i ? "clicked" : ""}
                        key={data.id}
                        src={data.value}
                        onClick={() => handleClick(i)}
                        height="70"
                        width="100"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Nav tabs style={{ marginTop: "80px" }} justified pills>
                  <NavItem>
                    <NavLink
                      className={activeTab == "1" ? "active" : ""}
                      onClick={() => setActiveTab("1")}
                    >
                      Description
                    </NavLink>
                  </NavItem>
                  {/* <NavItem>
                    <NavLink
                      className={activeTab == "2" ? "active" : ""}
                      onClick={() => setActiveTab("2")}
                    >
                      What's Include
                    </NavLink>
                  </NavItem> */}
                </Nav>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <Row>
                      <Col
                        sm="12"
                        style={{ textAlign: "left", marginTop: "50px" }}
                      >
                        <p>
                          If you're planning a trip to Bali, you might want to
                          consider a visit to Nusa Penida. This beautiful island
                          is located southeast of Bali and is known for its
                          stunning beaches, crystal clear waters, and
                          picturesque landscapes. In this article, we'll take a
                          closer look at Nusa Penida and provide you with some
                          tips for planning your trip. <br />
                          <br />
                          The easiest way to get to Nusa Penida is to take a
                          fast boat from Sanur or Padang Bai. The journey takes
                          approximately 45 minutes to 1 hour, depending on the
                          sea conditions. You can also take a ferry from Padang
                          Bai, which is cheaper but takes longer.
                        </p>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="2">
                    <div className="panelTabs">
                      <div class="card card-body">
                        <div class="acomodation">
                          <span>
                            <i class="fa-solid fa-car"></i>Acomodation
                          </span>
                          <p>
                            Nusa Penida has a variety of accommodations to
                            choose from, ranging from budget-friendly
                            guesthouses to luxury resorts. Some popular options
                            include:
                          </p>
                          <ul>
                            <li>Semabu Hills Hotel Nusa Penida</li>
                            <li>Daphila Cottage</li>
                            <li>La Roja Bungalows</li>
                            <li>Nusa Veranda Sunset Villas & Restaurant</li>
                          </ul>
                        </div>
                        <div class="destination">
                          <span>
                            <i class="fa-solid fa-map-location"></i>Destination
                          </span>
                          <ul>
                            <li>Visit Kelingking Beach</li>
                            <li>Explore Angel's Billabong</li>
                            <li>Snorkel at Crystal Bay</li>
                            <li>Visit Broken Beach</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </TabPane>
                </TabContent>
              </div>
            </div>
            <div className="content2">
              <div className="card">
                <div className="rating">
                  <p>Destination overview</p>
                </div>
                <div className="rating">
                  <div className="content-left">
                    <h5>Nusa Penida, Bali</h5>
                    <h6>60 reviews</h6>
                  </div>
                  <div className="content-right">
                    <p>
                      <img
                        src={Bintang}
                        alt=""
                      />
                      4.5
                    </p>
                  </div>
                </div>
                <div className="rating">
                  <p>Rp. 1.000.000 / Pax</p>
                </div>
                <div>
                  <div>
                    <button>Book Now</button>
                  </div>
                  <hr />
                </div>
                <div>
                  <p>
                    Specials offer for new traveler 15 % off.
                    <br /> Valid until 5 August 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="section-most-pick">
        <div class="container">
            <div class="content1">
                <div class="content-left">
                    <p style={{color:'#FD7B38'}}>Related</p>
                    <h3>Destination may you liked</h3>
                </div>
            </div>
            <div class="content2">
                <div class="gambar">
                    <img src='http://localhost:3000/static/media/Rectangle%2029.babf3c981c05c4854ff3.png' alt="..."/>
                    <h5></h5>
                    <p> <span>Nusa Penida</span> <br/> Kelungkung, Bali</p>
                </div>
                <div class="gambar">
                    <img src='http://localhost:3000/static/media/Rectangle%2029%20(1).f72446c65f789d7b7633.png' alt=""/>
                    <h5></h5>
                    <p> <span>Nusa Penida</span> <br/> Kelungkung, Bali</p>
                </div>
                <div class="gambar">
                    <img src='http://localhost:3000/static/media/Rectangle%2029%20(2).8c45d8532d00dabb566b.png' alt=""/>
                    <h5></h5>
                    <p> <span>Nusa Penida</span> <br/> Kelungkung, Bali</p>
                </div>
                <div class="gambar">
                    <img src='http://localhost:3000/static/media/Rectangle%2029%20(3).b1b1719c71b48423f996.png' alt=""/>
                    <h5></h5>
                    <p> <span>Nusa Penida</span> <br/> Kelungkung, Bali</p>
                </div>
            </div>
        </div>
    </div>

        <div class="section-your-help">
          <form action="" style={{ marginTop: "30px" }}>
            <div class="wrap">
              <div class="your-help">
                <h2>Need our help?</h2>
                <p>Contact us freely to get any information you need</p>
              </div>
              <div class="content1">
                <div class="content-left">
                  <div>
                    <label for="username">First name</label>
                  </div>
                  <div>
                    {" "}
                    <input type="text" />
                  </div>
                </div>
                <div class="content-right">
                  <div>
                    <label for="Company-name">Last name</label>
                  </div>
                  <div>
                    {" "}
                    <input type="text" />
                  </div>
                </div>
              </div>
              <div class="content-bottom">
                <div>
                  <label for="Company-address">Email</label>
                </div>
                <div>
                  {" "}
                  <input type="text" />
                </div>
                <div>
                  <label for="PIC number">Phone number</label>
                </div>
                <div>
                  {" "}
                  <input type="text" />
                </div>
                <div>
                  <label for="Request service">Message</label>
                </div>
                <div>
                  {" "}
                  <input type="text" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default DestinationDetail;
