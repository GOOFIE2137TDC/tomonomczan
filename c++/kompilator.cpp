#include <iostream>
#include <string>

using namespace std;

class Zwierze {
protected:
    string imie;
    string gatunek;

public:
    Zwierze(string imie, string gatunek) : imie(imie), gatunek(gatunek) {}

    virtual void przedstawSie() {
        cout << "Cześć, jestem " << imie << " i jestem " << gatunek << ".\n";
    }
};

class Kot : public Zwierze {
};

class Pies : public Zwierze {
};