import { FC, useState } from "react";
import { data } from "./data/data"
import { Table } from "./components/table/Table";

const App: FC = () => {
  const [selectedReport, setSelectedReport] = useState(data[0]);

  return (
    <div className="container">
      <h1>Report Viewer</h1>
      <label htmlFor="report-select">Select Report:</label>
      <select id="report-select" onChange={(e) => setSelectedReport(data[parseInt(e.target.value)])}>
        {data.map((report, index) => (
          <option key={index} value={index}>
            Report {index + 1}
          </option>
        ))}
      </select>
      <Table report={selectedReport} />
    </div>
  );
};

export default App;