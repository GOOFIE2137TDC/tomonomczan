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
    string getnazwa();
    int getilosc();
    double getcena();

    double wartosc(int ilosc);
};

int main()
{
    fstream magazyn;
    magazyn.open("magazyn.txt", ios::in);
    vector<owoc> owoce;
    string linia;
    string nazwa;
    int ilosc;
    double cena;


    getline(magazyn, linia);
    while (!magazyn.eof() == false)
    {
        magazyn >> nazwa >> ilosc >> cena;
        owoc o(nazwa, ilosc, cena);
        owoce.push_back(o);
    }
    
    return 0;
}

owoc::owoc(string n, int i, double c) : nazwa(n), ilosc(i), cena(c) {}

void owoc::setowoc(string n, int i, double c)
{
    this-> nazwa = n;
    this-> ilosc = i;
    this-> cena = c;
}

string owoc::getnazwa()
{
    return nazwa;
}

int owoc::getilosc()
{
    return ilosc;
}

double owoc::getcena()
{
    return cena;
}

double owoc::wartosc(int ilosc)
{
    return ilosc * cena;
}