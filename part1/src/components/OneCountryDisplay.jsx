// Importowanie funkcji i komponentów.
import { useEffect, useState } from 'react';  // `useState` - do zarządzania stanem, `useEffect` - do efektów ubocznych (np. zapytania do API).
import axios from 'axios';  // Biblioteka axios do wykonywania zapytań HTTP (tutaj używana do pobierania danych pogodowych).
import AllWeather from './AllWeather';  // Import komponentu `AllWeather`, który wyświetla dane o pogodzie w zależności od przekazanych danych.

const OneCountryDisplay = ({ result }) => {
  // `result` to obiekt przekazywany z innego komponentu (np. zawierający informacje o wybranym kraju). 
  // Tworzymy tablicę `keys` z kluczami obiektu `result.languages`.
  const keys = Object.keys(result.languages);  // Pobieramy wszystkie klucze z obiektu 'languages', aby później wyświetlić listę języków.
  
  // Inicjalizujemy stan `allWeather` do przechowywania danych pogodowych.
  const [allWeather, setAllWeather] = useState([]);  // Na początku stan `allWeather` jest pustą tablicą.

  // Klucz API do OpenWeatherMap (musisz zastąpić go własnym, aby działało).
  const apiKey = 'bd5e378503939ddaee76f12ad7a97608';  // Klucz API do pobierania danych o pogodzie z OpenWeatherMap. **Ważne: Zastąp tym kluczem własnym, aby uniknąć problemów z limitami API.**

  // useEffect służy do wykonywania efektów ubocznych, które w tym przypadku są zapytaniami HTTP.
  useEffect(() => {
    // Zapytanie do API OpenWeatherMap, aby uzyskać dane pogodowe dla stolicy kraju.
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${result.capital[0]}&appid=${apiKey}`)  // Zapytanie do API z parametrem stolicy `result.capital[0]` (pierwsza stolica z tablicy).
      .then((response) => {  // Jeśli zapytanie zakończy się sukcesem...
        console.log(response.data);  // Wypisujemy dane pogodowe w konsoli.
        setAllWeather(response.data);  // Ustawiamy dane pogodowe w stanie `allWeather`.
      })
      .catch((error) => {  // Jeśli zapytanie zakończy się błędem...
        console.error('Error fetching weather data:', error);  // Wyświetlamy błąd w konsoli.
      });
  }, [result.capital[0]]);  // Tablica zależności zawiera `result.capital[0]`, co oznacza, że zapytanie o pogodę zostanie wykonane ponownie, gdy wartość stolicy ulegnie zmianie.

  return (
    <div>
      <div>
        {/* Wyświetlanie informacji o kraju */}
        <h1>{result.name.common}</h1>  {/* Wyświetlamy nazwę kraju (common name). */}
        <p>{result.capital[0]}</p>  {/* Wyświetlamy nazwę stolicy kraju (pierwsza stolica z tablicy). */}
        <p>{result.area}</p>  {/* Wyświetlamy powierzchnię kraju. */}
        
        <h3>languages:</h3>  {/* Nagłówek dla sekcji języków. */}
        <ul>
          {/* Wyświetlanie listy języków */}
          {keys.map((key) => (  // Iteracja po tablicy `keys` (klucze obiektu 'languages').
            <li key={key}>{result.languages[key]}</li>  // Dla każdego klucza w `languages` wyświetlamy nazwę języka.
          ))}
        </ul>

        {/* Wyświetlanie flagi kraju */}
        <img src={result.flags.png} alt="flag" height="200" width="250" />  {/* Obrazek flagi kraju, używamy URL z `result.flags.png`. */}
      </div>

      {/* Komponent AllWeather, który otrzymuje dane o kraju */}
      <AllWeather result={result} />  {/* Przekazujemy obiekt `result` jako prop do komponentu `AllWeather`. */}
    </div>
  );
};

// Eksportowanie komponentu OneCountryDisplay, aby mógł być używany w innych częściach aplikacji.
export default OneCountryDisplay;
