// Header.jsx
// Starter placeholder for the build-along.
// You will update this to accept props and display dynamic counts!
function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <span className="header-icon">✅</span>
        <div>
          <h1 className="header-title">My Task Manager</h1>
          <p className="header-subtitle">0 of 0 tasks done</p>
        </div>
      </div>
      <div className="header-right">
        <div className="header-badge">
          <span className="badge-number">0</span>
          <span className="badge-label">tasks remaining</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
