#include <algorithm>
#include <vector>
#include <iostream>
#include <cstdlib>
#include <ctime>

using namespace std;

class Element {
private:
    int liczba;
    static int licznik;

public:
    Element(int liczba) : liczba(liczba) {
        if (liczba % 2 == 0) {
            licznik++;
        }
        cout << "Konstruktor: Tworzenie obiektu Element\n";
    }

    ~Element() {
        if (liczba % 2 == 0) {
            licznik--;
        }
        cout << "Destruktor: Niszczenie obiektu Element\n";
    }

    void losuj() {
        liczba = rand() % 201 - 100;
        if (liczba % 2 == 0) {
            licznik++;
        }
    }

    int getLiczba() const {
        return liczba;
    }

    static int getLicznik() {
        return licznik;
    }
};

int Element::licznik = 0;

int main() {
    srand(time(0));
    vector<Element> elements(100, Element(200));

    for (Element& el : elements) {
        el.losuj();
    }

    int parzyste = count_if(elements.begin(), elements.end(), [](const Element& el) {
        return el.getLiczba() % 2 == 0;
    });

    cout << "Liczba elementów z parzystą wartością: " << parzyste << endl;
    cout << "Wartość licznika: " << Element::getLicznik() << endl;

    return 0;
}