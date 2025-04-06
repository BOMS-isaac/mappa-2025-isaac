var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CAM_EP20_min4_1 = new ol.format.GeoJSON();
var features_CAM_EP20_min4_1 = format_CAM_EP20_min4_1.readFeatures(json_CAM_EP20_min4_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CAM_EP20_min4_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAM_EP20_min4_1.addFeatures(features_CAM_EP20_min4_1);
cluster_CAM_EP20_min4_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_CAM_EP20_min4_1
});
var lyr_CAM_EP20_min4_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_CAM_EP20_min4_1, 
                style: style_CAM_EP20_min4_1,
                popuplayertitle: 'CAM_EP20_min4',
                interactive: true,
                title: '<img src="styles/legend/CAM_EP20_min4_1.png" /> CAM_EP20_min4'
            });
var format_CAM_EP20_max4_2 = new ol.format.GeoJSON();
var features_CAM_EP20_max4_2 = format_CAM_EP20_max4_2.readFeatures(json_CAM_EP20_max4_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CAM_EP20_max4_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAM_EP20_max4_2.addFeatures(features_CAM_EP20_max4_2);
cluster_CAM_EP20_max4_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_CAM_EP20_max4_2
});
var lyr_CAM_EP20_max4_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_CAM_EP20_max4_2, 
                style: style_CAM_EP20_max4_2,
                popuplayertitle: 'CAM_EP20_max4',
                interactive: true,
                title: '<img src="styles/legend/CAM_EP20_max4_2.png" /> CAM_EP20_max4'
            });
var format_OSP_EP40_min900_3 = new ol.format.GeoJSON();
var features_OSP_EP40_min900_3 = format_OSP_EP40_min900_3.readFeatures(json_OSP_EP40_min900_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OSP_EP40_min900_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OSP_EP40_min900_3.addFeatures(features_OSP_EP40_min900_3);
cluster_OSP_EP40_min900_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_OSP_EP40_min900_3
});
var lyr_OSP_EP40_min900_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_OSP_EP40_min900_3, 
                style: style_OSP_EP40_min900_3,
                popuplayertitle: 'OSP_EP40_min900',
                interactive: true,
                title: '<img src="styles/legend/OSP_EP40_min900_3.png" /> OSP_EP40_min900'
            });
var format_OSP_EP40_min600_max900osp_csv_4 = new ol.format.GeoJSON();
var features_OSP_EP40_min600_max900osp_csv_4 = format_OSP_EP40_min600_max900osp_csv_4.readFeatures(json_OSP_EP40_min600_max900osp_csv_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OSP_EP40_min600_max900osp_csv_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OSP_EP40_min600_max900osp_csv_4.addFeatures(features_OSP_EP40_min600_max900osp_csv_4);
cluster_OSP_EP40_min600_max900osp_csv_4 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_OSP_EP40_min600_max900osp_csv_4
});
var lyr_OSP_EP40_min600_max900osp_csv_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_OSP_EP40_min600_max900osp_csv_4, 
                style: style_OSP_EP40_min600_max900osp_csv_4,
                popuplayertitle: 'OSP_EP40_min600_max900 — osp_csv',
                interactive: true,
                title: '<img src="styles/legend/OSP_EP40_min600_max900osp_csv_4.png" /> OSP_EP40_min600_max900 — osp_csv'
            });
var format_OSP_EP40_min300_max600_5 = new ol.format.GeoJSON();
var features_OSP_EP40_min300_max600_5 = format_OSP_EP40_min300_max600_5.readFeatures(json_OSP_EP40_min300_max600_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OSP_EP40_min300_max600_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OSP_EP40_min300_max600_5.addFeatures(features_OSP_EP40_min300_max600_5);
cluster_OSP_EP40_min300_max600_5 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_OSP_EP40_min300_max600_5
});
var lyr_OSP_EP40_min300_max600_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_OSP_EP40_min300_max600_5, 
                style: style_OSP_EP40_min300_max600_5,
                popuplayertitle: 'OSP_EP40_min300_max600',
                interactive: true,
                title: '<img src="styles/legend/OSP_EP40_min300_max600_5.png" /> OSP_EP40_min300_max600'
            });
var format_OSP_EP40_max300_6 = new ol.format.GeoJSON();
var features_OSP_EP40_max300_6 = format_OSP_EP40_max300_6.readFeatures(json_OSP_EP40_max300_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OSP_EP40_max300_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OSP_EP40_max300_6.addFeatures(features_OSP_EP40_max300_6);
cluster_OSP_EP40_max300_6 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_OSP_EP40_max300_6
});
var lyr_OSP_EP40_max300_6 = new ol.layer.Vector({
                declutter: false,
                source:cluster_OSP_EP40_max300_6, 
                style: style_OSP_EP40_max300_6,
                popuplayertitle: 'OSP_EP40_max300',
                interactive: true,
                title: '<img src="styles/legend/OSP_EP40_max300_6.png" /> OSP_EP40_max300'
            });
var format_OSP_EP20_min900_7 = new ol.format.GeoJSON();
var features_OSP_EP20_min900_7 = format_OSP_EP20_min900_7.readFeatures(json_OSP_EP20_min900_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OSP_EP20_min900_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OSP_EP20_min900_7.addFeatures(features_OSP_EP20_min900_7);
cluster_OSP_EP20_min900_7 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_OSP_EP20_min900_7
});
var lyr_OSP_EP20_min900_7 = new ol.layer.Vector({
                declutter: false,
                source:cluster_OSP_EP20_min900_7, 
                style: style_OSP_EP20_min900_7,
                popuplayertitle: 'OSP_EP20_min900',
                interactive: true,
                title: '<img src="styles/legend/OSP_EP20_min900_7.png" /> OSP_EP20_min900'
            });
var format_OSP_EP20_min600_max900_8 = new ol.format.GeoJSON();
var features_OSP_EP20_min600_max900_8 = format_OSP_EP20_min600_max900_8.readFeatures(json_OSP_EP20_min600_max900_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OSP_EP20_min600_max900_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OSP_EP20_min600_max900_8.addFeatures(features_OSP_EP20_min600_max900_8);
cluster_OSP_EP20_min600_max900_8 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_OSP_EP20_min600_max900_8
});
var lyr_OSP_EP20_min600_max900_8 = new ol.layer.Vector({
                declutter: false,
                source:cluster_OSP_EP20_min600_max900_8, 
                style: style_OSP_EP20_min600_max900_8,
                popuplayertitle: 'OSP_EP20_min600_max900',
                interactive: true,
                title: '<img src="styles/legend/OSP_EP20_min600_max900_8.png" /> OSP_EP20_min600_max900'
            });
var format_OSP_EP20_min300_max600_9 = new ol.format.GeoJSON();
var features_OSP_EP20_min300_max600_9 = format_OSP_EP20_min300_max600_9.readFeatures(json_OSP_EP20_min300_max600_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OSP_EP20_min300_max600_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OSP_EP20_min300_max600_9.addFeatures(features_OSP_EP20_min300_max600_9);
cluster_OSP_EP20_min300_max600_9 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_OSP_EP20_min300_max600_9
});
var lyr_OSP_EP20_min300_max600_9 = new ol.layer.Vector({
                declutter: false,
                source:cluster_OSP_EP20_min300_max600_9, 
                style: style_OSP_EP20_min300_max600_9,
                popuplayertitle: 'OSP_EP20_min300_max600',
                interactive: true,
                title: '<img src="styles/legend/OSP_EP20_min300_max600_9.png" /> OSP_EP20_min300_max600'
            });
var format_OSP_EP20_max300_10 = new ol.format.GeoJSON();
var features_OSP_EP20_max300_10 = format_OSP_EP20_max300_10.readFeatures(json_OSP_EP20_max300_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OSP_EP20_max300_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OSP_EP20_max300_10.addFeatures(features_OSP_EP20_max300_10);
cluster_OSP_EP20_max300_10 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_OSP_EP20_max300_10
});
var lyr_OSP_EP20_max300_10 = new ol.layer.Vector({
                declutter: false,
                source:cluster_OSP_EP20_max300_10, 
                style: style_OSP_EP20_max300_10,
                popuplayertitle: 'OSP_EP20_max300',
                interactive: true,
                title: '<img src="styles/legend/OSP_EP20_max300_10.png" /> OSP_EP20_max300'
            });
var group_OSP = new ol.layer.Group({
                                layers: [lyr_OSP_EP40_min900_3,lyr_OSP_EP40_min600_max900osp_csv_4,lyr_OSP_EP40_min300_max600_5,lyr_OSP_EP40_max300_6,lyr_OSP_EP20_min900_7,lyr_OSP_EP20_min600_max900_8,lyr_OSP_EP20_min300_max600_9,lyr_OSP_EP20_max300_10,],
                                fold: "open",
                                title: 'OSP'});
var group_CAM = new ol.layer.Group({
                                layers: [lyr_CAM_EP20_min4_1,lyr_CAM_EP20_max4_2,],
                                fold: "open",
                                title: 'CAM'});

lyr_OpenStreetMap_0.setVisible(true);lyr_CAM_EP20_min4_1.setVisible(true);lyr_CAM_EP20_max4_2.setVisible(true);lyr_OSP_EP40_min900_3.setVisible(true);lyr_OSP_EP40_min600_max900osp_csv_4.setVisible(true);lyr_OSP_EP40_min300_max600_5.setVisible(true);lyr_OSP_EP40_max300_6.setVisible(true);lyr_OSP_EP20_min900_7.setVisible(true);lyr_OSP_EP20_min600_max900_8.setVisible(true);lyr_OSP_EP20_min300_max600_9.setVisible(true);lyr_OSP_EP20_max300_10.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_CAM,group_OSP];
lyr_CAM_EP20_min4_1.set('fieldAliases', {'fid': 'fid', 'Lat': 'Lat', 'Long': 'Long', 'Comune': 'Comune', 'Provincia': 'Provincia', 'Regione': 'Regione', 'Altezza': 'Altezza', 'Volume_m3': 'Volume_m3', 'Massa_ton': 'Massa_ton', 'Periodo_s': 'Periodo_s', 'ag_TR_475_[m/s2]': 'ag_TR_475_[m/s2]', 'AMD': 'AMD', 'Costo': 'Costo', 'Euro_m3': 'Euro_m3', });
lyr_CAM_EP20_max4_2.set('fieldAliases', {'fid': 'fid', 'Lat': 'Lat', 'Long': 'Long', 'Comune': 'Comune', 'Provincia': 'Provincia', 'Regione': 'Regione', 'Altezza': 'Altezza', 'Volume_m3': 'Volume_m3', 'Massa_ton': 'Massa_ton', 'Periodo_s': 'Periodo_s', 'ag_TR_475_[m/s2]': 'ag_TR_475_[m/s2]', 'AMD': 'AMD', 'Costo': 'Costo', 'Euro_m3': 'Euro_m3', });
lyr_OSP_EP40_min900_3.set('fieldAliases', {'fid': 'fid', 'Long': 'Long', 'Lat': 'Lat', 'Comune': 'Comune', 'Provincia': 'Provincia', 'Regione': 'Regione', 'Altezza': 'Altezza', 'Piani': 'Piani', 'Area_tot': 'Area_tot', 'ag_TR_475_[m/s2]': 'ag_TR_475_[m/s2]', 'Costo_mq_ISV_010': 'Costo_mq_ISV_010', 'Costo_mq_ISV_020': 'Costo_mq_ISV_020', 'Costo_mq_ISV_030': 'Costo_mq_ISV_030', 'Costo_mq_ISV_040': 'Costo_mq_ISV_040', 'Costo_mq_ISV_050': 'Costo_mq_ISV_050', 'Costo_mq_ISV_055': 'Costo_mq_ISV_055', 'Costo_mq_ISV_058': 'Costo_mq_ISV_058', 'Costo_mq_ISV_atteso_EP20': 'Costo_mq_ISV_atteso_EP20', 'Costo_mq_ISV_atteso_EP40': 'Costo_mq_ISV_atteso_EP40', 'Costo_tot_intervento_atteso_EP20': 'Costo_tot_intervento_atteso_EP20', 'Costo_tot_intervento_atteso_EP40': 'Costo_tot_intervento_atteso_EP40', });
lyr_OSP_EP40_min600_max900osp_csv_4.set('fieldAliases', {'fid': 'fid', 'Long': 'Long', 'Lat': 'Lat', 'Comune': 'Comune', 'Provincia': 'Provincia', 'Regione': 'Regione', 'Altezza': 'Altezza', 'Piani': 'Piani', 'Area_tot': 'Area_tot', 'ag_TR_475_[m/s2]': 'ag_TR_475_[m/s2]', 'Costo_mq_ISV_010': 'Costo_mq_ISV_010', 'Costo_mq_ISV_020': 'Costo_mq_ISV_020', 'Costo_mq_ISV_030': 'Costo_mq_ISV_030', 'Costo_mq_ISV_040': 'Costo_mq_ISV_040', 'Costo_mq_ISV_050': 'Costo_mq_ISV_050', 'Costo_mq_ISV_055': 'Costo_mq_ISV_055', 'Costo_mq_ISV_058': 'Costo_mq_ISV_058', 'Costo_mq_ISV_atteso_EP20': 'Costo_mq_ISV_atteso_EP20', 'Costo_mq_ISV_atteso_EP40': 'Costo_mq_ISV_atteso_EP40', 'Costo_tot_intervento_atteso_EP20': 'Costo_tot_intervento_atteso_EP20', 'Costo_tot_intervento_atteso_EP40': 'Costo_tot_intervento_atteso_EP40', });
lyr_OSP_EP40_min300_max600_5.set('fieldAliases', {'fid': 'fid', 'Long': 'Long', 'Lat': 'Lat', 'Comune': 'Comune', 'Provincia': 'Provincia', 'Regione': 'Regione', 'Altezza': 'Altezza', 'Piani': 'Piani', 'Area_tot': 'Area_tot', 'ag_TR_475_[m/s2]': 'ag_TR_475_[m/s2]', 'Costo_mq_ISV_010': 'Costo_mq_ISV_010', 'Costo_mq_ISV_020': 'Costo_mq_ISV_020', 'Costo_mq_ISV_030': 'Costo_mq_ISV_030', 'Costo_mq_ISV_040': 'Costo_mq_ISV_040', 'Costo_mq_ISV_050': 'Costo_mq_ISV_050', 'Costo_mq_ISV_055': 'Costo_mq_ISV_055', 'Costo_mq_ISV_058': 'Costo_mq_ISV_058', 'Costo_mq_ISV_atteso_EP20': 'Costo_mq_ISV_atteso_EP20', 'Costo_mq_ISV_atteso_EP40': 'Costo_mq_ISV_atteso_EP40', 'Costo_tot_intervento_atteso_EP20': 'Costo_tot_intervento_atteso_EP20', 'Costo_tot_intervento_atteso_EP40': 'Costo_tot_intervento_atteso_EP40', });
lyr_OSP_EP40_max300_6.set('fieldAliases', {'fid': 'fid', 'Long': 'Long', 'Lat': 'Lat', 'Comune': 'Comune', 'Provincia': 'Provincia', 'Regione': 'Regione', 'Altezza': 'Altezza', 'Piani': 'Piani', 'Area_tot': 'Area_tot', 'ag_TR_475_[m/s2]': 'ag_TR_475_[m/s2]', 'Costo_mq_ISV_010': 'Costo_mq_ISV_010', 'Costo_mq_ISV_020': 'Costo_mq_ISV_020', 'Costo_mq_ISV_030': 'Costo_mq_ISV_030', 'Costo_mq_ISV_040': 'Costo_mq_ISV_040', 'Costo_mq_ISV_050': 'Costo_mq_ISV_050', 'Costo_mq_ISV_055': 'Costo_mq_ISV_055', 'Costo_mq_ISV_058': 'Costo_mq_ISV_058', 'Costo_mq_ISV_atteso_EP20': 'Costo_mq_ISV_atteso_EP20', 'Costo_mq_ISV_atteso_EP40': 'Costo_mq_ISV_atteso_EP40', 'Costo_tot_intervento_atteso_EP20': 'Costo_tot_intervento_atteso_EP20', 'Costo_tot_intervento_atteso_EP40': 'Costo_tot_intervento_atteso_EP40', });
lyr_OSP_EP20_min900_7.set('fieldAliases', {'fid': 'fid', 'Long': 'Long', 'Lat': 'Lat', 'Comune': 'Comune', 'Provincia': 'Provincia', 'Regione': 'Regione', 'Altezza': 'Altezza', 'Piani': 'Piani', 'Area_tot': 'Area_tot', 'ag_TR_475_[m/s2]': 'ag_TR_475_[m/s2]', 'Costo_mq_ISV_010': 'Costo_mq_ISV_010', 'Costo_mq_ISV_020': 'Costo_mq_ISV_020', 'Costo_mq_ISV_030': 'Costo_mq_ISV_030', 'Costo_mq_ISV_040': 'Costo_mq_ISV_040', 'Costo_mq_ISV_050': 'Costo_mq_ISV_050', 'Costo_mq_ISV_055': 'Costo_mq_ISV_055', 'Costo_mq_ISV_058': 'Costo_mq_ISV_058', 'Costo_mq_ISV_atteso_EP20': 'Costo_mq_ISV_atteso_EP20', 'Costo_mq_ISV_atteso_EP40': 'Costo_mq_ISV_atteso_EP40', 'Costo_tot_intervento_atteso_EP20': 'Costo_tot_intervento_atteso_EP20', 'Costo_tot_intervento_atteso_EP40': 'Costo_tot_intervento_atteso_EP40', });
lyr_OSP_EP20_min600_max900_8.set('fieldAliases', {'fid': 'fid', 'Long': 'Long', 'Lat': 'Lat', 'Comune': 'Comune', 'Provincia': 'Provincia', 'Regione': 'Regione', 'Altezza': 'Altezza', 'Piani': 'Piani', 'Area_tot': 'Area_tot', 'ag_TR_475_[m/s2]': 'ag_TR_475_[m/s2]', 'Costo_mq_ISV_010': 'Costo_mq_ISV_010', 'Costo_mq_ISV_020': 'Costo_mq_ISV_020', 'Costo_mq_ISV_030': 'Costo_mq_ISV_030', 'Costo_mq_ISV_040': 'Costo_mq_ISV_040', 'Costo_mq_ISV_050': 'Costo_mq_ISV_050', 'Costo_mq_ISV_055': 'Costo_mq_ISV_055', 'Costo_mq_ISV_058': 'Costo_mq_ISV_058', 'Costo_mq_ISV_atteso_EP20': 'Costo_mq_ISV_atteso_EP20', 'Costo_mq_ISV_atteso_EP40': 'Costo_mq_ISV_atteso_EP40', 'Costo_tot_intervento_atteso_EP20': 'Costo_tot_intervento_atteso_EP20', 'Costo_tot_intervento_atteso_EP40': 'Costo_tot_intervento_atteso_EP40', });
lyr_OSP_EP20_min300_max600_9.set('fieldAliases', {'fid': 'fid', 'Long': 'Long', 'Lat': 'Lat', 'Comune': 'Comune', 'Provincia': 'Provincia', 'Regione': 'Regione', 'Altezza': 'Altezza', 'Piani': 'Piani', 'Area_tot': 'Area_tot', 'ag_TR_475_[m/s2]': 'ag_TR_475_[m/s2]', 'Costo_mq_ISV_010': 'Costo_mq_ISV_010', 'Costo_mq_ISV_020': 'Costo_mq_ISV_020', 'Costo_mq_ISV_030': 'Costo_mq_ISV_030', 'Costo_mq_ISV_040': 'Costo_mq_ISV_040', 'Costo_mq_ISV_050': 'Costo_mq_ISV_050', 'Costo_mq_ISV_055': 'Costo_mq_ISV_055', 'Costo_mq_ISV_058': 'Costo_mq_ISV_058', 'Costo_mq_ISV_atteso_EP20': 'Costo_mq_ISV_atteso_EP20', 'Costo_mq_ISV_atteso_EP40': 'Costo_mq_ISV_atteso_EP40', 'Costo_tot_intervento_atteso_EP20': 'Costo_tot_intervento_atteso_EP20', 'Costo_tot_intervento_atteso_EP40': 'Costo_tot_intervento_atteso_EP40', });
lyr_OSP_EP20_max300_10.set('fieldAliases', {'fid': 'fid', 'Long': 'Long', 'Lat': 'Lat', 'Comune': 'Comune', 'Provincia': 'Provincia', 'Regione': 'Regione', 'Altezza': 'Altezza', 'Piani': 'Piani', 'Area_tot': 'Area_tot', 'ag_TR_475_[m/s2]': 'ag_TR_475_[m/s2]', 'Costo_mq_ISV_010': 'Costo_mq_ISV_010', 'Costo_mq_ISV_020': 'Costo_mq_ISV_020', 'Costo_mq_ISV_030': 'Costo_mq_ISV_030', 'Costo_mq_ISV_040': 'Costo_mq_ISV_040', 'Costo_mq_ISV_050': 'Costo_mq_ISV_050', 'Costo_mq_ISV_055': 'Costo_mq_ISV_055', 'Costo_mq_ISV_058': 'Costo_mq_ISV_058', 'Costo_mq_ISV_atteso_EP20': 'Costo_mq_ISV_atteso_EP20', 'Costo_mq_ISV_atteso_EP40': 'Costo_mq_ISV_atteso_EP40', 'Costo_tot_intervento_atteso_EP20': 'Costo_tot_intervento_atteso_EP20', 'Costo_tot_intervento_atteso_EP40': 'Costo_tot_intervento_atteso_EP40', });
lyr_CAM_EP20_min4_1.set('fieldImages', {'fid': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Comune': 'TextEdit', 'Provincia': 'TextEdit', 'Regione': 'TextEdit', 'Altezza': 'TextEdit', 'Volume_m3': 'TextEdit', 'Massa_ton': 'TextEdit', 'Periodo_s': 'TextEdit', 'ag_TR_475_[m/s2]': 'TextEdit', 'AMD': 'Range', 'Costo': 'TextEdit', 'Euro_m3': 'TextEdit', });
lyr_CAM_EP20_max4_2.set('fieldImages', {'fid': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Comune': 'TextEdit', 'Provincia': 'TextEdit', 'Regione': 'TextEdit', 'Altezza': 'TextEdit', 'Volume_m3': 'TextEdit', 'Massa_ton': 'TextEdit', 'Periodo_s': 'TextEdit', 'ag_TR_475_[m/s2]': 'TextEdit', 'AMD': 'Range', 'Costo': 'TextEdit', 'Euro_m3': 'TextEdit', });
lyr_OSP_EP40_min900_3.set('fieldImages', {'fid': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Comune': 'TextEdit', 'Provincia': 'TextEdit', 'Regione': 'TextEdit', 'Altezza': 'TextEdit', 'Piani': 'Range', 'Area_tot': 'Range', 'ag_TR_475_[m/s2]': 'TextEdit', 'Costo_mq_ISV_010': 'TextEdit', 'Costo_mq_ISV_020': 'TextEdit', 'Costo_mq_ISV_030': 'TextEdit', 'Costo_mq_ISV_040': 'TextEdit', 'Costo_mq_ISV_050': 'TextEdit', 'Costo_mq_ISV_055': 'TextEdit', 'Costo_mq_ISV_058': 'TextEdit', 'Costo_mq_ISV_atteso_EP20': 'TextEdit', 'Costo_mq_ISV_atteso_EP40': 'TextEdit', 'Costo_tot_intervento_atteso_EP20': 'TextEdit', 'Costo_tot_intervento_atteso_EP40': 'TextEdit', });
lyr_OSP_EP40_min600_max900osp_csv_4.set('fieldImages', {'fid': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Comune': 'TextEdit', 'Provincia': 'TextEdit', 'Regione': 'TextEdit', 'Altezza': 'TextEdit', 'Piani': 'Range', 'Area_tot': 'Range', 'ag_TR_475_[m/s2]': 'TextEdit', 'Costo_mq_ISV_010': 'TextEdit', 'Costo_mq_ISV_020': 'TextEdit', 'Costo_mq_ISV_030': 'TextEdit', 'Costo_mq_ISV_040': 'TextEdit', 'Costo_mq_ISV_050': 'TextEdit', 'Costo_mq_ISV_055': 'TextEdit', 'Costo_mq_ISV_058': 'TextEdit', 'Costo_mq_ISV_atteso_EP20': 'TextEdit', 'Costo_mq_ISV_atteso_EP40': 'TextEdit', 'Costo_tot_intervento_atteso_EP20': 'TextEdit', 'Costo_tot_intervento_atteso_EP40': 'TextEdit', });
lyr_OSP_EP40_min300_max600_5.set('fieldImages', {'fid': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Comune': 'TextEdit', 'Provincia': 'TextEdit', 'Regione': 'TextEdit', 'Altezza': 'TextEdit', 'Piani': 'Range', 'Area_tot': 'Range', 'ag_TR_475_[m/s2]': 'TextEdit', 'Costo_mq_ISV_010': 'TextEdit', 'Costo_mq_ISV_020': 'TextEdit', 'Costo_mq_ISV_030': 'TextEdit', 'Costo_mq_ISV_040': 'TextEdit', 'Costo_mq_ISV_050': 'TextEdit', 'Costo_mq_ISV_055': 'TextEdit', 'Costo_mq_ISV_058': 'TextEdit', 'Costo_mq_ISV_atteso_EP20': 'TextEdit', 'Costo_mq_ISV_atteso_EP40': 'TextEdit', 'Costo_tot_intervento_atteso_EP20': 'TextEdit', 'Costo_tot_intervento_atteso_EP40': 'TextEdit', });
lyr_OSP_EP40_max300_6.set('fieldImages', {'fid': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Comune': 'TextEdit', 'Provincia': 'TextEdit', 'Regione': 'TextEdit', 'Altezza': 'TextEdit', 'Piani': 'Range', 'Area_tot': 'Range', 'ag_TR_475_[m/s2]': 'TextEdit', 'Costo_mq_ISV_010': 'TextEdit', 'Costo_mq_ISV_020': 'TextEdit', 'Costo_mq_ISV_030': 'TextEdit', 'Costo_mq_ISV_040': 'TextEdit', 'Costo_mq_ISV_050': 'TextEdit', 'Costo_mq_ISV_055': 'TextEdit', 'Costo_mq_ISV_058': 'TextEdit', 'Costo_mq_ISV_atteso_EP20': 'TextEdit', 'Costo_mq_ISV_atteso_EP40': 'TextEdit', 'Costo_tot_intervento_atteso_EP20': 'TextEdit', 'Costo_tot_intervento_atteso_EP40': 'TextEdit', });
lyr_OSP_EP20_min900_7.set('fieldImages', {'fid': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Comune': 'TextEdit', 'Provincia': 'TextEdit', 'Regione': 'TextEdit', 'Altezza': 'TextEdit', 'Piani': 'Range', 'Area_tot': 'Range', 'ag_TR_475_[m/s2]': 'TextEdit', 'Costo_mq_ISV_010': 'TextEdit', 'Costo_mq_ISV_020': 'TextEdit', 'Costo_mq_ISV_030': 'TextEdit', 'Costo_mq_ISV_040': 'TextEdit', 'Costo_mq_ISV_050': 'TextEdit', 'Costo_mq_ISV_055': 'TextEdit', 'Costo_mq_ISV_058': 'TextEdit', 'Costo_mq_ISV_atteso_EP20': 'TextEdit', 'Costo_mq_ISV_atteso_EP40': 'TextEdit', 'Costo_tot_intervento_atteso_EP20': 'TextEdit', 'Costo_tot_intervento_atteso_EP40': 'TextEdit', });
lyr_OSP_EP20_min600_max900_8.set('fieldImages', {'fid': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Comune': 'TextEdit', 'Provincia': 'TextEdit', 'Regione': 'TextEdit', 'Altezza': 'TextEdit', 'Piani': 'Range', 'Area_tot': 'Range', 'ag_TR_475_[m/s2]': 'TextEdit', 'Costo_mq_ISV_010': 'TextEdit', 'Costo_mq_ISV_020': 'TextEdit', 'Costo_mq_ISV_030': 'TextEdit', 'Costo_mq_ISV_040': 'TextEdit', 'Costo_mq_ISV_050': 'TextEdit', 'Costo_mq_ISV_055': 'TextEdit', 'Costo_mq_ISV_058': 'TextEdit', 'Costo_mq_ISV_atteso_EP20': 'TextEdit', 'Costo_mq_ISV_atteso_EP40': 'TextEdit', 'Costo_tot_intervento_atteso_EP20': 'TextEdit', 'Costo_tot_intervento_atteso_EP40': 'TextEdit', });
lyr_OSP_EP20_min300_max600_9.set('fieldImages', {'fid': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Comune': 'TextEdit', 'Provincia': 'TextEdit', 'Regione': 'TextEdit', 'Altezza': 'TextEdit', 'Piani': 'Range', 'Area_tot': 'Range', 'ag_TR_475_[m/s2]': 'TextEdit', 'Costo_mq_ISV_010': 'TextEdit', 'Costo_mq_ISV_020': 'TextEdit', 'Costo_mq_ISV_030': 'TextEdit', 'Costo_mq_ISV_040': 'TextEdit', 'Costo_mq_ISV_050': 'TextEdit', 'Costo_mq_ISV_055': 'TextEdit', 'Costo_mq_ISV_058': 'TextEdit', 'Costo_mq_ISV_atteso_EP20': 'TextEdit', 'Costo_mq_ISV_atteso_EP40': 'TextEdit', 'Costo_tot_intervento_atteso_EP20': 'TextEdit', 'Costo_tot_intervento_atteso_EP40': 'TextEdit', });
lyr_OSP_EP20_max300_10.set('fieldImages', {'fid': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Comune': 'TextEdit', 'Provincia': 'TextEdit', 'Regione': 'TextEdit', 'Altezza': 'TextEdit', 'Piani': 'Range', 'Area_tot': 'Range', 'ag_TR_475_[m/s2]': 'TextEdit', 'Costo_mq_ISV_010': 'TextEdit', 'Costo_mq_ISV_020': 'TextEdit', 'Costo_mq_ISV_030': 'TextEdit', 'Costo_mq_ISV_040': 'TextEdit', 'Costo_mq_ISV_050': 'TextEdit', 'Costo_mq_ISV_055': 'TextEdit', 'Costo_mq_ISV_058': 'TextEdit', 'Costo_mq_ISV_atteso_EP20': 'TextEdit', 'Costo_mq_ISV_atteso_EP40': 'TextEdit', 'Costo_tot_intervento_atteso_EP20': 'TextEdit', 'Costo_tot_intervento_atteso_EP40': 'TextEdit', });
lyr_CAM_EP20_min4_1.set('fieldLabels', {'fid': 'no label', 'Lat': 'inline label - visible with data', 'Long': 'inline label - visible with data', 'Comune': 'inline label - visible with data', 'Provincia': 'inline label - visible with data', 'Regione': 'inline label - visible with data', 'Altezza': 'inline label - visible with data', 'Volume_m3': 'inline label - visible with data', 'Massa_ton': 'inline label - visible with data', 'Periodo_s': 'inline label - visible with data', 'ag_TR_475_[m/s2]': 'inline label - visible with data', 'AMD': 'inline label - visible with data', 'Costo': 'inline label - visible with data', 'Euro_m3': 'inline label - visible with data', });
lyr_CAM_EP20_max4_2.set('fieldLabels', {'fid': 'no label', 'Lat': 'inline label - visible with data', 'Long': 'inline label - visible with data', 'Comune': 'inline label - visible with data', 'Provincia': 'inline label - visible with data', 'Regione': 'inline label - visible with data', 'Altezza': 'inline label - visible with data', 'Volume_m3': 'inline label - visible with data', 'Massa_ton': 'inline label - visible with data', 'Periodo_s': 'inline label - visible with data', 'ag_TR_475_[m/s2]': 'inline label - visible with data', 'AMD': 'inline label - visible with data', 'Costo': 'inline label - visible with data', 'Euro_m3': 'inline label - visible with data', });
lyr_OSP_EP40_min900_3.set('fieldLabels', {'fid': 'no label', 'Long': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Comune': 'inline label - visible with data', 'Provincia': 'inline label - visible with data', 'Regione': 'inline label - visible with data', 'Altezza': 'inline label - visible with data', 'Piani': 'inline label - visible with data', 'Area_tot': 'inline label - visible with data', 'ag_TR_475_[m/s2]': 'inline label - visible with data', 'Costo_mq_ISV_010': 'inline label - visible with data', 'Costo_mq_ISV_020': 'inline label - visible with data', 'Costo_mq_ISV_030': 'inline label - visible with data', 'Costo_mq_ISV_040': 'inline label - visible with data', 'Costo_mq_ISV_050': 'inline label - visible with data', 'Costo_mq_ISV_055': 'inline label - visible with data', 'Costo_mq_ISV_058': 'inline label - visible with data', 'Costo_mq_ISV_atteso_EP20': 'inline label - visible with data', 'Costo_mq_ISV_atteso_EP40': 'inline label - visible with data', 'Costo_tot_intervento_atteso_EP20': 'inline label - visible with data', 'Costo_tot_intervento_atteso_EP40': 'inline label - visible with data', });
lyr_OSP_EP40_min600_max900osp_csv_4.set('fieldLabels', {'fid': 'no label', 'Long': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Comune': 'inline label - visible with data', 'Provincia': 'inline label - visible with data', 'Regione': 'inline label - visible with data', 'Altezza': 'inline label - visible with data', 'Piani': 'inline label - visible with data', 'Area_tot': 'inline label - visible with data', 'ag_TR_475_[m/s2]': 'inline label - visible with data', 'Costo_mq_ISV_010': 'inline label - visible with data', 'Costo_mq_ISV_020': 'inline label - visible with data', 'Costo_mq_ISV_030': 'inline label - visible with data', 'Costo_mq_ISV_040': 'inline label - visible with data', 'Costo_mq_ISV_050': 'inline label - visible with data', 'Costo_mq_ISV_055': 'inline label - visible with data', 'Costo_mq_ISV_058': 'inline label - visible with data', 'Costo_mq_ISV_atteso_EP20': 'inline label - visible with data', 'Costo_mq_ISV_atteso_EP40': 'inline label - visible with data', 'Costo_tot_intervento_atteso_EP20': 'inline label - visible with data', 'Costo_tot_intervento_atteso_EP40': 'inline label - visible with data', });
lyr_OSP_EP40_min300_max600_5.set('fieldLabels', {'fid': 'no label', 'Long': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Comune': 'inline label - visible with data', 'Provincia': 'inline label - visible with data', 'Regione': 'inline label - visible with data', 'Altezza': 'inline label - visible with data', 'Piani': 'inline label - visible with data', 'Area_tot': 'inline label - visible with data', 'ag_TR_475_[m/s2]': 'inline label - visible with data', 'Costo_mq_ISV_010': 'inline label - visible with data', 'Costo_mq_ISV_020': 'inline label - visible with data', 'Costo_mq_ISV_030': 'inline label - visible with data', 'Costo_mq_ISV_040': 'inline label - visible with data', 'Costo_mq_ISV_050': 'inline label - visible with data', 'Costo_mq_ISV_055': 'inline label - visible with data', 'Costo_mq_ISV_058': 'inline label - visible with data', 'Costo_mq_ISV_atteso_EP20': 'inline label - visible with data', 'Costo_mq_ISV_atteso_EP40': 'inline label - visible with data', 'Costo_tot_intervento_atteso_EP20': 'inline label - visible with data', 'Costo_tot_intervento_atteso_EP40': 'inline label - visible with data', });
lyr_OSP_EP40_max300_6.set('fieldLabels', {'fid': 'no label', 'Long': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Comune': 'inline label - visible with data', 'Provincia': 'inline label - visible with data', 'Regione': 'inline label - visible with data', 'Altezza': 'inline label - visible with data', 'Piani': 'inline label - visible with data', 'Area_tot': 'inline label - visible with data', 'ag_TR_475_[m/s2]': 'inline label - visible with data', 'Costo_mq_ISV_010': 'inline label - visible with data', 'Costo_mq_ISV_020': 'inline label - visible with data', 'Costo_mq_ISV_030': 'inline label - visible with data', 'Costo_mq_ISV_040': 'inline label - visible with data', 'Costo_mq_ISV_050': 'inline label - visible with data', 'Costo_mq_ISV_055': 'inline label - visible with data', 'Costo_mq_ISV_058': 'inline label - visible with data', 'Costo_mq_ISV_atteso_EP20': 'inline label - visible with data', 'Costo_mq_ISV_atteso_EP40': 'inline label - visible with data', 'Costo_tot_intervento_atteso_EP20': 'inline label - visible with data', 'Costo_tot_intervento_atteso_EP40': 'inline label - visible with data', });
lyr_OSP_EP20_min900_7.set('fieldLabels', {'fid': 'no label', 'Long': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Comune': 'inline label - visible with data', 'Provincia': 'inline label - visible with data', 'Regione': 'inline label - visible with data', 'Altezza': 'inline label - visible with data', 'Piani': 'inline label - visible with data', 'Area_tot': 'inline label - visible with data', 'ag_TR_475_[m/s2]': 'inline label - visible with data', 'Costo_mq_ISV_010': 'inline label - visible with data', 'Costo_mq_ISV_020': 'inline label - visible with data', 'Costo_mq_ISV_030': 'inline label - visible with data', 'Costo_mq_ISV_040': 'inline label - visible with data', 'Costo_mq_ISV_050': 'inline label - visible with data', 'Costo_mq_ISV_055': 'inline label - visible with data', 'Costo_mq_ISV_058': 'inline label - visible with data', 'Costo_mq_ISV_atteso_EP20': 'inline label - visible with data', 'Costo_mq_ISV_atteso_EP40': 'inline label - visible with data', 'Costo_tot_intervento_atteso_EP20': 'inline label - visible with data', 'Costo_tot_intervento_atteso_EP40': 'inline label - visible with data', });
lyr_OSP_EP20_min600_max900_8.set('fieldLabels', {'fid': 'no label', 'Long': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Comune': 'inline label - visible with data', 'Provincia': 'inline label - visible with data', 'Regione': 'inline label - visible with data', 'Altezza': 'inline label - visible with data', 'Piani': 'inline label - visible with data', 'Area_tot': 'inline label - visible with data', 'ag_TR_475_[m/s2]': 'inline label - visible with data', 'Costo_mq_ISV_010': 'inline label - visible with data', 'Costo_mq_ISV_020': 'inline label - visible with data', 'Costo_mq_ISV_030': 'inline label - visible with data', 'Costo_mq_ISV_040': 'inline label - visible with data', 'Costo_mq_ISV_050': 'inline label - visible with data', 'Costo_mq_ISV_055': 'inline label - visible with data', 'Costo_mq_ISV_058': 'inline label - visible with data', 'Costo_mq_ISV_atteso_EP20': 'inline label - visible with data', 'Costo_mq_ISV_atteso_EP40': 'inline label - visible with data', 'Costo_tot_intervento_atteso_EP20': 'inline label - visible with data', 'Costo_tot_intervento_atteso_EP40': 'inline label - visible with data', });
lyr_OSP_EP20_min300_max600_9.set('fieldLabels', {'fid': 'no label', 'Long': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Comune': 'inline label - visible with data', 'Provincia': 'inline label - visible with data', 'Regione': 'inline label - visible with data', 'Altezza': 'inline label - visible with data', 'Piani': 'inline label - visible with data', 'Area_tot': 'inline label - visible with data', 'ag_TR_475_[m/s2]': 'inline label - visible with data', 'Costo_mq_ISV_010': 'inline label - visible with data', 'Costo_mq_ISV_020': 'inline label - visible with data', 'Costo_mq_ISV_030': 'inline label - visible with data', 'Costo_mq_ISV_040': 'inline label - visible with data', 'Costo_mq_ISV_050': 'inline label - visible with data', 'Costo_mq_ISV_055': 'inline label - visible with data', 'Costo_mq_ISV_058': 'inline label - visible with data', 'Costo_mq_ISV_atteso_EP20': 'inline label - visible with data', 'Costo_mq_ISV_atteso_EP40': 'inline label - visible with data', 'Costo_tot_intervento_atteso_EP20': 'inline label - visible with data', 'Costo_tot_intervento_atteso_EP40': 'inline label - visible with data', });
lyr_OSP_EP20_max300_10.set('fieldLabels', {'fid': 'no label', 'Long': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Comune': 'inline label - visible with data', 'Provincia': 'inline label - visible with data', 'Regione': 'inline label - visible with data', 'Altezza': 'inline label - visible with data', 'Piani': 'inline label - visible with data', 'Area_tot': 'inline label - visible with data', 'ag_TR_475_[m/s2]': 'inline label - visible with data', 'Costo_mq_ISV_010': 'inline label - visible with data', 'Costo_mq_ISV_020': 'inline label - visible with data', 'Costo_mq_ISV_030': 'inline label - visible with data', 'Costo_mq_ISV_040': 'inline label - visible with data', 'Costo_mq_ISV_050': 'inline label - visible with data', 'Costo_mq_ISV_055': 'inline label - visible with data', 'Costo_mq_ISV_058': 'inline label - visible with data', 'Costo_mq_ISV_atteso_EP20': 'inline label - visible with data', 'Costo_mq_ISV_atteso_EP40': 'inline label - visible with data', 'Costo_tot_intervento_atteso_EP20': 'inline label - visible with data', 'Costo_tot_intervento_atteso_EP40': 'inline label - visible with data', });
lyr_OSP_EP20_max300_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});