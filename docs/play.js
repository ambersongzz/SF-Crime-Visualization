// You can reproduce this figure in plotly.js with the following code!

// Learn more about plotly.js here: https://plot.ly/javascript/getting-started

/* Here's an example minimal HTML template
 *
 * <!DOCTYPE html>
 *   <head>
 *     <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
 *   </head>
 *   <body>
 *   <!-- Plotly chart will be drawn inside this div -->
 *   <div id="plotly-div"></div>
 *     <script>
 *     // JAVASCRIPT CODE GOES HERE
 *     </script>
 *   </body>
 * </html>
 */

trace1 = {
  x: ['Alameda County', 'Alpine County', 'Amador County', 'Butte County', 'Calaveras County', 'Colusa County', 'Contra Costa County', 'Del Norte County', 'El Dorado County', 'Fresno County', 'Glenn County', 'Humboldt County', 'Imperial County', 'Inyo County', 'Kern County', 'Kings County', 'Lake County', 'Lassen County', 'Los Angeles County', 'Madera County', 'Marin County', 'Mariposa County', 'Mendocino County', 'Merced County', 'Modoc County', 'Mono County', 'Monterey County', 'Napa County', 'Nevada County', 'Orange County', 'Placer County', 'Plumas County', 'Riverside County', 'Sacramento County', 'San Benito County', 'San Bernardino County', 'San Diego County', 'San Francisco County', 'San Joaquin County', 'San Luis Obispo County', 'San Mateo County', 'Santa Barbara County', 'Santa Clara County', 'Santa Cruz County', 'Shasta County', 'Sierra County', 'Siskiyou County', 'Solano County', 'Sonoma County', 'Stanislaus County', 'Sutter County', 'Tehama County', 'Trinity County', 'Tulare County', 'Tuolumne County', 'Ventura County', 'Yolo County', 'Yuba County'], 
  y: [10127, 6, 92, 790, 178, 46, 3895, 168, 389, 5981, 103, 682, 676, 114, 5128, 639, 379, 225, 56351, 1024, 475, 80, 606, 1488, 41, 37, 1822, 598, 212, 7275, 622, 120, 7447, 7734, 155, 10469, 10959, 6269, 6005, 1115, 1634, 1527, 5423, 1101, 1333, 14, 161, 2022, 1868, 3366, 360, 360, 66, 1608, 187, 2192, 639, 318], 
  marker: {
    size: [10127, 6, 92, 790, 178, 46, 3895, 168, 389, 5981, 103, 682, 676, 114, 5128, 639, 379, 225, 56351, 1024, 475, 80, 606, 1488, 41, 37, 1822, 598, 212, 7275, 622, 120, 7447, 7734, 155, 10469, 10959, 6269, 6005, 1115, 1634, 1527, 5423, 1101, 1333, 14, 161, 2022, 1868, 3366, 360, 360, 66, 1608, 187, 2192, 639, 318], 
    sizemode: 'area', 
    sizeref: 421.7584, 
    sizesrc: 'ambersong:7:825cfb'
  }, 
  mode: 'markers', 
  name: 'Violent_sum', 
  type: 'scatter', 
  uid: '474462', 
  xsrc: 'ambersong:7:6b0d76', 
  ysrc: 'ambersong:7:72d029'
};
trace2 = {
  x: ['Alameda County', 'Alpine County', 'Amador County', 'Butte County', 'Calaveras County', 'Colusa County', 'Contra Costa County', 'Del Norte County', 'El Dorado County', 'Fresno County', 'Glenn County', 'Humboldt County', 'Imperial County', 'Inyo County', 'Kern County', 'Kings County', 'Lake County', 'Lassen County', 'Los Angeles County', 'Madera County', 'Marin County', 'Mariposa County', 'Mendocino County', 'Merced County', 'Modoc County', 'Mono County', 'Monterey County', 'Napa County', 'Nevada County', 'Orange County', 'Placer County', 'Plumas County', 'Riverside County', 'Sacramento County', 'San Benito County', 'San Bernardino County', 'San Diego County', 'San Francisco County', 'San Joaquin County', 'San Luis Obispo County', 'San Mateo County', 'Santa Barbara County', 'Santa Clara County', 'Santa Cruz County', 'Shasta County', 'Sierra County', 'Siskiyou County', 'Solano County', 'Sonoma County', 'Stanislaus County', 'Sutter County', 'Tehama County', 'Trinity County', 'Tulare County', 'Tuolumne County', 'Ventura County', 'Yolo County', 'Yuba County'], 
  y: [116, 0, 0, 4, 3, 0, 53, 0, 2, 63, 1, 12, 3, 1, 88, 11, 3, 1, 622, 7, 3, 0, 8, 6, 1, 2, 56, 1, 6, 57, 3, 2, 99, 87, 1, 129, 101, 58, 62, 4, 9, 13, 57, 5, 12, 0, 3, 24, 10, 34, 9, 3, 3, 33, 1, 31, 3, 4], 
  marker: {
    size: [116, 0, 0, 4, 3, 0, 53, 0, 2, 63, 1, 12, 3, 1, 88, 11, 3, 1, 622, 7, 3, 0, 8, 6, 1, 2, 56, 1, 6, 57, 3, 2, 99, 87, 1, 129, 101, 58, 62, 4, 9, 13, 57, 5, 12, 0, 3, 24, 10, 34, 9, 3, 3, 33, 1, 31, 3, 4], 
    sizemode: 'area', 
    sizeref: 421.7584, 
    sizesrc: 'ambersong:7:1198c5'
  }, 
  mode: 'markers', 
  name: 'Homicide_sum', 
  type: 'scatter', 
  uid: '79963c', 
  xsrc: 'ambersong:7:6b0d76', 
  ysrc: 'ambersong:7:a150c2'
};
trace3 = {
  x: ['Alameda County', 'Alpine County', 'Amador County', 'Butte County', 'Calaveras County', 'Colusa County', 'Contra Costa County', 'Del Norte County', 'El Dorado County', 'Fresno County', 'Glenn County', 'Humboldt County', 'Imperial County', 'Inyo County', 'Kern County', 'Kings County', 'Lake County', 'Lassen County', 'Los Angeles County', 'Madera County', 'Marin County', 'Mariposa County', 'Mendocino County', 'Merced County', 'Modoc County', 'Mono County', 'Monterey County', 'Napa County', 'Nevada County', 'Orange County', 'Placer County', 'Plumas County', 'Riverside County', 'Sacramento County', 'San Benito County', 'San Bernardino County', 'San Diego County', 'San Francisco County', 'San Joaquin County', 'San Luis Obispo County', 'San Mateo County', 'Santa Barbara County', 'Santa Clara County', 'Santa Cruz County', 'Shasta County', 'Sierra County', 'Siskiyou County', 'Solano County', 'Sonoma County', 'Stanislaus County', 'Sutter County', 'Tehama County', 'Trinity County', 'Tulare County', 'Tuolumne County', 'Ventura County', 'Yolo County', 'Yuba County'], 
  y: [628, 0, 8, 133, 28, 5, 309, 32, 71, 314, 7, 62, 34, 8, 307, 72, 39, 13, 4153, 51, 52, 12, 64, 79, 8, 7, 162, 62, 8, 810, 83, 10, 500, 369, 18, 703, 1088, 346, 220, 102, 254, 244, 640, 120, 150, 0, 11, 204, 282, 199, 31, 31, 3, 135, 54, 269, 72, 19], 
  marker: {
    size: [628, 0, 8, 133, 28, 5, 309, 32, 71, 314, 7, 62, 34, 8, 307, 72, 39, 13, 4153, 51, 52, 12, 64, 79, 8, 7, 162, 62, 8, 810, 83, 10, 500, 369, 18, 703, 1088, 346, 220, 102, 254, 244, 640, 120, 150, 0, 11, 204, 282, 199, 31, 31, 3, 135, 54, 269, 72, 19], 
    sizemode: 'area', 
    sizeref: 421.7584, 
    sizesrc: 'ambersong:7:a0223b'
  }, 
  mode: 'markers', 
  name: 'Forcible_Rapes_sum', 
  type: 'scatter', 
  uid: '368a92', 
  xsrc: 'ambersong:7:6b0d76', 
  ysrc: 'ambersong:7:e00e5a'
};
trace4 = {
  x: ['Alameda County', 'Alpine County', 'Amador County', 'Butte County', 'Calaveras County', 'Colusa County', 'Contra Costa County', 'Del Norte County', 'El Dorado County', 'Fresno County', 'Glenn County', 'Humboldt County', 'Imperial County', 'Inyo County', 'Kern County', 'Kings County', 'Lake County', 'Lassen County', 'Los Angeles County', 'Madera County', 'Marin County', 'Mariposa County', 'Mendocino County', 'Merced County', 'Modoc County', 'Mono County', 'Monterey County', 'Napa County', 'Nevada County', 'Orange County', 'Placer County', 'Plumas County', 'Riverside County', 'Sacramento County', 'San Benito County', 'San Bernardino County', 'San Diego County', 'San Francisco County', 'San Joaquin County', 'San Luis Obispo County', 'San Mateo County', 'Santa Barbara County', 'Santa Clara County', 'Santa Cruz County', 'Shasta County', 'Sierra County', 'Siskiyou County', 'Solano County', 'Sonoma County', 'Stanislaus County', 'Sutter County', 'Tehama County', 'Trinity County', 'Tulare County', 'Tuolumne County', 'Ventura County', 'Yolo County', 'Yuba County'], 
  y: [5112, 0, 13, 138, 16, 8, 1501, 17, 69, 1413, 11, 167, 118, 10, 1166, 80, 66, 13, 20147, 124, 168, 1, 56, 238, 1, 4, 506, 72, 15, 2136, 156, 6, 2276, 2326, 29, 2910, 2777, 3221, 1624, 88, 465, 325, 1616, 209, 172, 0, 10, 647, 236, 835, 82, 52, 6, 329, 15, 725, 191, 55], 
  marker: {
    size: [5112, 0, 13, 138, 16, 8, 1501, 17, 69, 1413, 11, 167, 118, 10, 1166, 80, 66, 13, 20147, 124, 168, 1, 56, 238, 1, 4, 506, 72, 15, 2136, 156, 6, 2276, 2326, 29, 2910, 2777, 3221, 1624, 88, 465, 325, 1616, 209, 172, 0, 10, 647, 236, 835, 82, 52, 6, 329, 15, 725, 191, 55], 
    sizemode: 'area', 
    sizeref: 421.7584, 
    sizesrc: 'ambersong:7:9119db'
  }, 
  mode: 'markers', 
  name: 'Robbery_sum', 
  type: 'scatter', 
  uid: '1b6833', 
  xsrc: 'ambersong:7:6b0d76', 
  ysrc: 'ambersong:7:afd5f0'
};
trace5 = {
  x: ['Alameda County', 'Alpine County', 'Amador County', 'Butte County', 'Calaveras County', 'Colusa County', 'Contra Costa County', 'Del Norte County', 'El Dorado County', 'Fresno County', 'Glenn County', 'Humboldt County', 'Imperial County', 'Inyo County', 'Kern County', 'Kings County', 'Lake County', 'Lassen County', 'Los Angeles County', 'Madera County', 'Marin County', 'Mariposa County', 'Mendocino County', 'Merced County', 'Modoc County', 'Mono County', 'Monterey County', 'Napa County', 'Nevada County', 'Orange County', 'Placer County', 'Plumas County', 'Riverside County', 'Sacramento County', 'San Benito County', 'San Bernardino County', 'San Diego County', 'San Francisco County', 'San Joaquin County', 'San Luis Obispo County', 'San Mateo County', 'Santa Barbara County', 'Santa Clara County', 'Santa Cruz County', 'Shasta County', 'Sierra County', 'Siskiyou County', 'Solano County', 'Sonoma County', 'Stanislaus County', 'Sutter County', 'Tehama County', 'Trinity County', 'Tulare County', 'Tuolumne County', 'Ventura County', 'Yolo County', 'Yuba County'], 
  y: [4271, 6, 71, 515, 131, 33, 2032, 119, 247, 4191, 84, 441, 521, 95, 3567, 476, 271, 198, 31429, 842, 252, 67, 478, 1165, 31, 24, 1098, 463, 183, 4272, 380, 102, 4572, 4952, 107, 6727, 6993, 2644, 4099, 921, 906, 945, 3110, 767, 999, 14, 137, 1147, 1340, 2298, 238, 274, 54, 1111, 117, 1167, 373, 240], 
  marker: {
    size: [4271, 6, 71, 515, 131, 33, 2032, 119, 247, 4191, 84, 441, 521, 95, 3567, 476, 271, 198, 31429, 842, 252, 67, 478, 1165, 31, 24, 1098, 463, 183, 4272, 380, 102, 4572, 4952, 107, 6727, 6993, 2644, 4099, 921, 906, 945, 3110, 767, 999, 14, 137, 1147, 1340, 2298, 238, 274, 54, 1111, 117, 1167, 373, 240], 
    sizemode: 'area', 
    sizeref: 421.7584, 
    sizesrc: 'ambersong:7:a18762'
  }, 
  mode: 'markers', 
  name: 'Aggravated_Assaults_sum', 
  type: 'scatter', 
  uid: 'ae0598', 
  xsrc: 'ambersong:7:6b0d76', 
  ysrc: 'ambersong:7:e26858'
};
trace6 = {
  x: ['Alameda County', 'Alpine County', 'Amador County', 'Butte County', 'Calaveras County', 'Colusa County', 'Contra Costa County', 'Del Norte County', 'El Dorado County', 'Fresno County', 'Glenn County', 'Humboldt County', 'Imperial County', 'Inyo County', 'Kern County', 'Kings County', 'Lake County', 'Lassen County', 'Los Angeles County', 'Madera County', 'Marin County', 'Mariposa County', 'Mendocino County', 'Merced County', 'Modoc County', 'Mono County', 'Monterey County', 'Napa County', 'Nevada County', 'Orange County', 'Placer County', 'Plumas County', 'Riverside County', 'Sacramento County', 'San Benito County', 'San Bernardino County', 'San Diego County', 'San Francisco County', 'San Joaquin County', 'San Luis Obispo County', 'San Mateo County', 'Santa Barbara County', 'Santa Clara County', 'Santa Cruz County', 'Shasta County', 'Sierra County', 'Siskiyou County', 'Solano County', 'Sonoma County', 'Stanislaus County', 'Sutter County', 'Tehama County', 'Trinity County', 'Tulare County', 'Tuolumne County', 'Ventura County', 'Yolo County', 'Yuba County'], 
  y: [59744, 34, 669, 7307, 656, 357, 28939, 608, 3042, 31784, 559, 4001, 5195, 334, 32570, 3167, 1746, 513, 252224, 3705, 4975, 241, 1444, 7658, 163, 162, 10396, 2524, 1806, 66054, 7080, 359, 65333, 39105, 543, 54937, 61356, 48437, 22629, 6687, 14893, 9779, 42797, 9485, 5561, 26, 876, 11719, 7794, 17918, 2691, 1937, 299, 11563, 1272, 16415, 5368, 1944], 
  marker: {
    size: [59744, 34, 669, 7307, 656, 357, 28939, 608, 3042, 31784, 559, 4001, 5195, 334, 32570, 3167, 1746, 513, 252224, 3705, 4975, 241, 1444, 7658, 163, 162, 10396, 2524, 1806, 66054, 7080, 359, 65333, 39105, 543, 54937, 61356, 48437, 22629, 6687, 14893, 9779, 42797, 9485, 5561, 26, 876, 11719, 7794, 17918, 2691, 1937, 299, 11563, 1272, 16415, 5368, 1944], 
    sizemode: 'area', 
    sizeref: 421.7584, 
    sizesrc: 'ambersong:7:76458e'
  }, 
  mode: 'markers', 
  name: 'Property_sum', 
  type: 'scatter', 
  uid: '79f1b3', 
  xsrc: 'ambersong:7:6b0d76', 
  ysrc: 'ambersong:7:9198bf'
};
trace7 = {
  x: ['Alameda County', 'Alpine County', 'Amador County', 'Butte County', 'Calaveras County', 'Colusa County', 'Contra Costa County', 'Del Norte County', 'El Dorado County', 'Fresno County', 'Glenn County', 'Humboldt County', 'Imperial County', 'Inyo County', 'Kern County', 'Kings County', 'Lake County', 'Lassen County', 'Los Angeles County', 'Madera County', 'Marin County', 'Mariposa County', 'Mendocino County', 'Merced County', 'Modoc County', 'Mono County', 'Monterey County', 'Napa County', 'Nevada County', 'Orange County', 'Placer County', 'Plumas County', 'Riverside County', 'Sacramento County', 'San Benito County', 'San Bernardino County', 'San Diego County', 'San Francisco County', 'San Joaquin County', 'San Luis Obispo County', 'San Mateo County', 'Santa Barbara County', 'Santa Clara County', 'Santa Cruz County', 'Shasta County', 'Sierra County', 'Siskiyou County', 'Solano County', 'Sonoma County', 'Stanislaus County', 'Sutter County', 'Tehama County', 'Trinity County', 'Tulare County', 'Tuolumne County', 'Ventura County', 'Yolo County', 'Yuba County'], 
  y: [7993, 7, 212, 1755, 191, 121, 4417, 290, 680, 6883, 122, 1004, 1165, 98, 8351, 699, 627, 155, 46918, 978, 991, 53, 419, 1830, 43, 39, 1666, 655, 468, 11025, 1258, 120, 12764, 7750, 138, 13440, 10382, 5084, 4239, 1199, 3017, 1868, 7523, 1221, 1217, 8, 267, 3397, 1529, 3303, 641, 574, 101, 2674, 436, 2910, 791, 456], 
  marker: {
    size: [7993, 7, 212, 1755, 191, 121, 4417, 290, 680, 6883, 122, 1004, 1165, 98, 8351, 699, 627, 155, 46918, 978, 991, 53, 419, 1830, 43, 39, 1666, 655, 468, 11025, 1258, 120, 12764, 7750, 138, 13440, 10382, 5084, 4239, 1199, 3017, 1868, 7523, 1221, 1217, 8, 267, 3397, 1529, 3303, 641, 574, 101, 2674, 436, 2910, 791, 456], 
    sizemode: 'area', 
    sizeref: 421.7584, 
    sizesrc: 'ambersong:7:293468'
  }, 
  mode: 'markers', 
  name: 'Burglary_sum', 
  type: 'scatter', 
  uid: '2f8568', 
  xsrc: 'ambersong:7:6b0d76', 
  ysrc: 'ambersong:7:6f31fb'
};
trace8 = {
  x: ['Alameda County', 'Alpine County', 'Amador County', 'Butte County', 'Calaveras County', 'Colusa County', 'Contra Costa County', 'Del Norte County', 'El Dorado County', 'Fresno County', 'Glenn County', 'Humboldt County', 'Imperial County', 'Inyo County', 'Kern County', 'Kings County', 'Lake County', 'Lassen County', 'Los Angeles County', 'Madera County', 'Marin County', 'Mariposa County', 'Mendocino County', 'Merced County', 'Modoc County', 'Mono County', 'Monterey County', 'Napa County', 'Nevada County', 'Orange County', 'Placer County', 'Plumas County', 'Riverside County', 'Sacramento County', 'San Benito County', 'San Bernardino County', 'San Diego County', 'San Francisco County', 'San Joaquin County', 'San Luis Obispo County', 'San Mateo County', 'Santa Barbara County', 'Santa Clara County', 'Santa Cruz County', 'Shasta County', 'Sierra County', 'Siskiyou County', 'Solano County', 'Sonoma County', 'Stanislaus County', 'Sutter County', 'Tehama County', 'Trinity County', 'Tulare County', 'Tuolumne County', 'Ventura County', 'Yolo County', 'Yuba County'], 
  y: [13922, 1, 61, 1021, 97, 26, 6634, 130, 205, 5185, 70, 704, 547, 33, 6477, 537, 340, 43, 47496, 572, 540, 22, 199, 1433, 11, 12, 2518, 222, 218, 8522, 642, 20, 11610, 6873, 110, 11657, 11019, 5487, 3542, 501, 1627, 1220, 9956, 1454, 872, 0, 142, 2164, 885, 3496, 331, 284, 60, 2108, 115, 1650, 646, 407], 
  marker: {
    size: [13922, 1, 61, 1021, 97, 26, 6634, 130, 205, 5185, 70, 704, 547, 33, 6477, 537, 340, 43, 47496, 572, 540, 22, 199, 1433, 11, 12, 2518, 222, 218, 8522, 642, 20, 11610, 6873, 110, 11657, 11019, 5487, 3542, 501, 1627, 1220, 9956, 1454, 872, 0, 142, 2164, 885, 3496, 331, 284, 60, 2108, 115, 1650, 646, 407], 
    sizemode: 'area', 
    sizeref: 421.7584, 
    sizesrc: 'ambersong:7:71a9a8'
  }, 
  mode: 'markers', 
  name: 'Vehicle_Theft_sum', 
  type: 'scatter', 
  uid: '2408d1', 
  xsrc: 'ambersong:7:6b0d76', 
  ysrc: 'ambersong:7:ff4c7f'
};
trace9 = {
  x: ['Alameda County', 'Alpine County', 'Amador County', 'Butte County', 'Calaveras County', 'Colusa County', 'Contra Costa County', 'Del Norte County', 'El Dorado County', 'Fresno County', 'Glenn County', 'Humboldt County', 'Imperial County', 'Inyo County', 'Kern County', 'Kings County', 'Lake County', 'Lassen County', 'Los Angeles County', 'Madera County', 'Marin County', 'Mariposa County', 'Mendocino County', 'Merced County', 'Modoc County', 'Mono County', 'Monterey County', 'Napa County', 'Nevada County', 'Orange County', 'Placer County', 'Plumas County', 'Riverside County', 'Sacramento County', 'San Benito County', 'San Bernardino County', 'San Diego County', 'San Francisco County', 'San Joaquin County', 'San Luis Obispo County', 'San Mateo County', 'Santa Barbara County', 'Santa Clara County', 'Santa Cruz County', 'Shasta County', 'Sierra County', 'Siskiyou County', 'Solano County', 'Sonoma County', 'Stanislaus County', 'Sutter County', 'Tehama County', 'Trinity County', 'Tulare County', 'Tuolumne County', 'Ventura County', 'Yolo County', 'Yuba County'], 
  y: [37829, 26, 396, 4531, 368, 210, 17888, 188, 2157, 19716, 367, 2293, 3483, 203, 17742, 1931, 779, 315, 157810, 2155, 3444, 166, 826, 4395, 109, 111, 6212, 1647, 1120, 46507, 5180, 219, 40959, 24482, 295, 29840, 39955, 37866, 14848, 4987, 10249, 6691, 25318, 6810, 3472, 18, 467, 6158, 5380, 11119, 1719, 1079, 138, 6781, 721, 11855, 3931, 1081], 
  marker: {
    size: [37829, 26, 396, 4531, 368, 210, 17888, 188, 2157, 19716, 367, 2293, 3483, 203, 17742, 1931, 779, 315, 157810, 2155, 3444, 166, 826, 4395, 109, 111, 6212, 1647, 1120, 46507, 5180, 219, 40959, 24482, 295, 29840, 39955, 37866, 14848, 4987, 10249, 6691, 25318, 6810, 3472, 18, 467, 6158, 5380, 11119, 1719, 1079, 138, 6781, 721, 11855, 3931, 1081], 
    sizemode: 'area', 
    sizeref: 421.7584, 
    sizesrc: 'ambersong:7:5acfa0'
  }, 
  mode: 'markers', 
  name: 'Larceny_Thefts_sum', 
  type: 'scatter', 
  uid: '2a0579', 
  xsrc: 'ambersong:7:6b0d76', 
  ysrc: 'ambersong:7:92de71'
};
data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9];
layout = {
  height: 800, 
  width: 1300,
  autosize: true, 
  hovermode: 'closest', 
  sliders: [
    {
      x: 0.1, 
      y: 0, 
      active: 31, 
      currentvalue: {
        font: {size: 20}, 
        prefix: 'Year:', 
        visible: true, 
        xanchor: 'right'
      }, 
      len: 0.9, 
      pad: {
        t: 50, 
        b: 10
      }, 
      steps: [
        {
          args: [
            [1985], {
              frame: {
                duration: 300, 
                redraw: false
              }, 
              transition: {duration: 300}, 
              mode: 'immediate'
            }
          ], 
          label: 1985, 
          method: 'animate'
        }, 
        {
          args: [
            [1986], {
              frame: {
                duration: 300, 
                redraw: false
              }, 
              transition: {duration: 300}, 
              mode: 'immediate'
            }
          ], 
          label: 1986, 
          method: 'animate'
        }, 
        {
          args: [
            [1987], {
              frame: {
                duration: 300, 
                redraw: false
              }, 
              transition: {duration: 300}, 
              mode: 'immediate'
            }
          ], 
          label: 1987, 
          method: 'animate'
        }, 
        {
          args: [
            [1988], {
              frame: {
                duration: 300, 
                redraw: false
              }, 
              transition: {duration: 300}, 
              mode: 'immediate'
            }
          ], 
          label: 1988, 
          method: 'animate'
        }, 
        {
          args: [
            [1989], {
              frame: {
                duration: 300, 
                redraw: false
              }, 
              transition: {duration: 300}, 
              mode: 'immediate'
            }
          ], 
          label: 1989, 
          method: 'animate'
        }, 
        {
          args: [
            [1990], {
              frame: {
                duration: 300, 
                redraw: false
              }, 
              transition: {duration: 300}, 
              mode: 'immediate'
            }
          ], 
          label: 1990, 
          method: 'animate'
        }, 
        {
          args: [
            [1991], {
              frame: {
                duration: 300, 
                redraw: false
              }, 
              transition: {duration: 300}, 
              mode: 'immediate'
            }
          ], 
          label: 1991, 
          method: 'animate'
        }, 
        {
          args: [
            [1992], {
              frame: {
                duration: 300, 
                redraw: false
              }, 
              transition: {duration: 300}, 
              mode: 'immediate'
            }
          ], 
          label: 1992, 
          method: 'animate'
        }, 
        {
          args: [
            [1993], {
              frame: {
                duration: 300, 
                redraw: false
              }, 
              transition: {duration: 300}, 
              mode: 'immediate'
            }
          ], 
          label: 1993, 
          method: 'animate'
        }, 
        {
          args: [
            [1994], {
              frame: {
                duration: 300, 
                redraw: false
              }, 
              transition: {duration: 300}, 
              mode: 'immediate'
            }
          ], 
          label: 1994, 
          method: 'animate'
        }, 
        {
          args: [
            [1995], {
              frame: {
                duration: 300, 
                redraw: false
              }, 
              transition: {duration: 300}, 
              mode: 'immediate'
            }
          ], 
          label: 1995, 
          method: 'animate'
        }, 
        {
          args: [
            [1996], {
              frame: {
                duration: 300, 
                redraw: false
              }, 
              transition: {duration: 300}, 
              mode: 'immediate'
            }
          ], 
          label: 1996, 
          method: 'animate'
        }, 
        {
          args: [
            [1997], {
              frame: {
                duration: 300, 
                redraw: false
              }, 
              transition: {duration: 300}, 
              mode: 'immediate'
            }
          ], 
          label: 1997, 
          method: 'animate'
        }, 
        {
          args: [
            [1998], {
              frame: {
                duration: 300, 
                redraw: false
              }, 
              transition: {duration: 300}, 
              mode: 'immediate'
            }
          ], 
          label: 1998, 
          method: 'animate'
        }, 
        {
          args: [
            [1999], {
              frame: {
                duration: 300, 
                redraw: false
              }, 
              transition: {duration: 300}, 
              mode: 'immediate'
            }
          ], 
          label: 1999, 
          method: 'animate'
        }, 
        {
          args: [
            [2000], {
              frame: {
                duration: 300, 
                redraw: false
              }, 
              transition: {duration: 300}, 
              mode: 'immediate'
            }
          ], 
          label: 2000, 
          method: 'animate'
        }, 
        {
          args: [
            [2001], {
              frame: {
                duration: 300, 
                redraw: false
              }, 
              transition: {duration: 300}, 
              mode: 'immediate'
            }
          ], 
          label: 2001, 
          method: 'animate'
        }, 
        {
          args: [
            [2002], {
              frame: {
                duration: 300, 
                redraw: false
              }, 
              transition: {duration: 300}, 
              mode: 'immediate'
            }
          ], 
          label: 2002, 
          method: 'animate'
        }, 
        {
          args: [
            [2003], {
              frame: {
                duration: 300, 
                redraw: false
              }, 
              transition: {duration: 300}, 
              mode: 'immediate'
            }
          ], 
          label: 2003, 
          method: 'animate'
        }, 
        {
          args: [
            [2004], {
              frame: {
                duration: 300, 
                redraw: false
              }, 
              transition: {duration: 300}, 
              mode: 'immediate'
            }
          ], 
          label: 2004, 
          method: 'animate'
        }, 
        {
          args: [
            [2005], {
              frame: {
                duration: 300, 
                redraw: false
              }, 
              transition: {duration: 300}, 
              mode: 'immediate'
            }
          ], 
          label: 2005, 
          method: 'animate'
        }, 
        {
          args: [
            [2006], {
              frame: {
                duration: 300, 
                redraw: false
              }, 
              transition: {duration: 300}, 
              mode: 'immediate'
            }
          ], 
          label: 2006, 
          method: 'animate'
        }, 
        {
          args: [
            [2007], {
              frame: {
                duration: 300, 
                redraw: false
              }, 
              transition: {duration: 300}, 
              mode: 'immediate'
            }
          ], 
          label: 2007, 
          method: 'animate'
        }, 
        {
          args: [
            [2008], {
              frame: {
                duration: 300, 
                redraw: false
              }, 
              transition: {duration: 300}, 
              mode: 'immediate'
            }
          ], 
          label: 2008, 
          method: 'animate'
        }, 
        {
          args: [
            [2009], {
              frame: {
                duration: 300, 
                redraw: false
              }, 
              transition: {duration: 300}, 
              mode: 'immediate'
            }
          ], 
          label: 2009, 
          method: 'animate'
        }, 
        {
          args: [
            [2010], {
              frame: {
                duration: 300, 
                redraw: false
              }, 
              transition: {duration: 300}, 
              mode: 'immediate'
            }
          ], 
          label: 2010, 
          method: 'animate'
        }, 
        {
          args: [
            [2011], {
              frame: {
                duration: 300, 
                redraw: false
              }, 
              transition: {duration: 300}, 
              mode: 'immediate'
            }
          ], 
          label: 2011, 
          method: 'animate'
        }, 
        {
          args: [
            [2012], {
              frame: {
                duration: 300, 
                redraw: false
              }, 
              transition: {duration: 300}, 
              mode: 'immediate'
            }
          ], 
          label: 2012, 
          method: 'animate'
        }, 
        {
          args: [
            [2013], {
              frame: {
                duration: 300, 
                redraw: false
              }, 
              transition: {duration: 300}, 
              mode: 'immediate'
            }
          ], 
          label: 2013, 
          method: 'animate'
        }, 
        {
          args: [
            [2014], {
              frame: {
                duration: 300, 
                redraw: false
              }, 
              transition: {duration: 300}, 
              mode: 'immediate'
            }
          ], 
          label: 2014, 
          method: 'animate'
        }, 
        {
          args: [
            [2015], {
              frame: {
                duration: 300, 
                redraw: false
              }, 
              transition: {duration: 300}, 
              mode: 'immediate'
            }
          ], 
          label: 2015, 
          method: 'animate'
        }, 
        {
          args: [
            [2016], {
              frame: {
                duration: 300, 
                redraw: false
              }, 
              transition: {duration: 300}, 
              mode: 'immediate'
            }
          ], 
          label: 2016, 
          method: 'animate'
        }
      ], 
      transition: {
        duration: 300, 
        easing: 'cubic-in-out'
      }, 
      xanchor: 'left', 
      yanchor: 'top'
    }
  ], 
  updatemenus: [
    {
      x: 0.1, 
      y: 0, 
      active: 0, 
      buttons: [
        {
          args: [null, {
            frame: {
              duration: 500, 
              redraw: false
            }, 
            transition: {
              duration: 300, 
              easing: 'quadratic-in-out'
            }, 
            fromcurrent: true
          }
          ], 
          label: 'Play', 
          method: 'animate'
        }, 
        {
          args: [
            [null], {
              frame: {
                duration: 0, 
                redraw: false
              }, 
              transition: {duration: 0}, 
              mode: 'immediate'
            }
          ], 
          label: 'Pause', 
          method: 'animate'
        }
      ], 
      direction: 'left', 
      pad: {
        r: 10, 
        t: 87
      }, 
      showactive: false, 
      type: 'buttons', 
      xanchor: 'right', 
      yanchor: 'top'
    }
  ], 
  xaxis: {
    autorange: false, 
    range: [-3.45945788733, 60.2734347728], 
    title: 'Month', 
    type: 'category'
  }, 
  yaxis: {
    autorange: false, 
    range: [-14346.3445453, 258198.246065], 
    title: 'Number of Incidents', 
    type: 'linear'
  }
};
frame1 = {
  data: [
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Violent_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Homicide_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Forcible_Rapes_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Robbery_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Aggravated_Assaults_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Property_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Burglary_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Vehicle_Theft_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Larceny_Thefts_sum', 
      type: 'scatter'
    }
  ], 
  name: '1985'
};
frame2 = {
  data: [
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Violent_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Homicide_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Forcible_Rapes_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Robbery_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Aggravated_Assaults_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Property_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Burglary_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Vehicle_Theft_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Larceny_Thefts_sum', 
      type: 'scatter'
    }
  ], 
  name: '1986'
};
frame3 = {
  data: [
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Violent_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Homicide_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Forcible_Rapes_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Robbery_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Aggravated_Assaults_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Property_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Burglary_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Vehicle_Theft_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Larceny_Thefts_sum', 
      type: 'scatter'
    }
  ], 
  name: '1987'
};
frame4 = {
  data: [
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Violent_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Homicide_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Forcible_Rapes_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Robbery_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Aggravated_Assaults_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Property_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Burglary_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Vehicle_Theft_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Larceny_Thefts_sum', 
      type: 'scatter'
    }
  ], 
  name: '1988'
};
frame5 = {
  data: [
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Violent_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Homicide_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Forcible_Rapes_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Robbery_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Aggravated_Assaults_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Property_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Burglary_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Vehicle_Theft_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Larceny_Thefts_sum', 
      type: 'scatter'
    }
  ], 
  name: '1989'
};
frame6 = {
  data: [
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Violent_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Homicide_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Forcible_Rapes_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Robbery_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Aggravated_Assaults_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Property_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Burglary_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Vehicle_Theft_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Larceny_Thefts_sum', 
      type: 'scatter'
    }
  ], 
  name: '1990'
};
frame7 = {
  data: [
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Violent_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Homicide_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Forcible_Rapes_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Robbery_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Aggravated_Assaults_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Property_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Burglary_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Vehicle_Theft_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Larceny_Thefts_sum', 
      type: 'scatter'
    }
  ], 
  name: '1991'
};
frame8 = {
  data: [
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Violent_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Homicide_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Forcible_Rapes_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Robbery_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Aggravated_Assaults_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Property_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Burglary_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Vehicle_Theft_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Larceny_Thefts_sum', 
      type: 'scatter'
    }
  ], 
  name: '1992'
};
frame9 = {
  data: [
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Violent_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Homicide_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Forcible_Rapes_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Robbery_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Aggravated_Assaults_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Property_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Burglary_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Vehicle_Theft_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Larceny_Thefts_sum', 
      type: 'scatter'
    }
  ], 
  name: '1993'
};
frame10 = {
  data: [
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Violent_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Homicide_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Forcible_Rapes_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Robbery_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Aggravated_Assaults_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Property_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Burglary_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Vehicle_Theft_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Larceny_Thefts_sum', 
      type: 'scatter'
    }
  ], 
  name: '1994'
};
frame11 = {
  data: [
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Violent_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Homicide_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Forcible_Rapes_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Robbery_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Aggravated_Assaults_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Property_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Burglary_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Vehicle_Theft_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Larceny_Thefts_sum', 
      type: 'scatter'
    }
  ], 
  name: '1995'
};
frame12 = {
  data: [
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Violent_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Homicide_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Forcible_Rapes_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Robbery_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Aggravated_Assaults_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Property_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Burglary_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Vehicle_Theft_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Larceny_Thefts_sum', 
      type: 'scatter'
    }
  ], 
  name: '1996'
};
frame13 = {
  data: [
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Violent_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Homicide_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Forcible_Rapes_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Robbery_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Aggravated_Assaults_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Property_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Burglary_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Vehicle_Theft_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Larceny_Thefts_sum', 
      type: 'scatter'
    }
  ], 
  name: '1997'
};
frame14 = {
  data: [
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Violent_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Homicide_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Forcible_Rapes_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Robbery_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Aggravated_Assaults_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Property_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Burglary_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Vehicle_Theft_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Larceny_Thefts_sum', 
      type: 'scatter'
    }
  ], 
  name: '1998'
};
frame15 = {
  data: [
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Violent_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Homicide_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Forcible_Rapes_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Robbery_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Aggravated_Assaults_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Property_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Burglary_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Vehicle_Theft_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Larceny_Thefts_sum', 
      type: 'scatter'
    }
  ], 
  name: '1999'
};
frame16 = {
  data: [
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Violent_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Homicide_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Forcible_Rapes_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Robbery_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Aggravated_Assaults_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Property_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Burglary_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Vehicle_Theft_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Larceny_Thefts_sum', 
      type: 'scatter'
    }
  ], 
  name: '2000'
};
frame17 = {
  data: [
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Violent_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Homicide_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Forcible_Rapes_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Robbery_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Aggravated_Assaults_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Property_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Burglary_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Vehicle_Theft_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Larceny_Thefts_sum', 
      type: 'scatter'
    }
  ], 
  name: '2001'
};
frame18 = {
  data: [
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Violent_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Homicide_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Forcible_Rapes_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Robbery_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Aggravated_Assaults_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Property_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Burglary_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Vehicle_Theft_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Larceny_Thefts_sum', 
      type: 'scatter'
    }
  ], 
  name: '2002'
};
frame19 = {
  data: [
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Violent_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Homicide_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Forcible_Rapes_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Robbery_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Aggravated_Assaults_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Property_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Burglary_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Vehicle_Theft_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Larceny_Thefts_sum', 
      type: 'scatter'
    }
  ], 
  name: '2003'
};
frame20 = {
  data: [
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Violent_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Homicide_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Forcible_Rapes_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Robbery_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Aggravated_Assaults_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Property_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Burglary_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Vehicle_Theft_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Larceny_Thefts_sum', 
      type: 'scatter'
    }
  ], 
  name: '2004'
};
frame21 = {
  data: [
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Violent_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Homicide_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Forcible_Rapes_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Robbery_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Aggravated_Assaults_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Property_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Burglary_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Vehicle_Theft_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Larceny_Thefts_sum', 
      type: 'scatter'
    }
  ], 
  name: '2005'
};
frame22 = {
  data: [
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Violent_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Homicide_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Forcible_Rapes_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Robbery_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Aggravated_Assaults_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Property_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Burglary_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Vehicle_Theft_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Larceny_Thefts_sum', 
      type: 'scatter'
    }
  ], 
  name: '2006'
};
frame23 = {
  data: [
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Violent_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Homicide_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Forcible_Rapes_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Robbery_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Aggravated_Assaults_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Property_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Burglary_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Vehicle_Theft_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Larceny_Thefts_sum', 
      type: 'scatter'
    }
  ], 
  name: '2007'
};
frame24 = {
  data: [
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Violent_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Homicide_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Forcible_Rapes_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Robbery_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Aggravated_Assaults_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Property_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Burglary_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Vehicle_Theft_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Larceny_Thefts_sum', 
      type: 'scatter'
    }
  ], 
  name: '2008'
};
frame25 = {
  data: [
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Violent_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Homicide_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Forcible_Rapes_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Robbery_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Aggravated_Assaults_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Property_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Burglary_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Vehicle_Theft_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Larceny_Thefts_sum', 
      type: 'scatter'
    }
  ], 
  name: '2009'
};
frame26 = {
  data: [
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Violent_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Homicide_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Forcible_Rapes_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Robbery_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Aggravated_Assaults_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Property_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Burglary_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Vehicle_Theft_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Larceny_Thefts_sum', 
      type: 'scatter'
    }
  ], 
  name: '2010'
};
frame27 = {
  data: [
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Violent_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Homicide_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Forcible_Rapes_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Robbery_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Aggravated_Assaults_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Property_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Burglary_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Vehicle_Theft_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Larceny_Thefts_sum', 
      type: 'scatter'
    }
  ], 
  name: '2011'
};
frame28 = {
  data: [
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Violent_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Homicide_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Forcible_Rapes_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Robbery_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Aggravated_Assaults_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Property_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Burglary_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Vehicle_Theft_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Larceny_Thefts_sum', 
      type: 'scatter'
    }
  ], 
  name: '2012'
};
frame29 = {
  data: [
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Violent_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Homicide_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Forcible_Rapes_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Robbery_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Aggravated_Assaults_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Property_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Burglary_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Vehicle_Theft_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Larceny_Thefts_sum', 
      type: 'scatter'
    }
  ], 
  name: '2013'
};
frame30 = {
  data: [
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Violent_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Homicide_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Forcible_Rapes_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Robbery_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Aggravated_Assaults_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Property_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Burglary_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Vehicle_Theft_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Larceny_Thefts_sum', 
      type: 'scatter'
    }
  ], 
  name: '2014'
};
frame31 = {
  data: [
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Violent_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Homicide_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Forcible_Rapes_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Robbery_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Aggravated_Assaults_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Property_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Burglary_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Vehicle_Theft_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Larceny_Thefts_sum', 
      type: 'scatter'
    }
  ], 
  name: '2015'
};
frame32 = {
  data: [
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Violent_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Homicide_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Forcible_Rapes_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Robbery_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Aggravated_Assaults_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Property_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Burglary_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Vehicle_Theft_sum', 
      type: 'scatter'
    }, 
    {
      marker: {
        sizemode: 'area', 
        sizeref: 421.7584
      }, 
      mode: 'markers', 
      name: 'Larceny_Thefts_sum', 
      type: 'scatter'
    }
  ], 
  name: '2016'
};
frames = [frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8, frame9, frame10, frame11, frame12, frame13, frame14, frame15, frame16, frame17, frame18, frame19, frame20, frame21, frame22, frame23, frame24, frame25, frame26, frame27, frame28, frame29, frame30, frame31, frame32];
Plotly.plot('plotly-play', {
  data: data,
  layout: layout,
  frames: frames
});