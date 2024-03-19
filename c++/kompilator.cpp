#include <iostream>
#include <ctime>

using namespace std;

class instrument {
    string trabka;
    string beben;
    string fortepian;

public:
    instrument(string trabka, string beben, string fortepian) : trabka(trabka), beben(beben), fortepian(fortepian) {} 

    virtual void winstrument() {
        for (int i = 0; i < 3; i++) {
            cout << "Wybierz instrument: " << endl;
            cout << "1. Trabka" << endl;
            cout << "2. Beben" << endl;
            cout << "3. Fortepian" << endl;
            int wybor;
            cin >> wybor;
            switch (wybor) {
                case 1:
                    cout << "Wybrano: " << trabka << endl;
                    break;
                case 2:
                    cout << "Wybrano: " << beben << endl;
                    break;
                case 3:
                    cout << "Wybrano: " << fortepian << endl;
                    break;
                default:
                    cout << "Nie ma takiego instrumentu" << endl;
                    break;
            }
        }
    }
};