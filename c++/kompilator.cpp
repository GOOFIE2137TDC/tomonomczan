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
    public:
    Kot(string imie) : Zwierze(imie, "kot") {}
    
    void przedstawSie() override{
        Zwierze::przedstawSie();
        cout << "Mruczę przy głaskaniu.\n";
    }
};

class Pies : public Zwierze {
    public:
    Pies(string imie) : Zwierze(imie, "pies") {}
    
    void przedstawSie() override{
        Zwierze::przedstawSie();
        cout << "Macham ogonem.\n";
    }
};

int main() {
    Kot z1("Nazgul");
    Pies z2("Varg");

    z1.przedstawSie();
    z2.przedstawSie();

    return 0;
}