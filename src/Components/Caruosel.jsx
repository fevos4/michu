import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";


const Carousel = (props) => {
  const leftScrollHandler = () => {
    scrollhandler("left", 5, 270, 500);
  };

  const rightScrollHandler = () => {
    scrollhandler("right", 5, 270, 500);
  };
  const scrollhandler = (direction, speed, distance, step) => {
    var element = document.getElementById("containerSlide");
    let scrollAmount = 0;
    var slideTimer = setInterval(function () {
      if (direction === "left") {
        element.scrollLeft -= step;
      } else {
        element.scrollLeft += step;
      }

      scrollAmount += step;
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }
    }, speed);
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-full max-w-[1588px] flex justify-center space-x-1 sm:space-x-2 md:space-x-3 px-1">
        {props.arrows && (
          <button onClick={leftScrollHandler}>
            <IoIosArrowDropleft className="h-10 w-10 bg-[#00A551] p-2 rounded-full text-white hidden md:block"/>
          </button>
        )}
  
        <div
          id="containerSlide"
          className="flex overflow-x-scroll scroll"
          style={{ scrollBehavior: 'smooth' }} 
        >
          <div className="flex space-x-5 py-5">
            {props.children}
          </div>
        </div>
        {props.arrows && (
          <button className=" " onClick={rightScrollHandler}>
            <IoIosArrowDropright className="h-10 w-10 bg-[#00A551] p-2 rounded-full text-white hidden md:block"/>
          </button>
        )}
      </div>
    </div>
  );}

export default Carousel;