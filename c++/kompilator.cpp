#include <iostream>
#include <vector>

using namespace std;

class Stos {
protected:
    vector<int> stos;

public:
    void push(int value) {
        stos.push_back(value);
    }

    void pop() {
        if (!stos.empty()) {
            stos.pop_back();
        } else {
            cout << "Stos jest pusty.\n";
        }
    }

    int top() {
        if (!stos.empty()) {
            return stos.back();
        } else {
            cout << "Stos jest pusty.\n";
            return -1;
        }
    }

    bool empty() {
        return stos.empty();
    }
};

class SumaStos : public Stos {
public:
    int suma() {
        int suma = 0;
        for (int i = 0; i < stos.size(); i++) {
            suma += stos[i];
        }
        return suma;
    }

};


int main() {
    SumaStos s;
    s.push(1);
    s.push(2);
    s.push(3);
    cout << s.top() << endl; 
    cout << s.suma() << endl; 
    s.pop();
    cout << s.top() << endl; 
    cout << s.suma() << endl; 
    return 0;
}

