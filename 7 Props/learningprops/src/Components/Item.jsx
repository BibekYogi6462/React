const Item = ({ item }) => {
  return (
    <li key={item} className="list-group-item">
      {item}
    </li>
  );
};

export default Item;
