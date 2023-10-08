export default function Card({ children, id, addCard }) {
  return (
    <div className="card" id={id} onClick={addCard}>
      {children}
    </div>
  );
}
