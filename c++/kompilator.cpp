#include <iostream> 

using namespace std; 

 

class Zwierze
{ 

    string imie; 
    string gatunek; 
     
    public: 
    void przedstawSie(); 

    void setImie(string noweImie); 
    string getImie(); 
    void setGatunek(string nowyGatunek); 
    string getGatunek(); 
     

}; 

 

void Zwierze::przedstawSie(){ 
    cout<<"Mam na imie "<<imie<<" i jestem "<<gatunek<<"."; 
} 

 

void Zwierze::setImie(string noweImie)
{ 
    imie = noweImie; 
} 

 

string Zwierze::getImie()
{ 
    return imie; 
} 

 

void Zwierze::setGatunek(string nowyGatunek)
{ 
    gatunek = nowyGatunek; 
} 

 

string Zwierze::getGatunek()
{ 
    return gatunek; 
} 

 

int main() 

{ 

    Zwierze pies; 
    pies.setImie("Azor"); 
    pies.setGatunek("owczarek niemiecki"); 
    pies.przedstawSie(); 
    cout<<"\nPrzepraszam, nie doslyszalem imienia. \n"; 
    cout<<"Moje imie to: "<<pies.getImie(); 
 

    return 0; 

} 