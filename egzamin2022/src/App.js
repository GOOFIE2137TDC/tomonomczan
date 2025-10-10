import "bootstrap/dist/css/bootstrap.css";

function App() {

  function onSubmit(event) {

    event.preventDefault();
    const title = event.target.elements.filmTitle.value;
    const type = event.target.elements.filmType.value;
    console.log(`tytul: ${title}, rodzaj: ${type}`);

  }
  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="filmTitle" className="form-label">Tytuł filmu</label>   
          <input type="text" className="form-control" id="filmTitle" name="filmTitle" />
        </div>
        
        <div className="mb-3">
    <label htmlFor="filmType" className="form-label">Rodzaj filmu</label>
      <select className="form-select" id="filmType" name="filmType">
        <option value="akcja">akcja</option>
        <option value="komedia">komedia</option>
        <option value="dramat">dramat</option>
        <option value="horror">horror</option>
      </select>
    </div>
      <button type="submit" className="btn btn-primary">Zapisz</button>
      </form>
    </div>
  );
  

}

export default App;