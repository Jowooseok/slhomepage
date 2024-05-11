const buyerList = [
    { name: "Japan", latitude: 36.2048, longitude: 138.2529, pop_max: 251 },
    { name: "China", latitude: 35.8617, longitude: 104.1954, pop_max: 132 },
    { name: "Germany", latitude: 51.1657, longitude: 10.4515, pop_max: 163 },
    { name: "Korea", latitude: 35.9078, longitude: 127.7669, pop_max: 198 },
    { name: "Turkey", latitude: 38.9637, longitude: 35.2433, pop_max: 170 },
    { name: "Israel", latitude: 31.0461, longitude: 34.8516, pop_max: 181 },
    { name: "Iran", latitude: 32.4279, longitude: 53.688, pop_max: 177 },
    { name: "Netherlands", latitude: 52.1326, longitude: 5.2913, pop_max: 37 },
    { name: "Finland", latitude: 61.9241, longitude: 25.7482, pop_max: 1 },
    { name: "Mexico", latitude: 23.6345, longitude: -102.5528, pop_max: 53 },
    { name: "Denmark", latitude: 56.2639, longitude: 9.5018, pop_max: 23 },
    { name: "Australia", latitude: -25.2744, longitude: 133.7751, pop_max: 29 },
    { name: "Ireland", latitude: 53.4129, longitude: -8.2439, pop_max: 37 },
    { name: "UK", latitude: 55.3781, longitude: -3.436, pop_max: 24 },
    { name: "Egypt", latitude: 26.8206, longitude: 30.8025, pop_max: 22 },
    { name: "Russia", latitude: 61.524, longitude: 105.3188, pop_max: 18 },
    { name: "USA", latitude: 37.0902, longitude: -95.7129, pop_max: 14 },
    { name: "Vietnam", latitude: 14.0583, longitude: 108.2772, pop_max: 21 },
    { name: "Afghanistan", latitude: 33.9391, longitude: 67.7100, pop_max: 32 },
    { name: "Albania", latitude: 41.1533, longitude: 20.1683, pop_max: 15 },
    { name: "Azerbaijan", latitude: 40.1431, longitude: 47.5769, pop_max: 16 },
    { name: "Bangladesh", latitude: 23.6850, longitude: 90.3563, pop_max: 112 },
    { name: "Belgium", latitude: 50.5039, longitude: 4.4699, pop_max: 25 },
    { name: "Bolivia", latitude: -16.2902, longitude: -63.5887, pop_max: 17 },
    { name: "Bosnia and Herzegovina", latitude: 43.9159, longitude: 17.6791, pop_max: 12 },
    { name: "Brazil", latitude: -14.2350, longitude: -51.9253, pop_max: 55 },
    { name: "Bulgaria", latitude: 42.7339, longitude: 25.4858, pop_max: 19 },
    { name: "Burkinafaso", latitude: 12.2383, longitude: -1.5616, pop_max: 20 },
    { name: "Chile", latitude: -35.6751, longitude: -71.5430, pop_max: 21 },
    { name: "Colombia", latitude: 4.5709, longitude: -74.2973, pop_max: 48 },
    { name: "Czech", latitude: 49.8175, longitude: 15.4730, pop_max: 26 },
    { name: "Ecuador", latitude: -1.8312, longitude: -78.1834, pop_max: 22 },
    { name: "Estonia", latitude: 58.5953, longitude: 25.0136, pop_max: 9 },
    { name: "France", latitude: 46.2276, longitude: 2.2137, pop_max: 64 },
    { name: "French Polynesia", latitude: -17.6797, longitude: -149.4068, pop_max: 6 },
    { name: "Ghana", latitude: 7.9465, longitude: -1.0232, pop_max: 28 },
    { name: "Greece", latitude: 39.0742, longitude: 21.8243, pop_max: 30 },
    { name: "Guatemala", latitude: 15.7835, longitude: -90.2308, pop_max: 18 },
    { name: "Honduras", latitude: 15.2000, longitude: -86.2419, pop_max: 19 },
    { name: "Hong Kong", latitude: 22.3193, longitude: 114.1694, pop_max: 85 },
    { name: "India", latitude: 20.5937, longitude: 78.9629, pop_max: 255 },
    { name: "Indonesia", latitude: -0.7893, longitude: 113.9213, pop_max: 120 },
    { name: "Iraq", latitude: 33.2232, longitude: 43.6793, pop_max: 49 },
    { name: "Italy", latitude: 41.8719, longitude: 12.5674, pop_max: 61 },
    { name: "Kenya", latitude: -0.0236, longitude: 37.9062, pop_max: 44 },
    { name: "Libya", latitude: 26.3351, longitude: 17.2283, pop_max: 18 },
    { name: "Malaysia", latitude: 4.2105, longitude: 101.9758, pop_max: 60 },
    { name: "Malta", latitude: 35.9375, longitude: 14.3754, pop_max: 7 },
    { name: "Myanmar", latitude: 21.9162, longitude: 95.9560, pop_max: 52 },
    { name: "New Zealand", latitude: -40.9006, longitude: 174.8860, pop_max: 12 },
    { name: "Oman", latitude: 21.4735, longitude: 55.9754, pop_max: 25 },
    { name: "Peru", latitude: -9.1900, longitude: -75.0152, pop_max: 29 },
    { name: "Philippines", latitude: 12.8797, longitude: 121.7740, pop_max: 89 },
    { name: "Qatar", latitude: 25.3548, longitude: 51.1839, pop_max: 17 },
    { name: "Romania", latitude: 45.9432, longitude: 24.9668, pop_max: 28 },
    { name: "Slovenia", latitude: 46.1512, longitude: 14.9955, pop_max: 11 },
    { name: "South Africa", latitude: -30.5595, longitude: 22.9375, pop_max: 49 },
    { name: "Spain", latitude: 40.4637, longitude: -3.7492, pop_max: 66 },
    { name: "Sri Lanka", latitude: 7.8731, longitude: 80.7718, pop_max: 33 },
    { name: "Taiwan", latitude: 23.6978, longitude: 120.9605, pop_max: 82 },
    { name: "Thailand", latitude: 15.8700, longitude: 100.9925, pop_max: 75 },
    { name: "UAE", latitude: 23.4241, longitude: 53.8478, pop_max: 29 },
    { name: "Uganda", latitude: 1.3733, longitude: 32.2903, pop_max: 25 },
    { name: "Ukraine", latitude: 48.3794, longitude: 31.1656, pop_max: 55 }
];


export default buyerList;