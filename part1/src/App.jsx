// Importowanie komponentu `Course` z pliku `./components/Course`.
// Komponent `Course` będzie odpowiedzialny za renderowanie danych każdego kursu.
import Course from './components/Course'

// Definicja głównego komponentu `App`, który będzie renderował kursy.
const App = () => {
  // Zmienna `course` zawiera tablicę obiektów reprezentujących kursy.
  // Każdy kurs ma swoją nazwę, unikalny identyfikator i listę części kursu.
  const course = [
    {
      // Kurs 1: Half Stack application development
      id: 1, // Unikalny identyfikator kursu
      name: 'Half Stack application development', // Nazwa kursu
      parts: [ // Lista części w kursie
        {
          name: 'Fundamentals of React', // Nazwa pierwszej części kursu
          exercises: 10, // Liczba ćwiczeń w tej części
          id: 1 // Unikalny identyfikator części
        },
        {
          name: 'Using props to pass data', // Nazwa drugiej części kursu
          exercises: 7, // Liczba ćwiczeń w tej części
          id: 2 // Unikalny identyfikator części
        },
        {
          name: 'State of a component', // Nazwa trzeciej części kursu
          exercises: 14, // Liczba ćwiczeń w tej części
          id: 3 // Unikalny identyfikator części
        },
        {
          name: 'Redux', // Nazwa czwartej części kursu
          exercises: 11, // Liczba ćwiczeń w tej części
          id: 4 // Unikalny identyfikator części
        }
      ]
    },
    {
      // Kurs 2: Node.js
      name: 'Node.js', // Nazwa kursu
      id: 2, // Unikalny identyfikator kursu
      parts: [ // Lista części w kursie
        {
          name: 'Routing', // Nazwa pierwszej części kursu
          exercises: 3, // Liczba ćwiczeń w tej części
          id: 1 // Unikalny identyfikator części
        },
        {
          name: 'Middlewares', // Nazwa drugiej części kursu
          exercises: 7, // Liczba ćwiczeń w tej części
          id: 2 // Unikalny identyfikator części
        }
      ]
    }
  ];

  // Zmienna `courseNumber` zawiera wyniki mapowania tablicy `course`.
  // Funkcja `map()` przechodzi przez wszystkie elementy tablicy `course` i dla każdego kursu
  // generuje komponent `Course` z przekazanymi danymi o kursie jako props.
  const courseNumber = course.map(courses => {
    // Dla każdego kursu generujemy komponent `Course`, który otrzymuje:
    // 1. `key={courses.id}` – unikalny identyfikator jako klucz,
    // 2. `course={courses}` – cały obiekt kursu jako prop `course`.
    return <Course key={courses.id} course={courses} />;
  });

  // W renderowaniu zwracamy kontener <div>, który zawiera wszystkie wygenerowane komponenty `Course`.
  // Zmienna `courseNumber` zawiera listę komponentów `Course`, które są renderowane w tym miejscu.
  return (
    <div>
      {courseNumber} {/* Wstawienie komponentów `Course` wewnątrz kontenera */}
    </div>
  );
}

// Eksportujemy komponent `App`, aby można go było zaimportować i używać w innych plikach.
export default App;
