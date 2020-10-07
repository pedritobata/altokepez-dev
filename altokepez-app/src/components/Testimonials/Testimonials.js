import React, { useState, useEffect } from "react";
import "./Testimonials.scss";
import variablesSass from "../../design-constants/_sass-variables.scss";

const sidedrawerSweetspotMobile = Number.parseInt(
  variablesSass.sidedrawerSweetspotMobile.replace("px", "")
);
const userIconDisapearMobileBreakpoint = Number.parseInt(
  variablesSass.userIconDisapearMobileBreakpoint.replace("px", "")
);
const lastSmallestBreakpoint = Number.parseInt(
  variablesSass.lastSmallestBreakpoint.replace("px", "")
);

const DIRECTION_FROM_LEFT = "DIRECTION_FROM_LEFT";
const DIRECTION_FROM_RIGHT = "DIRECTION_FROM_RIGHT";
const DIRECTION_FROM_INSIDE = "DIRECTION_FROM_INSIDE";

const SIZE_RANGE_BIGGER = "SIZE_RANGE_BIGGER";
const SIZE_RANGE_MEDIUM = "SIZE_RANGE_MEDIUM";
const SIZE_RANGE_SMALLER = "SIZE_RANGE_SMALLER";

const Testimonials = (props) => {
  const [page, setPage] = useState(0);
  const [testimoniesPerPage, setTestimoniesPerPage] = useState(props.perpage);
  const [pages, setPages] = useState(Array(Math.ceil(props.comments.length / testimoniesPerPage)).fill(''));

  useEffect(() => {
    let perpage = 0;
    const bodyWidth = window.document.documentElement.clientWidth;
    if(bodyWidth >= userIconDisapearMobileBreakpoint){
      perpage = props.perpage;
    }else if(bodyWidth >= lastSmallestBreakpoint){
      perpage = 2;
      
    }else{
      perpage = 1;
    }

    setTestimoniesPerPage(perpage);
    setPages(Array(props.comments.length / perpage).fill(''));
  },[]);
 
  useEffect(() => {
    const resizeWindowListener = (event) => {
      let vwWidth = event.target.visualViewport.width;
      let direction, sizeRange, testiPerPage;
      if (vwWidth >= userIconDisapearMobileBreakpoint) {
        //logica para ver qué pagina mostrará si el resize viene de menor a mayor
        direction = testimoniesPerPage < props.perpage ? DIRECTION_FROM_LEFT : DIRECTION_FROM_INSIDE;
        sizeRange = SIZE_RANGE_BIGGER;
        testiPerPage = props.perpage;
        
      } else if (vwWidth >= lastSmallestBreakpoint) {
        direction = testimoniesPerPage < 2 ? DIRECTION_FROM_LEFT
                    : testimoniesPerPage > 2 ? DIRECTION_FROM_RIGHT : DIRECTION_FROM_INSIDE;
        sizeRange = SIZE_RANGE_MEDIUM;
        testiPerPage = 2;
       
      } else {
        direction = testimoniesPerPage > 1 ? DIRECTION_FROM_RIGHT : DIRECTION_FROM_INSIDE;
        sizeRange = SIZE_RANGE_SMALLER;
        testiPerPage = 1;
      }

       

      const numPages = Math.ceil(props.comments.length / testiPerPage);
      /* console.log("***********");
      console.log("direction", direction );
      console.log("sizeRange", sizeRange );
      console.log("numPages", numPages );
      console.log("new testiPerPage", testiPerPage );
      console.log("old testiPerPage", testimoniesPerPage ); */

      setPages(Array(numPages).fill(''));
      setTestimoniesPerPage(testiPerPage);

     // console.log("page-inside resizing", page);
      //invocamos al metodo encargado de calcular a qué pagina debe corresponder el carousel
      //en el nuevo rango de tamaño de pantalla
      calculateNewPageNumber(direction, sizeRange, numPages);

    };
    window.addEventListener("resize", resizeWindowListener);

    return () => {
      window.removeEventListener("resize", resizeWindowListener);
    };
  }, [testimoniesPerPage, props.perpage,props.comments,page]);



  const calculateNewPageNumber = (direction, size, numPages) => {
    const newLastPage = numPages - 1;
    if(size === SIZE_RANGE_BIGGER){
      if(direction === DIRECTION_FROM_LEFT){
       const prevTestimoniesPerPage = props.comments.length / numPages;
       console.log("page",page);
        if(page === 0){
          setPage(newLastPage - 1);
        }else{
          setPage(newLastPage);
        } 
      }
    }else if(size === SIZE_RANGE_MEDIUM){
      if(direction === DIRECTION_FROM_LEFT){
        setPage(Math.floor(page / 2));
      }else  if(direction === DIRECTION_FROM_RIGHT){
        setPage(1);
      }
    }else{
      
      if(direction === DIRECTION_FROM_RIGHT){
        //console.log("small range", DIRECTION_FROM_RIGHT);
        setPage(page * 2);
      }
    }
  }


 // console.log("PAGE GLOBAL",page);


  return (
    <>
      <div
        className="testimonials"
        style={{
          width: `calc(${props.comments.length / testimoniesPerPage} * 100vw`,
          transform: `translateX(${-100 * page}vw)`
        }}
      >
        {props.comments.map((item) => {
          return (
            <div
              key={item.name}
              className="testimony"
              style={{ flexGrow: `${(1 / testimoniesPerPage).toFixed(1)}` }}
            >
              <img
                src={item.photo}
                alt={item.name}
                className="testimony__photo"
              />
              <h4 className="testimony__name">{item.name}</h4>
              <p className="testimony__comment">{item.comment}</p>
            </div>
          );
        })}
      </div>
      <div className="testimonials__pageSwitchersContainer">
        {
          
          pages.map((_,index) => (
            <span className={`testimonials__pageSwitcher ${page === index ? "colored" : ""}`} key={index} onClick={()=>{
              setPage(index);
            }}></span>
          ))
        }
      </div>
    </>
  );
};

export default Testimonials;
