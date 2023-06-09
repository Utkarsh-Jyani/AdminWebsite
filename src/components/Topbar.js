import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">KEIKOVASTRA</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings/>
                    <img src="https://drive.google.com/uc?export=view&id=15qtSuNnvhZkZywLKNCgPDvQVF4i9J_11" alt="" className="topAvatar"/>
                    </div>
                </div>
            </div>
        </div>
  );
}
