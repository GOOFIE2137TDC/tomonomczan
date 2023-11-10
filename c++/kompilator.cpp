#include <iostream>
#include <string>
using namespace std;

int main() {
    string s = "skipper", t = "private";
    int i = s.compare("kowalski") > 0;
    int j = s.compare("rico") < 0;
    cout<<i+j<<endl;
    return 0;
}