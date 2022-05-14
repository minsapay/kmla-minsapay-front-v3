import React from "react";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import Box from "@mui/material/Box";

import BoothMenu from "./BoothMenu";
import StudentMenu from "./StudentMenu";

import "./styles.css";

const MenuTab = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="menutab">
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value} >
          <Box sx={{ borderBottom: 1, borderColor: "divider" }} >
            <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
              <Tab label="학생 메뉴" value="1" className = "switch-tab-label" />
              <Tab label="부스 메뉴" value="2" className = "switch-tab-label"/>
            </TabList>
          </Box>
          <TabPanel value="1">
            <StudentMenu />
          </TabPanel>
          <TabPanel value="2">
            <BoothMenu />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default MenuTab;
