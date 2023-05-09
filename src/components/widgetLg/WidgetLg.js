import React from 'react'
import "./widgetLg.css";

export default function WidgetLg() {
    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
      };
  return (
    <div className="widgetLg">
        <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
            <td className="widgetLgUser">
            <img
              src={
                "https://drive.google.com/uc?export=view&id=15qtSuNnvhZkZywLKNCgPDvQVF4i9J_11"
              }
              alt=""
              className="widgetSmImg"
            />
              <span className="widgetLgName">Bhoomi Vaibhav</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved"/>
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
            <img
              src={
                "https://drive.google.com/uc?export=view&id=15qtSuNnvhZkZywLKNCgPDvQVF4i9J_11"
              }
              alt=""
              className="widgetSmImg"
            />
              <span className="widgetLgName">Kaushal Vaibhav</span>
            </td>
            <td className="widgetLgDate">10 Jun 2021</td>
            <td className="widgetLgAmount">$255.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved"/>
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
            <img
              src={
                "https://drive.google.com/uc?export=view&id=15qtSuNnvhZkZywLKNCgPDvQVF4i9J_11"
              }
              alt=""
              className="widgetSmImg"
            />
              <span className="widgetLgName">Drumstick Vaibhav</span>
            </td>
            <td className="widgetLgDate">18 Jun 2021</td>
            <td className="widgetLgAmount">$250.00</td>
            <td className="widgetLgStatus">
              <Button type="It is Approved"/>
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
            <img
              src={
                "https://drive.google.com/uc?export=view&id=15qtSuNnvhZkZywLKNCgPDvQVF4i9J_11"
              }
              alt=""
              className="widgetSmImg"
            />
              <span className="widgetLgName">Mujhe khane leke chalo Vaibhav</span>
            </td>
            <td className="widgetLgDate">Always Active</td>
            <td className="widgetLgAmount">$2500</td>
            <td className="widgetLgStatus">
              <Button type="Approved"/>
            </td>
          </tr>
          </table>
    </div>
  );
}
