#include <iostream> 
#include <iomanip> 
#include <vector> 

using namespace std; 

class Element 
{
    int liczba;

public:
    Element(int liczba){
        this->liczba = liczba;
        cout << "Element (" << liczba << ") utworzony." << endl;
    }

    int get(){
        return liczba;
    }

    void put(int liczba){
        this->liczba = liczba;
    }

}; 

 

class Zbior 

{
    Element elem1, elem2;                 // Powołanie do życia obiektów innej klasy

public: 

 

// lista konstruktorów Elementow ich kolejnosc nie jest istotna, 

// kolejnosc konstruowania obiektów zależy od kolejności ich deklaracji, jak w linii powyżej (Element elem1, elem2)  

 

Zbior() : elem2(2), elem1(1) //lista konstruktorów Elementow
{
    cout << "Zbior Elementow utworzony." << endl;
} 

    int get(int elem_nmbr){
        return elem_nmbr == 1 ? elem1.get() : elem2.get();
    }

    void put(int elNmbr, int liczba){
        if (elNmbr == 1){
            elem1.put(liczba);
        } else {
            elem2.put(liczba);
        }
    }


}; 

 

 

main(){
    Zbior kolekcja;

    return 0;
} 