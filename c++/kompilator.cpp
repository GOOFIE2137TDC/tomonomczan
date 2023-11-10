#include <iostream>
#include <string>
#include <sstream>
#include <vector>

using namespace std;

vector<string> podzielNaWyrazy(string tekst) {
    vector<string> wyrazy;
    stringstream ss(tekst);
    string wyraz;
    while (ss >> wyraz) {
        wyrazy.push_back(wyraz);
    }
    return wyrazy;
}

vector<string> sortujWyrazy(vector<string> wyrazy) {
    for (int i = 0; i < wyrazy.size(); i++) {
        for (int j = i + 1; j < wyrazy.size(); j++) {
            if (wyrazy[i] > wyrazy[j]) {
                swap(wyrazy[i], wyrazy[j]);
            }
        }
    }
    return wyrazy;
}

int main() {
    string tekst;
    cout << "Podaj zdanie: ";
    getline(cin, tekst);
    vector<string> wyrazy = podzielNaWyrazy(tekst);
    wyrazy = sortujWyrazy(wyrazy);
    cout << "Wyrazy w kolejności alfabetycznej: ";
    for (string wyraz : wyrazy) {
        cout << wyraz << " ";
    }
    cout << endl;
    return 0;
}