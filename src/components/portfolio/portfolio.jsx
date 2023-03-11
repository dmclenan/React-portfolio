import { useEffect, useState } from "react";
import portfolioList from "../portfolioList/PortfolioList"
import "./portfolio.scss"

export default function portfolio() {
// eslint-disable-next-line react-hooks/rules-of-hooks
const [selected,setSelected] = useState("featured")
  const list = [
    {
      id: "featured",
      title: "featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
       {list.map((item) => (
        <portfolioList 
        title={item.title} 
        active={selected === item.id} 
        setSelected={setSelected}
        id={item.id}
        />
       ))}
      </ul>
      <div className="container">
        <div className="item">
          <img
            src="https://png.pngtree.com/element_our/20190528/ourmid/pngtree-blue-sketch-circle-image_1177862.jpg"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://png.pngtree.com/element_our/20190528/ourmid/pngtree-blue-sketch-circle-image_1177862.jpg"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://png.pngtree.com/element_our/20190528/ourmid/pngtree-blue-sketch-circle-image_1177862.jpg"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://png.pngtree.com/element_our/20190528/ourmid/pngtree-blue-sketch-circle-image_1177862.jpg"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://png.pngtree.com/element_our/20190528/ourmid/pngtree-blue-sketch-circle-image_1177862.jpg"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  )
}
