function tsp_hk(distance_matrix) {
    const cities = new Set();
    for (let city = 0; city < distance_matrix.length; city++) {
        cities.add(city);
    }
    //console.log(cities);
    let start = [...cities][0];

    console.log(distance_matrix[start]);
    
    heldKarp(distance_matrix, cities, start);
    //return -1;
}

function heldKarp(distance_matrix, cities, start) {
    const cache = new Map();
    let tourLen = undefined;
    for (city of cities) {
        if (distance_matrix[start][city] != 0 && city != start) {
            var end = city;
            break;
        }
    }
    //console.log("end = ", end);
    if (Math.abs(cities.size) == 2) {
        tourLen = distance_matrix[start][end];
    }
    //console.log("smallTourLen = ", smallTourLen);
    else {
        //return the min of
        for (city of cities) {
            if (city == start) {
                continue;
            }
            
        }
    }
}
