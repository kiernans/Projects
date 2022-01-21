#include <iostream>

int main() {
    int x=0;
    int a[100];
    for (int i=0; i<100; i++) {
        a[i]=100-i;
    }
    for (int j=0; j<100; j++)
    {
        for (int i=0; i<99-j; i++)
        {
            if (a[i]>a[i+1])
            {
                int temp=a[i+1];
                a[i+1]=a[i];
                a[i]=temp;
                x=1;
            }
        }
        if (x==0) {
            break;
        }
    }
    for (int t=0; t<100; t++) {
        std::cout<<a[t]<<std::endl;
    }
}

