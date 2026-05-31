import { useMemo, useState } from "react";
import { Tabs, Tab } from "@mui/material";
import Card from "../Card/Card";
import Carousal from "../Carousal/Carousal";
import Button from "../Button/Button";
import "./Section.css";

const Section = ({
  title,
  data = [],
  type = "album",
  genres = [],
  showTabs = false,
  showToggle = true,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selectedTab, setSelectedTab] = useState("all");

  const filteredData = useMemo(() => {
    if (!showTabs || selectedTab === "all") {
      return data;
    }

    return data.filter((item) => item.genre?.key === selectedTab);
  }, [data, selectedTab, showTabs]);

  const handleToggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <section className="section">
      <div className="section-header">
        <h2>{title}</h2>

        {showToggle && (
          <Button className="collapse-btn" onClick={handleToggle}>
            {isCollapsed ? "Show All" : "Collapse"}
          </Button>
        )}
      </div>

      {showTabs && (
        <div className="tabs-wrapper">
          <Tabs
            value={selectedTab}
            onChange={(event, newValue) => setSelectedTab(newValue)}
            TabIndicatorProps={{
              style: {
                backgroundColor: "#34c94b",
                height: "4px",
              },
            }}
          >
            <Tab label="All" value="all" className="genre-tab" />

            {genres.map((genre) => (
              <Tab
                key={genre.key}
                label={genre.label}
                value={genre.key}
                className="genre-tab"
              />
            ))}
          </Tabs>
        </div>
      )}

      <div className="section-content">
        {showToggle && !isCollapsed ? (
          <div className="grid">
            {filteredData.map((item) => (
              <Card key={item.id} item={item} type={type} />
            ))}
          </div>
        ) : (
          <Carousal
            data={filteredData}
            renderItem={(item) => <Card item={item} type={type} />}
          />
        )}
      </div>
    </section>
  );
};

export default Section;