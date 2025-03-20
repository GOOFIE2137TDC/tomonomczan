// Importowanie funkcji z Reacta oraz innych bibliotek.

import { useEffect, useState } from 'react';  // `useEffect` to hook do zarządzania efektami ubocznymi (np. wykonywanie zapytań, manipulacja DOM), `useState` to hook do zarządzania stanem komponentu.
import axios from 'axios';  // `axios` to biblioteka, która upraszcza wykonywanie zapytań HTTP (np. pobieranie danych z serwera).
import Choice from './components/Choice';  // Importowanie komponentu Choice, który jest odpowiedzialny za renderowanie wyników.

const App = () => {
  // useState to hook, który umożliwia zarządzanie stanem komponentu. Poniżej deklarujemy dwa stany:

  const [country, setCountry] = useState('');  // 'country' przechowuje wartość kraju, który użytkownik wpisuje w formularzu. Na początku jest pusty.
  const [result, setResult] = useState([]);    // 'result' przechowuje dane o wszystkich krajach, które zostaną pobrane z API. Na początku jest to pusta tablica.

  // useEffect to hook, który uruchamia kod, który ma zostać wykonany po renderze komponentu. 

  useEffect(() => {
    // Wewnątrz useEffect wykonujemy zapytanie HTTP, aby pobrać dane z API.

    axios
      .get('https://restcountries.com/v3.1/all')  // Wysyłamy zapytanie GET do API 'restcountries.com', aby pobrać dane o wszystkich krajach.
      .then(response => {  // Jeśli zapytanie zakończy się sukcesem, to...
        setResult(response.data);  // Przechowujemy odpowiedź z API (dane o krajach) w stanie 'result'. `response.data` to dane, które zwróciło API.
      })
      .catch(error => {  // Jeśli zapytanie zakończy się błędem, to...
        console.error('Error fetching country data:', error);  // Wyświetlamy błąd w konsoli.
      });
  }, []);  // Pusty array [] oznacza, że useEffect wykona się tylko raz, po pierwszym renderze komponentu. Dzięki temu zapytanie do API nie będzie wykonywane przy każdym renderze.

  // Funkcja, która obsługuje zmianę wartości w polu tekstowym (input).
  const handleCountryChange = (event) => {
    // 'event' to obiekt reprezentujący zdarzenie. 'event.target.value' to wartość, którą użytkownik wpisał w polu input.
    setCountry(event.target.value);  // Zaktualizuj stan 'country' na podstawie tego, co użytkownik wpisał w formularzu.
  };

  return (
    <div>
      {/* Formularz zawierający pole tekstowe, które umożliwia użytkownikowi wpisanie nazwy kraju. */}
      <form>
        find countries <input value={country} onChange={handleCountryChange} />  {/* `value={country}` - pole input ma wartość zgodną ze stanem 'country'. */}
        {/* `onChange={handleCountryChange}` - za każdym razem, gdy użytkownik zmienia tekst w polu input, uruchamiamy funkcję handleCountryChange. */}
      </form>

      {/* Sekcja renderująca komponent Choice, który odpowiedzialny jest za wyświetlanie wyników na podstawie stanu 'country' i 'result'. */}
      <div>
        {/* Przekazujemy dwa propsy do komponentu Choice:
            1. 'result' - zawiera dane o wszystkich krajach (zostały pobrane z API).
            2. 'country' - zawiera wartość wpisaną przez użytkownika w polu wyszukiwania.
            'key={country}' - dodajemy klucz do komponentu, aby React mógł poprawnie zarządzać jego renderowaniem, gdy wartość 'country' się zmieni. */}
        <Choice key={country} result={result} country={country} />
      </div>
    </div>
  );
};

// Eksportujemy komponent 'App', aby mógł być używany w innych częściach aplikacji.
export default App;
