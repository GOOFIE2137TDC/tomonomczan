#include <iostream>
#include <string>

using namespace std;

string zamienZnaki(string tekst, string znaki) {
    for (char& c : tekst) {
        if (znaki.find(c) != string::npos) {
            c = '#';
        }
    }
    return tekst;
}

int main() {
    string tekst, znaki;
    cout << "Podaj tekst: ";
    getline(cin, tekst);
    cout << "Podaj znaki do zamiany: ";
    getline(cin, znaki);
    string wynik = zamienZnaki(tekst, znaki);
    cout << "Tekst po zamianie: " << wynik << endl;
    return 0;
}