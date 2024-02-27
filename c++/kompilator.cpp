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