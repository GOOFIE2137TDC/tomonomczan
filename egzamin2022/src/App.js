import "bootstrap/dist/css/bootstrap.css";

function App() {

  function onSubmit(event) {

    event.preventDefault();
    const title = event.target.elements.filmTitle.value;
    const type = event.target.elements.filmType.value;
    console.log(`tytul: ${title}, rodzaj: ${type}`);

  }

  

}

export default App;