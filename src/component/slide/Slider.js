import React, { useState } from "react";

function Slides() {
    const SLIDES = [
        {
          title: "Today's workout plan",
          text: "We're gonna do 3 fundamental exercises.",
        },
        {
          title: "First, 10 push-ups",
          text: "Do 10 reps. Remember about full range of motion. Don't rush.",
        },
        {
          title: "Next, 20 squats",
          text: "Squats are important. Remember to keep your back straight.",
        },
        {
          title: "Finally, 15 sit-ups",
          text: "Slightly bend your knees. Remember about full range of motion.",
        },
        {
          title: "Great job!",
          text: "You made it, have a nice day and see you next time!",
        },
      ];
    
      const [index,setIndex] = useState(0);
      function prev(){
          index !== 0 ?setIndex(index - 1):setIndex(SLIDES.length - 1)
        
      }
      function next(){
        index !== SLIDES.length-1?setIndex(index+1):setIndex(0)
      }
  return (
    <div>
      <div id="navigation" className="text-center">
        <button data-testid="button-restart" className="small outlined" onClick={
            ()=>setIndex(0)
        }
        >
          Restart
        </button>
        <button data-testid="button-prev" className="small" onClick={()=>{
            prev();
           
        }
        }>
          Prev
        </button>
        <button data-testid="button-next" className="small" onClick={()=>
             next()
        }>
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{SLIDES[index].title}</h1>
        <p data-testid="text">{SLIDES[index].text}</p>
      </div>
    </div>
  );
}

export default Slides;
