// JS
var chart = JSC.chart('chartDiv',{
  debug: true,
  type: 'radarArea',
  defaultBox_boxVisible: false,
  legend_visible: false,
  title: {
    position: 'center',
    label: {
      text: '2020 Sales ',
      style: {  fontSize: 15,  fontWeight: 'normal'}
    }
  },
  defaultSeries: {
    opacity: 0.7,
    shape_innerFill: '#f9f9f9',
    defaultPoint_marker: {outline_color: 'white',size: 12 }
  },
  series: [
    {
       
/*Controls the area fill.*/
      shape_fill: '#49a2ff',
      name: 'William',
      points: [
        { name: 'Jan', y: 196  },
        { name: 'Feb', y: 178  },
        { name: 'Mar', y: 169  },
        { name: 'Apr', y: 166  },
        { name: 'May', y: 172  },
        { name: 'Jun', y: 132  },
        { name: 'Jul', y: 95  },
        { name: 'Aug', y: 66  },
        { name: 'Sep', y: 127  },
        { name: 'Oct', y: 142  },
        { name: 'Nov', y: 158  },
        { name: 'Dec', y: 197  }
      ]
    }
  ]
});