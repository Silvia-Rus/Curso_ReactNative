
import { View, TextInput, Button, StyleSheet } from 'react-native'

export default function AddItem(props) {

    const { textItem, onHandlerChangeItem, onHandlerAddItem } = props

    return (
        <View style={styles.container}>
            <TextInput 
                placeholder='   Añade un artículo' 
                style={styles.input} 
                value={textItem}
                onChangeText={onHandlerChangeItem}  
            />
            <Button title='+'onPress={onHandlerAddItem} disabled={textItem.length < 1 ? true : false}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'  
    },
    input: {
        width: '90%',
        height: 40,
        borderColor: '#3c363b',
        borderRadius: 20,
        borderWidth: 2,
    },
})
