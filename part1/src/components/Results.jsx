// Importowanie zależności z React.
import React, { useState } from 'react';  // Importowanie hooka `useState` do zarządzania stanem.
import OneCountryDisplay from './OneCountryDisplay';  // Importowanie komponentu `OneCountryDisplay`, który będzie odpowiedzialny za wyświetlanie szczegółów o wybranym kraju.

const Results = ({ result }) => {
  // `result` to pojedynczy obiekt reprezentujący dane o kraju, który zostaje przekazany jako prop do komponentu `Results`.
  
  // Tworzymy stan `show`, który decyduje o tym, czy szczegóły kraju mają być wyświetlone. Początkowa wartość to `false`, co oznacza, że szczegóły nie są widoczne.
  const [show, setShow] = useState(false);  

  // Funkcja obsługująca kliknięcie przycisku "show".
  const handleShowClick = () => {
    // Zmieniamy wartość stanu `show` na przeciwną (toggle). Jeśli `show` jest `false`, zostanie ustawione na `true` i odwrotnie.
    setShow(!show);  
  };

  return (
    <li>
      {/* Wyświetlamy nazwę kraju i przycisk "show" */}
      {result.name.common}  {/* Wyświetlanie wspólnej nazwy kraju z obiektu `result`. */}
      <button onClick={handleShowClick}>show</button>  {/* Przycisk, który wywołuje `handleShowClick` po kliknięciu. */}
      
      {/* Jeśli stan `show` jest prawdziwy (czyli użytkownik kliknął przycisk "show"), renderujemy komponent `OneCountryDisplay`. */}
      {show && <OneCountryDisplay key={result.name.common} result={result} />} 
      {/* `show &&` oznacza, że komponent `OneCountryDisplay` będzie renderowany tylko wtedy, gdy `show` będzie `true`. */}
    </li>
  );
};

// Eksportowanie komponentu `Results`, aby mógł być użyty w innych częściach aplikacji.
export default Results;
