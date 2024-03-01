#include <iostream>
#include <stack>
#include <vector>

using namespace std;

class Stos {
    private:
        stack<int> stos;
        vector<int> max;
        vector<int> min;

    public:
        void push(int x) {
            cin >> x;
            stos.push(x);
            if (max.empty() || x > max.back()) {
                max.push_back(x);
            } 
            else {
                max.push_back(max.back());
            }
        }
};

int main() {
}