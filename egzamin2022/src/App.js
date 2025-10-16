import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
 function App() {
  const [faqData] = useState([

    {
      id: 'q1',
      title: 'Jak rozpocząć pracę z aplikacją?',
      content: 'Aby rozpocząć pracę z aplikacją, wystarczy kliknąć na przycisk "Start" w głównym menu. Następnie możesz przejść przez krótki przewodnik, który pokaże Ci wszystkie dostępne funkcje. Aplikacja jest intuicyjna i łatwa w obsłudze.'
    },

    {
      id: 'q2',
      title: 'Czy moje dane są bezpieczne?',
      content: 'Tak, bezpieczeństwo Twoich danych jest dla nas priorytetem. Wszystkie informacje są szyfrowane i przechowywane zgodnie z najwyższymi standardami bezpieczeństwa. Nie udostępniamy danych osobowych osobom trzecim bez Twojej wyraźnej zgody.'
    },

    {
      id: 'q3',
      title: 'Jak mogę skontaktować się z pomocą techniczną?',
      content: 'Możesz skontaktować się z naszym zespołem pomocy technicznej na kilka sposobów: przez formularz kontaktowy na stronie, wysyłając email na adres pomoc@aplikacja.pl lub dzwoniąc pod numer +48 123 456 789. Nasz zespół odpowiada w ciągu 24 godzin.'
    }

  ])
  
  const [activeItem, setActiveItem] = useState(null)

  const handleAccordionClick = (itemId) => {

    if (activeItem === itemId) {
      
      setActiveItem(null)
      console.log(`Zamknij: ${itemId}`)

    } else {
    
      setActiveItem(itemId)
      console.log(`Otwórz: ${itemId}`)
    }

  }
  return (
    <div class="accordion" id="accordionExample">
    <div class="card">
      <div class="card-header" id="headingOne">
        <h5 class="mb-0">
          <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne">
            Collapsible Group Item #1
          </button>
        </h5>
      </div>
      <div id="collapseOne" class="collapse" data-parent="#accordionExample">
        <div class="card-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
        </div>
      </div>
    </div>
  </div>
  );
}
}

export default App;
