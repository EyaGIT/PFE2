import { View, Text, Platform, TouchableOpacity, ScrollView,StyleSheet,FlatList } from 'react-native'
import React,{useState} from 'react'
import {VictoryPie} from 'victory-native';
import {Svg} from ' react-native-svg';

const Stat = () => {

   const confirmStatus="C"
   const pendingStatus="P"


   let catgoriesData=[

    {

        id:1,
        name:'Education',
        icon:COLORS.yellow,
        expenses :{

            id :1,
            title: "yror fee",
            total:100.00,
            status:pendingStatus
        },
    }
   ]
const [categories,setcategories]=useState(catgoriesData)
const [selectedCategory,setSelectedCategory]=useState(null)

function processCatgeoryDataDisplay(){

   //Filter  expenses with "Confirmed" status

   let chartData = categories.map((item)=>{

    let confirmExpenses =item.expenses.filter(a=> a.status =="C")
    var total =confirmExpenses.reduce((a,b)=> a+(b.total || 0),0)

    return{
        name:item.name,
        y:total,
        expenseCount:confirmExpenses.length,
        color:item.color,
        id:item.id,

    }

   })


//filter out categories with no data/expenses

let filterChartData = chartData.filter( a => a.y > e)

// calculate the tital expenses

let totalExpense = filterChartData.reduce((a,b)=> a+ (b.y || 0),0)

//Calculate percentage and repopulate chart data 

let finalChartData = filterChartData.map((item)=> {

    let percentage =(item.y / totalExpense *100).toFixed(0)

    return{
        label:`${percentage}%`,
        y:Number(item.y),
        expenseCount : item.expenseCount,
        color:item.color,
        name:item.name,
        id:item.id
    }
})
return finalChartData
}

function setSelectedCategoryByName(name){

    let category = categories.filter(a => a.name == name)
    setSelectedCategory(category[0])
}
function renderChart (){

    let chartData = processCatgeoryDataDisplay()
    let colorScales = chartData.map((item)=> item.color)
    let totalExpenseCount = chartData.reduce((a,b)=> a+(b.expenseCount || 0),0)

    console.log ("Check Chart")
    console.log(chartData)

   return(
    <View style={{alignItems:'center', justifyContent:'center'}}>
        <Svg width={SIZES.width} height ={SIZES.width} style={{width:'100%', height:"auto"}}>
             <VictoryPie
             standalone={false} //android workaround
             data={chartData}
             radius={({datum})=>(selectedCategory && selectedCategory.name == datum.name) ? SIZES.width *0.4 : SIZES.width*0.4 -10}
             innerRadius={70}
             labelRadius={({innerRadius})=>(SIZES.width*0.4 +innerRadius/2.5)}
             style={{
                labels :{fill :"white"},
                parent :{

                    ...StyleSheet.shadow
                },
             }}
             width={SIZES.width}
             height={SIZES.width}
             colorScale={colorScales}
             events={[{

                target: "data",
                eventHandlers:{

                    onPress :() => {

                        return [{

                            target:"labels",
                            mutation :(props )=> {
                                let categoryName = chartData[props.index].name
                                setSelectedCategoryByName(categoryName)
                            }
                        }]
                    }
                }

             }]}
             
             />
              </Svg>
            <View stye ={{position:'absolute', top :'42%', left:'42%' }}>
                
                <Text style={{...FONTs.h1,textAlign:'center',color:'#000'}}>{totalExpenseCount}</Text>
                <Text style={{...FONTS.body3, textAlign:'center',color:'#000'}}>Expenses</Text>
                
            </View>
            </View>
            )
}}
            function renderExpenseSummary(){

                let data=processCategoryDataDisplay()

                const renderItem = ({item})=>(

                    <TouchableOpacity


                        style={{
                            flexDirection:'row',
                            height:40,
                            paddingHorizontal:SIZES.radius,
                            borderRadius: 10,
                            backgroundColor:(selectedCategory && selectedCategory.name == item.name)? item.color :Colors.white
                        }}

                        onPress={()=>{

                            let categoryName= item.name
                            setSelectedCategoryByName(categoryName)
                        }}
                        >


                            {/* Name/Category*/}

                            <View style {{flex:1, flexDirection:'row', alignItems:'center'}}>
                                <View
                                
                                style={{

                                    width:20,
                                    height:20,
                                    backgroundColor:(selectedCategory && selectedCategory.name ==item.name) ? Colors.white :item .color,
                                    borderRadius : 5
                                }}/>

                                   <Text  style={{ marginLeft:SIZES.base, color:(selectedCategory && selectedCategory.name== item.name)? Colors.white : Colors.primary, ...FONT.h3}}>{item.name}

                                   </Text>
                                </View>
                                {/* Expenses*/}
                                                  
                                   <View style={{justifyContent:'center'}}>
                                    <Text style ={{color: (selectedCategory && selectedCategory.name == item.name) ? Colors.white: Colors.primary, ...FONT.h3}}></Text>

                                   </View>
                           
                    </TouchableOpacity>
                )    
                
                return(

                    <View style={{padding: SIZES.padding}}>

                        <FlatList
                         data= {data}
                         renderItem={renderItem}
                         keyExtractor={item => `${item.id}`}
                        />

                        </View>
                )
                }

            
       


   return (
    <View style={{flex:1,backgroundColor:COLORS.lightGray}}>
      <ScrollView contentContainerStyle={{paddingBottom:60}}> 
        <View>
            {renderChart()}
            {renderExpenseSummary()}
        </View>
      </ScrollView>
    </View>
  )


const styles= StyleSheet.create ({
    shadow:{
        shadowColor :'#000',
        shadowOffset:{
            width :2,
            height:2,
        },
        shadowOpacity :0.25,
        shadowRadius: 3.84,
        elevation :3,

    }
})
export default Stat