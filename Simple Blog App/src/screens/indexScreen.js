import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

const IndexScreen  =({navigation}) => {
    const { state, deleteBlogPost } = useContext( BlogContext );

    return (
        <View>
            <FlatList 
                data={state} 
                keyExtractor={(blogPosts) => blogPosts.title}
                renderItem={({item}) => {
                    return ( 

                    <TouchableOpacity onPress={()=> navigation.navigate('Show', {id: item.id})}>
                        <View style={styles.row}>
                            <Text style={styles.title}>{item.title} - {item.id}</Text>

                            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                <Feather style={styles.icon} name="trash-2" color="black"/>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => 
            <TouchableOpacity onPress={() => {navigation.navigate('Create')}}>
                <Entypo style = {styles.plus} name="plus" color="black" />
            </TouchableOpacity>
    };
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingLeft: 10,
        paddingRight: 20,
        borderBottomWidth: 1,
        borderColor: 'black'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24,
    },
    plus: {
        marginRight: 10,
        fontSize: 25
    }
});

export default IndexScreen;
