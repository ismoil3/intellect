"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../../images/logo.jpg";
import Container from "../../shared/container/container";
import {
  Box,
  Button,
  FormControlLabel,
  FormControl,
  Select,
  MenuItem,
  Drawer,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { useRouter } from "next/navigation";
import { useSettingStore } from "@/app/store/setting/useSettingStore";
import ThemeSwitcher from "../../providers/ThemeSwitcher";

const Header = () => {
  const { darkMode } = useSettingStore();
  const isDarkMode = darkMode;

  const [age, setAge] = useState("tj");
  const handleChange = (event) => setAge(event.target.value);

  const [value, setValue] = useState("recents");
  const handleChangeNavigation = (event, newValue) => setValue(newValue);

  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => setOpen(newOpen);

  return (
    <>
      <div className={`backdrop-blur-lg sticky top-0 z-50 `}>
        <Container>
          <div className="flex items-center justify-between py-4">
            <div>
              <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
                <Image
                  src={logo}
                  className="rounded-full"
                  alt="educrat"
                  width={50}
                  height={50}
                />
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                  <p
                    className={`logo text-2xl font-bold ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    Intellect
                  </p>
                </Box>
              </Box>
            </div>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: "none", lg: "block" }, color: "white" }}>
              <ul
                className={`${
                  isDarkMode ? "text-white" : "text-black"
                } flex gap-6 font-medium`}
              >
                <li className="hover:text-[#00ff84] hover:cursor-pointer hover:bg-[#ffffff26] p-3 rounded-lg transition-all duration-300">
                  Home
                </li>
                <li className="hover:text-[#00ff84] hover:cursor-pointer hover:bg-[#ffffff26] p-3 rounded-lg transition-all duration-300">
                  курсы
                </li>
                <li className="hover:text-[#00ff84] hover:cursor-pointer hover:bg-[#ffffff26] p-3 rounded-lg transition-all duration-300">
                  Новости
                </li>
                <li className="hover:text-[#00ff84] hover:cursor-pointer hover:bg-[#ffffff26] p-3 rounded-lg transition-all duration-300">
                  О нас
                </li>
              </ul>
            </Box>

            {/* Desktop Actions */}
            <Box
              sx={{
                color: "white",
                gap: "15px",
                alignItems: "center",
              }}
              className="flex gap-6 items-center"
            >
              <FormControlLabel control={<ThemeSwitcher />} />
              <FormControl
                sx={{ m: 1, minWidth: 50, display: { xs: "none", lg: "flex" } }}
                size="small"
              >
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={age}
                  onChange={handleChange}
                  sx={{
                    color: isDarkMode ? "white" : "black",
                    "& .MuiSelect-icon": {
                      color: "transparent",
                    },
                    "& .MuiSelect-outlined": {
                      outlineStyle: "none",
                    },
                    outline: "none",
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none", // Remove the notched outline for outlined Select
                    },
                    "&:hover": {
                      border: "none", // Remove the border on hover
                    },
                    "&:focus": {
                      outline: "none", // Remove outline when focused
                    },
                  }}
                >
                  <MenuItem value={"en"}>ENG</MenuItem>
                  <MenuItem value={"ru"}>RUS</MenuItem>
                  <MenuItem value={"tj"}>TAJ</MenuItem>
                </Select>
              </FormControl>
              <Button
                sx={{
                  p: "5px 30px",
                  backgroundColor: isDarkMode ? "" : "#FFFFFF",
                  color: isDarkMode ? "#0B95CE" : "#0B95CE",
                  border: `2px solid ${isDarkMode ? "#0B95CE" : "#0B95CE"}`,
                  borderRadius: "8px",
                  fontWeight: "bold",
                  transition: "all 0.3s ease",
                  ":hover": {
                    backgroundColor: "#0B95CE",
                    color: "#FFFFFF",
                    borderColor: "#0B95CE",
                    transform: "scale(1.05)",
                  },
                }}
              >
                Log in
              </Button>
            </Box>
          </div>
        </Container>

        {/* Mobile Bottom Navigation */}

        {/* Language Drawer */}
        <Drawer
          anchor="bottom"
          sx={{
            height: "60vh",
            "& .MuiDrawer-paper": {
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
              backgroundColor: isDarkMode ? "#1e1e2f" : "#ffffff",
              color: isDarkMode ? "#ffffff" : "#000000",
            },
          }}
          open={open}
          onClose={toggleDrawer(false)}
        >
          <Box
            sx={{
              p: "20px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: isDarkMode ? "#ffffff" : "#000000",
                marginBottom: "20px",
              }}
            >
              Choose Language
            </Typography>
            <List sx={{ width: "100%" }}>
              {[
                { value: "en", label: "English", flag: "🇺🇸" },
                { value: "ru", label: "Русский", flag: "🇷🇺" },
                { value: "tj", label: "Тоҷикӣ", flag: "🇹🇯" },
              ].map((item) => (
                <ListItem
                  key={item.value}
                  onClick={() => {
                    setOpen(false), setAge(item.value);
                  }}
                  sx={{
                    cursor: "pointer",
                    padding: "15px",
                    textAlign: "center",
                    borderRadius: "10px",
                    transition: "all 0.3s ease",
                    backgroundColor: age === item.value ? "#6440fb" : "#2104",
                    color:
                      age === item.value
                        ? "#ffffff"
                        : isDarkMode
                        ? "#ffffff"
                        : "#000000",
                    "&:hover": {
                      backgroundColor: "#6440fb",
                      color: "#ffffff",
                      transform: "scale(1.01)",
                    },
                    mb: "20px",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontWeight: age === item.value ? "bold" : "normal",
                    }}
                  >
                    <span>{item.flag}</span> {item.label}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </div>
      <Box
        sx={{
          position: "fixed",
          bottom: "0",
          width: "100%",
          display: { xs: "block", lg: "none" },
          zIndex: "1000",
          backgroundColor: isDarkMode ? "#1e1e2f" : "#ffffff",
          boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <BottomNavigation
          value={value}
          onChange={handleChangeNavigation}
          sx={{
            backgroundColor: isDarkMode ? "#1e1e2f" : "#ffffff",
            color: isDarkMode ? "#ffffff" : "#000000",
          }}
        >
          <BottomNavigationAction
            label="Home"
            value="Home"
            icon={<HouseOutlinedIcon />}
            sx={{ color: isDarkMode ? "#ffffff" : "#000000" }}
          />
          <BottomNavigationAction
            label="Courses"
            value="courses"
            icon={<WidgetsOutlinedIcon />}
            sx={{ color: isDarkMode ? "#ffffff" : "#000000" }}
          />
          <BottomNavigationAction
            label="Blog"
            value="Blog"
            icon={<LibraryBooksOutlinedIcon />}
            sx={{ color: isDarkMode ? "#ffffff" : "#000000" }}
          />
          <BottomNavigationAction
            label="Language"
            value="language"
            icon={<LanguageOutlinedIcon />}
            onClick={toggleDrawer(true)}
            sx={{ color: isDarkMode ? "#ffffff" : "#000000" }}
          />
        </BottomNavigation>
      </Box>
    </>
  );
};

export default Header;
