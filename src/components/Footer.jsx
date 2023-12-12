import {
  FacebookLogo,
  YoutubeLogo,
  InstagramLogo,
  TwitterLogo,
  WhatsappLogo,
} from 'phosphor-react'

export default function Footer() {
  return (
    <>
      <section
        className="info_section layout_padding text-center mt-5"
        style={{ backgroundColor: '#FFE5B4', minHeight: '28vh' }}
      >
        <div className="container ">
          <div className="row">
            <div className="col-md-12">
              <div className="social_container ">
                <h5 style={{ letterSpacing: '4px' }}>Follow Us</h5>
              </div>
              <div className="subscribe_container d-flex justify-content-center">
                <div className="d-flex flex-row gap-3 mt-4 ">
                  <a
                    href="https://facebook.com/profile.php?id=61553554215020"
                    target="_blank"
                  >
                    <FacebookLogo size={45} weight="fill" color="black" />
                  </a>
                  <a
                    href="https://www.youtube.com/@AgarwalsKitchen143"
                    target="_blank"
                  >
                    <YoutubeLogo size={45} weight="fill" color="black" />
                  </a>
                  <a
                    href="https://instagram.com/kitchenagarwals?igshid=ZDc4ODBmNjlmNQ=="
                    target="_blank"
                  >
                    <InstagramLogo size={45} weight="fill" color="black" />
                  </a>
                  <a href="">
                    <TwitterLogo size={45} weight="fill" color="black" />
                  </a>
                  <a
                    href="https://whatsapp.com/channel/0029VaF0yacHwXb72bq3Po15"
                    target="_blank"
                  >
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
  )
}
