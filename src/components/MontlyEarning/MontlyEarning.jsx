import Overview from "../Overview/OverView";
import "./MonthlyEarning.css";

function MonthlyEarnings() {
  return (
    <div className="monthly-earnings">
      <div className="title">Overview</div>
      <div className="subtitle">Monthly Earning</div>
      <div className="chart">
        {[
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ].map((month) => (
          <div  className="bar" id={month} key={month}>
            <h5>{month}</h5>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default MonthlyEarnings;
