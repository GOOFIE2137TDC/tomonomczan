#include <iostream>

using namespace std;

class obiekt
{
    public:
    
    int* liczba;
    public:
    obiekt(int parametr = 0){
        *liczba = parametr;
    }

    obiekt(obiekt &orginal){
        liczba = new int;
        *liczba = *(orginal.liczba);
    }

    void wypisz(){
        cout<<*liczba<<endl;

    }
};

int main(){

    obiekt a;
    a.wypisz();

    obiekt b(5);
    b.wypisz();

    obiekt c(b);
    c.wypisz();

    *(b.liczba) = 12;
    b.wypisz();

    return 0;
}
