import React from "react";
import "./Overview.css";

const cardData = [
  {
    title: "Earning",
    icon: "$",
    amount: "$198k",
    percentage: "🔼 3.7%",
    description: "this month"
  },
  {
    title: "Orders",
    icon: "📋",
    amount: "2.4k",
    percentage: "🔽 2%",
    description: "this month"
  },
  {
    title: "Balance",
    icon: "💼",
    amount: "$2.4k",
    percentage: "🔽 2%",
    description: "this month"
  },
  {
    title: "Total Sales",
    icon: "🛍️",
    amount: "$89k",
    percentage: "🔼 11%",
    description: "this week"
  }
];

function Overview() {
  return (
    <div className="overview">
      {cardData.map((card, index) => (
        <div key={index} className="card">
          <div className="icon">{card.icon}</div>
          <div className="details">
            <span>{card.title}</span>
            <h2>{card.amount}</h2>
            <small>
              {card.percentage} {card.description}
            </small>
          </div>
        </div>
      ))}
      </div>
  );
}

export default Overview;
