import React from "react";
import "./NewReleases.css";

function NewReleases() {
  return (
    <div className="new-releases-container">
      <h1 className="new-releases-title">New Releases</h1>
      <img
        src={
          "https://www.pcheebum.com/cdn/shop/files/new_releases_desktop_1800x.png?v=1704478765"
        }
        alt=""
        className="new-releases-image"
      />
    </div>
  );
}

export default NewReleases;
