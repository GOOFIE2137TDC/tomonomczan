#include <iostream> 
#include <string> 

using namespace std; 

class Osoba {
protected:

    string imie; 
    string nazwisko; 
    int nrDowodu; 

public: 

    Osoba() : imie(""), nazwisko(""), nrDowodu(0) { 
        cout << "Konstruktor domyślny Osoba\n"; 
    } 

    Osoba(string imie, string nazwisko, int nrDowodu) : imie(imie), nazwisko(nazwisko), nrDowodu(nrDowodu) { 
        cout << "Konstruktor ogólny Osoba\n"; 
    } 

    ~Osoba() { 
        cout << "Osoba_Destr\n"; 
    } 

    virtual void piszKimJestes() const { 
        cout << "Osoba\n"; 
    } 

    virtual void wypiszDane() const { 

        cout << "Imię: " << imie << ", Nazwisko: " << nazwisko << ", Nr dowodu: " << nrDowodu << "\n"; 
    } 
}; 


class Student : public Osoba { 
private: 
    int nrIndeksu; 

public: 

    Student() : Osoba(), nrIndeksu(0) { 
        cout << "Konstruktor domyślny Student\n"; 
    }

    Student(string imie, string nazwisko, int nrDowodu, int nrIndeksu) : Osoba(imie, nazwisko, nrDowodu), nrIndeksu(nrIndeksu) { 
        cout << "Konstruktor ogólny Student\n"; 
    } 

    ~Student() { 
        cout << "Student_Destr\n"; 
    }

    void piszKimJestes() const override { 
        cout << "Student\n"; 
    } 

    void wypiszDane() const override { 
        Osoba::wypiszDane(); 
        cout << "Nr indeksu: " << nrIndeksu << "\n"; 
    }
}; 


class Absolwent : public Student {
private: 
    int nrDyplomu; 

public: 

    Absolwent() : Student(), nrDyplomu(0) { 
        cout << "Konstruktor domyślny Absolwent\n"; 
    } 

    Absolwent(string imie, string nazwisko, int nrDowodu, int nrIndeksu, int nrDyplomu) : Student(imie, nazwisko, nrDowodu, nrIndeksu), nrDyplomu(nrDyplomu) {
        cout << "Konstruktor ogólny Absolwent\n"; 
    }

    ~Absolwent() { 
        cout << "Absolwent_Destr\n"; 
    }

    int getNrDyplomu() const { 
        return nrDyplomu; 
    }

    void piszKimJestes() const override { 
        cout << "Absolwent\n"; 
    } 

    void wypiszDane() const override { 
        Student::wypiszDane(); 
        cout << "Nr dyplomu: " << nrDyplomu << "\n"; 
    }
}; 


int main() {
    Osoba o("Jan", "Kowalski", 123456789);
    Student s("Anna", "Nowak", 987654321, 123456789);
    Absolwent a("Piotr", "Zieliński", 123456789, 987654321, 123456);

    o.piszKimJestes();
    s.piszKimJestes();
    a.piszKimJestes();

    return 0;
}