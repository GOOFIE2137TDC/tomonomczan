// Import biblioteki Express — frameworka do tworzenia serwerów HTTP w Node.js
const express = require('express')

// Import biblioteki Morgan — middleware służącego do logowania żądań HTTP w konsoli
const morgan = require('morgan')

// Tworzymy instancję aplikacji Express
const app = express()
// Definiujemy stałą 'baseUrl', która będzie przechowywać bazowy URL API
const baseUrl = 'http://localhost:3001/api/notes'

// Middleware Expressa, który pozwala odczytywać dane JSON przesyłane w treści zapytań HTTP (np. w POST)
app.use(express.json())

// Tworzymy niestandardowy token dla Morgan — 'post-data'
// Token będzie zawierał dane przesłane w zapytaniu POST (czyli req.body) jako string JSON
// W przypadku innych metod (GET, PUT itd.), token będzie pustym stringiem
morgan.token('post-data', (req, res) => {
  return req.method === 'POST' ? JSON.stringify(req.body) : ''
})

// Rejestrujemy middleware Morgan w aplikacji Express
// Używamy formatu logowania 'tiny', ale dodajemy też nasz token 'post-data' na końcu
// Efekt: każde żądanie HTTP będzie logowane z metodą, URL-em, statusem, czasem odpowiedzi oraz danymi POST (jeśli istnieją)
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :post-data'))

// Przykładowa lista notatek (pełni funkcję tymczasowej "bazy danych" w pamięci RAM)
let notes = [
  {
    id: "1",
    content: "HTML is easy",
    important: true
  },
  {
    id: "2",
    content: "Browser can execute only JavaScript",
    important: false
  },
  {
    id: "3",
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true
  }
]

// Endpoint GET dla ścieżki głównej ('/')
// Odpowiada zwykłym tekstem HTML, który przeglądarka wyświetli jako stronę
app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

// Endpoint GET dla '/api/notes'
// Zwraca listę wszystkich notatek w formacie JSON
app.get('/api/notes', (request, response) => {
  response.json(notes)
})

// Endpoint POST dla '/api/notes'
// Przyjmuje nową notatkę (z ciała żądania) i dodaje ją do listy 'notes'
// Zwraca dodaną notatkę jako odpowiedź, z kodem statusu 201 (Created)
app.post('/api/notes', (request, response) => {
  const note = request.body // Pobieramy dane przesłane w żądaniu
  notes.push(note)          // Dodajemy nową notatkę do listy
  response.status(201).json(note) // Odpowiadamy z nową notatką i statusem 201
})

// Uruchomienie serwera aplikacji nasłuchującego na porcie 3001
// Po uruchomieniu wyświetla komunikat w konsoli
const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
