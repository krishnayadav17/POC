import React from 'react';
import { View } from 'react-native';
import styles from '../style';

export default function Score(props:any){
    return (
        <View style={{...styles.scorecard2, backgroundColor: props.color}}>
            <View >
                {props.children}
            </View>
        </View>
    )
}

