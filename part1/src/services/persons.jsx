// Importujemy bibliotekę axios, która umożliwia wykonywanie zapytań HTTP (np. GET, POST, PUT, DELETE)
import axios from 'axios';

// Definiujemy podstawowy adres URL dla naszego API, w którym znajdują się dane o osobach
// Ten URL będzie wykorzystywany w każdej funkcji do wykonywania zapytań do serwera
const baseUrl = '/api/persons'; 

// Funkcja do pobierania wszystkich osób z serwera
const getAll = () => {
    // Wykonujemy zapytanie GET do '/api/persons', aby pobrać wszystkie osoby
    const request = axios.get(baseUrl);
    
    // Zwracamy obietnicę, która po otrzymaniu odpowiedzi z serwera, przekazuje tylko dane z odpowiedzi (response.data)
    return request.then(response => response.data);
}

// Funkcja do tworzenia nowej osoby
const create = newObject => {
    // Wykonujemy zapytanie POST do '/api/persons', wysyłając dane nowej osoby (newObject) na serwer
    const request = axios.post(baseUrl, newObject);
    
    // Zwracamy obietnicę, która po odpowiedzi z serwera, przekazuje dane tej nowo utworzonej osoby (response.data)
    return request.then(response => response.data);
}

// Funkcja do aktualizacji danych osoby
// Przyjmuje dwa argumenty: id osoby, której dane chcemy zaktualizować, oraz nowe dane (newObject)
const updatePerson = (id, newObject) => {
    // Wykonujemy zapytanie PUT, które aktualizuje dane osoby o podanym id na serwerze
    const request = axios.put(`${baseUrl}/${id}`, newObject);

    // Zwracamy obietnicę, która po odpowiedzi z serwera, przekazuje zaktualizowane dane osoby
    return request.then(response => response.data);
}  

// Funkcja do usuwania osoby
// Przyjmuje id osoby, którą chcemy usunąć z bazy danych
const getDeletePerson = id => {
    // Wykonujemy zapytanie DELETE, aby usunąć osobę o podanym id
    const request = axios.delete(`${baseUrl}/${id}`);

    // Zwracamy obietnicę, która po odpowiedzi z serwera, przekazuje dane związane z usuniętą osobą
    return request.then(response => response.data);
}

// Tworzymy obiekt `personServices`, który zawiera wszystkie funkcje (getAll, create, updatePerson, getDeletePerson)
// Obiekt ten będzie eksportowany, by był dostępny w innych częściach aplikacji
const personServices = { getAll, create, updatePerson, getDeletePerson };

// Eksportujemy obiekt personServices, aby można było korzystać z funkcji w innych plikach
export default personServices;
