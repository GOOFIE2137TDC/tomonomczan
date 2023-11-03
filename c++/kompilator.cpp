#include <iostream>
#include <string>

using namespace std;

string zamienLitery(string tekst) {
    for (char& c : tekst) {
        if (c == 'a') {
            c = 'y';
        }
    }
    return tekst;
}

int main() {
    string tekst;
    cout << "Podaj tekst: ";
    getline(cin, tekst);
    string wynik = zamienLitery(tekst);
    cout << "Tekst po zamianie: " << wynik << endl;
    return 0;
}