#include <iostream> 
using namespace std; 

int main() 
{ 
    float a;
    float as;
    float* wsk = &a;
    cout<<"podaj wartość zmiennej a: ";
    cin>>a;
    as = *wsk * 2;

    
    cout<<"wartośc wskaźnika wsk: "<<*wsk; 
    cout<<"\nwartość zmiennej as: "<<as;
    return 0; 
} 


 
