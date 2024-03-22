#include <iostream>
#include <string>
#include <vector>
#include <cstdlib>
#include <ctime>

using namespace std;

class Instrument {
public:
    virtual void graj() const = 0; 
};

class Gitara : public Instrument {
public:
    void graj() const override {
        cout << "brzdęk brzdęk\n";
    }
};

class Pianino : public Instrument {
public:
    void graj() const override {
        cout << "tun tun\n";
    }
};

class Skrzypce : public Instrument {
public:
    void graj() const override {
        cout << "skrzyp skrzyp\n";
    }
};

int main() {
    srand(time(0));

    vector<Instrument*> orkiestra;
    orkiestra.push_back(new Gitara);
    orkiestra.push_back(new Pianino);
    orkiestra.push_back(new Skrzypce);

    cout << "Koncert wirtuozów: \n";

    for (int i = 0; i < 10; i++) {
        orkiestra[rand() % orkiestra.size()]->graj();
    }

    for (const auto& instrument : orkiestra) {
        instrument->graj();
    }


    return 0;
}