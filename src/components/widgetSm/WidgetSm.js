import React from 'react'
import "./widgetSm.css";
import { Visibility } from '@material-ui/icons';
export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList"></ul>
      <li className="widgetSmListItem">
            <img
              src={
                "https://drive.google.com/uc?export=view&id=15qtSuNnvhZkZywLKNCgPDvQVF4i9J_11"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Kshitij Vaibhav</span>
              <span className="widgetSmUsername">Anime guy</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
          <li className="widgetSmListItem">
            <img
              src={
                "https://drive.google.com/uc?export=view&id=15qtSuNnvhZkZywLKNCgPDvQVF4i9J_11"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Utkarsh Jyani</span>
              <span className="widgetSmUsername">Ai Researcher</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
          <li className="widgetSmListItem">
            <img
              src={
                "https://drive.google.com/uc?export=view&id=15qtSuNnvhZkZywLKNCgPDvQVF4i9J_11"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Annie David</span>
              <span className="widgetSmUsername">Web Dev</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
          <li className="widgetSmListItem">
            <img
              src={
                "https://drive.google.com/uc?export=view&id=15qtSuNnvhZkZywLKNCgPDvQVF4i9J_11"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Aditya Srivastava</span>
              <span className="widgetSmUsername">Chinese lover</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
    </div>
  )
}