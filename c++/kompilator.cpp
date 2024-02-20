#include <iostream>
#include <vector>
#include <cstdlib>
#include <ctime>

using namespace std;

class Prostokat {
    int x;
    int y;
    int szerokosc;
    int wysokosc;

public:
    Prostokat() = default;
    Prostokat(int px, int py, int ps, int pw)
        : x(px), y(py), szerokosc(ps), wysokosc(pw) {}

    int getX() const { return x; }
    int getY() const { return y; }


    bool czyDotyka(Prostokat& inny) {
        return x < inny.x + inny.szerokosc && x + szerokosc > inny.x &&
               y < inny.y + inny.wysokosc && y + wysokosc > inny.y;
    }
};

int main(){
}