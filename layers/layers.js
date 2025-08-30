ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([31.496681, 23.994546, 54.706198, 41.615831]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_IRQ_1 = new ol.format.GeoJSON();
var features_IRQ_1 = format_IRQ_1.readFeatures(json_IRQ_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_IRQ_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IRQ_1.addFeatures(features_IRQ_1);
var lyr_IRQ_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IRQ_1, 
                style: style_IRQ_1,
                popuplayertitle: 'IRQ',
                interactive: true,
                title: '<img src="styles/legend/IRQ_1.png" /> IRQ'
            });
var format_4_2 = new ol.format.GeoJSON();
var features_4_2 = format_4_2.readFeatures(json_4_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_4_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4_2.addFeatures(features_4_2);
cluster_4_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_4_2
});
var lyr_4_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_4_2, 
                style: style_4_2,
                popuplayertitle: 'العراق4',
                interactive: true,
    title: 'العراق4<br />\
    <img src="styles/legend/4_2_0.png" /> 12 - 25<br />\
    <img src="styles/legend/4_2_1.png" /> 25 - 29<br />\
    <img src="styles/legend/4_2_2.png" /> 29 - 31<br />\
    <img src="styles/legend/4_2_3.png" /> 31 - 36<br />\
    <img src="styles/legend/4_2_4.png" /> 36 - 42<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_IRQ_1.setVisible(true);lyr_4_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_IRQ_1,lyr_4_2];
lyr_IRQ_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', });
lyr_4_2.set('fieldAliases', {'The station': 'The station', 'X': 'X', 'y': 'y', 'rainfull': 'rainfull', 'Humidity': 'Humidity', 'Evaporation': 'Evaporation', 'temprture': 'temprture', 'speed': 'speed', 'dirction': 'dirction', });
lyr_IRQ_1.set('fieldImages', {'ID_0': '', 'ISO': '', 'NAME_0': '', 'ID_1': '', 'NAME_1': '', 'TYPE_1': '', 'ENGTYPE_1': '', 'NL_NAME_1': '', 'VARNAME_1': '', });
lyr_4_2.set('fieldImages', {'The station': '', 'X': '', 'y': '', 'rainfull': '', 'Humidity': '', 'Evaporation': '', 'temprture': '', 'speed': '', 'dirction': '', });
lyr_IRQ_1.set('fieldLabels', {'ID_0': 'hidden field', 'ISO': 'hidden field', 'NAME_0': 'hidden field', 'ID_1': 'hidden field', 'NAME_1': 'inline label - always visible', 'TYPE_1': 'hidden field', 'ENGTYPE_1': 'hidden field', 'NL_NAME_1': 'hidden field', 'VARNAME_1': 'hidden field', });
lyr_4_2.set('fieldLabels', {'The station': 'inline label - always visible', 'X': 'inline label - always visible', 'y': 'inline label - always visible', 'rainfull': 'inline label - always visible', 'Humidity': 'inline label - always visible', 'Evaporation': 'inline label - always visible', 'temprture': 'inline label - always visible', 'speed': 'inline label - always visible', 'dirction': 'inline label - visible with data', });
lyr_4_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});