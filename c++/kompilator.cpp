#include <iostream>
#include <cmath>

using namespace std;

class MojaLiczba {
    int liczba;

public:
    MojaLiczba(int l) : liczba(l) {}

    void setLiczba(int l) {
        liczba = l;
    }

    int getLiczba() {
        return liczba;
    }

    bool czyNieparzysta() {
        return liczba % 2 != 0;
    }

    bool czyParzysta() {
        return liczba % 2 == 0;
    }

    double pierwiastekKwadratowy() {
        return sqrt(liczba);
    }

    int potega(int x) {
        return pow(liczba, x);
    }

    int suma(int x) {
        return liczba + x;
    }

    int roznica(int x) {
        return liczba - x;
    }
};

int main() {
    int liczba;
    cout << "Podaj liczbe: ";
    cin >> liczba;
    MojaLiczba ml(liczba);
    cout << "Czy liczba jest nieparzysta? " << (ml.czyNieparzysta() ? "Tak" : "Nie") << endl;
    cout << "Czy liczba jest parzysta? " << (ml.czyParzysta() ? "Tak" : "Nie") << endl;
    cout << "Pierwiastek kwadratowy z liczby: " << ml.pierwiastekKwadratowy() << endl;
    cout << "Liczba do potegi 3: " << ml.potega(3) << endl;
    cout << "Suma liczby i 5: " << ml.suma(5) << endl;
    cout << "Roznica liczby i 5: " << ml.roznica(5) << endl;
    return 0;
}