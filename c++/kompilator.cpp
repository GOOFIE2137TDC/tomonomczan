#include <iostream>

using namespace std;

int* zarezerwujePamiec()
{
    int* wskaznik = new int;
    return wskaznik;
}

int main()
{
    int* zmienna;
    zmienna = zarezerwujePamiec();
}