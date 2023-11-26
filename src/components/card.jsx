import { useNavigate } from 'react-router-dom';
import Demo from '../assets/Images/tasty-image.png';

export default function Card() {
  const navigate = useNavigate();
  return (
    <div className="row layout_padding2">
      <div className="col-md-8">
        <div className="fruit_detail-box">
          <h3>Best Fresh Orange</h3>
          <p className="mt-4 mb-5">
            but the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be
          </p>
          <div>
            <button
              href=""
              className="custom_dark-btn "
              onClick={() => navigate(`/recipes/${id}`)}
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
            src="https://www.youtube.com/embed/WyYzlzjHcgc?si=maeNOOcuxlBF7oKb"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          ;
        </div>
      </div>
    </div>
  );
}
