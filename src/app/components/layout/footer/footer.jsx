import { Box } from "@mui/material";
import Container from "../../shared/container/container";
import { Instagram, YouTube } from "@mui/icons-material";
import { FacebookIcon, Twitter } from "lucide-react";

export default function Footer() {
    const year = new Date().getFullYear();
  
    return (
      <footer className="bg-gray-900 mt-[70px] text-gray-300 py-10">
        <Container className=" px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding Section */}
          <div>
            <h2 className="text-2xl font-bold text-white">Intellect</h2>
            <p className="mt-4 text-gray-400">
              Empowering your learning journey with the best tools and resources.
            </p>
            <p className="mt-2 text-gray-400">© {year} Intellect. All rights reserved.</p>
          </div>
  
          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
  
          {/* Social Media and Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://www.facebook.com/intellect.edu.tj1/"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-500 transition-all"
                aria-label="Facebook"
              >
                <FacebookIcon/>
              </a>
              <a
                href="https://www.instagram.com/intellect.edu.tj/"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-purple-500 transition-all"
                aria-label="Instagram"
              >
                <Instagram/>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-400 transition-all"
                aria-label="Twitter"
              >
                <Twitter/>
              </a>
              <a
                href="https://www.youtube.com/@%D0%98%D0%BD%D1%82%D0%B5%D0%BB%D0%BB%D0%B5%D0%BA%D1%82-%D0%91%D0%B8%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-500 transition-all"
                aria-label="YouTube"
              >
                <YouTube/>
              </a>
            </div>
            <h3 className="text-lg font-semibold text-white mt-6">Contact Us</h3>
            <p className="text-gray-400 mt-2">Email: intellect.edu@gmail.com</p>
            <p className="text-gray-400">Phone: +992 (554) 16-16-16</p>
          </div>
        </Container>
        <Box sx={{display: {xs:"block",lg:"none"}}}>
        <br /><br /><br />
        </Box>
      </footer>
    );
  }
  