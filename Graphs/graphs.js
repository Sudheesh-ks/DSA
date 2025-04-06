// class Graph {
//     constructor(){
//         this.adjacencyList = {}
//     }

//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex]  = new Set()
//         }
//     }


//     addEdge(vertex1,vertex2){
//         if(!this.adjacencyList[vertex1]){
//             this.addVertex(vertex1)
//         }
//         if(!this.adjacencyList[vertex2]){
//             this.addVertex(vertex2)
//         }
//         this.adjacencyList[vertex1].add(vertex2)
//         this.adjacencyList[vertex2].add(vertex2)
//     }


//     removeEdge(vertex1,vertex2){
//         this.adjacencyList[vertex1].delete(vertex2)
//         this.adjacencyList[vertex2].delete(vertex1)
//     }


//     removeVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             return
//         }
//         for(let adjacentVertex of this.adjacencyList[vertex]){
//             this.removeEdge(vertex,adjacentVertex)
//         }
//         delete this.adjacencyList[vertex]
//     }

//     hasEdge(vertex1,vertex2){  
//         return (
//             this.adjacencyList[vertex1].has(vertex2) &&
//             this.adjacencyList[vertex2].has(vertex1)
//         )
//     }


//     shortest(start,end){
//         let queue =[[start]]
//         let visited = new Set([start])

//         while(queue.length > 0){
//             let path = queue.shift()
//             let node = path[path.length - 1]

//             if(node === end){
//                 return path
//             }

//             for(let neighbour of this.adjacencyList[node]){
//                 if(!visited.has(neighbour)){
//                     visited.add(neighbour)
//                     queue.push([...path,neighbour])
//                 }
//             }
//         }
//         return null
//     }


//      hasCycle() {
//         let visited = new Set();
    
//         function dfs(node, parent) {
//             visited.add(node);
    
//             for (let neighbor of this.adjacencyList[node]) {
//                 if (!visited.has(neighbor)) {
//                     if (dfs(neighbor, node)) return true;
//                 } else if (neighbor !== parent) {
//                     return true; 
//                 }
//             }
    
//             return false;
//         }
    
//         for (let node of Object.keys(this.adjacencyList)) {
//             if (!visited.has(node)) {
//                 if (dfs(node, null)) return true;
//             }
//         }
    
//         return false;
//     }


//     display(){
//         for(let vertex in this.adjacencyList){
//             console.log(vertex + ' -> ' + [...this.adjacencyList[vertex]]);
            
//         }
//     }
// }


// const graph = new Graph()
// graph.addVertex('A')
// graph.addVertex('B')
// graph.addVertex('C')

// graph.addEdge('A','B')
// graph.addEdge('B','C')
// graph.addEdge('C','A')
// console.log(graph.hasCycle());

// graph.removeVertex('B')
// graph.display()

