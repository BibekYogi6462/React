function Hello() {
  const myName = "Bibek";
  const greet = () => {
    return "I am a BCA student";
  };
  return (
    <div>
      <h1>Hello This is the future from {myName}</h1>
      <p>{greet()}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, nihil
        doloribus architecto vitae voluptatum consectetur at? Veniam, voluptatem
        possimus odio quas quibusdam iste libero commodi hic temporibus ullam
        amet. Inventore nesciunt deleniti earum rem, aspernatur vel quaerat a,
        eius voluptatibus nihil hic est error numquam.
      </p>
    </div>
  );
}
export default Hello;
