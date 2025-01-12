import { Task } from "@/components/Task";
import { useState } from "react";
import {
    Alert,
    Button,
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

export default function Index() {
    const [tasks, setTasks] = useState<{ id: string; description: string, completed: boolean }[]>(
        []
    );
    const [newTask, setNewTask] = useState<string>("");

    const addTask = () => {
        if (newTask === "") {
            Alert.alert("Error", "Task description cannot be empty");
        } else {
            setTasks([
                ...tasks,
                { id: Date.now().toString(), description: newTask, completed: false },
            ]);
            setNewTask("");
            Alert.alert("Success", "Task added successfully");
        }
    };

    const markTaskComplete = (taskId: string) => {
        setTasks(tasks.map(task => {
            if (task.id === taskId) {
                Alert.alert("Success", "Task marked as complete");
                return { ...task, completed: true };
            } else {
                return task;
            }
        }));
    };

    const deleteTask = (taskId: string) => {
        setTasks(tasks.filter(task => task.id !== taskId));
        Alert.alert("Success", "Task deleted successfully");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>To-Do List</Text>
            <FlatList
                data={tasks}
                renderItem={({ item }) => (
                    <Task
                        description={item.description}
                        completed={item.completed}
                        onComplete={() => markTaskComplete(item.id)}
                        onDelete={() => deleteTask(item.id)}
                    />
                )}
                keyExtractor={(item) => item.id}
            />
            <TextInput
                style={styles.input}
                onChangeText={setNewTask}
                value={newTask}
                placeholder="Enter new task"
            />
            <Button onPress={addTask} title="Add Task" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: '#fff',
        boxSizing: 'border-box',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        width: '100%',
    },
});