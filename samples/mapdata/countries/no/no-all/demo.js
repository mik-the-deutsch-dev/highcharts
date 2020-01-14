// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var data = [
    ['no-vl-46', 0],
    ['no-mr-15', 1],
    ['no-ag-42', 2],
    ['no-no-18', 3],
    ['no-vi-30', 4],
    ['no-ro-11', 5],
    ['no-tf-54', 6],
    ['no-td-50', 7],
    ['no-os-0301', 8],
    ['no-vt-38', 9],
    ['no-in-34', 10]
];

// Create the chart
Highcharts.mapChart('container', {
    chart: {
        map: 'countries/no/no-all'
    },

    title: {
        text: 'Highmaps basic demo'
    },

    subtitle: {
        text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/no/no-all.js">Norway, admin1</a>'
    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },

    colorAxis: {
        min: 0
    },

    series: [{
        data: data,
        name: 'Random data',
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
});
