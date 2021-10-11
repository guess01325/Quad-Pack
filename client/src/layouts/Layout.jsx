import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/footer";
import "./Layout.css";

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
