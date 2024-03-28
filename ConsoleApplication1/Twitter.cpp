#define _CRT_SECURE_NO_WARNINGS 
#include <stdio.h>
#include <math.h>
void rectangle(double length,double width) 
{
    double sum = 0;
    if (length-width>5)
    {
        sum = length * width;
        printf("The area of ​​the rectangle is:%f", sum);
    }
    else 
    {
        sum = (length + width) * 2;
        printf("The perimeter of the rectangle is:%f\n", sum);
    }    
}
void Triangular(double length, double width)
{
    int max = width - 2, min = 3, d1=0, revach=0,times=0,num=0;
    double len = sqrt((length * length) + ((width / 2) * (width / 2)));
    printf("The perimeter of the rectangle is %f\n", (2 * len + width));

    if (((int)width % 2) == 0 || width > length * 2)
    {
        printf("The triangle cannot be printed");
    }
    else
    {
        num = width / 2;
        for (int k = 0; k < num; k++)
        {
            printf(" ");
        }
        printf("*\n"); 
        int i = width-2;
        while (i!=1)
        {
            d1++;
            i=i-2;
        }
        min = ((int)length - 2) % d1;
        if (min%2!= 0)
        {
            revach = (width-3) / 2;               
            for (int i = 0; i < min; i++)
            {
                for (int k = 0; k < revach; k++)
                {
                    printf(" ");
                }
                printf("***");
                printf("\n");
            }
        }
        times = (length-2) / d1;
        min = 3;
        for (int i = 0; i < d1; i++)
        {
            num = (width - min) / 2;
            for (int j = 0; j < times; j++)
            {
                for (int k = 0; k < num; k++)
                {
                    printf(" ");
                }
                for (int k = 0; k < min; k++)
                {
                    printf("*");
                }
                printf("\n");        
            }
            min = min + 2;
        }
        for (int i = 0; i < width; i++)
        {
            printf("*");
        }
        printf("\n");      
    }
}
int main() {
    int tower, length, width;
    do
    {
        printf("For rectangle press 1\nFor triangular press 2\nTo exit press 3\nEnter your choice: ");
        scanf("%d", &tower);
        if (tower == 3) { printf("Goodbye...\n"); }
        else if (tower != 1 && tower != 2 && tower != 3)
            printf("The input you entered is incorrect\n");
        else
        {
            printf("Enter the tower length \n");
            scanf("%d", &length);
            while (length < 2)
            {
                printf("The length is incorrect, enter another length\n");
                scanf("%d", &length);
            }
            printf("Enter the tower width \n");
            scanf("%d", &width);
            if (tower == 1) { rectangle(length, width); }
            if (tower == 2) { Triangular(length, width); }
        }    
        printf("\n---------------------\n");
    } while (tower!=3);
   
}