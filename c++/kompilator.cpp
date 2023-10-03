#include <iostream>
#include <vector>
#include <cstdlib>
#include <ctime>

using namespace std;

float average(vector<float> v) {
    float sum = 0;
    for (int i = 0; i < v.size(); i++) {
        sum += v[i];
    }
    return sum / v.size();
}

void sumPositiveNegative(vector<float> v, float &sumPositive, float &sumNegative) {
    sumPositive = 0;
    sumNegative = 0;
    for (int i = 0; i < v.size(); i++) {
        if (v[i] > 0) {
            sumPositive += v[i];
        } else if (v[i] < 0) {
            sumNegative += v[i];
        }
    }
}

int main() {
    srand(time(NULL));
    vector<float> v(20);
    for (int i = 0; i < v.size(); i++) {
        v[i] = (rand() % 121) - 20;
    }
    float avg = average(v);
    float sumPositive, sumNegative;
    sumPositiveNegative(v, sumPositive, sumNegative);
    cout << "Vector: ";
    for (int i = 0; i < v.size(); i++) {
        cout << v[i] << " ";
    }
    cout << endl;
    cout << "Average: " << avg << endl;
    cout << "Sum of positive elements: " << sumPositive << endl;
    cout << "Sum of negative elements: " << sumNegative << endl;
    return 0;
}