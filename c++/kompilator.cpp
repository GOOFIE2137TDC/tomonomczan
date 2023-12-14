#include <fstream>
#include <cstdlib>
#include <ctime>
#include <string>

using namespace std;

string generateRandomNumber(int length) {
    string result = "";
    for(int i = 0; i < length; i++) {
        result += to_string(rand() % 10);
    }
    return result;
}

int main() {
    srand(time(nullptr)); 
    ofstream file("liczby.txt");

    for(int i = 0; i < 500; i++) {
        int length = rand() % 11 + 30; 
        string num = generateRandomNumber(length);
        file << num << "\n";
    }

    file.close();
    return 0;
}