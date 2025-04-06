var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_IND_EP40_min500_1 = new ol.format.GeoJSON();
var features_IND_EP40_min500_1 = format_IND_EP40_min500_1.readFeatures(json_IND_EP40_min500_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IND_EP40_min500_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IND_EP40_min500_1.addFeatures(features_IND_EP40_min500_1);
cluster_IND_EP40_min500_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_IND_EP40_min500_1
});
var lyr_IND_EP40_min500_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_IND_EP40_min500_1, 
                style: style_IND_EP40_min500_1,
                popuplayertitle: 'IND_EP40_min500',
                interactive: true,
                title: '<img src="styles/legend/IND_EP40_min500_1.png" /> IND_EP40_min500'
            });
var format_IND_EP40_min300_max500_2 = new ol.format.GeoJSON();
var features_IND_EP40_min300_max500_2 = format_IND_EP40_min300_max500_2.readFeatures(json_IND_EP40_min300_max500_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IND_EP40_min300_max500_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IND_EP40_min300_max500_2.addFeatures(features_IND_EP40_min300_max500_2);
cluster_IND_EP40_min300_max500_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_IND_EP40_min300_max500_2
});
var lyr_IND_EP40_min300_max500_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_IND_EP40_min300_max500_2, 
                style: style_IND_EP40_min300_max500_2,
                popuplayertitle: 'IND_EP40_min300_max500',
                interactive: true,
                title: '<img src="styles/legend/IND_EP40_min300_max500_2.png" /> IND_EP40_min300_max500'
            });
var format_IND_EP40_min150_max300_3 = new ol.format.GeoJSON();
var features_IND_EP40_min150_max300_3 = format_IND_EP40_min150_max300_3.readFeatures(json_IND_EP40_min150_max300_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IND_EP40_min150_max300_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IND_EP40_min150_max300_3.addFeatures(features_IND_EP40_min150_max300_3);
cluster_IND_EP40_min150_max300_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_IND_EP40_min150_max300_3
});
var lyr_IND_EP40_min150_max300_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_IND_EP40_min150_max300_3, 
                style: style_IND_EP40_min150_max300_3,
                popuplayertitle: 'IND_EP40_min150_max300',
                interactive: true,
                title: '<img src="styles/legend/IND_EP40_min150_max300_3.png" /> IND_EP40_min150_max300'
            });
var format_IND_EP40_max150_4 = new ol.format.GeoJSON();
var features_IND_EP40_max150_4 = format_IND_EP40_max150_4.readFeatures(json_IND_EP40_max150_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IND_EP40_max150_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IND_EP40_max150_4.addFeatures(features_IND_EP40_max150_4);
cluster_IND_EP40_max150_4 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_IND_EP40_max150_4
});
var lyr_IND_EP40_max150_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_IND_EP40_max150_4, 
                style: style_IND_EP40_max150_4,
                popuplayertitle: 'IND_EP40_max150',
                interactive: true,
                title: '<img src="styles/legend/IND_EP40_max150_4.png" /> IND_EP40_max150'
            });
var format_IND_EP20_min500_5 = new ol.format.GeoJSON();
var features_IND_EP20_min500_5 = format_IND_EP20_min500_5.readFeatures(json_IND_EP20_min500_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IND_EP20_min500_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IND_EP20_min500_5.addFeatures(features_IND_EP20_min500_5);
cluster_IND_EP20_min500_5 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_IND_EP20_min500_5
});
var lyr_IND_EP20_min500_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_IND_EP20_min500_5, 
                style: style_IND_EP20_min500_5,
                popuplayertitle: 'IND_EP20_min500',
                interactive: true,
                title: '<img src="styles/legend/IND_EP20_min500_5.png" /> IND_EP20_min500'
            });
var format_IND_EP20_min300_max500_6 = new ol.format.GeoJSON();
var features_IND_EP20_min300_max500_6 = format_IND_EP20_min300_max500_6.readFeatures(json_IND_EP20_min300_max500_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IND_EP20_min300_max500_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IND_EP20_min300_max500_6.addFeatures(features_IND_EP20_min300_max500_6);
cluster_IND_EP20_min300_max500_6 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_IND_EP20_min300_max500_6
});
var lyr_IND_EP20_min300_max500_6 = new ol.layer.Vector({
                declutter: false,
                source:cluster_IND_EP20_min300_max500_6, 
                style: style_IND_EP20_min300_max500_6,
                popuplayertitle: 'IND_EP20_min300_max500',
                interactive: true,
                title: '<img src="styles/legend/IND_EP20_min300_max500_6.png" /> IND_EP20_min300_max500'
            });
var format_IND_EP20_min150_max300_7 = new ol.format.GeoJSON();
var features_IND_EP20_min150_max300_7 = format_IND_EP20_min150_max300_7.readFeatures(json_IND_EP20_min150_max300_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IND_EP20_min150_max300_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IND_EP20_min150_max300_7.addFeatures(features_IND_EP20_min150_max300_7);
cluster_IND_EP20_min150_max300_7 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_IND_EP20_min150_max300_7
});
var lyr_IND_EP20_min150_max300_7 = new ol.layer.Vector({
                declutter: false,
                source:cluster_IND_EP20_min150_max300_7, 
                style: style_IND_EP20_min150_max300_7,
                popuplayertitle: 'IND_EP20_min150_max300',
                interactive: true,
                title: '<img src="styles/legend/IND_EP20_min150_max300_7.png" /> IND_EP20_min150_max300'
            });
var format_IND_EP20_max150_8 = new ol.format.GeoJSON();
var features_IND_EP20_max150_8 = format_IND_EP20_max150_8.readFeatures(json_IND_EP20_max150_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IND_EP20_max150_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IND_EP20_max150_8.addFeatures(features_IND_EP20_max150_8);
cluster_IND_EP20_max150_8 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_IND_EP20_max150_8
});
var lyr_IND_EP20_max150_8 = new ol.layer.Vector({
                declutter: false,
                source:cluster_IND_EP20_max150_8, 
                style: style_IND_EP20_max150_8,
                popuplayertitle: 'IND_EP20_max150',
                interactive: true,
                title: '<img src="styles/legend/IND_EP20_max150_8.png" /> IND_EP20_max150'
            });
var format_CAM_EP20_min4_9 = new ol.format.GeoJSON();
var features_CAM_EP20_min4_9 = format_CAM_EP20_min4_9.readFeatures(json_CAM_EP20_min4_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CAM_EP20_min4_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAM_EP20_min4_9.addFeatures(features_CAM_EP20_min4_9);
cluster_CAM_EP20_min4_9 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_CAM_EP20_min4_9
});
var lyr_CAM_EP20_min4_9 = new ol.layer.Vector({
                declutter: false,
                source:cluster_CAM_EP20_min4_9, 
                style: style_CAM_EP20_min4_9,
                popuplayertitle: 'CAM_EP20_min4',
                interactive: true,
                title: '<img src="styles/legend/CAM_EP20_min4_9.png" /> CAM_EP20_min4'
            });
var format_CAM_EP20_max4_10 = new ol.format.GeoJSON();
var features_CAM_EP20_max4_10 = format_CAM_EP20_max4_10.readFeatures(json_CAM_EP20_max4_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CAM_EP20_max4_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAM_EP20_max4_10.addFeatures(features_CAM_EP20_max4_10);
cluster_CAM_EP20_max4_10 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_CAM_EP20_max4_10
});
var lyr_CAM_EP20_max4_10 = new ol.layer.Vector({
                declutter: false,
                source:cluster_CAM_EP20_max4_10, 
                style: style_CAM_EP20_max4_10,
                popuplayertitle: 'CAM_EP20_max4',
                interactive: true,
                title: '<img src="styles/legend/CAM_EP20_max4_10.png" /> CAM_EP20_max4'
            });
var format_OSP_EP40_min900_11 = new ol.format.GeoJSON();
var features_OSP_EP40_min900_11 = format_OSP_EP40_min900_11.readFeatures(json_OSP_EP40_min900_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OSP_EP40_min900_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OSP_EP40_min900_11.addFeatures(features_OSP_EP40_min900_11);
cluster_OSP_EP40_min900_11 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_OSP_EP40_min900_11
});
var lyr_OSP_EP40_min900_11 = new ol.layer.Vector({
                declutter: false,
                source:cluster_OSP_EP40_min900_11, 
                style: style_OSP_EP40_min900_11,
                popuplayertitle: 'OSP_EP40_min900',
                interactive: true,
                title: '<img src="styles/legend/OSP_EP40_min900_11.png" /> OSP_EP40_min900'
            });
var format_OSP_EP40_min600_max900osp_csv_12 = new ol.format.GeoJSON();
var features_OSP_EP40_min600_max900osp_csv_12 = format_OSP_EP40_min600_max900osp_csv_12.readFeatures(json_OSP_EP40_min600_max900osp_csv_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OSP_EP40_min600_max900osp_csv_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OSP_EP40_min600_max900osp_csv_12.addFeatures(features_OSP_EP40_min600_max900osp_csv_12);
cluster_OSP_EP40_min600_max900osp_csv_12 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_OSP_EP40_min600_max900osp_csv_12
});
var lyr_OSP_EP40_min600_max900osp_csv_12 = new ol.layer.Vector({
                declutter: false,
                source:cluster_OSP_EP40_min600_max900osp_csv_12, 
                style: style_OSP_EP40_min600_max900osp_csv_12,
                popuplayertitle: 'OSP_EP40_min600_max900 — osp_csv',
                interactive: true,
                title: '<img src="styles/legend/OSP_EP40_min600_max900osp_csv_12.png" /> OSP_EP40_min600_max900 — osp_csv'
            });
var format_OSP_EP40_min300_max600_13 = new ol.format.GeoJSON();
var features_OSP_EP40_min300_max600_13 = format_OSP_EP40_min300_max600_13.readFeatures(json_OSP_EP40_min300_max600_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OSP_EP40_min300_max600_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OSP_EP40_min300_max600_13.addFeatures(features_OSP_EP40_min300_max600_13);
cluster_OSP_EP40_min300_max600_13 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_OSP_EP40_min300_max600_13
});
var lyr_OSP_EP40_min300_max600_13 = new ol.layer.Vector({
                declutter: false,
                source:cluster_OSP_EP40_min300_max600_13, 
                style: style_OSP_EP40_min300_max600_13,
                popuplayertitle: 'OSP_EP40_min300_max600',
                interactive: true,
                title: '<img src="styles/legend/OSP_EP40_min300_max600_13.png" /> OSP_EP40_min300_max600'
            });
var format_OSP_EP40_max300_14 = new ol.format.GeoJSON();
var features_OSP_EP40_max300_14 = format_OSP_EP40_max300_14.readFeatures(json_OSP_EP40_max300_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OSP_EP40_max300_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OSP_EP40_max300_14.addFeatures(features_OSP_EP40_max300_14);
cluster_OSP_EP40_max300_14 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_OSP_EP40_max300_14
});
var lyr_OSP_EP40_max300_14 = new ol.layer.Vector({
                declutter: false,
                source:cluster_OSP_EP40_max300_14, 
                style: style_OSP_EP40_max300_14,
                popuplayertitle: 'OSP_EP40_max300',
                interactive: true,
                title: '<img src="styles/legend/OSP_EP40_max300_14.png" /> OSP_EP40_max300'
            });
var format_OSP_EP20_min900_15 = new ol.format.GeoJSON();
var features_OSP_EP20_min900_15 = format_OSP_EP20_min900_15.readFeatures(json_OSP_EP20_min900_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OSP_EP20_min900_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OSP_EP20_min900_15.addFeatures(features_OSP_EP20_min900_15);
cluster_OSP_EP20_min900_15 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_OSP_EP20_min900_15
});
var lyr_OSP_EP20_min900_15 = new ol.layer.Vector({
                declutter: false,
                source:cluster_OSP_EP20_min900_15, 
                style: style_OSP_EP20_min900_15,
                popuplayertitle: 'OSP_EP20_min900',
                interactive: true,
                title: '<img src="styles/legend/OSP_EP20_min900_15.png" /> OSP_EP20_min900'
            });
var format_OSP_EP20_min600_max900_16 = new ol.format.GeoJSON();
var features_OSP_EP20_min600_max900_16 = format_OSP_EP20_min600_max900_16.readFeatures(json_OSP_EP20_min600_max900_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OSP_EP20_min600_max900_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OSP_EP20_min600_max900_16.addFeatures(features_OSP_EP20_min600_max900_16);
cluster_OSP_EP20_min600_max900_16 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_OSP_EP20_min600_max900_16
});
var lyr_OSP_EP20_min600_max900_16 = new ol.layer.Vector({
                declutter: false,
                source:cluster_OSP_EP20_min600_max900_16, 
                style: style_OSP_EP20_min600_max900_16,
                popuplayertitle: 'OSP_EP20_min600_max900',
                interactive: true,
                title: '<img src="styles/legend/OSP_EP20_min600_max900_16.png" /> OSP_EP20_min600_max900'
            });
var format_OSP_EP20_min300_max600_17 = new ol.format.GeoJSON();
var features_OSP_EP20_min300_max600_17 = format_OSP_EP20_min300_max600_17.readFeatures(json_OSP_EP20_min300_max600_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OSP_EP20_min300_max600_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OSP_EP20_min300_max600_17.addFeatures(features_OSP_EP20_min300_max600_17);
cluster_OSP_EP20_min300_max600_17 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_OSP_EP20_min300_max600_17
});
var lyr_OSP_EP20_min300_max600_17 = new ol.layer.Vector({
                declutter: false,
                source:cluster_OSP_EP20_min300_max600_17, 
                style: style_OSP_EP20_min300_max600_17,
                popuplayertitle: 'OSP_EP20_min300_max600',
                interactive: true,
                title: '<img src="styles/legend/OSP_EP20_min300_max600_17.png" /> OSP_EP20_min300_max600'
            });
var format_OSP_EP20_max300_18 = new ol.format.GeoJSON();
var features_OSP_EP20_max300_18 = format_OSP_EP20_max300_18.readFeatures(json_OSP_EP20_max300_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OSP_EP20_max300_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OSP_EP20_max300_18.addFeatures(features_OSP_EP20_max300_18);
cluster_OSP_EP20_max300_18 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_OSP_EP20_max300_18
});
var lyr_OSP_EP20_max300_18 = new ol.layer.Vector({
                declutter: false,
                source:cluster_OSP_EP20_max300_18, 
                style: style_OSP_EP20_max300_18,
                popuplayertitle: 'OSP_EP20_max300',
                interactive: true,
                title: '<img src="styles/legend/OSP_EP20_max300_18.png" /> OSP_EP20_max300'
            });
var group_OSP = new ol.layer.Group({
                                layers: [lyr_OSP_EP40_min900_11,lyr_OSP_EP40_min600_max900osp_csv_12,lyr_OSP_EP40_min300_max600_13,lyr_OSP_EP40_max300_14,lyr_OSP_EP20_min900_15,lyr_OSP_EP20_min600_max900_16,lyr_OSP_EP20_min300_max600_17,lyr_OSP_EP20_max300_18,],
                                fold: "open",
                                title: 'OSP'});
var group_CAM = new ol.layer.Group({
                                layers: [lyr_CAM_EP20_min4_9,lyr_CAM_EP20_max4_10,],
                                fold: "open",
                                title: 'CAM'});
var group_IND = new ol.layer.Group({
                                layers: [lyr_IND_EP40_min500_1,lyr_IND_EP40_min300_max500_2,lyr_IND_EP40_min150_max300_3,lyr_IND_EP40_max150_4,lyr_IND_EP20_min500_5,lyr_IND_EP20_min300_max500_6,lyr_IND_EP20_min150_max300_7,lyr_IND_EP20_max150_8,],
                                fold: "open",
                                title: 'IND'});

lyr_OpenStreetMap_0.setVisible(true);lyr_IND_EP40_min500_1.setVisible(true);lyr_IND_EP40_min300_max500_2.setVisible(true);lyr_IND_EP40_min150_max300_3.setVisible(true);lyr_IND_EP40_max150_4.setVisible(true);lyr_IND_EP20_min500_5.setVisible(true);lyr_IND_EP20_min300_max500_6.setVisible(true);lyr_IND_EP20_min150_max300_7.setVisible(true);lyr_IND_EP20_max150_8.setVisible(true);lyr_CAM_EP20_min4_9.setVisible(true);lyr_CAM_EP20_max4_10.setVisible(true);lyr_OSP_EP40_min900_11.setVisible(true);lyr_OSP_EP40_min600_max900osp_csv_12.setVisible(true);lyr_OSP_EP40_min300_max600_13.setVisible(true);lyr_OSP_EP40_max300_14.setVisible(true);lyr_OSP_EP20_min900_15.setVisible(true);lyr_OSP_EP20_min600_max900_16.setVisible(true);lyr_OSP_EP20_min300_max600_17.setVisible(true);lyr_OSP_EP20_max300_18.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_IND,group_CAM,group_OSP];
lyr_IND_EP40_min500_1.set('fieldAliases', {'fid': 'fid', 'Long': 'Long', 'Lat': 'Lat', 'Tipologia': 'Tipologia', 'Comune': 'Comune', 'Provincia': 'Provincia', 'Regione': 'Regione', 'Altezza': 'Altezza', 'Piani': 'Piani', 'Area_Totale': 'Area_Totale', 'ag_TR_475_[m/s2]': 'ag_TR_475_[m/s2]', 'Costo_mq_ISV_010': 'Costo_mq_ISV_010', 'Costo_mq_ISV_020': 'Costo_mq_ISV_020', 'Costo_mq_ISV_030': 'Costo_mq_ISV_030', 'Costo_mq_ISV_040': 'Costo_mq_ISV_040', 'Costo_mq_ISV_050': 'Costo_mq_ISV_050', 'Costo_mq_ISV_055': 'Costo_mq_ISV_055', 'Costo_mq_ISV_058': 'Costo_mq_ISV_058', 'Costo_mq_ISV_atteso_EP20': 'Costo_mq_ISV_atteso_EP20', 'Costo_mq_ISV_atteso_EP40': 'Costo_mq_ISV_atteso_EP40', 'Costo_totale_intervento_EP20': 'Costo_totale_intervento_EP20', 'Costo_totale_intervento_EP40': 'Costo_totale_intervento_EP40', });
lyr_IND_EP40_min300_max500_2.set('fieldAliases', {'fid': 'fid', 'Long': 'Long', 'Lat': 'Lat', 'Tipologia': 'Tipologia', 'Comune': 'Comune', 'Provincia': 'Provincia', 'Regione': 'Regione', 'Altezza': 'Altezza', 'Piani': 'Piani', 'Area_Totale': 'Area_Totale', 'ag_TR_475_[m/s2]': 'ag_TR_475_[m/s2]', 'Costo_mq_ISV_010': 'Costo_mq_ISV_010', 'Costo_mq_ISV_020': 'Costo_mq_ISV_020', 'Costo_mq_ISV_030': 'Costo_mq_ISV_030', 'Costo_mq_ISV_040': 'Costo_mq_ISV_040', 'Costo_mq_ISV_050': 'Costo_mq_ISV_050', 'Costo_mq_ISV_055': 'Costo_mq_ISV_055', 'Costo_mq_ISV_058': 'Costo_mq_ISV_058', 'Costo_mq_ISV_atteso_EP20': 'Costo_mq_ISV_atteso_EP20', 'Costo_mq_ISV_atteso_EP40': 'Costo_mq_ISV_atteso_EP40', 'Costo_totale_intervento_EP20': 'Costo_totale_intervento_EP20', 'Costo_totale_intervento_EP40': 'Costo_totale_intervento_EP40', });
lyr_IND_EP40_min150_max300_3.set('fieldAliases', {'fid': 'fid', 'Long': 'Long', 'Lat': 'Lat', 'Tipologia': 'Tipologia', 'Comune': 'Comune', 'Provincia': 'Provincia', 'Regione': 'Regione', 'Altezza': 'Altezza', 'Piani': 'Piani', 'Area_Totale': 'Area_Totale', 'ag_TR_475_[m/s2]': 'ag_TR_475_[m/s2]', 'Costo_mq_ISV_010': 'Costo_mq_ISV_010', 'Costo_mq_ISV_020': 'Costo_mq_ISV_020', 'Costo_mq_ISV_030': 'Costo_mq_ISV_030', 'Costo_mq_ISV_040': 'Costo_mq_ISV_040', 'Costo_mq_ISV_050': 'Costo_mq_ISV_050', 'Costo_mq_ISV_055': 'Costo_mq_ISV_055', 'Costo_mq_ISV_058': 'Costo_mq_ISV_058', 'Costo_mq_ISV_atteso_EP20': 'Costo_mq_ISV_atteso_EP20', 'Costo_mq_ISV_atteso_EP40': 'Costo_mq_ISV_atteso_EP40', 'Costo_totale_intervento_EP20': 'Costo_totale_intervento_EP20', 'Costo_totale_intervento_EP40': 'Costo_totale_intervento_EP40', });
lyr_IND_EP40_max150_4.set('fieldAliases', {'fid': 'fid', 'Long': 'Long', 'Lat': 'Lat', 'Tipologia': 'Tipologia', 'Comune': 'Comune', 'Provincia': 'Provincia', 'Regione': 'Regione', 'Altezza': 'Altezza', 'Piani': 'Piani', 'Area_Totale': 'Area_Totale', 'ag_TR_475_[m/s2]': 'ag_TR_475_[m/s2]', 'Costo_mq_ISV_010': 'Costo_mq_ISV_010', 'Costo_mq_ISV_020': 'Costo_mq_ISV_020', 'Costo_mq_ISV_030': 'Costo_mq_ISV_030', 'Costo_mq_ISV_040': 'Costo_mq_ISV_040', 'Costo_mq_ISV_050': 'Costo_mq_ISV_050', 'Costo_mq_ISV_055': 'Costo_mq_ISV_055', 'Costo_mq_ISV_058': 'Costo_mq_ISV_058', 'Costo_mq_ISV_atteso_EP20': 'Costo_mq_ISV_atteso_EP20', 'Costo_mq_ISV_atteso_EP40': 'Costo_mq_ISV_atteso_EP40', 'Costo_totale_intervento_EP20': 'Costo_totale_intervento_EP20', 'Costo_totale_intervento_EP40': 'Costo_totale_intervento_EP40', });
lyr_IND_EP20_min500_5.set('fieldAliases', {'fid': 'fid', 'Long': 'Long', 'Lat': 'Lat', 'Tipologia': 'Tipologia', 'Comune': 'Comune', 'Provincia': 'Provincia', 'Regione': 'Regione', 'Altezza': 'Altezza', 'Piani': 'Piani', 'Area_Totale': 'Area_Totale', 'ag_TR_475_[m/s2]': 'ag_TR_475_[m/s2]', 'Costo_mq_ISV_010': 'Costo_mq_ISV_010', 'Costo_mq_ISV_020': 'Costo_mq_ISV_020', 'Costo_mq_ISV_030': 'Costo_mq_ISV_030', 'Costo_mq_ISV_040': 'Costo_mq_ISV_040', 'Costo_mq_ISV_050': 'Costo_mq_ISV_050', 'Costo_mq_ISV_055': 'Costo_mq_ISV_055', 'Costo_mq_ISV_058': 'Costo_mq_ISV_058', 'Costo_mq_ISV_atteso_EP20': 'Costo_mq_ISV_atteso_EP20', 'Costo_mq_ISV_atteso_EP40': 'Costo_mq_ISV_atteso_EP40', 'Costo_totale_intervento_EP20': 'Costo_totale_intervento_EP20', 'Costo_totale_intervento_EP40': 'Costo_totale_intervento_EP40', });
lyr_IND_EP20_min300_max500_6.set('fieldAliases', {'fid': 'fid', 'Long': 'Long', 'Lat': 'Lat', 'Tipologia': 'Tipologia', 'Comune': 'Comune', 'Provincia': 'Provincia', 'Regione': 'Regione', 'Altezza': 'Altezza', 'Piani': 'Piani', 'Area_Totale': 'Area_Totale', 'ag_TR_475_[m/s2]': 'ag_TR_475_[m/s2]', 'Costo_mq_ISV_010': 'Costo_mq_ISV_010', 'Costo_mq_ISV_020': 'Costo_mq_ISV_020', 'Costo_mq_ISV_030': 'Costo_mq_ISV_030', 'Costo_mq_ISV_040': 'Costo_mq_ISV_040', 'Costo_mq_ISV_050': 'Costo_mq_ISV_050', 'Costo_mq_ISV_055': 'Costo_mq_ISV_055', 'Costo_mq_ISV_058': 'Costo_mq_ISV_058', 'Costo_mq_ISV_atteso_EP20': 'Costo_mq_ISV_atteso_EP20', 'Costo_mq_ISV_atteso_EP40': 'Costo_mq_ISV_atteso_EP40', 'Costo_totale_intervento_EP20': 'Costo_totale_intervento_EP20', 'Costo_totale_intervento_EP40': 'Costo_totale_intervento_EP40', });
lyr_IND_EP20_min150_max300_7.set('fieldAliases', {'fid': 'fid', 'Long': 'Long', 'Lat': 'Lat', 'Tipologia': 'Tipologia', 'Comune': 'Comune', 'Provincia': 'Provincia', 'Regione': 'Regione', 'Altezza': 'Altezza', 'Piani': 'Piani', 'Area_Totale': 'Area_Totale', 'ag_TR_475_[m/s2]': 'ag_TR_475_[m/s2]', 'Costo_mq_ISV_010': 'Costo_mq_ISV_010', 'Costo_mq_ISV_020': 'Costo_mq_ISV_020', 'Costo_mq_ISV_030': 'Costo_mq_ISV_030', 'Costo_mq_ISV_040': 'Costo_mq_ISV_040', 'Costo_mq_ISV_050': 'Costo_mq_ISV_050', 'Costo_mq_ISV_055': 'Costo_mq_ISV_055', 'Costo_mq_ISV_058': 'Costo_mq_ISV_058', 'Costo_mq_ISV_atteso_EP20': 'Costo_mq_ISV_atteso_EP20', 'Costo_mq_ISV_atteso_EP40': 'Costo_mq_ISV_atteso_EP40', 'Costo_totale_intervento_EP20': 'Costo_totale_intervento_EP20', 'Costo_totale_intervento_EP40': 'Costo_totale_intervento_EP40', });
lyr_IND_EP20_max150_8.set('fieldAliases', {'fid': 'fid', 'Long': 'Long', 'Lat': 'Lat', 'Tipologia': 'Tipologia', 'Comune': 'Comune', 'Provincia': 'Provincia', 'Regione': 'Regione', 'Altezza': 'Altezza', 'Piani': 'Piani', 'Area_Totale': 'Area_Totale', 'ag_TR_475_[m/s2]': 'ag_TR_475_[m/s2]', 'Costo_mq_ISV_010': 'Costo_mq_ISV_010', 'Costo_mq_ISV_020': 'Costo_mq_ISV_020', 'Costo_mq_ISV_030': 'Costo_mq_ISV_030', 'Costo_mq_ISV_040': 'Costo_mq_ISV_040', 'Costo_mq_ISV_050': 'Costo_mq_ISV_050', 'Costo_mq_ISV_055': 'Costo_mq_ISV_055', 'Costo_mq_ISV_058': 'Costo_mq_ISV_058', 'Costo_mq_ISV_atteso_EP20': 'Costo_mq_ISV_atteso_EP20', 'Costo_mq_ISV_atteso_EP40': 'Costo_mq_ISV_atteso_EP40', 'Costo_totale_intervento_EP20': 'Costo_totale_intervento_EP20', 'Costo_totale_intervento_EP40': 'Costo_totale_intervento_EP40', });
lyr_CAM_EP20_min4_9.set('fieldAliases', {'fid': 'fid', 'Lat': 'Lat', 'Long': 'Long', 'Comune': 'Comune', 'Provincia': 'Provincia', 'Regione': 'Regione', 'Altezza': 'Altezza', 'Volume_m3': 'Volume_m3', 'Massa_ton': 'Massa_ton', 'Periodo_s': 'Periodo_s', 'ag_TR_475_[m/s2]': 'ag_TR_475_[m/s2]', 'AMD': 'AMD', 'Costo': 'Costo', 'Euro_m3': 'Euro_m3', });
lyr_CAM_EP20_max4_10.set('fieldAliases', {'fid': 'fid', 'Lat': 'Lat', 'Long': 'Long', 'Comune': 'Comune', 'Provincia': 'Provincia', 'Regione': 'Regione', 'Altezza': 'Altezza', 'Volume_m3': 'Volume_m3', 'Massa_ton': 'Massa_ton', 'Periodo_s': 'Periodo_s', 'ag_TR_475_[m/s2]': 'ag_TR_475_[m/s2]', 'AMD': 'AMD', 'Costo': 'Costo', 'Euro_m3': 'Euro_m3', });
lyr_OSP_EP40_min900_11.set('fieldAliases', {'fid': 'fid', 'Long': 'Long', 'Lat': 'Lat', 'Comune': 'Comune', 'Provincia': 'Provincia', 'Regione': 'Regione', 'Altezza': 'Altezza', 'Piani': 'Piani', 'Area_tot': 'Area_tot', 'ag_TR_475_[m/s2]': 'ag_TR_475_[m/s2]', 'Costo_mq_ISV_010': 'Costo_mq_ISV_010', 'Costo_mq_ISV_020': 'Costo_mq_ISV_020', 'Costo_mq_ISV_030': 'Costo_mq_ISV_030', 'Costo_mq_ISV_040': 'Costo_mq_ISV_040', 'Costo_mq_ISV_050': 'Costo_mq_ISV_050', 'Costo_mq_ISV_055': 'Costo_mq_ISV_055', 'Costo_mq_ISV_058': 'Costo_mq_ISV_058', 'Costo_mq_ISV_atteso_EP20': 'Costo_mq_ISV_atteso_EP20', 'Costo_mq_ISV_atteso_EP40': 'Costo_mq_ISV_atteso_EP40', 'Costo_tot_intervento_atteso_EP20': 'Costo_tot_intervento_atteso_EP20', 'Costo_tot_intervento_atteso_EP40': 'Costo_tot_intervento_atteso_EP40', });
lyr_OSP_EP40_min600_max900osp_csv_12.set('fieldAliases', {'fid': 'fid', 'Long': 'Long', 'Lat': 'Lat', 'Comune': 'Comune', 'Provincia': 'Provincia', 'Regione': 'Regione', 'Altezza': 'Altezza', 'Piani': 'Piani', 'Area_tot': 'Area_tot', 'ag_TR_475_[m/s2]': 'ag_TR_475_[m/s2]', 'Costo_mq_ISV_010': 'Costo_mq_ISV_010', 'Costo_mq_ISV_020': 'Costo_mq_ISV_020', 'Costo_mq_ISV_030': 'Costo_mq_ISV_030', 'Costo_mq_ISV_040': 'Costo_mq_ISV_040', 'Costo_mq_ISV_050': 'Costo_mq_ISV_050', 'Costo_mq_ISV_055': 'Costo_mq_ISV_055', 'Costo_mq_ISV_058': 'Costo_mq_ISV_058', 'Costo_mq_ISV_atteso_EP20': 'Costo_mq_ISV_atteso_EP20', 'Costo_mq_ISV_atteso_EP40': 'Costo_mq_ISV_atteso_EP40', 'Costo_tot_intervento_atteso_EP20': 'Costo_tot_intervento_atteso_EP20', 'Costo_tot_intervento_atteso_EP40': 'Costo_tot_intervento_atteso_EP40', });
lyr_OSP_EP40_min300_max600_13.set('fieldAliases', {'fid': 'fid', 'Long': 'Long', 'Lat': 'Lat', 'Comune': 'Comune', 'Provincia': 'Provincia', 'Regione': 'Regione', 'Altezza': 'Altezza', 'Piani': 'Piani', 'Area_tot': 'Area_tot', 'ag_TR_475_[m/s2]': 'ag_TR_475_[m/s2]', 'Costo_mq_ISV_010': 'Costo_mq_ISV_010', 'Costo_mq_ISV_020': 'Costo_mq_ISV_020', 'Costo_mq_ISV_030': 'Costo_mq_ISV_030', 'Costo_mq_ISV_040': 'Costo_mq_ISV_040', 'Costo_mq_ISV_050': 'Costo_mq_ISV_050', 'Costo_mq_ISV_055': 'Costo_mq_ISV_055', 'Costo_mq_ISV_058': 'Costo_mq_ISV_058', 'Costo_mq_ISV_atteso_EP20': 'Costo_mq_ISV_atteso_EP20', 'Costo_mq_ISV_atteso_EP40': 'Costo_mq_ISV_atteso_EP40', 'Costo_tot_intervento_atteso_EP20': 'Costo_tot_intervento_atteso_EP20', 'Costo_tot_intervento_atteso_EP40': 'Costo_tot_intervento_atteso_EP40', });
lyr_OSP_EP40_max300_14.set('fieldAliases', {'fid': 'fid', 'Long': 'Long', 'Lat': 'Lat', 'Comune': 'Comune', 'Provincia': 'Provincia', 'Regione': 'Regione', 'Altezza': 'Altezza', 'Piani': 'Piani', 'Area_tot': 'Area_tot', 'ag_TR_475_[m/s2]': 'ag_TR_475_[m/s2]', 'Costo_mq_ISV_010': 'Costo_mq_ISV_010', 'Costo_mq_ISV_020': 'Costo_mq_ISV_020', 'Costo_mq_ISV_030': 'Costo_mq_ISV_030', 'Costo_mq_ISV_040': 'Costo_mq_ISV_040', 'Costo_mq_ISV_050': 'Costo_mq_ISV_050', 'Costo_mq_ISV_055': 'Costo_mq_ISV_055', 'Costo_mq_ISV_058': 'Costo_mq_ISV_058', 'Costo_mq_ISV_atteso_EP20': 'Costo_mq_ISV_atteso_EP20', 'Costo_mq_ISV_atteso_EP40': 'Costo_mq_ISV_atteso_EP40', 'Costo_tot_intervento_atteso_EP20': 'Costo_tot_intervento_atteso_EP20', 'Costo_tot_intervento_atteso_EP40': 'Costo_tot_intervento_atteso_EP40', });
lyr_OSP_EP20_min900_15.set('fieldAliases', {'fid': 'fid', 'Long': 'Long', 'Lat': 'Lat', 'Comune': 'Comune', 'Provincia': 'Provincia', 'Regione': 'Regione', 'Altezza': 'Altezza', 'Piani': 'Piani', 'Area_tot': 'Area_tot', 'ag_TR_475_[m/s2]': 'ag_TR_475_[m/s2]', 'Costo_mq_ISV_010': 'Costo_mq_ISV_010', 'Costo_mq_ISV_020': 'Costo_mq_ISV_020', 'Costo_mq_ISV_030': 'Costo_mq_ISV_030', 'Costo_mq_ISV_040': 'Costo_mq_ISV_040', 'Costo_mq_ISV_050': 'Costo_mq_ISV_050', 'Costo_mq_ISV_055': 'Costo_mq_ISV_055', 'Costo_mq_ISV_058': 'Costo_mq_ISV_058', 'Costo_mq_ISV_atteso_EP20': 'Costo_mq_ISV_atteso_EP20', 'Costo_mq_ISV_atteso_EP40': 'Costo_mq_ISV_atteso_EP40', 'Costo_tot_intervento_atteso_EP20': 'Costo_tot_intervento_atteso_EP20', 'Costo_tot_intervento_atteso_EP40': 'Costo_tot_intervento_atteso_EP40', });
lyr_OSP_EP20_min600_max900_16.set('fieldAliases', {'fid': 'fid', 'Long': 'Long', 'Lat': 'Lat', 'Comune': 'Comune', 'Provincia': 'Provincia', 'Regione': 'Regione', 'Altezza': 'Altezza', 'Piani': 'Piani', 'Area_tot': 'Area_tot', 'ag_TR_475_[m/s2]': 'ag_TR_475_[m/s2]', 'Costo_mq_ISV_010': 'Costo_mq_ISV_010', 'Costo_mq_ISV_020': 'Costo_mq_ISV_020', 'Costo_mq_ISV_030': 'Costo_mq_ISV_030', 'Costo_mq_ISV_040': 'Costo_mq_ISV_040', 'Costo_mq_ISV_050': 'Costo_mq_ISV_050', 'Costo_mq_ISV_055': 'Costo_mq_ISV_055', 'Costo_mq_ISV_058': 'Costo_mq_ISV_058', 'Costo_mq_ISV_atteso_EP20': 'Costo_mq_ISV_atteso_EP20', 'Costo_mq_ISV_atteso_EP40': 'Costo_mq_ISV_atteso_EP40', 'Costo_tot_intervento_atteso_EP20': 'Costo_tot_intervento_atteso_EP20', 'Costo_tot_intervento_atteso_EP40': 'Costo_tot_intervento_atteso_EP40', });
lyr_OSP_EP20_min300_max600_17.set('fieldAliases', {'fid': 'fid', 'Long': 'Long', 'Lat': 'Lat', 'Comune': 'Comune', 'Provincia': 'Provincia', 'Regione': 'Regione', 'Altezza': 'Altezza', 'Piani': 'Piani', 'Area_tot': 'Area_tot', 'ag_TR_475_[m/s2]': 'ag_TR_475_[m/s2]', 'Costo_mq_ISV_010': 'Costo_mq_ISV_010', 'Costo_mq_ISV_020': 'Costo_mq_ISV_020', 'Costo_mq_ISV_030': 'Costo_mq_ISV_030', 'Costo_mq_ISV_040': 'Costo_mq_ISV_040', 'Costo_mq_ISV_050': 'Costo_mq_ISV_050', 'Costo_mq_ISV_055': 'Costo_mq_ISV_055', 'Costo_mq_ISV_058': 'Costo_mq_ISV_058', 'Costo_mq_ISV_atteso_EP20': 'Costo_mq_ISV_atteso_EP20', 'Costo_mq_ISV_atteso_EP40': 'Costo_mq_ISV_atteso_EP40', 'Costo_tot_intervento_atteso_EP20': 'Costo_tot_intervento_atteso_EP20', 'Costo_tot_intervento_atteso_EP40': 'Costo_tot_intervento_atteso_EP40', });
lyr_OSP_EP20_max300_18.set('fieldAliases', {'fid': 'fid', 'Long': 'Long', 'Lat': 'Lat', 'Comune': 'Comune', 'Provincia': 'Provincia', 'Regione': 'Regione', 'Altezza': 'Altezza', 'Piani': 'Piani', 'Area_tot': 'Area_tot', 'ag_TR_475_[m/s2]': 'ag_TR_475_[m/s2]', 'Costo_mq_ISV_010': 'Costo_mq_ISV_010', 'Costo_mq_ISV_020': 'Costo_mq_ISV_020', 'Costo_mq_ISV_030': 'Costo_mq_ISV_030', 'Costo_mq_ISV_040': 'Costo_mq_ISV_040', 'Costo_mq_ISV_050': 'Costo_mq_ISV_050', 'Costo_mq_ISV_055': 'Costo_mq_ISV_055', 'Costo_mq_ISV_058': 'Costo_mq_ISV_058', 'Costo_mq_ISV_atteso_EP20': 'Costo_mq_ISV_atteso_EP20', 'Costo_mq_ISV_atteso_EP40': 'Costo_mq_ISV_atteso_EP40', 'Costo_tot_intervento_atteso_EP20': 'Costo_tot_intervento_atteso_EP20', 'Costo_tot_intervento_atteso_EP40': 'Costo_tot_intervento_atteso_EP40', });
lyr_IND_EP40_min500_1.set('fieldImages', {'fid': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Tipologia': 'TextEdit', 'Comune': 'TextEdit', 'Provincia': 'TextEdit', 'Regione': 'TextEdit', 'Altezza': 'TextEdit', 'Piani': 'Range', 'Area_Totale': 'TextEdit', 'ag_TR_475_[m/s2]': 'TextEdit', 'Costo_mq_ISV_010': 'TextEdit', 'Costo_mq_ISV_020': 'TextEdit', 'Costo_mq_ISV_030': 'TextEdit', 'Costo_mq_ISV_040': 'TextEdit', 'Costo_mq_ISV_050': 'TextEdit', 'Costo_mq_ISV_055': 'TextEdit', 'Costo_mq_ISV_058': 'TextEdit', 'Costo_mq_ISV_atteso_EP20': 'TextEdit', 'Costo_mq_ISV_atteso_EP40': 'TextEdit', 'Costo_totale_intervento_EP20': 'TextEdit', 'Costo_totale_intervento_EP40': 'TextEdit', });
lyr_IND_EP40_min300_max500_2.set('fieldImages', {'fid': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Tipologia': 'TextEdit', 'Comune': 'TextEdit', 'Provincia': 'TextEdit', 'Regione': 'TextEdit', 'Altezza': 'TextEdit', 'Piani': 'Range', 'Area_Totale': 'TextEdit', 'ag_TR_475_[m/s2]': 'TextEdit', 'Costo_mq_ISV_010': 'TextEdit', 'Costo_mq_ISV_020': 'TextEdit', 'Costo_mq_ISV_030': 'TextEdit', 'Costo_mq_ISV_040': 'TextEdit', 'Costo_mq_ISV_050': 'TextEdit', 'Costo_mq_ISV_055': 'TextEdit', 'Costo_mq_ISV_058': 'TextEdit', 'Costo_mq_ISV_atteso_EP20': 'TextEdit', 'Costo_mq_ISV_atteso_EP40': 'TextEdit', 'Costo_totale_intervento_EP20': 'TextEdit', 'Costo_totale_intervento_EP40': 'TextEdit', });
lyr_IND_EP40_min150_max300_3.set('fieldImages', {'fid': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Tipologia': 'TextEdit', 'Comune': 'TextEdit', 'Provincia': 'TextEdit', 'Regione': 'TextEdit', 'Altezza': 'TextEdit', 'Piani': 'Range', 'Area_Totale': 'TextEdit', 'ag_TR_475_[m/s2]': 'TextEdit', 'Costo_mq_ISV_010': 'TextEdit', 'Costo_mq_ISV_020': 'TextEdit', 'Costo_mq_ISV_030': 'TextEdit', 'Costo_mq_ISV_040': 'TextEdit', 'Costo_mq_ISV_050': 'TextEdit', 'Costo_mq_ISV_055': 'TextEdit', 'Costo_mq_ISV_058': 'TextEdit', 'Costo_mq_ISV_atteso_EP20': 'TextEdit', 'Costo_mq_ISV_atteso_EP40': 'TextEdit', 'Costo_totale_intervento_EP20': 'TextEdit', 'Costo_totale_intervento_EP40': 'TextEdit', });
lyr_IND_EP40_max150_4.set('fieldImages', {'fid': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Tipologia': 'TextEdit', 'Comune': 'TextEdit', 'Provincia': 'TextEdit', 'Regione': 'TextEdit', 'Altezza': 'TextEdit', 'Piani': 'Range', 'Area_Totale': 'TextEdit', 'ag_TR_475_[m/s2]': 'TextEdit', 'Costo_mq_ISV_010': 'TextEdit', 'Costo_mq_ISV_020': 'TextEdit', 'Costo_mq_ISV_030': 'TextEdit', 'Costo_mq_ISV_040': 'TextEdit', 'Costo_mq_ISV_050': 'TextEdit', 'Costo_mq_ISV_055': 'TextEdit', 'Costo_mq_ISV_058': 'TextEdit', 'Costo_mq_ISV_atteso_EP20': 'TextEdit', 'Costo_mq_ISV_atteso_EP40': 'TextEdit', 'Costo_totale_intervento_EP20': 'TextEdit', 'Costo_totale_intervento_EP40': 'TextEdit', });
lyr_IND_EP20_min500_5.set('fieldImages', {'fid': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Tipologia': 'TextEdit', 'Comune': 'TextEdit', 'Provincia': 'TextEdit', 'Regione': 'TextEdit', 'Altezza': 'TextEdit', 'Piani': 'Range', 'Area_Totale': 'TextEdit', 'ag_TR_475_[m/s2]': 'TextEdit', 'Costo_mq_ISV_010': 'TextEdit', 'Costo_mq_ISV_020': 'TextEdit', 'Costo_mq_ISV_030': 'TextEdit', 'Costo_mq_ISV_040': 'TextEdit', 'Costo_mq_ISV_050': 'TextEdit', 'Costo_mq_ISV_055': 'TextEdit', 'Costo_mq_ISV_058': 'TextEdit', 'Costo_mq_ISV_atteso_EP20': 'TextEdit', 'Costo_mq_ISV_atteso_EP40': 'TextEdit', 'Costo_totale_intervento_EP20': 'TextEdit', 'Costo_totale_intervento_EP40': 'TextEdit', });
lyr_IND_EP20_min300_max500_6.set('fieldImages', {'fid': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Tipologia': 'TextEdit', 'Comune': 'TextEdit', 'Provincia': 'TextEdit', 'Regione': 'TextEdit', 'Altezza': 'TextEdit', 'Piani': 'Range', 'Area_Totale': 'TextEdit', 'ag_TR_475_[m/s2]': 'TextEdit', 'Costo_mq_ISV_010': 'TextEdit', 'Costo_mq_ISV_020': 'TextEdit', 'Costo_mq_ISV_030': 'TextEdit', 'Costo_mq_ISV_040': 'TextEdit', 'Costo_mq_ISV_050': 'TextEdit', 'Costo_mq_ISV_055': 'TextEdit', 'Costo_mq_ISV_058': 'TextEdit', 'Costo_mq_ISV_atteso_EP20': 'TextEdit', 'Costo_mq_ISV_atteso_EP40': 'TextEdit', 'Costo_totale_intervento_EP20': 'TextEdit', 'Costo_totale_intervento_EP40': 'TextEdit', });
lyr_IND_EP20_min150_max300_7.set('fieldImages', {'fid': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Tipologia': 'TextEdit', 'Comune': 'TextEdit', 'Provincia': 'TextEdit', 'Regione': 'TextEdit', 'Altezza': 'TextEdit', 'Piani': 'Range', 'Area_Totale': 'TextEdit', 'ag_TR_475_[m/s2]': 'TextEdit', 'Costo_mq_ISV_010': 'TextEdit', 'Costo_mq_ISV_020': 'TextEdit', 'Costo_mq_ISV_030': 'TextEdit', 'Costo_mq_ISV_040': 'TextEdit', 'Costo_mq_ISV_050': 'TextEdit', 'Costo_mq_ISV_055': 'TextEdit', 'Costo_mq_ISV_058': 'TextEdit', 'Costo_mq_ISV_atteso_EP20': 'TextEdit', 'Costo_mq_ISV_atteso_EP40': 'TextEdit', 'Costo_totale_intervento_EP20': 'TextEdit', 'Costo_totale_intervento_EP40': 'TextEdit', });
lyr_IND_EP20_max150_8.set('fieldImages', {'fid': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Tipologia': 'TextEdit', 'Comune': 'TextEdit', 'Provincia': 'TextEdit', 'Regione': 'TextEdit', 'Altezza': 'TextEdit', 'Piani': 'Range', 'Area_Totale': 'TextEdit', 'ag_TR_475_[m/s2]': 'TextEdit', 'Costo_mq_ISV_010': 'TextEdit', 'Costo_mq_ISV_020': 'TextEdit', 'Costo_mq_ISV_030': 'TextEdit', 'Costo_mq_ISV_040': 'TextEdit', 'Costo_mq_ISV_050': 'TextEdit', 'Costo_mq_ISV_055': 'TextEdit', 'Costo_mq_ISV_058': 'TextEdit', 'Costo_mq_ISV_atteso_EP20': 'TextEdit', 'Costo_mq_ISV_atteso_EP40': 'TextEdit', 'Costo_totale_intervento_EP20': 'TextEdit', 'Costo_totale_intervento_EP40': 'TextEdit', });
lyr_CAM_EP20_min4_9.set('fieldImages', {'fid': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Comune': 'TextEdit', 'Provincia': 'TextEdit', 'Regione': 'TextEdit', 'Altezza': 'TextEdit', 'Volume_m3': 'TextEdit', 'Massa_ton': 'TextEdit', 'Periodo_s': 'TextEdit', 'ag_TR_475_[m/s2]': 'TextEdit', 'AMD': 'Range', 'Costo': 'TextEdit', 'Euro_m3': 'TextEdit', });
lyr_CAM_EP20_max4_10.set('fieldImages', {'fid': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Comune': 'TextEdit', 'Provincia': 'TextEdit', 'Regione': 'TextEdit', 'Altezza': 'TextEdit', 'Volume_m3': 'TextEdit', 'Massa_ton': 'TextEdit', 'Periodo_s': 'TextEdit', 'ag_TR_475_[m/s2]': 'TextEdit', 'AMD': 'Range', 'Costo': 'TextEdit', 'Euro_m3': 'TextEdit', });
lyr_OSP_EP40_min900_11.set('fieldImages', {'fid': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Comune': 'TextEdit', 'Provincia': 'TextEdit', 'Regione': 'TextEdit', 'Altezza': 'TextEdit', 'Piani': 'Range', 'Area_tot': 'Range', 'ag_TR_475_[m/s2]': 'TextEdit', 'Costo_mq_ISV_010': 'TextEdit', 'Costo_mq_ISV_020': 'TextEdit', 'Costo_mq_ISV_030': 'TextEdit', 'Costo_mq_ISV_040': 'TextEdit', 'Costo_mq_ISV_050': 'TextEdit', 'Costo_mq_ISV_055': 'TextEdit', 'Costo_mq_ISV_058': 'TextEdit', 'Costo_mq_ISV_atteso_EP20': 'TextEdit', 'Costo_mq_ISV_atteso_EP40': 'TextEdit', 'Costo_tot_intervento_atteso_EP20': 'TextEdit', 'Costo_tot_intervento_atteso_EP40': 'TextEdit', });
lyr_OSP_EP40_min600_max900osp_csv_12.set('fieldImages', {'fid': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Comune': 'TextEdit', 'Provincia': 'TextEdit', 'Regione': 'TextEdit', 'Altezza': 'TextEdit', 'Piani': 'Range', 'Area_tot': 'Range', 'ag_TR_475_[m/s2]': 'TextEdit', 'Costo_mq_ISV_010': 'TextEdit', 'Costo_mq_ISV_020': 'TextEdit', 'Costo_mq_ISV_030': 'TextEdit', 'Costo_mq_ISV_040': 'TextEdit', 'Costo_mq_ISV_050': 'TextEdit', 'Costo_mq_ISV_055': 'TextEdit', 'Costo_mq_ISV_058': 'TextEdit', 'Costo_mq_ISV_atteso_EP20': 'TextEdit', 'Costo_mq_ISV_atteso_EP40': 'TextEdit', 'Costo_tot_intervento_atteso_EP20': 'TextEdit', 'Costo_tot_intervento_atteso_EP40': 'TextEdit', });
lyr_OSP_EP40_min300_max600_13.set('fieldImages', {'fid': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Comune': 'TextEdit', 'Provincia': 'TextEdit', 'Regione': 'TextEdit', 'Altezza': 'TextEdit', 'Piani': 'Range', 'Area_tot': 'Range', 'ag_TR_475_[m/s2]': 'TextEdit', 'Costo_mq_ISV_010': 'TextEdit', 'Costo_mq_ISV_020': 'TextEdit', 'Costo_mq_ISV_030': 'TextEdit', 'Costo_mq_ISV_040': 'TextEdit', 'Costo_mq_ISV_050': 'TextEdit', 'Costo_mq_ISV_055': 'TextEdit', 'Costo_mq_ISV_058': 'TextEdit', 'Costo_mq_ISV_atteso_EP20': 'TextEdit', 'Costo_mq_ISV_atteso_EP40': 'TextEdit', 'Costo_tot_intervento_atteso_EP20': 'TextEdit', 'Costo_tot_intervento_atteso_EP40': 'TextEdit', });
lyr_OSP_EP40_max300_14.set('fieldImages', {'fid': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Comune': 'TextEdit', 'Provincia': 'TextEdit', 'Regione': 'TextEdit', 'Altezza': 'TextEdit', 'Piani': 'Range', 'Area_tot': 'Range', 'ag_TR_475_[m/s2]': 'TextEdit', 'Costo_mq_ISV_010': 'TextEdit', 'Costo_mq_ISV_020': 'TextEdit', 'Costo_mq_ISV_030': 'TextEdit', 'Costo_mq_ISV_040': 'TextEdit', 'Costo_mq_ISV_050': 'TextEdit', 'Costo_mq_ISV_055': 'TextEdit', 'Costo_mq_ISV_058': 'TextEdit', 'Costo_mq_ISV_atteso_EP20': 'TextEdit', 'Costo_mq_ISV_atteso_EP40': 'TextEdit', 'Costo_tot_intervento_atteso_EP20': 'TextEdit', 'Costo_tot_intervento_atteso_EP40': 'TextEdit', });
lyr_OSP_EP20_min900_15.set('fieldImages', {'fid': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Comune': 'TextEdit', 'Provincia': 'TextEdit', 'Regione': 'TextEdit', 'Altezza': 'TextEdit', 'Piani': 'Range', 'Area_tot': 'Range', 'ag_TR_475_[m/s2]': 'TextEdit', 'Costo_mq_ISV_010': 'TextEdit', 'Costo_mq_ISV_020': 'TextEdit', 'Costo_mq_ISV_030': 'TextEdit', 'Costo_mq_ISV_040': 'TextEdit', 'Costo_mq_ISV_050': 'TextEdit', 'Costo_mq_ISV_055': 'TextEdit', 'Costo_mq_ISV_058': 'TextEdit', 'Costo_mq_ISV_atteso_EP20': 'TextEdit', 'Costo_mq_ISV_atteso_EP40': 'TextEdit', 'Costo_tot_intervento_atteso_EP20': 'TextEdit', 'Costo_tot_intervento_atteso_EP40': 'TextEdit', });
lyr_OSP_EP20_min600_max900_16.set('fieldImages', {'fid': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Comune': 'TextEdit', 'Provincia': 'TextEdit', 'Regione': 'TextEdit', 'Altezza': 'TextEdit', 'Piani': 'Range', 'Area_tot': 'Range', 'ag_TR_475_[m/s2]': 'TextEdit', 'Costo_mq_ISV_010': 'TextEdit', 'Costo_mq_ISV_020': 'TextEdit', 'Costo_mq_ISV_030': 'TextEdit', 'Costo_mq_ISV_040': 'TextEdit', 'Costo_mq_ISV_050': 'TextEdit', 'Costo_mq_ISV_055': 'TextEdit', 'Costo_mq_ISV_058': 'TextEdit', 'Costo_mq_ISV_atteso_EP20': 'TextEdit', 'Costo_mq_ISV_atteso_EP40': 'TextEdit', 'Costo_tot_intervento_atteso_EP20': 'TextEdit', 'Costo_tot_intervento_atteso_EP40': 'TextEdit', });
lyr_OSP_EP20_min300_max600_17.set('fieldImages', {'fid': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Comune': 'TextEdit', 'Provincia': 'TextEdit', 'Regione': 'TextEdit', 'Altezza': 'TextEdit', 'Piani': 'Range', 'Area_tot': 'Range', 'ag_TR_475_[m/s2]': 'TextEdit', 'Costo_mq_ISV_010': 'TextEdit', 'Costo_mq_ISV_020': 'TextEdit', 'Costo_mq_ISV_030': 'TextEdit', 'Costo_mq_ISV_040': 'TextEdit', 'Costo_mq_ISV_050': 'TextEdit', 'Costo_mq_ISV_055': 'TextEdit', 'Costo_mq_ISV_058': 'TextEdit', 'Costo_mq_ISV_atteso_EP20': 'TextEdit', 'Costo_mq_ISV_atteso_EP40': 'TextEdit', 'Costo_tot_intervento_atteso_EP20': 'TextEdit', 'Costo_tot_intervento_atteso_EP40': 'TextEdit', });
lyr_OSP_EP20_max300_18.set('fieldImages', {'fid': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Comune': 'TextEdit', 'Provincia': 'TextEdit', 'Regione': 'TextEdit', 'Altezza': 'TextEdit', 'Piani': 'Range', 'Area_tot': 'Range', 'ag_TR_475_[m/s2]': 'TextEdit', 'Costo_mq_ISV_010': 'TextEdit', 'Costo_mq_ISV_020': 'TextEdit', 'Costo_mq_ISV_030': 'TextEdit', 'Costo_mq_ISV_040': 'TextEdit', 'Costo_mq_ISV_050': 'TextEdit', 'Costo_mq_ISV_055': 'TextEdit', 'Costo_mq_ISV_058': 'TextEdit', 'Costo_mq_ISV_atteso_EP20': 'TextEdit', 'Costo_mq_ISV_atteso_EP40': 'TextEdit', 'Costo_tot_intervento_atteso_EP20': 'TextEdit', 'Costo_tot_intervento_atteso_EP40': 'TextEdit', });
lyr_IND_EP40_min500_1.set('fieldLabels', {'fid': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Tipologia': 'no label', 'Comune': 'no label', 'Provincia': 'no label', 'Regione': 'no label', 'Altezza': 'inline label - visible with data', 'Piani': 'inline label - visible with data', 'Area_Totale': 'inline label - visible with data', 'ag_TR_475_[m/s2]': 'inline label - visible with data', 'Costo_mq_ISV_010': 'inline label - visible with data', 'Costo_mq_ISV_020': 'inline label - visible with data', 'Costo_mq_ISV_030': 'inline label - visible with data', 'Costo_mq_ISV_040': 'inline label - visible with data', 'Costo_mq_ISV_050': 'inline label - visible with data', 'Costo_mq_ISV_055': 'inline label - visible with data', 'Costo_mq_ISV_058': 'inline label - visible with data', 'Costo_mq_ISV_atteso_EP20': 'inline label - visible with data', 'Costo_mq_ISV_atteso_EP40': 'inline label - visible with data', 'Costo_totale_intervento_EP20': 'no label', 'Costo_totale_intervento_EP40': 'no label', });
lyr_IND_EP40_min300_max500_2.set('fieldLabels', {'fid': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Tipologia': 'no label', 'Comune': 'no label', 'Provincia': 'no label', 'Regione': 'no label', 'Altezza': 'inline label - visible with data', 'Piani': 'inline label - visible with data', 'Area_Totale': 'inline label - visible with data', 'ag_TR_475_[m/s2]': 'inline label - visible with data', 'Costo_mq_ISV_010': 'inline label - visible with data', 'Costo_mq_ISV_020': 'inline label - visible with data', 'Costo_mq_ISV_030': 'inline label - visible with data', 'Costo_mq_ISV_040': 'inline label - visible with data', 'Costo_mq_ISV_050': 'inline label - visible with data', 'Costo_mq_ISV_055': 'inline label - visible with data', 'Costo_mq_ISV_058': 'inline label - visible with data', 'Costo_mq_ISV_atteso_EP20': 'inline label - visible with data', 'Costo_mq_ISV_atteso_EP40': 'inline label - visible with data', 'Costo_totale_intervento_EP20': 'no label', 'Costo_totale_intervento_EP40': 'no label', });
lyr_IND_EP40_min150_max300_3.set('fieldLabels', {'fid': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Tipologia': 'no label', 'Comune': 'no label', 'Provincia': 'no label', 'Regione': 'no label', 'Altezza': 'inline label - visible with data', 'Piani': 'inline label - visible with data', 'Area_Totale': 'inline label - visible with data', 'ag_TR_475_[m/s2]': 'inline label - visible with data', 'Costo_mq_ISV_010': 'inline label - visible with data', 'Costo_mq_ISV_020': 'inline label - visible with data', 'Costo_mq_ISV_030': 'inline label - visible with data', 'Costo_mq_ISV_040': 'inline label - visible with data', 'Costo_mq_ISV_050': 'inline label - visible with data', 'Costo_mq_ISV_055': 'inline label - visible with data', 'Costo_mq_ISV_058': 'inline label - visible with data', 'Costo_mq_ISV_atteso_EP20': 'inline label - visible with data', 'Costo_mq_ISV_atteso_EP40': 'inline label - visible with data', 'Costo_totale_intervento_EP20': 'no label', 'Costo_totale_intervento_EP40': 'no label', });
lyr_IND_EP40_max150_4.set('fieldLabels', {'fid': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Tipologia': 'no label', 'Comune': 'no label', 'Provincia': 'no label', 'Regione': 'no label', 'Altezza': 'inline label - visible with data', 'Piani': 'inline label - visible with data', 'Area_Totale': 'inline label - visible with data', 'ag_TR_475_[m/s2]': 'inline label - visible with data', 'Costo_mq_ISV_010': 'inline label - visible with data', 'Costo_mq_ISV_020': 'inline label - visible with data', 'Costo_mq_ISV_030': 'inline label - visible with data', 'Costo_mq_ISV_040': 'inline label - visible with data', 'Costo_mq_ISV_050': 'inline label - visible with data', 'Costo_mq_ISV_055': 'inline label - visible with data', 'Costo_mq_ISV_058': 'inline label - visible with data', 'Costo_mq_ISV_atteso_EP20': 'inline label - visible with data', 'Costo_mq_ISV_atteso_EP40': 'inline label - visible with data', 'Costo_totale_intervento_EP20': 'no label', 'Costo_totale_intervento_EP40': 'no label', });
lyr_IND_EP20_min500_5.set('fieldLabels', {'fid': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Tipologia': 'no label', 'Comune': 'no label', 'Provincia': 'no label', 'Regione': 'no label', 'Altezza': 'inline label - visible with data', 'Piani': 'inline label - visible with data', 'Area_Totale': 'inline label - visible with data', 'ag_TR_475_[m/s2]': 'inline label - visible with data', 'Costo_mq_ISV_010': 'inline label - visible with data', 'Costo_mq_ISV_020': 'inline label - visible with data', 'Costo_mq_ISV_030': 'inline label - visible with data', 'Costo_mq_ISV_040': 'inline label - visible with data', 'Costo_mq_ISV_050': 'inline label - visible with data', 'Costo_mq_ISV_055': 'inline label - visible with data', 'Costo_mq_ISV_058': 'inline label - visible with data', 'Costo_mq_ISV_atteso_EP20': 'inline label - visible with data', 'Costo_mq_ISV_atteso_EP40': 'inline label - visible with data', 'Costo_totale_intervento_EP20': 'no label', 'Costo_totale_intervento_EP40': 'no label', });
lyr_IND_EP20_min300_max500_6.set('fieldLabels', {'fid': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Tipologia': 'no label', 'Comune': 'no label', 'Provincia': 'no label', 'Regione': 'no label', 'Altezza': 'inline label - visible with data', 'Piani': 'inline label - visible with data', 'Area_Totale': 'inline label - visible with data', 'ag_TR_475_[m/s2]': 'inline label - visible with data', 'Costo_mq_ISV_010': 'inline label - visible with data', 'Costo_mq_ISV_020': 'inline label - visible with data', 'Costo_mq_ISV_030': 'inline label - visible with data', 'Costo_mq_ISV_040': 'inline label - visible with data', 'Costo_mq_ISV_050': 'inline label - visible with data', 'Costo_mq_ISV_055': 'inline label - visible with data', 'Costo_mq_ISV_058': 'inline label - visible with data', 'Costo_mq_ISV_atteso_EP20': 'inline label - visible with data', 'Costo_mq_ISV_atteso_EP40': 'inline label - visible with data', 'Costo_totale_intervento_EP20': 'no label', 'Costo_totale_intervento_EP40': 'no label', });
lyr_IND_EP20_min150_max300_7.set('fieldLabels', {'fid': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Tipologia': 'no label', 'Comune': 'no label', 'Provincia': 'no label', 'Regione': 'no label', 'Altezza': 'inline label - visible with data', 'Piani': 'inline label - visible with data', 'Area_Totale': 'inline label - visible with data', 'ag_TR_475_[m/s2]': 'inline label - visible with data', 'Costo_mq_ISV_010': 'inline label - visible with data', 'Costo_mq_ISV_020': 'inline label - visible with data', 'Costo_mq_ISV_030': 'inline label - visible with data', 'Costo_mq_ISV_040': 'inline label - visible with data', 'Costo_mq_ISV_050': 'inline label - visible with data', 'Costo_mq_ISV_055': 'inline label - visible with data', 'Costo_mq_ISV_058': 'inline label - visible with data', 'Costo_mq_ISV_atteso_EP20': 'inline label - visible with data', 'Costo_mq_ISV_atteso_EP40': 'inline label - visible with data', 'Costo_totale_intervento_EP20': 'no label', 'Costo_totale_intervento_EP40': 'no label', });
lyr_IND_EP20_max150_8.set('fieldLabels', {'fid': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Tipologia': 'no label', 'Comune': 'no label', 'Provincia': 'no label', 'Regione': 'no label', 'Altezza': 'inline label - visible with data', 'Piani': 'inline label - visible with data', 'Area_Totale': 'inline label - visible with data', 'ag_TR_475_[m/s2]': 'inline label - visible with data', 'Costo_mq_ISV_010': 'inline label - visible with data', 'Costo_mq_ISV_020': 'inline label - visible with data', 'Costo_mq_ISV_030': 'inline label - visible with data', 'Costo_mq_ISV_040': 'inline label - visible with data', 'Costo_mq_ISV_050': 'inline label - visible with data', 'Costo_mq_ISV_055': 'inline label - visible with data', 'Costo_mq_ISV_058': 'inline label - visible with data', 'Costo_mq_ISV_atteso_EP20': 'inline label - visible with data', 'Costo_mq_ISV_atteso_EP40': 'inline label - visible with data', 'Costo_totale_intervento_EP20': 'no label', 'Costo_totale_intervento_EP40': 'no label', });
lyr_CAM_EP20_min4_9.set('fieldLabels', {'fid': 'no label', 'Lat': 'no label', 'Long': 'no label', 'Comune': 'no label', 'Provincia': 'no label', 'Regione': 'no label', 'Altezza': 'inline label - visible with data', 'Volume_m3': 'inline label - visible with data', 'Massa_ton': 'inline label - visible with data', 'Periodo_s': 'inline label - visible with data', 'ag_TR_475_[m/s2]': 'inline label - visible with data', 'AMD': 'inline label - visible with data', 'Costo': 'inline label - visible with data', 'Euro_m3': 'inline label - visible with data', });
lyr_CAM_EP20_max4_10.set('fieldLabels', {'fid': 'no label', 'Lat': 'no label', 'Long': 'no label', 'Comune': 'no label', 'Provincia': 'no label', 'Regione': 'no label', 'Altezza': 'inline label - visible with data', 'Volume_m3': 'inline label - visible with data', 'Massa_ton': 'inline label - visible with data', 'Periodo_s': 'inline label - visible with data', 'ag_TR_475_[m/s2]': 'inline label - visible with data', 'AMD': 'inline label - visible with data', 'Costo': 'inline label - visible with data', 'Euro_m3': 'inline label - visible with data', });
lyr_OSP_EP40_min900_11.set('fieldLabels', {'fid': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Comune': 'no label', 'Provincia': 'no label', 'Regione': 'no label', 'Altezza': 'inline label - visible with data', 'Piani': 'inline label - visible with data', 'Area_tot': 'inline label - visible with data', 'ag_TR_475_[m/s2]': 'inline label - visible with data', 'Costo_mq_ISV_010': 'inline label - visible with data', 'Costo_mq_ISV_020': 'inline label - visible with data', 'Costo_mq_ISV_030': 'inline label - visible with data', 'Costo_mq_ISV_040': 'inline label - visible with data', 'Costo_mq_ISV_050': 'inline label - visible with data', 'Costo_mq_ISV_055': 'inline label - visible with data', 'Costo_mq_ISV_058': 'inline label - visible with data', 'Costo_mq_ISV_atteso_EP20': 'inline label - visible with data', 'Costo_mq_ISV_atteso_EP40': 'inline label - visible with data', 'Costo_tot_intervento_atteso_EP20': 'no label', 'Costo_tot_intervento_atteso_EP40': 'no label', });
lyr_OSP_EP40_min600_max900osp_csv_12.set('fieldLabels', {'fid': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Comune': 'no label', 'Provincia': 'no label', 'Regione': 'no label', 'Altezza': 'inline label - visible with data', 'Piani': 'inline label - visible with data', 'Area_tot': 'inline label - visible with data', 'ag_TR_475_[m/s2]': 'inline label - visible with data', 'Costo_mq_ISV_010': 'inline label - visible with data', 'Costo_mq_ISV_020': 'inline label - visible with data', 'Costo_mq_ISV_030': 'inline label - visible with data', 'Costo_mq_ISV_040': 'inline label - visible with data', 'Costo_mq_ISV_050': 'inline label - visible with data', 'Costo_mq_ISV_055': 'inline label - visible with data', 'Costo_mq_ISV_058': 'inline label - visible with data', 'Costo_mq_ISV_atteso_EP20': 'inline label - visible with data', 'Costo_mq_ISV_atteso_EP40': 'inline label - visible with data', 'Costo_tot_intervento_atteso_EP20': 'no label', 'Costo_tot_intervento_atteso_EP40': 'no label', });
lyr_OSP_EP40_min300_max600_13.set('fieldLabels', {'fid': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Comune': 'no label', 'Provincia': 'no label', 'Regione': 'no label', 'Altezza': 'inline label - visible with data', 'Piani': 'inline label - visible with data', 'Area_tot': 'inline label - visible with data', 'ag_TR_475_[m/s2]': 'inline label - visible with data', 'Costo_mq_ISV_010': 'inline label - visible with data', 'Costo_mq_ISV_020': 'inline label - visible with data', 'Costo_mq_ISV_030': 'inline label - visible with data', 'Costo_mq_ISV_040': 'inline label - visible with data', 'Costo_mq_ISV_050': 'inline label - visible with data', 'Costo_mq_ISV_055': 'inline label - visible with data', 'Costo_mq_ISV_058': 'inline label - visible with data', 'Costo_mq_ISV_atteso_EP20': 'inline label - visible with data', 'Costo_mq_ISV_atteso_EP40': 'inline label - visible with data', 'Costo_tot_intervento_atteso_EP20': 'no label', 'Costo_tot_intervento_atteso_EP40': 'no label', });
lyr_OSP_EP40_max300_14.set('fieldLabels', {'fid': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Comune': 'no label', 'Provincia': 'no label', 'Regione': 'no label', 'Altezza': 'inline label - visible with data', 'Piani': 'inline label - visible with data', 'Area_tot': 'inline label - visible with data', 'ag_TR_475_[m/s2]': 'inline label - visible with data', 'Costo_mq_ISV_010': 'inline label - visible with data', 'Costo_mq_ISV_020': 'inline label - visible with data', 'Costo_mq_ISV_030': 'inline label - visible with data', 'Costo_mq_ISV_040': 'inline label - visible with data', 'Costo_mq_ISV_050': 'inline label - visible with data', 'Costo_mq_ISV_055': 'inline label - visible with data', 'Costo_mq_ISV_058': 'inline label - visible with data', 'Costo_mq_ISV_atteso_EP20': 'inline label - visible with data', 'Costo_mq_ISV_atteso_EP40': 'inline label - visible with data', 'Costo_tot_intervento_atteso_EP20': 'no label', 'Costo_tot_intervento_atteso_EP40': 'no label', });
lyr_OSP_EP20_min900_15.set('fieldLabels', {'fid': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Comune': 'no label', 'Provincia': 'no label', 'Regione': 'no label', 'Altezza': 'inline label - visible with data', 'Piani': 'inline label - visible with data', 'Area_tot': 'inline label - visible with data', 'ag_TR_475_[m/s2]': 'inline label - visible with data', 'Costo_mq_ISV_010': 'inline label - visible with data', 'Costo_mq_ISV_020': 'inline label - visible with data', 'Costo_mq_ISV_030': 'inline label - visible with data', 'Costo_mq_ISV_040': 'inline label - visible with data', 'Costo_mq_ISV_050': 'inline label - visible with data', 'Costo_mq_ISV_055': 'inline label - visible with data', 'Costo_mq_ISV_058': 'inline label - visible with data', 'Costo_mq_ISV_atteso_EP20': 'inline label - visible with data', 'Costo_mq_ISV_atteso_EP40': 'inline label - visible with data', 'Costo_tot_intervento_atteso_EP20': 'no label', 'Costo_tot_intervento_atteso_EP40': 'no label', });
lyr_OSP_EP20_min600_max900_16.set('fieldLabels', {'fid': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Comune': 'no label', 'Provincia': 'no label', 'Regione': 'no label', 'Altezza': 'inline label - visible with data', 'Piani': 'inline label - visible with data', 'Area_tot': 'inline label - visible with data', 'ag_TR_475_[m/s2]': 'inline label - visible with data', 'Costo_mq_ISV_010': 'inline label - visible with data', 'Costo_mq_ISV_020': 'inline label - visible with data', 'Costo_mq_ISV_030': 'inline label - visible with data', 'Costo_mq_ISV_040': 'inline label - visible with data', 'Costo_mq_ISV_050': 'inline label - visible with data', 'Costo_mq_ISV_055': 'inline label - visible with data', 'Costo_mq_ISV_058': 'inline label - visible with data', 'Costo_mq_ISV_atteso_EP20': 'inline label - visible with data', 'Costo_mq_ISV_atteso_EP40': 'inline label - visible with data', 'Costo_tot_intervento_atteso_EP20': 'no label', 'Costo_tot_intervento_atteso_EP40': 'no label', });
lyr_OSP_EP20_min300_max600_17.set('fieldLabels', {'fid': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Comune': 'no label', 'Provincia': 'no label', 'Regione': 'no label', 'Altezza': 'inline label - visible with data', 'Piani': 'inline label - visible with data', 'Area_tot': 'inline label - visible with data', 'ag_TR_475_[m/s2]': 'inline label - visible with data', 'Costo_mq_ISV_010': 'inline label - visible with data', 'Costo_mq_ISV_020': 'inline label - visible with data', 'Costo_mq_ISV_030': 'inline label - visible with data', 'Costo_mq_ISV_040': 'inline label - visible with data', 'Costo_mq_ISV_050': 'inline label - visible with data', 'Costo_mq_ISV_055': 'inline label - visible with data', 'Costo_mq_ISV_058': 'inline label - visible with data', 'Costo_mq_ISV_atteso_EP20': 'inline label - visible with data', 'Costo_mq_ISV_atteso_EP40': 'inline label - visible with data', 'Costo_tot_intervento_atteso_EP20': 'no label', 'Costo_tot_intervento_atteso_EP40': 'no label', });
lyr_OSP_EP20_max300_18.set('fieldLabels', {'fid': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Comune': 'no label', 'Provincia': 'no label', 'Regione': 'no label', 'Altezza': 'inline label - visible with data', 'Piani': 'inline label - visible with data', 'Area_tot': 'inline label - visible with data', 'ag_TR_475_[m/s2]': 'inline label - visible with data', 'Costo_mq_ISV_010': 'inline label - visible with data', 'Costo_mq_ISV_020': 'inline label - visible with data', 'Costo_mq_ISV_030': 'inline label - visible with data', 'Costo_mq_ISV_040': 'inline label - visible with data', 'Costo_mq_ISV_050': 'inline label - visible with data', 'Costo_mq_ISV_055': 'inline label - visible with data', 'Costo_mq_ISV_058': 'inline label - visible with data', 'Costo_mq_ISV_atteso_EP20': 'inline label - visible with data', 'Costo_mq_ISV_atteso_EP40': 'inline label - visible with data', 'Costo_tot_intervento_atteso_EP20': 'no label', 'Costo_tot_intervento_atteso_EP40': 'no label', });
lyr_OSP_EP20_max300_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});