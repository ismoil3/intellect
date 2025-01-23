"use client";
import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { styled } from "@mui/system";
import Container from "../shared/container/container";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material"; // For icons
import CourseProgressCard from "../clusters/cluster4";


const CustomTabs = styled(Tabs)({
  backgroundColor: "#f6f6f6",
  borderRadius: "20px",
  minHeight: "40px",
  "& .MuiTabs-indicator": {
    display: "none",
  },
});

const CustomTab = styled(Tab)(({ theme }) => ({
  textTransform: "none",
  fontSize: "16px",
  fontWeight: 500,
  minHeight: "40px",
  minWidth: "120px",
  color: "#000",
  borderRadius: "20px",
  "&.Mui-selected": {
    color: "#fff",
    backgroundColor: "#000",
  },
}));




const Courses = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Box sx={{ padding: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
          <CustomTabs value={value} onChange={handleChange} centered>
            <CustomTab value={0} label="ТИБ (кластер 4)" />
            <CustomTab value={1} label="ТИБ (кластер 5)" />
            <CustomTab value={2} label="Практика и проекты" />
          </CustomTabs>
        </Box>

        {/* Tab content */}
        <Box>
          {value === 0 && (
            <Box>
              <CourseProgressCard />
            </Box>
          )}
          {value === 1 && (
            <Box>
              <Typography variant="h6">Центр карьеры</Typography>
              <Typography>
                Information about the career center goes here. Add custom
                components or other features.
              </Typography>
            </Box>
          )}
          {value === 2 && (
            <Box>
              <Typography variant="h6">Практика и проекты</Typography>
              <Typography>
                Details about practice and projects will be displayed here.
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Courses;
