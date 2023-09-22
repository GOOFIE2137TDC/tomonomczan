#include <iostream> 
using namespace std; 

int sortowanie(int *a, int *b, int *c)
{
    int *wsk = &a;
    int *wsk2 = &b;
    int *wsk3 = &c;

    if(*wsk > *wsk2)
    {

    }
    if(*wsk > *wsk3)
    {
        
    }
    if(*wsk2 > *wsk3)
    {
        
    }
    return *wsk, *wsk2, *wsk3;
}

int main() 
{ 
    int a = 3, b = 2, c =1;
    int *wsk = &a;
    int *wsk2 = &b;
    int *wsk3 = &c;

    sortowanie(wsk, wsk2, wsk3);
    cout<<sortowanie(wsk, wsk2, wsk3)<<endl;
    return 0; 
} 

 
