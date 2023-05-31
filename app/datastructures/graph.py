class Graph:
    """
    Basic implementation of a graph using a
    adjacency list. This data structure represents
    a graph as a dictionary, where keys are the nodes
    in the graph, and values are lists of nodes that
    are directly connected to the key node.

    Note: This implementation is for directed graphs.
    """
    def __init__(self):
        self.graph = dict()

    def add_edge(self, node, neighbour):
        if node not in self.graph:
            self.graph[node] = neighbour
        else:
            self.graph[node].append(neighbour)

    def display(self):
        for node in self.graph:
            for neighbour in self.graph[node]:
                print("(", node, ", ", neighbour, ")")



