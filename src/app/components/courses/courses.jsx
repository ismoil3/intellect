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
    category: ["tib5"],
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
      "data:image/png;base64,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",
    hasCertificate: true,
    comingSoon: true,
    category: ["tib4", "tib5"],
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

export default function CourseTabsComponent() {
  const [activeTab, setActiveTab] = useState("all");

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
                      <Typography variant="body2" color="text.secondary">
                        Мавзуъ {course.modules}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Clock size={16} />
                      <Typography variant="body2" color="text.secondary">
                        Дарс {course.lessons}
                      </Typography>
                    </Box>
                  </Box>
                  {course.hasCertificate && (
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Award size={16} />
                      <Typography variant="body2" color="text.secondary">
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
