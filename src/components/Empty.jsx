function Empty({ children }) {
  return (
    <div className="empty">
      <p className="message">{children}</p>
    </div>
  );
}

export default Empty;
