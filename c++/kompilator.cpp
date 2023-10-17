#include <iostream>

double* allocateMemoryAndSetValue() {
    double* ptr = new double;
    *ptr = 1.5;
    return ptr;
}

int main() {
    double* ptr = allocateMemoryAndSetValue();
    std::cout << "The value of the pointer is: " << *ptr << std::endl;
    delete ptr;
    return 0;
}
