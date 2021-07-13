import React, {useState} from "react";
import Slick from "react-slick";
import PropTypes from "prop-types";

const ImagesZoom = ({images, onClose}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return(
    <div>
      <header>
        <h1>상세이미지</h1>
        <button onClick={onClose}>x</button>
      </header>
      <div>
        <div>
          <Slick
          initialSlide={0}
          afterChange={(slide) => setCurrentSlide(slide)}
          infinite
          arrows={false}
          slidesToShow={1}
          slidesToScroll={1}
          >
            {images.map((v) => (
              <div key={v.src}>
                <img src={v.src} alt={v.src} />
              </div>
            ))}
          </Slick>
        </div>
      </div>
    </div>
  )
}

ImagesZoom.propTypes = {
  images: PropTypes.object.isRequired,
  onClose: PropTypes.arrayOf.isRequired,
}
