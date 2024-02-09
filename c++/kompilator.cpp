#include <iostream>
#include <ctime>
#include <vector>

using namespace std;

class element {
    int liczba;
    static int licznik;
    
    public:
        void losuj() {
           liczba = -100 + rand() % 201;
           if (liczba % 2 == 0) {
               licznik++;
           }
        }
};

int element::licznik = 0;

int main() {
}
