#include <iostream>
#include <vector>

using namespace std;

class Stos {
private:
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

int main() {
    Stos s;
    s.push(1);
    s.push(2);
    s.push(3);
    cout << s.top() << endl; 
    s.pop();
    cout << s.top() << endl; 
    return 0;
}