#include <iostream>
#include <vector>
#include <cstdlib>
#include <ctime>

class Prostokat {
    int x;
    int y;
    int szerokosc;
    int wysokosc;

public:
    Prostokat(int x, int y, int szerokosc, int wysokosc)
        : x(x), y(y), szerokosc(szerokosc), wysokosc(wysokosc) {}

    bool czyDotyka(const Prostokat& inny) {
        return x < inny.x + inny.szerokosc && x + szerokosc > inny.x &&
               y < inny.y + inny.wysokosc && y + wysokosc > inny.y;
    }
};