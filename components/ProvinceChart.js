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

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
    },
  ],
};

class ProvinceChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arraydata: [],
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async componentDidMount() {
    await axios
      .get("https://covid19.th-stat.com/api/open/cases/sum")
      .then((res) => {
        var dataprovince = res.data.Province;
        var arrayProvince = [];
        for (var i in dataprovince)
          arrayProvince.push({ id: i, Province: i, Number: dataprovince[i] });
        this.setState({
          arraydata: arrayProvince,
        });
      })
      .catch((er) => console.log(er.messagge));
  }

  renderprovince = () => {
    return this.state.arraydata.map((map) => {
      for (var i = 0; i < 10; i++) {
        if (map.Province == this.state.arraydata[i].Province) {
          return (
            <View>
              <View>
                <Text>
                  {map.Province}: {map.Number} คน
                </Text>
              </View>
            </View>
          );
        }
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {/* {this.renderprovince()} */}
        <Text>Top 5 จังหวัดที่มีผู้ติดเชื้อ มากที่สุด</Text>
        <BarChart
          data={{
            labels: [
              "Bangkok",
              "Chonburi",
              "Phuket",
              "Samut Prakan",
              "Nonthaburi",
            ],
            datasets: [
              {
                data: [1704, 267, 227, 180, 158],
              },
            ],
          }}
          
          width={1000}
          height={220}
          // yAxisLabel={'Rs'}
          yAxisSuffix=" ราย"
          chartConfig={{
            backgroundColor: "#1cc910",
            backgroundGradientFrom: "#eff3ff",
            backgroundGradientTo: "#efefef",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />

        <Text>Top 5 จังหวัดในภาคตะวันออก</Text>
        <BarChart
          data={{
            labels: [
              "Chonburi",
              "Chachoengsao",
              "Sa Kaeo",
              "Prachinburi",
              "Rayong",
            ],
            datasets: [
              {
                data: [267, 27, 10, 9, 6],
              },
            ],
          }}
          width={1000}
          height={220}
          // yAxisLabel={'Rs'}
          yAxisSuffix=" ราย"
          chartConfig={{
            backgroundColor: "#1cc910",
            backgroundGradientFrom: "#eff3ff",
            backgroundGradientTo: "#efefef",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />

        <Text>Top 5 จังหวัดในภาคใต้</Text>
        <BarChart
          data={{
            labels: ["Phuket", "Yala", "Songkhla", "Pattani", "Narathiwat"],
            datasets: [
              {
                data: [227, 134, 134, 94, 43],
              },
            ],
          }}
          width={1000}
          height={220}
          // yAxisLabel={'Rs'}
          yAxisSuffix=" ราย"
          chartConfig={{
            backgroundColor: "#1cc910",
            backgroundGradientFrom: "#eff3ff",
            backgroundGradientTo: "#efefef",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />

        <Text>Top 5 จังหวัดในภาคกลาง</Text>
        <BarChart
          data={{
            labels: [
              "Samut Prakan",
              "Nonthaburi",
              "Pathum Thani",
              "Nakhon Pathom",
              "Samut Sakhon",
            ],
            datasets: [
              {
                data: [180, 158, 39, 22, 14],
              },
            ],
          }}
          width={1000}
          height={220}
          // yAxisLabel={'Rs'}
          yAxisSuffix=" ราย"
          chartConfig={{
            backgroundColor: "#1cc910",
            backgroundGradientFrom: "#eff3ff",
            backgroundGradientTo: "#efefef",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />

        <Text>Top 5 จังหวัดในภาคตะวันตก</Text>
        <BarChart
          data={{
            labels: ["Tak"],
            datasets: [
              {
                data: [3],
              },
            ],
          }}
          width={1000}
          height={220}
          // yAxisLabel={'Rs'}
          yAxisSuffix=" ราย"
          chartConfig={{
            backgroundColor: "#1cc910",
            backgroundGradientFrom: "#eff3ff",
            backgroundGradientTo: "#efefef",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />

        <Text>Top 5 จังหวัดในภาคเหนือ</Text>
        <BarChart
          data={{
            labels: [
              "Chiang Mai",
              "Chiang Rai",
              "Mae Hong Son",
              "Lamphun",
              "Lampang",
            ],
            datasets: [
              {
                data: [41, 9, 5, 4, 4],
              },
            ],
          }}
          width={1000}
          height={220}
          // yAxisLabel={'Rs'}
          yAxisSuffix=" ราย"
          chartConfig={{
            backgroundColor: "#1cc910",
            backgroundGradientFrom: "#eff3ff",
            backgroundGradientTo: "#efefef",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />

<Text>Top 5 จังหวัดในภาคตะวันออกเฉียงเหนือ</Text>
        <BarChart
          data={{
            labels: [
              "Nakhon Ratchasima",
              "Ubon Ratchathani",
              "Buriram",
              "Udon Thani",
              "Surin",
            ],
            datasets: [
              {
                data: [19, 15, 14, 10, 9],
              },
            ],
          }}
          width={1000}
          height={220}
          // yAxisLabel={'Rs'}
          yAxisSuffix=" ราย"
          chartConfig={{
            backgroundColor: "#1cc910",
            backgroundGradientFrom: "#eff3ff",
            backgroundGradientTo: "#efefef",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "4%",
  },
});

export default ProvinceChart;
