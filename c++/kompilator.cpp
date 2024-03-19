#include <iostream>

using namespace std;

class instrument {
    string trabka;
    string beben;
    string fortepian;

public:
    instrument(string trabka, string beben, string fortepian) : trabka(trabka), beben(beben), fortepian(fortepian) {} 

    void graj() {
        cout << "Trabka: " << trabka << endl;
        cout << "Beben: " << beben << endl;
        cout << "Fortepian: " << fortepian << endl;
    }

    void winstrument() {
        if (cin >> trabka) {
            cout << "tururu" << trabka << endl;
        }
        if (cin >> beben) {
            cout << "bum bum" << beben << endl;
        }
        if (cin >> fortepian) {
            cout << "plum plum" << fortepian << endl;
        }
    }
};

int main() {
    Instrument:instrument("trabka", "beben", "fortepian");
}