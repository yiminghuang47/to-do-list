import { Button, Dimensions, StyleSheet, Text, View } from "react-native";

type TaskProps = {
    description: string;
    completed: boolean;
    onComplete: () => void;
    onDelete: () => void;
};
export function Task({ description, completed, onComplete, onDelete }: TaskProps) {
    return (
        <View style={styles.task}>
            {completed ? (
                <Text style={styles.completedTaskText}>{description}</Text>
            ) : (
                
                    <Text style={styles.taskText}>{description}</Text>

                    
            )}
            <View style={styles.buttons}>
                {!completed && <Button title="Done" onPress={onComplete} />}
                <Button title="Delete" onPress={onDelete} color="red" />
            
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    task: {
        padding: 5,
        
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: Dimensions.get('window').width-30,
        
        borderColor: "gray",
        borderWidth: 1,
        boxSizing: 'border-box',
    },
    taskText: {
        fontSize: 16,
        marginRight:10,
        flex:1,
        overflow:"scroll"
    },
    completedTaskText: {
        fontSize: 16,
        textDecorationLine: "line-through",
        color: "gray",
        marginRight: 10,
        flex:1,
        overflow:"scroll"
    },
    buttons:{
        flexDirection: "row",
        gap: 10,
    }
});
