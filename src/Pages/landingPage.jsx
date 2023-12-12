import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useRecipeContextProvider } from '../context/RecipeContext'
import Test from '../assets/Images/test_image.jpg'
import Hero from '../assets/Images/hero_image.svg'
import Card from '../components/card'
import Footer from '../components/Footer'

const landingPage = () => {
  const { allData } = useRecipeContextProvider()
  const selectedData = [allData[0], allData[1], allData[2]]

  return (
    <>
      <Navbar />
      <div className="hero_area ">
        <section className=" slider_section position-relative">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner ">
              <div className="carousel-item active">
                <div className="slider_item-box">
                  <div className="slider_item-container">
                    <div className="container ">
                      <div className="row">
                        <div className="col-md-7 ">
                          <div className="slider_item-detail">
                            <div>
                              <h1>
                                Welcome to <br />
                                Agarwal's Kitchen
                              </h1>
                              <p
                                style={{
                                  textAlign: 'justify',
                                  wordWrap: 'break-word',
                                }}
                              >
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don't look even slightly
                                believable.
                              </p>
                              <div className="d-flex">
                                <Link to="/recipes">
                                  <button className="text-uppercase custom_orange-btn mr-3 btn ">
                                    Get Started
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="slider_img-box">
                            <div>
                              <img src={Hero} alt="" className="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* New videos Start */}

      <section className="fruit_section mt-3">
        <div className="container">
          <h2 className="custom_heading mt-5 ">Recent Recipes</h2>
          {selectedData.map(
            (data) => data && <Card key={data.id} details={data} />
          )}
        </div>
      </section>

      {/* New video end */}

      {/* About section start */}

      <section className="container my-5  ">
        <h2 className=" fw-bolder pb-5">About Me</h2>

        <div className="d-flex gap-5 justify-content-between flex-fill flex-wrap-reverse flex-md-nowrap">
          <div className="pt-5">
            <p style={{ textAlign: 'justify' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              facere laudantium ea soluta sed voluptatem dolorem eos ab porro
              quaerat, suscipit, optio cum voluptates, dolorum magni quisquam.
              Unde, accusantium nisi. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Aliquam fuga cupiditate mollitia atque eaque
              voluptates animi ipsam incidunt quam quia molestiae beatae natus
              sapiente, nihil praesentium ipsa reprehenderit tempora id! Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod
              voluptas atque, eum necessitatibus doloribus reiciendis
              repudiandae, ut ipsam ipsum beatae iusto modi voluptate odit alias
              ratione cumque officia molestiae?
            </p>
          </div>
          <div className=" justify-content-end ps-5 d-flex align-items-center p-14 landing-image">
            <img src={Test} alt="About me" width={250} height={300} />
          </div>
        </div>
      </section>

      {/* About section end */}

      <Footer />
    </>
  )
}

export default landingPage
