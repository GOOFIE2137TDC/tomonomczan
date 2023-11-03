#include <iostream>
#include <string>

using namespace std;

string usunZnaki(string tekst) {
    string wynik;
    for (char c : tekst) {
        if (c != ' ' && c != ',' && c != '.') {
            wynik += c;
        }
    }
    return wynik;
}

int main() {
    string tekst;
    cout << "Podaj tekst: ";
    getline(cin, tekst);
    string wynik = usunZnaki(tekst);
    cout << "Tekst po usunieciu spacji, przecinkow i kropek: " << wynik << endl;
    return 0;
}