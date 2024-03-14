#include <iostream>

using namespace std;

class Osoba {
    string imie;
    string nazwisko;
    int nrDowodu;

public:
    Osoba(string pimie, string pnazwisko, int pnrDowodu) {
        imie{pimie}, nazwisko{pnazwisko}, nrDowodu{pnrDowodu}{
            cout<<"Osoba\n";
        }
    }
    ~Osoba(){
        cout<<"Destruktor Osoba\n";
    }

    string getImie() {
        return imie;
    }
    string getNazwisko() {
        return nazwisko;
    }
    int getNrDowodu() {
        return nrDowodu;
    }

    void wypisz() {
        cout << "Imie: " << imie << endl;
        cout << "Nazwisko: " << nazwisko << endl;
        cout << "Nr dowodu: " << nrDowodu << endl;
    }

    void piszKimJestes() {
        cout << "Osoba\n";
    }
};

int main(){
    Osoba o;
    o.piszKimJestes();
    o.wypisz();
    return 0;

}