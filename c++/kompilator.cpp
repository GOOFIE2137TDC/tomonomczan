#include <iostream>
#include <vector>
#include <cmath>
#include <fstream>

using namespace std;

class owoc
{
    string nazwa;
    int ilosc;
    double cena;
    
    public:
    owoc(string n, int i, double c){
        nazwa = n;
        ilosc = i;
        cena = c;
    }
    void setowoc(string n, int i, double c){
        nazwa = n;
        ilosc = i;
        cena = c;
    }
    string getnazwa(){
        return nazwa;
    }
    int getilosc(){
        return ilosc;
    }
    double getcena(){
        return cena;
    }
}