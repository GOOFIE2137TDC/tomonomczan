#include <algorithm>
#include <vector>
#include <iostream>

using namespace std;

int main() {
    vector<int> numbers(3);
    cout << "Podaj trzy liczby:\n";
    for (int i = 0; i < 3; i++) {
        cin >> numbers[i];
    }

    sort(numbers.begin(), numbers.end(), greater<int>());

    cout << "Liczby w porządku malejącym:\n";
    for (int number : numbers) {
        cout << number << "\n";
    }

    return 0;
}