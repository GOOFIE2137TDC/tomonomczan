// Importowanie zależności z Reacta.
import { useEffect, useState } from 'react';  // `useState` do zarządzania stanem, `useEffect` do wywoływania efektów ubocznych (np. zapytania HTTP).
import axios from 'axios';  // Biblioteka axios do wykonywania zapytań HTTP. W tym przypadku służy do pobierania danych pogodowych z API OpenWeatherMap.

const AllWeather = ({ result }) => {
  // Inicjalizujemy stan `allWeather`, który przechowuje dane pogodowe. Początkowa wartość to `null`, co oznacza, że początkowo brak danych o pogodzie.
  const [allWeather, setAllWeather] = useState(null);
  
  // Klucz API do OpenWeatherMap. Musisz zastąpić ten klucz swoim własnym, aby zapytania działały poprawnie.
  const apiKey = 'bd5e378503939ddaee76f12ad7a97608'; 

  // Używamy hooka useEffect, aby pobrać dane pogodowe po renderze komponentu.
  useEffect(() => {
    // Wysyłamy zapytanie do API OpenWeatherMap, aby uzyskać dane o pogodzie dla stolicy kraju (result.capital[0]).
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${result.capital[0]}&appid=${apiKey}`)
      .then((response) => {  // Jeśli zapytanie jest udane...
        console.log(response.data);  // Wypisujemy dane odpowiedzi w konsoli.
        setAllWeather(response.data);  // Zapisujemy dane pogodowe w stanie `allWeather`.
      })
      .catch((error) => {  // Jeśli zapytanie zakończy się błędem...
        console.error('Error fetching weather data:', error);  // Wyświetlamy błąd w konsoli.
      });
  }, [result.capital[0]]);  // Zależność: efekt wywołuje się, gdy wartość `result.capital[0]` (nazwa stolicy) się zmienia.

  // Jeśli dane pogodowe są nadal `null`, nie renderujemy niczego. Komponent zwraca `null`, co oznacza brak wyświetlania zawartości.
  if (allWeather === null) return null;

  // Zwracamy JSX, który wyświetla dane o pogodzie.
  return (
    <div>
      {/* Wyświetlamy nagłówek z nazwą stolicy */}
      <h2>{`Weather in ${result.capital[0]}`}</h2>

      {/* Wyświetlamy temperaturę w stopniach Celsjusza */}
      <p>{`Temperature: ${(allWeather.main.temp - 273.5).toFixed(2)} °C`}</p>
      {/* Wyświetlamy ikonę pogody */}
      <img alt="weather icon" src={`http://openweathermap.org/img/wn/${allWeather.weather[0].icon}@2x.png`} />
      {/* Wyświetlamy prędkość wiatru */}
      <p>{`Wind: ${allWeather.wind.speed} m/s`}</p>
    </div>
  );
};

export default AllWeather;
