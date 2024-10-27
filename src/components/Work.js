import { useState } from "react";
import Portfolio from "./Portfolio";
import Tabs from "./Tabs";

const Work = () => {
    const [filter, setFilter] = useState('All')
  return (
    <div className="work py-5">
      <div className="container">
        <h4 className="text-white title">My Work</h4>
        <Tabs onTab={setFilter} />
        <Portfolio filter={filter} />
        <div className="text-center">
          <a href="https://www.behance.net/asmaasaad7"
          target="_blank" 
            rel="noopener noreferrer"
          style={{paddingBlock:"12px"}} className="button">
            Explore My Behance | <i className="fa fa-behance"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
