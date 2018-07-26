"use strict";

exports.getByStars = (stars, filterData) => {
    let filtro = [];
    if (Number(stars) === -1) {
        return filterData;
    }
    for (var i in filterData) {
        for (var j in stars) {
            let busqueda = filterData[i].stars;
            if (busqueda == stars[j]) {
                filtro.push(filterData[i]);
            }
        }

    }

    return filtro;
}

exports.getByName = (name, filterData) => {
    let filtro = [];

    for (var i in filterData) {
        let busqueda = filterData[i].name;
        if (busqueda.toLowerCase().indexOf(name.toLowerCase()) != -1) {
            filtro.push(filterData[i]);
        }
    }
    return filtro;
}