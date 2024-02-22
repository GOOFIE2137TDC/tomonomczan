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
    Prostokat(int x, int y, int szerokosc, int wysokosc)
        : x(x), y(y), szerokosc(szerokosc), wysokosc(wysokosc) {}

    bool czyDotyka(const Prostokat& inny) const {
        return x < inny.x + inny.szerokosc && x + szerokosc > inny.x &&
               y < inny.y + inny.wysokosc && y + wysokosc > inny.y;
    }

    void rysuj(vector<vector<char>>& siatka, char znak) const {
        for (int i = x; i < x + szerokosc; i++) {
            for (int j = y; j < y + wysokosc; j++) {
                siatka[i][j] = znak;
            }
        }
    }
};

int main() {
    srand(time(0));

    vector<Prostokat> prostokaty;
    for (int i = 0; i < 5; i++) {
        int x = rand() % 31;
        int y = rand() % 31;
        int szerokosc = 2 + rand() % 9;
        int wysokosc = 2 + rand() % 9;
        prostokaty.push_back(Prostokat(x, y, szerokosc, wysokosc));
    }

    for (int i = 0; i < prostokaty.size(); i++) {
        for (int j = i + 1; j < prostokaty.size(); j++) {
            if (prostokaty[i].czyDotyka(prostokaty[j])) {
                cout << "Prostokat " << i << " dotyka prostokata " << j << endl;
            }
        }
    }

    vector<vector<char>> siatka(41, vector<char>(41, ' '));
    char znaki[] = {'#', '*', '+', '@', '%'};
    for (int i = 0; i < prostokaty.size(); i++) {
        prostokaty[i].rysuj(siatka, znaki[i]);
    }

    for (int i = 0; i < siatka.size(); i++) {
        for (int j = 0; j < siatka[i].size(); j++) {
            cout << siatka[i][j];
        }
        cout << endl;
    }

    return 0;
}