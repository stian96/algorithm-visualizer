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

    def remove_edge(self, node, neighbour):
        if node in self.graph:
            self.graph[node].remove(neighbour)

    def remove_node(self, node):

        # Delete the node.
        if node in self.graph:
            del self.graph[node]

        # Check if that node is neighbour with some of the other nodes.
        for other_node in self.graph:
            # Remove values from nodes that have the node as neighbour.
            self.graph[other_node] = [n for n in self.graph[other_node] if n != node]

    def display(self):
        for node in self.graph:
            for neighbour in self.graph[node]:
                print("(", node, ", ", neighbour, ")")



