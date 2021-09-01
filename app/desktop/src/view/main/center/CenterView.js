Ext.define('MyApp.view.main.center.CenterView', {
	// extend: 'Ext.Container',
	// xtype: 'centerview',
	// cls: 'centerview',
	// layout: 'card'});
	extend: 'Ext.grid.Grid',
	xtype: 'centerview',
	cls: 'centerview',
	title: 'Air India Flight Arrivals',
	//cell bind with data - start
	// itemConfig: {
	// 	viewModel: true
	// },
	// columns: [{
	// 	text: 'Date',
	// 	// xtype: 'datecolumn',
	// 	// dataIndex: 'date',
	// 	cell: {
	// 		bind: '{record.date:date("F j")}'
	// 	}
	// }, {
	// 	text: 'Airline',
	// 	width: 120,
	// 	cell: {
	// 		bind: '{record.airline}'
	// 	}
	// }, {
	// 	text: 'From',
	// 	cell: {
	// 		bind: '{record.to}'
	// 	},
	// 	width: 160
	// }, {
	// 	text: 'Scheduled',
	// 	cell: {
	// 		bind: '{record.plannedDeparture}'
	// 	},
	// 	align: 'center'
	// }],
	 
	// store: {
	// 	type: 'store',
	// 	autoLoad: true,
	// 	fields: [{name: 'date',type: 'date',dateFormat: 'j. M'}],
	// 	proxy: {
	// 		type: 'ajax',
	// 		url: 'departures.json',
	// 		reader: {rootProperty: 'results'}
	// 	}
	// },
	// launch: function() {
	// 	var css = Ext.util.CSS.createStyleSheet();
	// 	Ext.util.CSS.createRule(css, '.x-red', 'color:red !important;');
	// 	Ext.util.CSS.createRule(css, '.x-green', 'color:green !important;');
	// 	Ext.util.CSS.createRule(css, '.x-blue', 'color:blue !important;');
	 
	// }
	//cell bind with data - end
//cell bind with style - start
itemConfig: {
    viewModel: {
 
        formulas: {
 
            toolHeartIconCls: function(get) {return get('record.favorite') ? 'x-fa fa-heart x-red' : 'x-fa fa-heart';},
 
            toCellCls: {
                bind: '{record.to}',
                get: function(to){
                    // Destination (to) is passed to this function, which can return
                    // a value based on the data. In this case, we're just simulating
                    // whether the flight is late.
                    return ['x-red', 'x-green', 'x-blue'][Ext.Number.randomInt(0, 2)];
                }
            }
 
        }
 
    }
},
items: [{
    xtype: 'label',
    docked: 'top',
    margin: 4,
    html: '<i class="fa fa-square x-green"></i> Early &nbsp;&nbsp;&nbsp;<i class="fa fa-square x-blue"></i> On-time &nbsp;&nbsp;&nbsp;<i class="fa fa-square x-red"></i> Late'
}],
columns: [{
    text: 'Date',
    xtype: 'datecolumn',
    dataIndex: 'date',
    format: 'F j'
}, {
    xtype: 'gridcolumn',
    text: 'Airline',
    dataIndex: 'airline',
    width: 120
}, {
    text: 'To',
    dataIndex: 'to',
    cell: {
        bind: {
            cls: '{toCellCls}'
        }
    },
    width: 160
}, {
    text: 'Scheduled',
    dataIndex: 'plannedDeparture',
    align: 'center'
}, {
    text: 'Favorite',
    cell: {
        tools: [{
            bind: {
                iconCls: '{toolHeartIconCls}'
            },
            handler: function(grid, context) {
                context.record.set('favorite', !context.record.data.favorite);
            }
        }]
    },
    align: 'center'
}],
 
store: {
    type: 'store',
    autoLoad: true,
    fields: [{name: 'date',type: 'date',dateFormat: 'j. M'}],
    proxy: {
        type: 'ajax',
        url: 'departures.json',
        reader: {rootProperty: 'results'}
    }
}
//cell bind with style - end
	});
	// Ext.application({
	// 	name: 'MyApp',
	// 	mainView: 'MyApp.view.Main',
	// 	launch: function(){
	// 		var css = Ext.util.CSS.createStyleSheet();
	// 		Ext.util.CSS.createRule(css, '.x-red', 'color:red !important;');
	// 		Ext.util.CSS.createRule(css, '.x-green', 'color:green !important;');
	// 		Ext.util.CSS.createRule(css, '.x-blue', 'color:blue !important;');
		 
	// 	}
	// 	});