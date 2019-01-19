#include<bits/stdc++.h>
using namespace std;

class Set {
	public :
		int sourceVertex;
		int destinationVertex;
		int weight;
};

bool compare(Set s1, Set s2){
	return s1.weight < s2.weight;
}

int findparent(int v, int *parent){
	if(parent[v] == v){
		return v;
	}
	return findparent(parent[v], parent);
}

void Kruskal(Set *input, int v, int e){
	sort(input, input+e, compare);  //sorting with respect to weight
	Set *output = new Set[v-1];
	int *parent = new int[v];

	for(int i = 0; i < v; i++){
		parent[i] = i;  //setting the vertices themselves as their own parent
	}

	int counter = 0;
	int i = 0;

	while(counter != v-1){
		Set currentSet = input[i];

		int sourceParent = findparent(currentSet.sourceVertex, parent);  //parent of sourceVertex
		int destinationParent = findparent(currentSet.destinationVertex, parent);  //parent of destinationVertex

		if(sourceParent != destinationParent){
			output[counter] = currentSet;  //storing the eligible edge to the result array
			counter++;
			parent[sourceParent] = destinationParent;  //connecting by making one vertex child and the other parent
		}
		i++;
	}

	cout<<"\nThe Minimum Spanning Tree : "<<endl;
	cout<<"\nVertex1->Vertex2 [Weight]"<<endl;
	for(int i = 0; i < v-1; i++){
        if(output[i].sourceVertex < output[i].destinationVertex){
            cout<<output[i].sourceVertex<<"->"<<output[i].destinationVertex<<" "<<"["<<output[i].weight<<"]"<<endl;
        }
        else{
            cout<<output[i].destinationVertex<<"->"<<output[i].sourceVertex<<" "<<"["<<output[i].weight<<"]"<<endl;
        }
	}
}

int main(){
	int vertex,edge;  //total verices, total edges
	cout<<"Enter The Number of Vertices and Edges : ";
	cin>>vertex>>edge;
	Set *input = new Set[edge];

    cout<<"\nGive Input (vertex1, vertex2, weight) : "<<endl;
	for(int i = 0; i < edge; i++){
		int s,d,w;
		cin>>s>>d>>w;
		input[i].sourceVertex = s;
		input[i].destinationVertex = d;
		input[i].weight = w;
	}
	Kruskal(input, vertex, edge);

	return 0;
}
