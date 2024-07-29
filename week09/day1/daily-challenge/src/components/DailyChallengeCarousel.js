import { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class DailyChalleneCarousel extends Component {
  render() {
    const { images } = this.props;

    return (
      <Carousel>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img.url} alt={img.name} />
            <p className="legend">{img.name}</p>
          </div>
        ))}
      </Carousel>
    );
  }
}

export default DailyChalleneCarousel;
