#include<bits/stdc++.h>
using namespace std;

class Object{
    public:
        int weight;
        int profit;
};

int maximum(int a, int b){
    if(a > b)
        return a;
    else
        return b;
}

int main()
{
    int totalObjects,maxWeight;
    cout<<"Enter The Number of Objects : ";
    cin>>totalObjects;
    cout<<"Enter The Maximum Weight : ";
    cin>>maxWeight;

    Object *input = new Object[totalObjects];
    int store [maxWeight][maxWeight ];
    int w,p;

    cout<<"Give Input : "<<endl;
    cout<<"weight -> profit : "<<endl;
    for(int i = 1; i <= totalObjects; i++){
        cin>>w>>p;
        input[i].weight = w;
        input[i].profit = p;
    }

    for(int capacity = 0; capacity <= maxWeight; capacity++){
        for(int objNumber = 0; objNumber <= totalObjects; objNumber++){
            store[capacity][objNumber] = 0;
        }
    }

    for(int capacity = 1; capacity <= maxWeight; capacity++){
        for(int objNumber = 1; objNumber <= totalObjects; objNumber++){
            if(input[objNumber].weight > capacity){
                store[capacity][objNumber] = store[capacity][objNumber-1];
            }
            else {
                int remainingWeight = capacity-input[objNumber].weight;
                store[capacity][objNumber] = maximum(store[capacity][objNumber-1], input[objNumber].profit+store[remainingWeight][objNumber-1] );
            }
        }
    }

    cout<<"\nThe Table of Profit : "<<endl<<endl;
    for(int capacity = 0; capacity <= maxWeight; capacity++){
        for(int objNumber = 0; objNumber <= totalObjects; objNumber++){
            cout<<store[capacity][objNumber]<<"\t";
        }
        cout<<endl;
    }

    cout<<"\nThe Max Profit = "<<store[maxWeight][totalObjects]<<endl;
    return 0;
}
