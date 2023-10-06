import sell from "../../assests/sidebar/sales.svg";
import reports from "../../assests/sidebar/reports.svg";
import allusers from "../../assests/sidebar/allusers.svg";
import coupens from "../../assests/sidebar/coupens.svg";
import settings from "../../assests/sidebar/settings.svg";
export const SidebarData = [
  { name: "Sales", link:"/AllSales", content: "View all Sales at one place", icon: sell },
  { name: "Reports",link:"/AllReports", content: "Get insights into the big data", icon: reports },
  {
    name: "All Customers",
    link:"/AllCustomers",
    content: "View all customers information",
    icon: allusers,
  },
  {
    name: "All Sellers",
    link:"/AllSellers",
    content: "View all Sellers information",
    icon: allusers,
  },
  {
    name: "User Application Setup",
    link:"/AllUserApplicationSetup",
    content: "Setup the user application",
    icon: allusers,
  },
  {
    name: "Coupens",
    link:"/AllCoupens",
    content: "Setup the discount coupons",
    icon: coupens,
  },
  {
    name: "Users",
    link:"/AllUsers",
    content: "Manage users",
    icon: allusers,
  },
  {
    name: "Categories",
    link:"/AllCategories",
    content: "Add new category",
    icon: allusers,
  },
  {
    name: "Settings",
    link:"/AllSettings",
    icon: settings,
  },
];
