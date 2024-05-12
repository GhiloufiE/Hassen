import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [logs, setLogs] = useState([]);
  const [filteredLogs, setFilteredLogs] = useState([]);
  const [logLevel, setLogLevel] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const dummyLogs = [
    { level: "info", message: "Container started successfully" },
    { level: "debug", message: "Received request to process data" },
    { level: "error", message: "Failed to connect to database" },
    { level: "warning", message: "Low disk space detected" },
    { level: "info", message: "Data processing completed" },
    { level: "debug", message: "Request timed out, retrying" },
    { level: "error", message: "Critical system error, shutting down" },
    { level: "warning", message: "Network connection unstable" },
    { level: "info", message: "Container stopped" },
    { level: "debug", message: "Received signal to terminate process" },
    { level: "error", message: "Unexpected server response" },
    { level: "warning", message: "Potential security threat detected" },
  ];
  


  useEffect(() => {
    // Set dummy log data when component mounts
    setLogs(dummyLogs);
  }, []);

  useEffect(() => {
    // Filter logs based on log level and search query
    const filtered = logs.filter((log) => {
      return (
        (logLevel === "all" || log.level === logLevel) &&
        (searchQuery === "" ||
          log.message.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    });
    setFilteredLogs(filtered);
  }, [logs, logLevel, searchQuery]);

  const handleLogLevelClick = (level) => {
    setLogLevel(level);
  };

  return (
    <div className="dashboard">
      <nav className="navbar">
        <h1>Dashboard</h1>
      </nav>
      <div className="log-container">
      <div className="log-controls">
  <div className="log-level-buttons">
    <button className={`log-level-btn ${logLevel === 'all' ? 'active' : ''}`} onClick={() => handleLogLevelClick('all')}>All</button>
    <button className={`log-level-btn ${logLevel === 'info' ? 'active info' : 'info'}`} onClick={() => handleLogLevelClick('info')}>Info</button>
    <button className={`log-level-btn ${logLevel === 'debug' ? 'active debug' : 'debug'}`} onClick={() => handleLogLevelClick('debug')}>Debug</button>
    <button className={`log-level-btn ${logLevel === 'error' ? 'active error' : 'error'}`} onClick={() => handleLogLevelClick('error')}>Error</button>
    <button className={`log-level-btn ${logLevel === 'warning' ? 'active warning' : 'warning'}`} onClick={() => handleLogLevelClick('warning')}>Warning</button>
  </div>

<div className="search-input-container">
    <input
      type="text"
      placeholder="Search logs"
      value={searchQuery}
      onChange={e => setSearchQuery(e.target.value)}
      className="search-input"
    />
  </div>
</div>
        <div className="logs-box">
          {filteredLogs.map((log, index) => (
            <div key={index} className="log">
              <div className={`log-dot ${log.level}`}></div>
              <p>{log.message}</p>
            </div>
          ))}
        </div>
      </div>
</div>
  );
}

export default App;
