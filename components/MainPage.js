import React from 'react';
import {Text, View, Button, StyleSheet,Image} from 'react-native';

class MainPage extends React.Component{
    static navigationOptions = ({navigation})=>{
        return {
            title: navigation.getParam('name'),
        };
    };
    render(){
        const {navigate, state}=this.props.navigation;
        return(
            // <View style={StyleSheet.screen}>
            //     <Text style={styles.text}>Hello {state.params.params1.name}</Text>
            //     <Text  style={styles.text}> Hello {state.params.params1.email}</Text>
            //     <Text  style={styles.text}>Hello {state.params.params1.designation}</Text>
            //     <Button
            //         title="Go to home screen"
            //         onPress={() => navigate('Login')}
            //     />

            // </View>
             <View style={{ shadowColor: 'black', backgroundColor: 'white', elevation: 20, padding: 30, marginTop: 30 }}>
             <View style={styles.curve}>
                 <Image name="save" style={styles.img} source={{uri:state.params.params1.photo}} />
             </View>
             <View style={styles.inputView}>
                <Text style={styles.text}><Text style={{fontWeight:'bold',paddingLeft:10}}>Name:</Text> {state.params.params1.name}</Text>
                <Text style={styles.text}><Text style={{fontWeight:'bold',paddingLeft:10}}>Email:</Text> {state.params.params1.email}</Text>
                <Text style={styles.text}><Text style={{fontWeight:'bold',paddingLeft:10}}>Designation:</Text> {state.params.params1.designation}</Text>
             </View>
         </View>
        );
    }
}

const styles=StyleSheet.create({
    // screen:{
    //     flex:1,
    //     alignItems:'center',
    //     justifyContent:'center',
    //     margin:20
    // },
    curve: {
        paddingTop: 10,
    },
    img: {
        height: 150,
        width: 150,
        borderRadius: 75
    },
    inputView: {
        marginTop: 30,
        paddingLeft: 10
    },
    text:{
        fontSize: 18,
        padding:10,
        marginLeft: 20
    }
});

export default MainPage;