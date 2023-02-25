// Nest Grocerry landing page or home page component
import React from "react";
import {
  MDBContainer,
  MDBCard,
  MDBBtn,
  MDBRow,
  MDBNavbar,
} from "mdb-react-ui-kit";
import hotDelas from "./HotDeals";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <React.Fragment>
      {/* <MDBContainer className='bg-dark p-5 mt-5'>
            <h1 className='text-center text-danger mt-5'>This is a Nest Grocerry</h1>
            </MDBContainer> */}

      {/* <MDBContainer breakpoint="sm">100% wide until small breakpoint</MDBContainer>
      <MDBContainer breakpoint="md">100% wide until medium breakpoint</MDBContainer>
      <MDBContainer breakpoint="lg">100% wide until large breakpoint</MDBContainer>
      <MDBContainer breakpoint="xl">100% wide until extra large breakpoint</MDBContainer>
      <MDBContainer breakpoint="xxl">100% wide until extra extra large breakpoint</MDBContainer> */}

      {/* <MDBContainer fluid className='bg-secondary shadow mt-0 p-5'>
        <h1 className='text-center text-white'>Hi</h1>
      </MDBContainer> */}

      {/* <MDBContainer fluid className='bg-secondary shadow mt-0 p-5'>
                <h1 className='text-center text-white'>MDB mdule</h1>
                <MDBRow>
                <MDBCard className='card col-md-3 m-5'>
                    <div className='card-header bg-info text-white'>Mens clothes  <MDBBtn className='float-end btn-sm'>ViewMore</MDBBtn> </div>
                    <div className='card-body'>

                        <p className='text-dark'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore necessitatibus minus earum, quaerat exercitationem facilis similique, doloremque officia aperiam nisi officiis omnis? Similique suscipit laborum expedita odit alias placeat magni.</p>

                    </div>
                    <div className='card-footer text-center'>copyright@2022</div>

                </MDBCard>

                <MDBCard className='card col-md-3 m-5'>
                    <div className='card-header bg-info text-white'>Mens clothes  <MDBBtn className='float-end btn-sm'>ViewMore</MDBBtn> </div>
                    <div className='card-body'>

                        <p className='text-dark'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore necessitatibus minus earum, quaerat exercitationem facilis similique, doloremque officia aperiam nisi officiis omnis? Similique suscipit laborum expedita odit alias placeat magni.</p>

                    </div>
                    <div className='card-footer text-center'>copyright@2022</div>

                </MDBCard>

                <MDBCard className='card col-md-3 m-5'>
                    <div className='card-header bg-info text-white'>Mens clothes  <MDBBtn className='float-end btn-sm'>ViewMore</MDBBtn> </div>
                    <div className='card-body'>

                        <p className='text-dark' style={{textAlign:"left"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore necessitatibus minus earum, quaerat exercitationem facilis similique, doloremque officia aperiam nisi officiis omnis? Similique suscipit laborum expedita odit alias placeat magni.</p>

                    </div>
                    <div className='card-footer text-center'>copyright@2022</div>

                </MDBCard>
              </MDBRow>
            </MDBContainer> */}

      {/* nest grocery app landing page start here */}

      {/* header start here */}
      <MDBContainer fluid className="p-2 pb-0 m-0">
        <MDBRow>
          <div className="col-md-3 ms-5">
            <a href="">About</a> | <a href="">contact us</a> |{" "}
            <a href=""> Order tracking</a>
          </div>
          <div className="col-md-3">
            Get great devices upto 50%{" "}
            <a href="" className="text-success">
              {" "}
              view details{" "}
            </a>
          </div>
          <div className="col-md-5">
            Need help ? | call us{" "}
            <b className="text-success">(+91)-9173357217</b>{" "}
            <i className="bi bi-c-circle"></i>{" "}
            <select name="language" className="border-0 bg-light">
              <option value="">English</option>
              <option value="">HINDI</option>
            </select>{" "}
            |{" "}
            <select name="language" className="border-0 bg-light">
              <option value="">USD</option>
              <option value="">INR</option>
            </select>
          </div>
          <hr className="border border-1 border-dark mt-1" />
        </MDBRow>

        <MDBRow>
          <div className="col-md-2 ms-5 logo pb-0">
            <a href="" className="navbar-brand text-success">
              NestBeans
            </a>
          </div>

          <div className="col-md-5 ms-0 mt-3">
            <form>
              <div className="input-group">
                <input
                  type="text"
                  name="search"
                  placeholder="Search"
                  className="form-control"
                />
                <span className="input-group-text text-dark">
                  <i className="bi bi-search text-dark"></i>
                </span>
              </div>
            </form>
          </div>
          <div className="col-md-4 mt-3 p-2">
            <select name="language" className="border-0 bg-light">
              <option value="">Locations</option>
              <option value="">Gujrat</option>
            </select>

            <a href="">
              <i className="fas fa-refresh fa-lg"></i>
              <span className="badge bg-danger badge-notification">0</span>
              <span className="text-dark ms-2">compare</span>
            </a>

            <a href="" className="ms-3">
              <i className="fas fa-cart-shopping fa-lg"></i>
              <span className="badge bg-success badge-notification">0</span>
              <span className="text-dark ms-2">wishlist</span>
            </a>
            <a href="Cart.html" target="_blank" className="ms-1">
              <i className="fas fa-shopping-bag fa-lg"></i>
              <span className="badge bg-success badge-notification">0</span>
              <span className="text-dark ms-2">cart</span>
            </a>

            <a href="" className="ms-1">
              <i className="fas fa-users fa-lg"></i>
              <span className="text-dark ms-2">Account</span>
            </a>
          </div>

          <hr className="border border-1 border-dark mt-1" />
        </MDBRow>
      </MDBContainer>
      {/* navbar start here */}
      <MDBNavbar className="navbar navbar-expand-lg p-2">
        <MDBBtn type="button" className="ms-5 btn btn-sm btn-outline-dark">
          Nest All Categories
        </MDBBtn>

        <MDBBtn
          type="button"
          className="navbar-toggler ms-5 btn btn-outline-btn-dark"
          data-bs-toggle="collapse"
          data-bs-target="#btnColl"
        >
          <i className="bi bi-grid-3x3"></i>
        </MDBBtn>
        <div className="collapse navbar-collapse" id="btnColl">
          <ul className="navbar-link">
            <Link to={"HotDeals"}>
              <li>Hot Deals</li>
            </Link>
            <li>
              <a href="">Home</a>
            </li>
            <li className="dropdown">
              <a className="dropdown-toggle" data-bs-toggle="dropdown" href="#">
                About
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="">Who we are ?</a>
                </li>
                <li>
                  <a href="">Chairman Messages</a>
                </li>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Our Locations</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="">Vendors</a>
            </li>
            <li>
              <a href="">OurMenu</a>
            </li>
            <li>
              <a href="">Blogs</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Ourservices</a>
            </li>
            <li className="ms-5">
              <b>
                <i className="bi bi-phone"></i>1800-95955
              </b>
            </li>
          </ul>
        </div>
        <hr className="border border-1 border-dark mt-1" />
      </MDBNavbar>
      {/* slider start here */}

      <div
        id="carouselExampleCaptions"
        className="carousel slide mt-2"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.pexels.com/photos/13691977/pexels-photo-13691977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/13945391/pexels-photo-13945391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/5751895/pexels-photo-5751895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* content start here*/}
      <MDBContainer fluid className="content p-2"></MDBContainer>
      {/* footer start here */}
      <MDBContainer fluid className="footer p-2"></MDBContainer>
    </React.Fragment>
  );
}
