import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import axios from "axios";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { Dimensions } from "react-native";

class Chart extends Component {
  state = {
    confirmed: "0",
    recovered: "0",
    hospitalized: "0",
    death: "0",
    newconfirmed: "0",
    newrecovered: "0",
    newhospitalized: "0",
    newdeath: "0",
    date: "0",
  };

  componentDidMount() {
    axios
      .get("https://covid19.th-stat.com/api/open/today")
      .then((res) =>
        this.setState({
          confirmed: res.data.Confirmed,
          recovered: res.data.Recovered,
          hospitalized: res.data.Hospitalized,
          death: res.data.Deaths,
          newconfirmed: res.data.NewConfirmed,
          newrecovered: res.data.NewRecovered,
          newhospitalized: res.data.NewHospitalized,
          newdeath: res.data.NewDeaths,
          date: res.data.UpdateDate,
        })
      )
      .catch((er) => console.log(er.messagge));
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Update : {this.state.date}</Text>
        </View>
        <View>
          <Text>Confirmed</Text>
          <Text>{this.state.confirmed}</Text>
          <Text>(+{this.state.newconfirmed})</Text>
        </View>
        <View>
          <Text>Recovered</Text>
          <Text>{this.state.recovered}</Text>
          <Text>(+{this.state.newrecovered})</Text>
        </View>
        <View>
          <Text>Hospitalized</Text>
          <Text>{this.state.hospitalized}</Text>
          <Text>(+{this.state.newhospitalized})</Text>
        </View>
        <View>
          <Text>Deaths</Text>
          <Text>{this.state.death}</Text>
          <Text>(+{this.state.newdeath})</Text>
        </View>
        <PieChart
          data={[
            {
              name: "Recovered",
              population: Number(this.state.recovered),
              color: "#90EE90",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15,
            },
            {
              name: "Hospitalized",
              population: Number(this.state.hospitalized),
              color: "#00FFFF",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15,
            },
            {
              name: "Deaths",
              population: Number(this.state.death),
              color: "#DC143C",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15,
            },
          ]}
          width={500}
          height={220}
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726",
            },
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />

        <PieChart
          data={[
            {
              name: "% Recovered",
              population: Number(
                Math.floor((this.state.recovered / 3847) * 100)
              ),
              color: "#90EE90",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15,
            },
            {
              name: "% Hospitalized",
              population: Number(
                Math.round((this.state.hospitalized / 3847) * 100)
              ),
              color: "#00FFFF",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15,
            },
            {
              name: "% Deaths",
              population: Number(Math.round((this.state.death / 3847) * 100)),
              color: "#DC143C",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15,
            },
          ]}
          width={500}
          height={220}
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726",
            },
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />

        {/* <Text>จำนวนผู้ติดเชื้อในเเต่ละเดือน</Text> */}
        {/* <LineChart
          data={{
            labels: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
            ],
            datasets: [
              {
                data: [19, 23, 1609, 1303, 127, 90, 139, 102, 152, 216, 67], //Nov ยัง uapdate มากกว่า 67 
              },
            ],
          }}
          width={Dimensions.get("window").width} // from react-native
          height={220}
          // yAxisLabel="$"
          yAxisSuffix=" ราย"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Chart;
