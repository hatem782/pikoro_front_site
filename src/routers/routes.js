import Home from "../views/home/Home";
import ContactPage from "../views/contact/ContactPage";
import BlogsPage from "../views/blogs/BlogsPage";
import TeamPage from "../views/team/TeamPage";
import PortfolioPage from "../views/portfolio/PortfolioPage";


const routes = [
  {
    path: "/home", 
    name: "Home",
    component: Home,
  },
  {
    path: "/team", 
    name: "Our Team",
    component: TeamPage,
  },
  {
    path: "/portfolio", 
    name: "Portfolio",
    component: PortfolioPage,
  },
  {
    path: "/blogs", 
    name: "Blogs",
    component: BlogsPage,
  },
  {
    path: "/contact", 
    name: "Contact Us",
    component: ContactPage,
  },
 ]

export default routes;
