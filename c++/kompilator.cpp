#include <iostream>
#include <string>

using namespace std;

string usunCyfry(string dane) {
    string wynik;
    for (char c : dane) {
        if (!isdigit(c)) {
            wynik += c;
        }
    }
    return wynik;
}

int main() {
    string tekst;
    cout << "Podaj tekst: ";
    cin >> tekst;
    string wynik = usunCyfry(tekst);
    cout << "Tekst bez cyfr: " << wynik << endl;
    return 0;
}