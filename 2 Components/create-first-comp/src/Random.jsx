function Random() {
  let number = Math.floor(Math.random() * 10);
  return (
    <div>
      <h1 style={{ backgroundColor: "black", color: "green" }}>
        The random number is {number}
      </h1>
    </div>
  );
}

export default Random;
