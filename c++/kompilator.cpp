#include <iostream>
#include <string>
using namespace std;

void wycinam(string tekst, string cos)
{
    for (int i = 0; i < tekst.size(); i++)
    {
        if (tekst[i] == 'a' || tekst[i] == 'e' || tekst[i] == 'i' || tekst[i] == 'o' || tekst[i] == 'u')
        {
            cos += tekst[i];
        }
    }
    cout << cos;
}

int main() {
    string tekst{};
    tekst = "informacja";
    string wynik{};
    wycinam(tekst, wynik);
}
