/*Example of Expandable ListView in React Native*/
import React, { Component } from 'react';
//import react in our project
import {
    LayoutAnimation,
    StyleSheet,
    View,
    Text,
    TextInput,
    ScrollView,
    UIManager,
    TouchableOpacity,
    Platform,
    Dimensions,
    Button,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class ExpandableItemComponent extends Component {
    //Custom Component for the Expandable List
    constructor() {
        super();
        this.state = {
            layoutHeight: 0,
            expanded: false
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.item.isExpanded) {
            this.setState(() => {
                return {
                    layoutHeight: null,
                    expanded: true
                };
            });
        } else {
            this.setState(() => {
                return {
                    layoutHeight: 0,
                    expanded: false
                };
            });
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.layoutHeight !== nextState.layoutHeight) {
            return true;
        }
        return false;
    }
    addZikr(data){
        //console.log(data);
    }
    removeZikr(data){
        //console.log(data);
    }
    render() {   
        return (
            <View>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={this.props.onClickFunction}
                    style={styles.header}>
                    <View style={styles.headerView}>
                        <Text style={styles.headerTextMain}>{this.expanded ? <Ionicons name="ios-remove" size={Dimensions.get('window').width > 400 ? 14 : 12} color="black" /> : <Ionicons name="ios-add" size={14} color="black" />}</Text>
                        <Text style={styles.headerText}>{this.props.item.category_name}</Text>
                    </View>
                </TouchableOpacity>
                <View
                    style={{
                        height: this.state.layoutHeight,
                        overflow: 'hidden',
                    }}>
                    {/*Content under the header of the Expandable List Item*/}
                    {this.props.item.subcategory.map((item, key) => (
                        <TouchableOpacity
                            key={key}
                            style={styles.content}
                        >
                            {this.props.item.category_name === "Namaz: (Perform) " ?
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.namazRow1} ><Ionicons name="ios-information-circle" size={Dimensions.get('window').width > 400 ? 16 : 14} color="#FBE565" />{item.val1}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <TextInput style={styles.namazRow2} value={item.val2} />
                                        <TextInput style={styles.namazRow3}>{item.val3}</TextInput>
                                        <TextInput style={styles.namazRow4}>{item.val4}</TextInput>
                                        <TextInput style={styles.namazRow5}>{item.val5}</TextInput>
                                    </View>
                                </View>
                                : this.props.item.category_name === "Zikr: (Multiples of 100 each)" ?
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={styles.zikrRow1} ><Ionicons name="ios-information-circle" size={Dimensions.get('window').width > 400 ? 16 : 14} color="#FBE565" />{item.val1}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={styles.zikrIcons} onClickFunction={this.addZikr(item.val2)}><Ionicons name="ios-add" size={Dimensions.get('window').width > 400 ? 20 : 14} color="black" /></Text>
                                            <TextInput style={styles.zikrRow2}>{item.val2}</TextInput>
                                            <Text style={styles.zikrIcons} onClickFunction={this.removeZikr(item.val2)}><Ionicons name="ios-remove" size={Dimensions.get('window').width > 400 ? 20 : 14} color="black" /></Text>
                                        </View>
                                    </View> :
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={styles.row1} ><Ionicons name="ios-information-circle" size={Dimensions.get('window').width > 400 ? 16 : 14} color="#FBE565" />{item.val1}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={styles.row2}>{item.val2}</Text>
                                            <Text style={styles.row3}><Ionicons name={item.val3 == 'A' ? "ios-checkmark-circle" : "ios-close-circle"} size={Dimensions.get('window').width > 400 ? 16 : 14} color={item.val3 == 'A' ? "#79EB7E" : "#F79C9E"} /></Text>
                                        </View>
                                    </View>

                            }

                            <View style={styles.separator} />

                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {

    },
    headerView: {
        flexDirection: 'row',
        height: Dimensions.get('window').height / 20,
        backgroundColor: '#C9D99E',
    },
    headerTextMain: {
        marginTop: Dimensions.get('window').height / 99,
        paddingLeft: Dimensions.get('window').width / 20,
        padding: Dimensions.get('window').width / 80,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    headerText: {
        padding: Dimensions.get('window').height / 99,
        fontSize: Dimensions.get('window').width > 400 ? 16 : 12,
        fontWeight: '500',
    },
    content: {
        marginTop: Dimensions.get('window').height / 120,
        marginLeft: Dimensions.get('window').height / 60,
        // paddingLeft: Dimensions.get('window').width/20,
        // paddingRight: 10,
        backgroundColor: '#fff',
    },
    separator: {
        height: 0.5,
        backgroundColor: '#808080',
        width: '95%',
        marginLeft: 16,
        marginRight: 16,
    },
    text: {
        fontSize: 10,
        color: '#606070',
        padding: 10,
    },
    row1: {
        marginTop: Dimensions.get('window').height / 95,
        marginLeft: Dimensions.get('window').height / 60,
        width: Dimensions.get('window').width / 2,
        fontSize: Dimensions.get('window').width > 400 ? 14 : 10,
    },
    row2: {
        marginTop: Dimensions.get('window').height / 95,
        marginLeft: Dimensions.get('window').width / 60,
        width: Dimensions.get('window').width / 10,
        fontSize: Dimensions.get('window').width > 400 ? 14 : 10,
    },
    row3: {
        marginTop: Dimensions.get('window').height / 95,
        marginLeft: Dimensions.get('window').width / 6,
        width: Dimensions.get('window').width / 8,
        fontSize: Dimensions.get('window').width > 400 ? 14 : 10,
    },
    namazRow1: {
        marginTop: Dimensions.get('window').height / 95,
        marginLeft: Dimensions.get('window').height / 60,
        width: Dimensions.get('window').width / 6,
        fontSize: Dimensions.get('window').width > 400 ? 14 : 10,
    },
    namazRow2: {
        marginLeft: Dimensions.get('window').width / 80,
        width: Dimensions.get('window').width / 8,
        fontSize: Dimensions.get('window').width > 400 ? 12 : 10,
        borderWidth: 1,
        textAlign: 'center',
        borderRadius: 20,
        height: Dimensions.get('window').height / 20,
        borderColor: '#97D290'
    },
    namazRow3: {
        marginLeft: Dimensions.get('window').width / 40,
        width: Dimensions.get('window').width / 6,
        fontSize: Dimensions.get('window').width > 400 ? 12 : 10,
        borderWidth: 1,
        textAlign: 'center',
        borderRadius: 20,
        height: Dimensions.get('window').height / 20,
        borderColor: '#97D290'
    },
    namazRow4: {
        marginLeft: Dimensions.get('window').width / 40,
        width: Dimensions.get('window').width / 6,
        fontSize: Dimensions.get('window').width > 400 ? 12 : 10,
        borderWidth: 1,
        textAlign: 'center',
        borderRadius: 20,
        height: Dimensions.get('window').height / 20,
        borderColor: '#97D290'
    },
    namazRow5: {
        marginLeft: Dimensions.get('window').width / 40,
        width: Dimensions.get('window').width / 6,
        fontSize: Dimensions.get('window').width > 400 ? 12 : 10,
        borderWidth: 1,
        textAlign: 'center',
        borderRadius: 20,
        height: Dimensions.get('window').height / 20,
        borderColor: '#97D290'
    },
    zikrRow1: {
        marginTop: Dimensions.get('window').height / 95,
        marginLeft: Dimensions.get('window').height / 60,
        width: Dimensions.get('window').width / 2,
        fontSize: Dimensions.get('window').width > 400 ? 12 : 10,
    },
    zikrRow2: {
        marginLeft: Dimensions.get('window').width / 80,
        width: Dimensions.get('window').width / 8,
        fontSize: Dimensions.get('window').width > 400 ? 12 : 10,
        borderWidth: 1,
        textAlign: 'center',
        borderRadius: 20,
        height: Dimensions.get('window').height / 20,
        borderColor: '#97D290'
    },
    zikrIcons:{
        marginLeft: Dimensions.get('window').width / 60,
        borderWidth: 1,
        padding: Dimensions.get('window').height/95, 
        height: Dimensions.get('window').height/22, 
        width: Dimensions.get('window').width/13, 
        textAlign: 'center',
        borderRadius: 10,
        borderColor: '#97D290'
    }
});

export default ExpandableItemComponent;