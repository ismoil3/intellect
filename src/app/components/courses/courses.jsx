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
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5y6GVkifaBa40LRR0mSLusxfJvP04U.png",
    hasCertificate: true,
    category: ["tib5"],
  },
  {
    id: "informatics",
    title: "информатика",
    modules: 0,
    lessons: 69,
    imageSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5y6GVkifaBa40LRR0mSLusxfJvP04U.png",
    hasCertificate: true,
    category: ["tib4"],
  },

  {
    id: "Chemistry345",
    title: "Химия",
    modules: 0,
    lessons: 30,
    imageSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5y6GVkifaBa40LRR0mSLusxfJvP04U.png",
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
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5y6GVkifaBa40LRR0mSLusxfJvP04U.png",
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
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5y6GVkifaBa40LRR0mSLusxfJvP04U.png",
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
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5y6GVkifaBa40LRR0mSLusxfJvP04U.png",
    hasCertificate: true,
    comingSoon: true,
    category: ["english", "tib5"],
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
  overflow:"auto"
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
                  style={{ borderRadius: "8px", objectFit: "cover" }}
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
    </Container>
  );
}
