import { useState } from "react";

const Tabs = ({ onTab }) => {
  const [active, setActive] = useState(1);
  const onActive = (index) => {
    setActive(index);
  };
  const tabs = [
    { id: 1, label: "All", category: "All" },
    { id: 2, label: "HTML/CSS", category: "Html/Css" },
    { id: 3, label: "React js", category: "React js" },
    { id: 4, label: "Figma", category: "Figma" },
  ];
  return (
    <div className="tabs py-2 text-center">
      {tabs.map((tab) => (
        <button
          className={active === tab.id ? "active" : ""}
          onClick={() => {
            onTab(tab.category);
            onActive(tab.id);
          }}
          key={tab.id}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
