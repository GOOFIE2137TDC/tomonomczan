#include <iostream>
#include <bitset>

using namespace std;

int main() {
    int liczba;
    cout << "Podaj liczbe calkowita z zakresu od -128 do 127: ";
    cin >> liczba;
    bitset<8> binarna(liczba);
    cout << "Liczba w kodzie U2: " << binarna << endl;
    return 0;
}