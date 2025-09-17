import json
import pygraphviz as pgv
import matplotlib.pyplot as plt

def create_precedence_diagram(file_path):
    """
    Creates and plots a precedence diagram from a JSON file.

    The JSON file should be an array of objects, where each object represents a task.
    Each task object must have a "name", "duration", and an array of "dependencies".

    Args:
        file_path (str): The path to the JSON file.
    """
    try:
        with open(file_path, 'r') as f:
            tasks = json.load(f)
    except FileNotFoundError:
        print(f"Error: The file at '{file_path}' was not found.")
        return
    except json.JSONDecodeError:
        print(f"Error: The file at '{file_path}' is not a valid JSON file.")
        return

    # Create a directed graph using pygraphviz
    G = pgv.AGraph(directed=True, rankdir='LR', splines='ortho')
    
    # Set graph attributes for better layout
    G.graph_attr.update(rankdir='LR', splines='ortho', nodesep=0.5, ranksep=1.0)
    G.node_attr.update(shape='box', style='filled', fillcolor='lightblue', 
                      fontname='Arial', fontsize=10, width=2, height=0.8)
    G.edge_attr.update(arrowsize=0.8, color='gray')

    # Add nodes (tasks) with labels including duration
    for task in tasks:
        task_name = task['name']
        duration = task.get('duration', 'N/A')
        label = f"{task_name}\\n({duration} days)"
        G.add_node(task_name, label=label)

    # Add edges (dependencies)
    for task in tasks:
        task_name = task['name']
        for dependency in task.get('dependencies', []):
            if G.has_node(dependency):
                G.add_edge(dependency, task_name)
            else:
                print(f"Warning: Dependency '{dependency}' for task '{task_name}' not found in the task list.")

    # Layout and render the graph
    G.layout(prog='dot')
    
    # Create matplotlib figure
    plt.figure(figsize=(16, 10))
    
    # Draw the graph using pygraphviz
    G.draw('temp_graph.png', format='png')
    
    # Load and display the image
    img = plt.imread('temp_graph.png')
    plt.imshow(img)
    plt.axis('off')
    plt.title("Research Project Precedence Diagram", fontsize=16, fontweight='bold')
    
    # Clean up temporary file
    import os
    if os.path.exists('temp_graph.png'):
        os.remove('temp_graph.png')
    
    plt.tight_layout()
    plt.show()

# Example usage
if __name__ == "__main__":
    create_precedence_diagram('project_data.json')