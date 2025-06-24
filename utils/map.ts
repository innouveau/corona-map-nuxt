// export const loadSource = async (map, source) => {
//     return new Promise((resolve, reject) => {
//         d3.csv(source.url + dateTool.getTimestamp())
//             .then((data) => {
//                 if (!historyConstructed) {
//                     constructTimeline(source, data.columns);
//                 }
//
//                 for (const regionData of data) {
//                     addSourceItem(map, source, regionData);
//                 }
//                 const sourceItem = store.getters["sources/getItemByProperty"](
//                     "title",
//                     source.key
//                 );
//                 store.commit("sources/updatePropertyOfItem", {
//                     item: sourceItem,
//                     property: "loaded",
//                     value: true,
//                 });
//                 if (source.loadInitially) {
//                     checkForEmptyData(map, source);
//                 }
//                 resolve();
//             })
//             .catch((error) => {
//                 reject(error);
//             });
//     });
// };
