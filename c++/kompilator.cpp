#include <iostream>
#include <string>

char getCharFromString(const std::string& str, int position) {
    
    if (position >= 0 && position < str.length()) {
        
        return str[position];
    } else {
       
        return '\0';
    }
}

int main() {
    std::string myString = "Przyklad";
    int position = 3; 

    char result = getCharFromString(myString, position);

    if (result != '\0') {
        std::cout << "Znak na pozycji " << position << " to: " << result << std::endl;
    } else {
        std::cout << "Pozycja " << position << " jest nieprawidłowa." << std::endl;
    }

    return 0;
}
