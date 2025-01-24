"use client";

import { useState } from "react";
import {
  Tabs,
  Tab,
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  styled,
} from "@mui/material";
import { BookOpen, Clock, Award } from "lucide-react";
import Image from "next/image";
import Container from "../shared/container/container";
import { useSettingStore } from "@/app/store/setting/useSettingStore";

// Course type definition

// Course data
const COURSES = [
  {
    id: "Biology",
    title: "Биология",
    modules: 0,
    lessons: 84,
    imageSrc:
      "https://online.omuz.tj/static/media/image%20151.3f56470e62fadd83ddd1.png",
    hasCertificate: true,
    category: ["tib5","olympiad"],
  },
  {
    id: "informatics",
    title: "информатика",
    modules: 0,
    lessons: 69,
    imageSrc:
      "https://www.softclub.tj/static/media/image%20174.b3c0463fcea1abd8db923c5a5ef356c1.svg",
    hasCertificate: true,
    category: ["tib4"],
  },

  {
    id: "Chemistry345",
    title: "Химия",
    modules: 0,
    lessons: 30,
    imageSrc:
      "https://webadminapi.softclub.tj/Images/885fa34a-abf9-4278-9eba-750753a08e8a.png",
    hasCertificate: true,
    comingSoon: true,
    category: ["tib4", "tib5","olympiad"],
  },
  {
    id: "physics",
    title: "Физика",
    modules: 0,
    lessons: 20,
    imageSrc:
      "https://webadminapi.softclub.tj/Images/b4a39e69-db28-47d9-918a-630a42896f97.png",
    hasCertificate: true,
    comingSoon: true,
    category: ["tib5", "tib4"],
  },
  {
    id: "math",
    title: "Математика",
    modules: 0,
    lessons: 20,
    imageSrc:
      "https://online.omuz.tj/static/media/Math.0b5d03d9a08094c8d746.png",
    hasCertificate: true,
    comingSoon: true,
    category: ["tib4", "tib5"],
  },

  {
    id: "english",
    title: "Английский",
    modules: 0,
    lessons: 20,
    imageSrc:
      "https://online.omuz.tj/static/media/image%20152.8da8769d603841855096.png",
    hasCertificate: true,
    comingSoon: true,
    category: ["english", "tib5"],
  },
  {
    id: "olympiad",
    title: "Олимпиада",
    modules: 0,
    lessons: 20,
    imageSrc:
      "https://webadminapi.softclub.tj/Images/aec39a3e-dd9b-40b6-aec3-c235d185ba67.png",
    hasCertificate: true,
    comingSoon: true,
    category: ["olympiad"],
  },
];

// Tab configuration
const TABS = [
  { id: "all", label: "Хама курсхо" },
  { id: "tib5", label: "ТИБ (кластер 5)" },
  { id: "tib4", label: "ТИБ (кластер 4)" },
  { id: "english", label: "Англиский" },
  { id: "olympiad", label: "Олимпиада" },
];

const CustomTab = styled(Tab)(({ theme }) => ({
  textTransform: "none",
  fontSize: "1rem",
  padding: "8px 16px",
  borderRadius: "4px",
  color: theme.palette.text.primary,
  "&.Mui-selected": {
    backgroundColor: "#1B2332",
    color: "white",
    borderRadius: "4px",
  },
  minHeight: "40px",
}));

// Custom styled Tabs component
const CustomTabs = styled(Tabs)(({ theme }) => ({
  minHeight: "40px",
  backgroundColor: "rgb(226, 232, 240)",
  padding: "4px",
  paddingTop: "7px",
  borderRadius: "8px",
  "& .MuiTabs-flexContainer": {
    gap: "8px",
  },
  "& .MuiTabs-indicator": {
    display: "none",
  },
  display: "inline-block",
  overflow: "auto",
}));


  // Стайлҳо барои Dark Mode


export default function Courses() {
  const [activeTab, setActiveTab] = useState("all");
  const {darkMode} = useSettingStore()


  const filteredCourses =
    activeTab === "all"
      ? COURSES
      : COURSES.filter((course) =>
          Array.isArray(course.category)
            ? course.category.includes(activeTab)
            : course.category === activeTab
        );

  return (
    <Container>
      <Typography variant="h3" sx={{ mb: 4, textAlign: "center" }}>
        Курсҳо
      </Typography>
      {/* Tabs */}
      <div className="flex justify-center ">
        <CustomTabs
          value={activeTab}
          onChange={(event, newValue) => setActiveTab(newValue)}
          variant="scrollable"
          scrollButtons="auto"
          sx={{ mb: 4 }}
        >
          {TABS.map((tab) => (
            <CustomTab
              key={tab.id}
              value={tab.id}
              label={tab.label}
              disableRipple
            />
          ))}
        </CustomTabs>
      </div>

      {/* Course Grid */}
      <Grid container spacing={4}>
        {filteredCourses.map((course) => (
          <Grid item key={course.id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(0.9)",
                  transition: "transform 0.3s ease-in-out",
                },
                borderRadius: "1rem",
                position: "relative",
                backgroundColor: darkMode? "#141D2A": "#fff",
                color: darkMode? "white": ""
              }}
            >
              {false && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 16,
                    right: -35,
                    transform: "rotate(45deg)",
                    bgcolor: "primary.main",
                    color: "white",
                    px: 5,
                    py: 1,
                    fontSize: "0.875rem",
                  }}
                >
                  Ба наздики!
                </Box>
              )}
              <CardContent sx={{ flexGrow: 1, display: "flex", gap: 2 }}>
                <Image
                  src={course.imageSrc || "/placeholder.svg"}
                  alt={course.title}
                  width={64}
                  height={64}
                  style={{ borderRadius: "8px", objectFit: "contain" }}
                />
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    {course.title}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      alignItems: "center",
                      mb: 1,
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <BookOpen size={16} />
                      <Typography variant="body2" >
                        Мавзуъ {course.modules}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Clock size={16} />
                      <Typography variant="body2" >
                        Дарс {course.lessons}
                      </Typography>
                    </Box>
                  </Box>
                  {course.hasCertificate && (
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Award size={16} />
                      <Typography variant="body2" >
                        Сертификат
                      </Typography>
                    </Box>
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <br />
      <br />
      <br />
      <br />
    </Container>
  );
}
