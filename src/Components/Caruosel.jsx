const Carousel = (props) => {
  const leftScrollHandler = () => {
    scrollhandler("left", 5, 270, 10);
  };

  const rightScrollHandler = () => {
    scrollhandler("right", 5, 270, 10);
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
    <div className="w-[99%] lg:w-[96%] flex justify-evenly max-w-[1588px] space-x-1 sm:space-x-2 md:space-x-3 px-14">
      {props.arrows && (
        <button onClick={leftScrollHandler}>
        
        </button>
      )}

      <div
        id="containerSlide"
        className="w-full h-full overflow-x-scroll flex scroll"
      >
        <div className="flex space-x-5 py-5">
          {props.children}
        </div>
      </div>
      {props.arrows && (
        <button onClick={rightScrollHandler}>
          
        </button>
      )}
    </div>
  );
};

export default Carousel;