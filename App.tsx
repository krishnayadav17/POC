import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import styles from './src/style'
import Carousel from './src/views/carousel';
import ScoreCard from './src/scoreCard'
import {AppComponentProps, AppComponentState} from './src/interface'
declare const global: {HermesInternal: null | {}};

class App extends React.Component<AppComponentProps, AppComponentState>{

  constructor(props:any) {
    super(props);
    this.state = {
      isLoading:true,
      dataSource:[],
    };
  }

  componentDidMount(){
    return fetch('https://private-8f89f-krishnayadav17.apiary-mock.com/questions')
    .then((response)=> response.json())
    .then((responseJson)=>{
      this.setState({
        isLoading:false,
        dataSource:responseJson[0].singles.concat(responseJson[0].doubles),
        })

    })
    .catch((error)=>{
      console.log(error)
    })
    
  }

  renderItems=():any=>{
    var item = this.state.dataSource.sort((a:Object,b:Object)=>(Date.parse(a.date) > Date.parse(b.date)) ? 1:-1)
    let choices:any=[];
    item.map((val:any,key:any)=>{
      choices.push(<ScoreCard data={val} key={key}/>)
  })
  return choices
  }


  render(){
    if(this.state.isLoading){
      return(
        <View style={styles.container}>
          <ActivityIndicator size='large' />
        </View>
      )
    }
    else{
      return (
        <View style={{flex: 1}}>
  
          <Carousel itemsPerScrollInPortrait={1}>
            
             {this.renderItems()}
         
          </Carousel>
  
        </View>
    );
    }
  }
};



export default App;
