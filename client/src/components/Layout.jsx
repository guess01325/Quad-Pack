import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
  

export default function Layout(props) {
  return (
    <div className="border">
      <Header
        currentUser={props.currentUser}
        handleLogout={props.handleLogout}
      />
      {props.children}
      <Footer />
    </div>
  );
}
