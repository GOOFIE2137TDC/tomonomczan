#include <iostream> 
using namespace std; 

void zmien(int* x, int* y) 
{ 
    int pomoc;
    pomoc = *x;
    *x = *y;
    *y = pomoc;
    return
}

int main() 
{ 
    int a = 5, b = 7;
    int* wska = &a;
    int* wskb = &b;
    zmien(wska, wskb);
    cout<<"a = "<<a<<", b = "<<b;
    return 0; 
} 
