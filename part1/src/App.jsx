// Importujemy useState i useEffect z Reacta oraz serwis do interakcji z danymi osób (personServices)
import { useState, useEffect } from 'react'; 
import personServices from './services/persons'; // personServices to obiekt, który zawiera funkcje do komunikacji z backendem (np. getAll, create, updatePerson, itp.)

// Komponent, który renderuje nagłówek z przekazanym tekstem
// Zamiast bezpośrednio wstawić tekst do JSX, wykorzystujemy parametr `text` przekazany do komponentu
const Heading = ({ text }) => <h2>{text}</h2>; // Zwraca element <h2> z tekstem, który jest przekazany w props

// Komponent filtrowania osób po nazwisku
// Przyjmuje trzy props: `text` (nagłówek dla pola wejściowego), `value` (aktualna wartość pola) oraz `handleNewChange` (funkcja obsługująca zmianę wartości)
const Filter = ({ text, value, handleNewChange }) => (
  <div>
    {/* Wyświetlamy tekst (np. 'filter shown with') oraz pole wejściowe, które będzie reagować na zmiany */}
    {text} 
    <input value={value} onChange={handleNewChange} />
    {/* `value` to bieżąca wartość wprowadzona przez użytkownika w polu tekstowym. Funkcja `handleNewChange` jest wywoływana, gdy użytkownik coś wpisuje */}
  </div>
);

// Komponent do wprowadzania danych nowej osoby (np. imię i numer telefonu)
// Przyjmuje te same właściwości co Filter, ale służy do wpisywania nazwiska oraz numeru osoby
const Part = ({ text, value, handleNewChange }) => (
  <div>
    {/* Wyświetlamy etykietę (np. 'name:', 'number:') oraz pole wejściowe */}
    {text} 
    <input value={value} onChange={handleNewChange} />
    {/* `value` to aktualna wartość wprowadzona w polu (np. imię lub numer telefonu). Funkcja `handleNewChange` obsługuje zmiany */}
  </div>
);

// Komponent przycisku, który przyjmuje typ i tekst, oraz funkcję wywołaną po kliknięciu
const Button = ({ type, text, handleNewChange }) => (
  <button type={type} onClick={handleNewChange}>
    {text}
  </button>
  // Wyświetlamy przycisk, który po kliknięciu wywołuje funkcję `handleNewChange` przekazaną w props
);

// Komponent formularza do dodawania osoby do książki telefonicznej
// Przyjmuje kilka props, m.in. funkcje obsługujące zmiany w formularzu, oraz dane wprowadzone przez użytkownika
const PersonForm = ({ onSubmit, newName, newNumber, handleNewName, handleNewNumber }) => (
  <form onSubmit={onSubmit}>
    {/* Wywołujemy komponent `Part` dla wprowadzenia imienia oraz numeru telefonu */}
    <Part text='name:' value={newName} handleNewChange={handleNewName} />
    <Part text='number:' value={newNumber} handleNewChange={handleNewNumber} />
    {/* Przyciski formularza, który wywoła onSubmit (dodanie nowej osoby) */}
    <Button text='add' type='submit' />
  </form>
);

// Komponent do wyświetlania osób w książce telefonicznej po przefiltrowaniu
const Persons = ({ personAfterFilter }) => (
  <div>
    {/* `personAfterFilter` jest listą osób przefiltrowanych w zależności od wartości filtra */}
    {personAfterFilter}
  </div>
);

// Komponent wyświetlający powiadomienie (np. informujące o błędzie lub powodzeniu operacji)
// Jeśli `message` jest pusty, komponent nic nie renderuje (zwraca `null`), w przeciwnym razie pokazuje komunikat
const Notification = ({ message }) => {
  if (!message) return null; // Jeśli nie ma wiadomości, nic nie wyświetlamy
  return <div className='error'>{message}</div>; // Inaczej wyświetlamy komunikat w elemencie <div> z klasą 'error'
};

// Główny komponent aplikacji
const App = () => {
  // Stany do przechowywania różnych danych w aplikacji:
  const [persons, setPersons] = useState([]); // Lista wszystkich osób
  const [newName, setNewName] = useState(''); // Nowe imię osoby
  const [newNumber, setNewNumber] = useState(''); // Nowy numer telefonu osoby
  const [filterName, setFilterName] = useState(''); // Filtr nazwisk
  const [changeMessage, setChangeMessage] = useState(null); // Wiadomość o zmianie stanu (np. komunikat o błędzie lub powodzeniu)

  // useEffect jest hookiem, który działa jak komponentDidMount w klasowych komponentach
  // Funkcja zostanie wywołana po renderze komponentu
  useEffect(() => {
    // Pobieramy wszystkie osoby z backendu za pomocą personServices
    personServices
      .getAll() // `getAll` jest funkcją w serwisie personServices, która pobiera dane o osobach
      .then(initialPersons => {
        console.log('Fetched persons:', initialPersons);
        // Jeśli otrzymane dane są tablicą, ustawiamy je w stanie `persons`
        if (Array.isArray(initialPersons)) {
          setPersons(initialPersons);
        } else {
          console.error('Error: Expected an array but got:', initialPersons);
          setPersons([]); // W przeciwnym razie ustawiamy pustą tablicę
        }
      })
      .catch(error => {
        console.error('Error fetching persons:', error);
        setChangeMessage('Error fetching persons'); // Ustawiamy komunikat o błędzie, jeśli wystąpił błąd przy pobieraniu
      });
  }, []); // Pusta tablica oznacza, że ten efekt zostanie uruchomiony tylko raz, po pierwszym renderze

  // Funkcja do dodawania osoby
  const addPerson = (event) => {
    event.preventDefault(); // Zapobiegamy domyślnemu zachowaniu formularza (przeładowaniu strony)
    const newPerson = { name: newName, number: newNumber }; // Tworzymy obiekt osoby z nowym imieniem i numerem
    const checkName = persons.find(p => p.name.toLowerCase() === newPerson.name.toLowerCase()); // Sprawdzamy, czy osoba o takim imieniu już istnieje

    const changedPerson = { ...checkName, number: newNumber }; // Jeśli osoba istnieje, tworzymy obiekt z nowym numerem

    if (checkName && checkName.number === newPerson.number) {
      alert(`${newName} is already added to phonebook`); // Jeżeli numer jest taki sam, informujemy użytkownika
    } else if (checkName) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number?`)) {
        // Jeżeli osoba istnieje, pytamy użytkownika, czy chce zaktualizować numer
        personServices
          .updatePerson(checkName.id, changedPerson) // Wywołujemy funkcję updatePerson z id osoby oraz nowymi danymi
          .then(returnedPerson => {
            setPersons(persons.map(p => (p.id !== checkName.id ? p : returnedPerson))); // Aktualizujemy stan `persons`, zastępując osobę po id
            setNewName(''); // Resetujemy pola formularza
            setNewNumber('');
            setChangeMessage(`Number of ${newName} is changed`); // Wyświetlamy komunikat o zmianie numeru
            setTimeout(() => setChangeMessage(null), 5000); // Usuwamy komunikat po 5 sekundach
          })
          .catch(error => {
            setChangeMessage(`Information of ${newName} has already been removed from server`); // Obsługuje błąd, jeśli osoba została usunięta z serwera
          });
      }
    } else {
      personServices
        .create(newPerson) // Dodajemy nową osobę
        .then(returnedPerson => {
          setPersons([...persons, returnedPerson]); // Dodajemy nową osobę do stanu `persons`
          setNewName(''); // Resetujemy formularz
          setNewNumber('');
          setChangeMessage(`Successfully added ${newName}`); // Wyświetlamy komunikat o powodzeniu
          setTimeout(() => setChangeMessage(null), 5000); // Usuwamy komunikat po 5 sekundach
        })
        .catch(error => {
          setChangeMessage(`[error] ${error.response?.data?.error || 'Unknown error'}`); // Obsługuje błędy przy dodawaniu osoby
        });
    }
  };

  // Funkcja do usuwania osoby
  const deletePerson = id => {
    const person = persons.find(p => p.id === id); // Szukamy osoby po id
    if (window.confirm(`Delete ${person.name}?`)) { // Pytamy, czy na pewno chcemy usunąć osobę
      personServices.getDeletePerson(id) // Wywołujemy funkcję do usunięcia osoby z serwera
        .then(() => setPersons(persons.filter(p => p.id !== id))) // Usuwamy osobę z listy w stanie `persons`
        .catch(error => setChangeMessage(`Error deleting ${person.name}`)); // Obsługujemy błąd przy usuwaniu osoby
    }
  };

  // Funkcje obsługujące zmiany w polach formularza
  const handleNewName = event => setNewName(event.target.value); // Zmiana imienia
  const handleNewNumber = event => setNewNumber(event.target.value); // Zmiana numeru
  const handleNewFilter = event => setFilterName(event.target.value); // Zmiana wartości filtra

  // Filtrowanie osób na podstawie wpisanego imienia
  const filteredPersons = Array.isArray(persons)
    ? persons.filter(p => p.name.toLowerCase().includes(filterName.toLowerCase())) // Filtrowanie po nazwisku
    : [];

  // Komponent reprezentujący pojedynczą osobę
  const People = ({ name, number, id }) => (
    <li>
      {name} {number} 
      {/* Przycisk do usuwania osoby */}
      <Button text='delete' type='button' handleNewChange={() => deletePerson(id)} />
    </li>
  );

  // Renderowanie całej aplikacji
  return (
    <div>
      {/* Nagłówki aplikacji */}
      <Heading text='Phonebook' />
      <Notification message={changeMessage} />
      <Filter text='filter shown with' value={filterName} handleNewChange={handleNewFilter} />
      <Heading text='add a new' />
      
      {/* Formularz dodawania osoby */}
      <PersonForm
        onSubmit={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNewName={handleNewName}
        handleNewNumber={handleNewNumber}
      />

      <Heading text='Numbers' />

      {/* Wyświetlanie przefiltrowanych osób */}
      <Persons personAfterFilter={filteredPersons.map(p => <People key={p.id} {...p} />)} />
    </div>
  );
};

export default App;
