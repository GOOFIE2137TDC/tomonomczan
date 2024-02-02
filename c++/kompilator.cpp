#include <iostream>
#include <fstream>
#include <bitset>

using namespace std;

int main(){
    ifstream plik("liczby.txt");
    if (!plik){
        cout<<"Nie mogę otworzyć pliku!";
        return 1;
    }
}

class Binarna{
    string liczba;
};