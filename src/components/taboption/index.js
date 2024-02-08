import React from "react";
import "./taboption.css";
const tabs = [
  {
    id: 1,
    Name: "DiningOut",
    active_img:
      "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png?output-format=webp",
    backdrop: "rgb(229, 243, 243)",
    inactive_img:
      "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
  },
  {
    id: 2,
    Name: "Delivery",
    active_img:
      "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
    backdrop: "rgb(252, 238, 192)",
    inactive_img:
      "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
  },
];

const TabOption = ({ activeTab, setActiveTab }) => {
  
  return (
    <div className="tab-border-bottom">
      <div class="container">
        <div class="row">
        <div class="max-width col-lg-12 d-flex gap-5 tab-container">
        {tabs.map((tab) => {
          return (
            <div
              onClick={() => setActiveTab(tab.Name)}
              className={`py-3 d-flex align-items-center ${
                activeTab === tab.Name && "active-tab"
              }`}
            >
              <div className="tab-img-container"
                style={{
                  backgroundColor: `${
                    activeTab === tab.Name ? tab.backdrop : ""
                  }`,
                }}
              >
                <img
                  src={
                    activeTab === tab.Name ? tab.active_img : tab.inactive_img
                  }
                  alt={tab.Name}
                />
              </div>
              <div className="tab-name">{tab.Name}</div>
            </div>
          );
        })}
      </div>
        </div>
      </div>
      
    </div>
  );
};

export default TabOption;
