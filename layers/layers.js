var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Reproyectada_1 = new ol.format.GeoJSON();
var features_Reproyectada_1 = format_Reproyectada_1.readFeatures(json_Reproyectada_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reproyectada_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reproyectada_1.addFeatures(features_Reproyectada_1);
var lyr_Reproyectada_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reproyectada_1, 
                style: style_Reproyectada_1,
                popuplayertitle: "Reproyectada",
                interactive: true,
                title: '<img src="styles/legend/Reproyectada_1.png" /> Reproyectada'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Reproyectada_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Reproyectada_1];
lyr_Reproyectada_1.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Reproyectada_1.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Reproyectada_1.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Reproyectada_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});