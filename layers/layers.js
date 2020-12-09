var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Titikacuan_1 = new ol.format.GeoJSON();
var features_Titikacuan_1 = format_Titikacuan_1.readFeatures(json_Titikacuan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Titikacuan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Titikacuan_1.addFeatures(features_Titikacuan_1);
var lyr_Titikacuan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Titikacuan_1, 
                style: style_Titikacuan_1,
                interactive: true,
                title: '<img src="styles/legend/Titikacuan_1.png" /> Titik acuan'
            });
var format_EducationFacility_2 = new ol.format.GeoJSON();
var features_EducationFacility_2 = format_EducationFacility_2.readFeatures(json_EducationFacility_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EducationFacility_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EducationFacility_2.addFeatures(features_EducationFacility_2);
var lyr_EducationFacility_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EducationFacility_2, 
                style: style_EducationFacility_2,
                interactive: true,
                title: '<img src="styles/legend/EducationFacility_2.png" /> Education Facility'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Titikacuan_1.setVisible(true);lyr_EducationFacility_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Titikacuan_1,lyr_EducationFacility_2];
lyr_Titikacuan_1.set('fieldAliases', {'id': 'id', });
lyr_EducationFacility_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'origin_id': 'origin_id', 'title': 'title', 'label': 'label', 'distance': 'distance', 'categories': 'categories', });
lyr_Titikacuan_1.set('fieldImages', {'id': '', });
lyr_EducationFacility_2.set('fieldImages', {'fid': '', 'id': '', 'origin_id': '', 'title': '', 'label': '', 'distance': '', 'categories': '', });
lyr_Titikacuan_1.set('fieldLabels', {'id': 'no label', });
lyr_EducationFacility_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'origin_id': 'no label', 'title': 'no label', 'label': 'no label', 'distance': 'no label', 'categories': 'no label', });
lyr_EducationFacility_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});