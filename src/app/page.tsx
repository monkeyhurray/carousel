import Carousel from '@/components/Carousel';
import ImageCarousel from '@/components/ImageCarousel';
// import InfinityCarousel from '@/components/InfinityCarousel';

const Home = () => {
  return (
    <div className="carousel-main">
      <ImageCarousel />
      <Carousel />
      {/* <InfinityCarousel /> */}
    </div>
  );
};

export default Home;
