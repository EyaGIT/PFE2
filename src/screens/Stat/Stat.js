import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { VictoryPie, VictoryLabel } from 'victory-native';
import { Svg, G, Text as SvgText } from 'react-native-svg';

const Stat = ({categoriesData1}) => {
    console.log("hhhhh",categoriesData1);
  const categoriesData = [
    {
      category: 'Drink',
      totalAmount: 400
    },
    {
      category: 'Cloth',
      totalAmount: 100
    },
    {
      category: 'Food',
      totalAmount: 1320
    }
  ];

  const [categories, setCategories] = useState(categoriesData1);
  const [selectedCategory, setSelectedCategory] = useState(null);

  function processCategoryDataDisplay() {
    let colorScales = ['#FFC542', '#FF5C83', '#4EC5AC'];
    let chartData = categories.map((item, index) => {
      return {
        name: item.category,
        y: item.totalAmount,
        expenseCount: item.totalAmount,
        color: colorScales[index],
        id: index + 1
      };
    });

    let totalExpense = chartData.reduce((a, b) => a + (b.y || 0), 0);

    let finalChartData = chartData.map((item) => {
      let percentage = ((item.y / totalExpense) * 100).toFixed(0);

      return {
        label: `${percentage}%`,
        y: Number(item.y),
        expenseCount: item.expenseCount,
        color: item.color,
        name: item.name,
        id: item.id
      };
    });

    return finalChartData;
  }

  function setSelectedCategoryByName(name) {
    let category = categories.filter((a) => a.category === name);
    setSelectedCategory(category[0]);
  }

  function calculateLabelPosition(slice) {
    if (!slice) {
      return { x: 0, y: 100 };
    }

    const { startAngle, endAngle, innerRadius, outerRadius } = slice;

    if (!startAngle || !endAngle || !innerRadius || !outerRadius) {
      return { x: 100, y: 100 };
    }

    const labelRadius = innerRadius + (outerRadius - innerRadius) / 2;
    const angle = (startAngle + endAngle) / 2;
    const x = labelRadius * Math.cos(angle);
    const y = labelRadius * Math.sin(angle);

    return { x, y };
  }

  function renderChart() {
    let chartData = processCategoryDataDisplay();
    let colorScales = ['#FFC542', '#FF5C83', '#4EC5AC'];
    let totalExpenseCount = chartData.reduce((a, b) => a + (b.expenseCount || 0), 0);
    let totalExpense = chartData.reduce((a, b) => a + (b.y || 0), 0);



    return (
      <View style={{flex:1, alignItems: 'center', justifyContent: 'center' ,flexDirection:'column',position:'relative',minHeight:170}}>
        <Svg width={300} height={300} style={{ width: '100%', height: 'auto' }}>
          <VictoryPie
            standalone={false}
            data={chartData}
            radius={({ datum }) => (selectedCategory && selectedCategory.name === datum.name ? 300 * 0.4 : 400 * 0.4 - 10)}
            innerRadius={70}
            labelRadius={({ innerRadius }) => 190 * 0.4 + innerRadius / 2.5}
            style={{
              labels: { fill: 'white',fontSize:20 },
              parent: {}
            }}
            width={300}
            height={300}
            colorScale={colorScales}
            events={[
              {
                target: 'data',
                eventHandlers: {
                  onPress: () => {
                    return [
                      {
                        target: 'labels',
                        mutation: (props) => {
                          let categoryName = chartData[props.index].name;
                          console.log(categoryName);
                          setSelectedCategoryByName(categoryName);
                        }
                      }
                    ];
                  }
                }
              }
            ]}
          />
          
        </Svg>
        <View style={{ position: 'absolute', top: '45%', left: '40%'}}>
          <Text style={{ textAlign: 'center', color: '#000' }}>{totalExpenseCount} TND</Text>
          <Text style={{ textAlign: 'center', color: '#000' }}>Expenses</Text>
        </View>
      </View>
    );
  }

  function renderExpenseSummary() {
    let data = processCategoryDataDisplay();

    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          height: 40,
          paddingHorizontal: 10,
          borderRadius: 10,
          backgroundColor:
            selectedCategory && selectedCategory.name === item.name ? item.color : 'white'
        }}
        onPress={() => {
          let categoryName = item.name;
          setSelectedCategoryByName(categoryName);
        }}
      >
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <View
            style={{
              width: 20,
              height: 20,
              backgroundColor:
                selectedCategory && selectedCategory.name === item.name ? 'white' : item.color,
              borderRadius: 5
            }}
          />
          <Text
            style={{
              marginLeft: 10,
              color: selectedCategory && selectedCategory.name === item.name ? 'white' : 'blue'
            }}
          >
            {item.name}
          </Text>
        </View>
        <View style={{ justifyContent: 'center' }}>
          <Text style={{ color: selectedCategory && selectedCategory.name === item.name ? 'white' : 'blue' }}>
            {item.y} TND
          </Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <View style={{ padding: 10 }}>
        <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => `${item.id}`} />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'lightGray',position:'relative' }}>
      <View style={{ flex: 1,position:'relative',minHeight:300 }}>
        {renderChart()}
        <View style={{ flex: 1,backgroundColor:'green',justifyContent:'center',position:'relative'}}>
        {renderExpenseSummary()}
        </View>
        
      </View>
    </View>
  );
};

export default Stat;
