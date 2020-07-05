import React from 'react';
import { View } from 'react-native';
import styles from '../style';

export default function Card(props:any){
    return (
        <View >
            <View >
                {props.children}
                </View>
        </View>
    )
}
