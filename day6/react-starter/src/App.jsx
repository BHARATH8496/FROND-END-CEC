import React, { useState } from "react";
import ProfileCard from "./components/profilecard";
import List from "./components/List";
import Advlist from "./components/Advlist";
import Form from "./components/form";
import Tabel from "./components/Tabel"; 

function App() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Components Demo</h1>

      {/* Nav Tabs */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setActiveTab("profile")}>Profile</button>
         <button onClick={() => setActiveTab("list")}>list</button>
        <button onClick={() => setActiveTab("Advlist")}>Advlist</button>
        <button onClick={() => setActiveTab("form")}>Form</button>
        <button onClick={() => setActiveTab("Tabel")}>Tabel</button>

       
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "profile" && <ProfileCard />}
        {activeTab === "list" && <List />}
        {activeTab === "Advlist" && <Advlist />}
        {activeTab === "form" && <Form />}
        {activeTab == "Tabel" && <Tabel />}
      </div>

        
    </div>
  );
}

export default App;
