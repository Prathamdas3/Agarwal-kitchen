import {
  FacebookLogo,
  YoutubeLogo,
  InstagramLogo,
  TwitterLogo,
  WhatsappLogo,
} from 'phosphor-react';

export default function Footer() {
  return (
    <>
      <section
        className="info_section layout_padding text-center mt-5"
        style={{ backgroundColor: '#FFE5B4' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="social_container ">
                <h5 style={{ letterSpacing: '4px' }}>Follow Us</h5>
              </div>
              <div className="subscribe_container d-flex justify-content-center">
                <div className="d-flex flex-row gap-3 mt-4 ">
                  <a href="">
                    <FacebookLogo size={45} weight="fill" color="black" />
                  </a>
                  <a href="">
                    <YoutubeLogo size={45} weight="fill" color="black" />
                  </a>
                  <a href="">
                    <InstagramLogo size={45} weight="fill" color="black" />
                  </a>
                  <a href="">
                    <TwitterLogo size={45} weight="fill" color="black" />
                  </a>
                  <a href="">
                    <WhatsappLogo size={45} weight="fill" color="black" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid footer_section">
        <p>Copyright &copy; 2023 Agarwal's Kitchen. All Rights Reserved By</p>
      </section>
    </>
  );
}
