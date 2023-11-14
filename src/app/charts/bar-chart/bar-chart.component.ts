import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {
  option:any
  labelOption:any


  

  ngOnInit(): void {
    var app:any = {};



const posList = [
  'left',
  'right',
  'top',
  'bottom',
  'inside',
  'insideTop',
  'insideLeft',
  'insideRight',
  'insideBottom',
  'insideTopLeft',
  'insideTopRight',
  'insideBottomLeft',
  'insideBottomRight'
];
app.configParameters = {
  rotate: {
    min: -90,
    max: 90
  },
  align: {
    options: {
      left: 'left',
      center: 'center',
      right: 'right'
    }
  },
  verticalAlign: {
    options: {
      top: 'top',
      middle: 'middle',
      bottom: 'bottom'
    }
  },
  position: {
    options: posList.reduce(function (map:any, pos) {
      map[pos] = pos;
      return map;
    }, {})
  },
  distance: {
    min: 0,
    max: 100
  }
};
app.config = {
  rotate: 90,
  align: 'left',
  verticalAlign: 'middle',
  position: 'insideBottom',
  distance: 15,
  onChange: function () {
    const labelOption = {
      rotate: app.config.rotate,
      align: app.config.align,
      verticalAlign: app.config.verticalAlign,
      position: app.config.position,
      distance: app.config.distance
    };
    this.myChart.setOption({
      series: [
        {
          label: labelOption
        },
        {
          label: labelOption
        },
        {
          label: labelOption
        },
        {
          label: labelOption
        }
      ]
    });
  }
};
this.labelOption = {
  show: true,
  position: app.config.position,
  distance: app.config.distance,
  align: app.config.align,
  verticalAlign: app.config.verticalAlign,
  rotate: app.config.rotate,
  formatter: '{c}  {name|{a}}',
  fontSize: 12,
  rich: {
    name: {}
  }
};




this.option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: ['Reçu', 'Payé', 'Regeté', 'Wetland']
  },
  toolbox: {
    show: true,
    orient: 'vertical',
    left: 'right',
    top: 'center',
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar', 'stack'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  xAxis: [
    {
      type: 'category',
      axisTick: { show: false },
      data: ['PÔLE AMENAGEMENTS HYDRAULIQUES', 'PÔLE BÂTIMENT & VRD', 'PÔLE AMENAGEMENTS MARITIMES & HYDRO-AGRICOLES', 'PÔLE EAU, ENERGIE & ENVIRONNEMENT', 'DIVISION INTERNATIONAL']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Reçu',
      type: 'bar',
      barGap: 0,
      label: this.labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [320, 332, 301, 334, 390]
    },
    {
      name: 'Payé',
      type: 'bar',
      label: this.labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [220, 182, 191, 234, 290]
    },
    {
      name: 'Regeté',
      type: 'bar',
      label: this.labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [150, 232, 201, 154, 190]
    }
  ]
};



  }




}