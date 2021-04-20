import axios from "axios";

const getAreaData = function(areaCode) {
  return new Promise((resolve, reject) => {
    const areaUrl = `/mapData/json/citys/${areaCode}.json`;
    axios
      .get(areaUrl)
      .then(res => {
        console.log(res.data); //获取的边界数据
        const mapJson = res.data;
        //对获取的每个子区域添加 name:省市区名称  value 要展示的值  level 此区域的省市区等级  cityCode：省市区的code
        //可通过需求自行添加和修改
        const mapData = mapJson.features.map((item, index) => {
          return {
            name: item.properties.name,
            value: 1000 * index,
            level: item.properties.level,
            cityCode: item.properties.adcode
            // itemStyle: {
            //   areaColor:
            //     index >= 5 && index <= 8
            //       ? "#0DBA29"
            //       : index > 8 && index < 10
            //       ? "#0DB1B1"
            //       : "#082671",
            //   color: "#fff"
            // }
          };
        });
        resolve({
          mapJson,
          mapData
        });
      })
      .catch(error => {
        reject(error);
      });
  });
};

export default getAreaData;
