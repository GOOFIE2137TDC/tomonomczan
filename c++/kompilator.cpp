#include <iostream>

using namespace std;

class Kwadrat{
    double dBoku;

public:

Kwadrat() = default;

Kwadrat(double bok){
    dBoku = bok;
}
double getBok(){
    return dBoku;
}
double pole(){
    return dBoku*dBoku;
}
double obwod(){
    return 4*dBoku;
}

};

class Szescian : public Kwadrat{

public:

Szescian() = default;

Szescian(double bok) : Kwadrat(bok){}

double pole(){
    return 6*Kwadrat::pole();
}

double objetosc(){
    return Kwadrat::pole()*getBok();
}

};