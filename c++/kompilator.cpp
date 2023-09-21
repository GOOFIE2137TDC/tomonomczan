#include <iostream>
using namespace std;

int main() {
    int telefon = 5;
    int *wsk = &telefon;
    *wsk = *wsk + 8;

    cout<<"Wartosc zmiennej telefon: "<<*wsk<<"\n";
}