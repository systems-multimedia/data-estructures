#include <iostream>
#include <string>

using namespace std;

#define MAX 3

//  Inicialización
int intArr[5] = {1, 2, 3, 4, 5};

int searchName(string arr[], string name)
{
    for (int i = 0; i < MAX; i++)
    {
        if (arr[i] == name)
            return i;
    }

    return -1;
}

int deleteName(string arr[], string name)
{
    int idx = searchName(arr, name);

    if (idx < 0) 
    {
        cout << "Element not found";
        return idx;
    }

    for (int i = idx; i < MAX - 1; i++) {
        arr[i] = arr[i + 1];
    }

    return 0;
}

void printNames(string arr[])
{
    cout << "Los nombres ingresados son: \n";

    for (int i = 0; i < MAX; i++)
    {
        cout << "Nombre " << i << ": " << arr[i] << "\n";
    }
}

int main()
{
    cout << "klk, ingresa " << MAX << " nombres: \n";

    //  Declaración
    string arr[MAX];

    int count = 0;
    while (count < MAX)
    {
        cin >> arr[count];
        count++;
    }

    cout << "Gracias";

    printNames(arr);
    deleteName(arr, "Samuel");

    return 0;
}