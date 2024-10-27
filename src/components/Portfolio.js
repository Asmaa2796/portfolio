import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allWork } from "../redux/action/action";

const Portfolio = ({filter}) => {
  const [work, setWork] = useState([]);
  const dispatch = useDispatch();
  const workList = useSelector((state) => state.work);
  useEffect(() => {
    dispatch(allWork());
  }, [dispatch]);
  useEffect(() => {
    setWork(workList);
  }, [workList]);
  const filteredWork = filter === 'All' ? work : work.filter(item => item.category === filter);

  return (
    <div className="portfolio py-4">
      <div className="row">
        {filteredWork.length >= 1 ? (
          filteredWork.map((item) => (
            <div key={item.id} className="col-lg-3 col-md-4 col-12">
              <div className="work_card my-3">
                <img className="work_img" src={item.photo} alt={item.title} />
                <div className="work_desc p-3">
                <h5 className="text-lighter text-md mt-2 mb-3">{item.title} <span className="d-block pull-right text-xs">{item.category}</span></h5>
                <a href={item.previewLink} className="text-color text-sm" target="_blank" rel="noopener noreferrer">{item.previewText} <i className="fa fa-external-link" style={{fontSize:"10px"}}></i></a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
