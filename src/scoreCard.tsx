import * as React from 'react';
import { Text, View, ScrollView, Image }from 'react-native';
import Runner from './screens/runPlayerCard';
import Score from './screens/runScoreCard'
import styles from './style';

export default function ScoreCards(props:any){

    var scoreCardDoubles = (team: string)=>{
        if(team === 'team11'){ var scores = props.data.scores1; var name = [props.data.team11, props.data.team12]; var countryFlag = [props.data.image11, props.data.image12]}
        if(team === 'team22'){ var scores = props.data.scores2; var name = [props.data.team21, props.data.team22];; var countryFlag = [props.data.image21, props.data.image22]}
        return(
            <View style={styles.cards} >
          <Score>
            <Image source={{uri:countryFlag[0]}} style={styles.doublesimages}/>
            <Image source={{uri:countryFlag[1]}} style={styles.doublesimages}/>
          </Score>
              <Runner>
              <View style={{...styles.playercard2, backgroundColor: team === props.data.winteam ? '#639080' : '#fff'}}>
                <View style={styles.doubleview}>
                  <Text style={styles.doublesnamewin}>{name[0]}</Text>
                  <Text style={styles.doublesnamewin}>{name[1]}</Text>
                </View>
                </View>
              </Runner>
              <Score color={team === props.data.winteam ? '#639080' : '#fff'}>
                <View style={styles.tieview}>
                  <Text style={styles.doublebase}>{scores.set1 === '' ? '-':scores.set1}</Text>
                  <Text style={styles.doubletie}>{scores.tie1}</Text>  
                </View>
              </Score>
              <Score color={team === props.data.winteam ? '#639080' : '#fff'}>
                <View style={styles.tieview}>
                  <Text style={styles.doublebase}>{scores.set2 === '' ? '-':scores.set2}</Text>
                  <Text style={styles.doubletie}>{scores.tie2}</Text>  
                </View>
              </Score>
              <Score color={team === props.data.winteam ? '#639080' : '#fff'}>
                <View style={styles.tieview}>
                  <Text style={styles.doublebase}>{scores.set3 === '' ? '-':scores.set3}</Text>
                  <Text style={styles.doubletie}>{scores.tie3}</Text>  
                </View>
              </Score>
              <Score color={team === props.data.winteam ? '#639080' : '#fff'}>
                <View style={styles.tieview}>
                  <Text style={styles.doublebase}>{scores.set4 === '' ? '-':scores.set4}</Text>
                  <Text style={styles.doubletie}>{scores.tie4}</Text>  
                </View>
              </Score>
              <Score color={team === props.data.winteam ? '#639080' : '#fff'}>
                <View style={styles.tieview}>
                  <Text style={styles.doublebase}>{scores.set5 === '' ? '-':scores.set5}</Text>
                  <Text style={styles.doubletie}>{scores.tie5}</Text>  
                </View>
              </Score>
          </View>
        )
    }
    var scoreCardSingles = (player: string)=>{
      if(player === '1'){ var scores = props.data.scores1; var name = props.data.players.name1; var playerImage = props.data.image1; var countryFlag = props.data.cou1}
      if(player === '2'){ var scores = props.data.scores2; var name = props.data.players.name2; var playerImage = props.data.image2; var countryFlag = props.data.cou2}
      return(
          <View style={styles.cards} >
          <Score>
            <Image source={{uri:playerImage}} style={styles.playerimage}/>
            <Image source={{uri:countryFlag}} style={styles.singlesimages}/>
          </Score>
          <Runner>
              <View style={{...styles.playercard2, backgroundColor: player === props.data.win ? '#639080' : '#fff'}}>
              <Text style={styles.namesingles}>{name}[{props.data.seed1}]</Text>
              </View>
          </Runner>
          <Score color={player === props.data.win ? '#639080' : '#fff'}><Text style={styles.score}>{scores.set1 === '' ? '-':scores.set1}</Text></Score>
          <Score color={player === props.data.win ? '#639080' : '#fff'}><Text style={styles.score}>{scores.set2 === '' ? '-':scores.set2}</Text></Score>
          <Score color={player === props.data.win ? '#639080' : '#fff'}><Text style={styles.score}>{scores.set3 === '' ? '-':scores.set3}</Text></Score>
          <Score color={player === props.data.win ? '#639080' : '#fff'}><Text style={styles.score}>{scores.set4 === '' ? '-':scores.set4}</Text></Score>
          <Score color={player === props.data.win ? '#639080' : '#fff'}><Text style={styles.score}>{scores.set5 === '' ? '-':scores.set5}</Text></Score>
        </View> 
      )
    }

    return (
        <View>
          <Text>{''}</Text>
          <Text style={styles.date}>{props.data.date}</Text>
          <Text>{''}</Text>
          <Text style={styles.game}>{props.data.game}</Text>
          <Text>{props.data.title}</Text><Text>{props.data.time}</Text>
          <Text>{''}</Text>
          {props.data.winteam !== undefined ? scoreCardDoubles('team11'):undefined}
          {props.data.winteam !== undefined ? scoreCardDoubles('team22'):undefined}
          {props.data.win !== undefined ? scoreCardSingles('1'):undefined}
          {props.data.win !== undefined ? scoreCardSingles('2'):undefined}
      </View>
    )
}
