import React from "react";
import Sidebar from "./component/Sidebar";
import NavBar from "./shared/NavBar";
import Footer from "./shared/Footer";

const items = [
  { name: "home", label: "Home" },
  {
    name: "billing",
    label: "Billing",
    items: [
      { name: "statements", label: "Statements" },
      { name: "reports", label: "Reports" },
    ],
  },
  {
    name: "settings",
    label: "Settings",
    items: [
      { name: "profile", label: "Profile" },
      { name: "insurance", label: "Insurance" },
      {
        name: "notifications",
        label: "Notifications",
        items: [
          { name: "email", label: "Email" },
          {
            name: "desktop",
            label: "Desktop",
            items: [
              { name: "schedule", label: "Schedule" },
              { name: "frequency", label: "Frequency" },
            ],
          },
          { name: "sms", label: "SMS" },
        ],
      },
    ],
  },
];

const App = () => {
  return (
    <div>
      <NavBar />
      <Sidebar items={items} />
      <Footer />
    </div>
  );
};

export default App;
