import React, { useState } from "react";

// Komponent Button
const Button = (props) => {
  // Przyjmuje dwa propsy: handleClick (funkcja po kliknięciu) oraz text (tekst na przycisku)
  return <button onClick={props.handleClick}>{props.text}</button>;
};

// Komponent Statistic
const Statistic = (props) => {
  // Wyświetla pojedynczy wiersz tabeli z tekstem i wartością statystyki
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

// Komponent Statistics
const Statistics = (props) => {
  // Oblicza sumę wszystkich opinii (good + neutral + bad)
  const all = props.good + props.neutral + props.bad;

  // Inicjalizacja zmiennych dla średniej i procentu pozytywnych opinii
  var average = 0;
  var positive = 0;

  // Obliczenia tylko wtedy, gdy jest co najmniej jedna opinia
  if (all !== 0) {
    average = (props.good - props.bad) / all; // średnia ocena
    positive = (props.good / all) * 100; // procent pozytywnych opinii
  }

  // Jeśli brak opinii, wyświetlamy komunikat
  if (all === 0) {
    return <div>No feedback given</div>;
  } 
  
  else {
    // Jeśli są opinie, wyświetlamy tabelę ze statystykami
    return (
      <div>
        <table>
          <tbody>
            <Statistic text="good" value={props.good}></Statistic>
            <Statistic text="neutral" value={props.neutral}></Statistic>
            <Statistic text="bad" value={props.bad}></Statistic>
            <Statistic text="all" value={all}></Statistic>
            <Statistic text="average" value={average}></Statistic>
            <Statistic text="positive" value={positive}></Statistic>
          </tbody>
        </table>
      </div>
    );
  }
};

// Komponent główny App
const App = () => {
  // Użycie hooków useState do zarządzania stanem aplikacji
  const [good, setGoodValue] = useState(0);     // Liczba dobrych opinii
  const [neutral, setNeutralValue] = useState(0); // Liczba neutralnych opinii
  const [bad, setBadValue] = useState(0);       // Liczba złych opinii

  // Funkcje do aktualizacji liczby opinii
  const addGoodValue = (value) => {
    setGoodValue(value); // Zmiana stanu dla dobrych opinii
  };

  const addNeutralValue = (value) => {
    setNeutralValue(value); // Zmiana stanu dla neutralnych opinii
  };

  const addBadValue = (value) => {
    setBadValue(value); // Zmiana stanu dla złych opinii
  };

  return (
    <div>
      <h2>give feedback</h2>
      {/* Przycisk "good", po kliknięciu zwiększa liczbę dobrych opinii */}
      <Button handleClick={() => addGoodValue(good + 1)} text="good"></Button>
      {/* Przycisk "neutral", po kliknięciu zwiększa liczbę neutralnych opinii */}

      <Button
        handleClick={() => addNeutralValue(neutral + 1)}
        text="neutral"
      ></Button>
      {/* Przycisk "bad", po kliknięciu zwiększa liczbę złych opinii */}
      
      <Button handleClick={() => addBadValue(bad + 1)} text="bad"></Button>
      <h2>statistics</h2>
      {/* Wywołanie komponentu Statistics, przekazanie wartości stanów */}

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
