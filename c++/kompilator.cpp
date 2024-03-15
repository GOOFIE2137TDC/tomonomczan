#include <iostream>

int main() {
    int liczba;
    std::cout << "Podaj liczbę od 10 do 50: ";
    std::cin >> liczba;

    if ((liczba >= 10 && liczba <= 50)) {
            std::cout << "Podana liczba to: " << liczba << "\n";
            if (liczba % 2 == 0) {
                std::cout << "Liczba jest parzysta.\n";
            } 
            else {
                std::cout << "Liczba jest nieparzysta.\n";
            }
        }
        

    return 0;
}