import construction from "../src/assets/bonbon-programmer-coding-on-laptop.png";

function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img src={construction} alt="under construction" />
      <div className="App" style={{ fontSize: "25px" }}>
        Website is under construction
      </div>
    </div>
  );
}

export default App;
