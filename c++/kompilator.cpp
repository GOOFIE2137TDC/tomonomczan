#include <iostream>
#include <fstream>
#include <vector>
#include <algorithm>

using namespace std;

string szyfruj(string tekst, string klucz) {
    int dlugosc = tekst.length();
    int kolumny = klucz.length();
    int wiersze = (dlugosc + kolumny - 1) / kolumny;
    vector<vector<char>> tablica(wiersze, vector<char>(kolumny, ' '));

    for (int i = 0; i < dlugosc; i++) {
        tablica[i / kolumny][i % kolumny] = tekst[i];
    }

    string zaszyfrowany;
    for (char k : klucz) {
        int kolumna = k - '1';
        for (int i = 0; i < wiersze; i++) {
            zaszyfrowany += tablica[i][kolumna];
        }
    }

    return zaszyfrowany;
}

string deszyfruj(string tekst, string klucz) {
    int dlugosc = tekst.length();
    int kolumny = klucz.length();
    int wiersze = (dlugosc + kolumny - 1) / kolumny;
    vector<vector<char>> tablica(wiersze, vector<char>(kolumny, ' '));

    int indeks = 0;
    for (char k : klucz) {
        int kolumna = k - '1';
        for (int i = 0; i < wiersze; i++) {
            if (indeks < dlugosc) {
                tablica[i][kolumna] = tekst[indeks++];
            }
        }
    }

    string odszyfrowany;
    for (int i = 0; i < wiersze; i++) {
        for (int j = 0; j < kolumny; j++) {
            odszyfrowany += tablica[i][j];
        }
    }

    return odszyfrowany;
}

int main() {
    string klucz;
    cout << "Podaj klucz: ";
    cin >> klucz;

    ifstream plikTekst("tekst.txt");
    ofstream plikEnigma("enigma.txt");
    string tekst((istreambuf_iterator<char>(plikTekst)), istreambuf_iterator<char>());
    plikEnigma << szyfruj(tekst, klucz);
    plikTekst.close();
    plikEnigma.close();

    ifstream plikEnigma2("enigma.txt");
    ofstream plikWiadomosc("wiadomosc.txt");
    string zaszyfrowany((istreambuf_iterator<char>(plikEnigma2)), istreambuf_iterator<char>());
    plikWiadomosc << deszyfruj(zaszyfrowany, klucz);
    plikEnigma2.close();
    plikWiadomosc.close();

    return 0;
}