class Queue {
    items: any;

    constructor() {
        this.items = [];
    }

    enqueue(element: any) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty())
            return "Underflow";
        return this.items.shift();
    }

    front() {
        if (this.isEmpty())
            return "No elements in Queue";
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    printQueue() {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
};

export class Graph {
    noOfVertices: any;
    AdjList: any;

    constructor(noOfVertices: any) {
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }

    addVertex(vertex: any) {
        this.AdjList.set(vertex, []);
    };

    addEdge(vertex: any, dest: any) {
        this.AdjList.get(vertex).push(dest);
        this.AdjList.get(dest).push(vertex);
    };

    printGraph() {
        var get_keys: any = this.AdjList.keys();

        for (var i of get_keys) {
            var get_values = this.AdjList.get(i);
            var conc = "";

            for (var j of get_values)
                conc += j + " ";

            console.log(i + " -> " + conc);
        };
    };

    bfs(startingNode: any, destination: any) {
        var pred: any = [];
        var dist: any = [];
        var visited: any = {};
        var q = new Queue();
        var shortestDistance: any;
        var path: string = '';
        var flag: boolean = false;

        for (let i = 0; i < this.noOfVertices; i++) {
            visited[i] = false;
            dist[i] = Number.MAX_VALUE;
            pred[i] = -1;
        }

        visited[startingNode] = true;
        q.enqueue(startingNode);
        dist[startingNode] = 0;

        while (!q.isEmpty()) {
            var getQueueElement = q.dequeue();
            var get_List = this.AdjList.get(getQueueElement);

            for (var i in get_List) {
                var neigh = get_List[i];

                if (!visited[neigh]) {
                    visited[neigh] = true;
                    dist[neigh] = dist[getQueueElement] + 1;
                    pred[neigh] = getQueueElement;
                    pred[startingNode] = -1;
                    q.enqueue(neigh);
                    if (neigh === destination) {
                        flag = true;
                        let output: any = [];
                        let crawl = destination;
                        output.push(crawl);
                        while (pred[crawl] != -1) {
                            output.push(pred[crawl]);
                            crawl = pred[crawl];
                        }
                        shortestDistance = dist[destination];
                        for (let i = output.length - 1; i >= 0; i--) {
                            console.log(output[i]);
                            if (path === '') {
                                path = output[i]
                            } else {
                                path = path + ' -> ' + output[i];
                            }
                        }
                        return { shortestDistance: shortestDistance, path: path, flag: flag };
                    }
                }
            }
        }
    }

    dfs(startingNode: any) {
        var visited = {};
        this.DFSUtil(startingNode, visited);
    }

    DFSUtil(vert: any, visited: any) {
        visited[vert] = true;
        console.log("vert", vert);

        var get_neighbours = this.AdjList.get(vert);

        for (var i in get_neighbours) {
            var get_elem = get_neighbours[i];
            if (!visited[get_elem]) {
                this.DFSUtil(get_elem, visited);
                console.log("get_elem", get_elem);
            }
        }
    };
};