function App() {

  const courses =[
    "Programowanie w C#",
    "Angular dla początkujących",
    "Kurs Django"
  ]
  
  const handleSubmit = (event) => {
    console.log
  }

  return (
    <form handleSubmit>
      <h1>Liczba kursów:
        {courses.length}
      </h1>
    </form>
    
  );
}

export default App;
