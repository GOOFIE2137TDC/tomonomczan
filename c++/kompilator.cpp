#include <iostream>

using namespace std;

const double PI = 3.14159265358979323846;

class Bryla {
public:
    virtual double polePowierzchniBocznej() = 0;
    virtual double objetosc() = 0;
};

class Kula : public Bryla {
    double r;
public:
    Kula(double r) : r(r) {}
    double polePowierzchniBocznej() override {
        return 4 * PI * r * r;
    }
    double objetosc() override {
        return 4.0/3.0 * PI * r * r * r;
    }
};

int main() {
    Kula k(5);
    cout << "Pole powierzchni bocznej kuli: " << k.polePowierzchniBocznej() << endl;
    cout << "Objetosc kuli: " << k.objetosc() << endl;
    return 0;
}