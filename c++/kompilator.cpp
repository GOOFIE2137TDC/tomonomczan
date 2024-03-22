#include <iostream>
#include <string>
#include <vector>
#include <cstdlib>
#include <ctime>

using namespace std;

class Instrument {
public:
    virtual void graj() const = 0; // czysta funkcja wirtualna
};

class Gitara : public Instrument {
public:
    void graj() const override {
        cout << "Dźwięk gitary\n";
    }
};

class Pianino : public Instrument {
public:
    void graj() const override {
        cout << "Dźwięk pianina\n";
    }
};

class Skrzypce : public Instrument {
public:
    void graj() const override {
        cout << "Dźwięk skrzypiec\n";
    }
};

int main() {
    srand(time(0)); // inicjalizacja generatora liczb losowych

    vector<Instrument*> orkiestra;
    orkiestra.push_back(new Gitara());
    orkiestra.push_back(new Pianino());
    orkiestra.push_back(new Skrzypce());

    cout << "Koncert:\n";
    for (int i = 0; i < 10; ++i) {
        int indeks = rand() % orkiestra.size(); // losowanie indeksu
        orkiestra[indeks]->graj();
    }

    // zwolnienie pamięci
    for (Instrument* instrument : orkiestra) {
        delete instrument;
    }

    return 0;
}