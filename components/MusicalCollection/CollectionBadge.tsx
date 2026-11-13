const CollectionBadge = ({ label }: { label: string }) => (
  <span
    style={{
      marginLeft: "10px",
      padding: "2px 8px",
      fontSize: "0.7em",
      fontWeight: "normal",
      verticalAlign: "middle",
      background: "#6C1960",
      color: "white",
    }}
  >
    {label}
  </span>
);

export default CollectionBadge;
