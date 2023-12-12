import { useNavigate } from 'react-router-dom'

export default function Card({ details }) {
  const navigate = useNavigate()
  return (
    <div className="row layout_padding2 res-card">
      <div className="col-md-8 ">
        <div className="fruit_detail-box">
          <h3 className="my-4 ">{details.title}</h3>
          <div className=" mb-2">
            <p>
              {details.process && details.process.slice(0, 90)}
              <br />
              ...
            </p>
          </div>
          <div className="button-wrapper-card">
            <button
              href=""
              className="custom_dark-btn "
              onClick={() => navigate(`/recipes/${details.id}`)}
            >
              See more
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-4 d-flex justify-content-center align-items-center">
        <div className="fruit_img-box d-flex justify-content-center align-items-center">
          <iframe
            width="300"
            src={details.link}
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
