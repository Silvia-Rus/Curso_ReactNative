import { FlatList, TouchableOpacity, StyleSheet, Text } from 'react-native'


export default function List(props) {

    const { itemList, onHandlerModal } = props
    console.log(itemList)
    return (
        <FlatList 
            data={itemList}
            renderItem={data => (
                <TouchableOpacity onPress={() => onHandlerModal(data.item.id)} style={styles.item}>
                    <Text style={{textDecorationLine: data.item.completed ? 'none' : null}}>{data.item.value}</Text>
                </TouchableOpacity>
            )}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
        />
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        width: '100%',
        height: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#3c363b',
        borderRadius: 20,
        marginTop: '10%',
        height: 50,
    }
})