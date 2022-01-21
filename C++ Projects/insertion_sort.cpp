#include <iostream>


int main()
{
    int a[10] = {4,2,76,8,9,123,32,22,99};
    
    for (int i = 0; i < 10; i++)
    {
        int place = i;
        int temp = a[i];
        
        while (place > 0 && temp < a[place - 1])
        {
            a[place] = a[place - 1];
            place --;
        }
        
        a[place] = temp;
    }
    
    for (int i = 0; i < 10; i++)
    {
        std::cout << "Here is your new array: " << std::endl << a[i] << std::endl;
        
    }

    return 0;
}
