// Generated by CoffeeScript 1.4.0
(function() {
  var arr, barWidth, chart, chartHeight, chartWidth, chartdiv, divis, h, i, int, marginBottom, marginLeft, rect, rest, vis, visWidth, visdiv, wdiv, x, y, _i, _j, _len, _ref, _ref1, _results,
    _this = this;

  this.all = [];

  this.all.push({
    nome: "camaro",
    label: "Chevrolet Camaro",
    viswidth: 152,
    data: [
      {
        loc: "BR",
        preco: 265000
      }, {
        loc: "EUA",
        preco: 75000
      }
    ]
  });

  this.all.push({
    nome: "iphone",
    label: "IPhone 4s",
    viswidth: 69,
    data: [
      {
        loc: "BR",
        preco: 2599
      }, {
        loc: "EUA",
        preco: 1098
      }
    ]
  });

  this.all.push({
    nome: "galaxy3",
    label: "Samsung Galaxy S III",
    viswidth: 60,
    data: [
      {
        loc: "BR",
        preco: 1992
      }, {
        loc: "EUA",
        preco: 1080
      }
    ]
  });

  this.all.push({
    nome: "macbook",
    label: "MacBook Pro",
    viswidth: 150,
    data: [
      {
        loc: "BR",
        preco: 6999
      }, {
        loc: "EUA",
        preco: 3398
      }
    ]
  });

  this.all.push({
    nome: "oakleyj",
    label: "Oakley Jupiter Squared",
    viswidth: 130,
    data: [
      {
        loc: "BR",
        preco: 470
      }, {
        loc: "EUA",
        preco: 260
      }
    ]
  });

  this.seed = {
    BR: {
      ex_to_dollar: 2,
      medium_wage: 778,
      minimum_wage: 322
    },
    US: {
      loc: "US",
      medium_wage: 3437,
      minimum_wage: 1160
    }
  };

  marginLeft = 20;

  marginBottom = 20;

  chartWidth = 200;

  chartHeight = 240;

  barWidth = 40;

  _ref = this.all;
  for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
    h = _ref[i];
    visWidth = h.viswidth;
    wdiv = "w" + h.nome;
    visdiv = h.nome + "Vis";
    chartdiv = h.nome + "Chart";
    d3.select("#visu").append("div").attr("id", wdiv).attr("style", "float:left;").append("h4").text(function() {
      return h.label;
    });
    chart = d3.selectAll("#" + wdiv).append("svg:svg").attr("class", "chart").attr("width", chartWidth + marginLeft).attr("height", chartHeight).append("g").attr("transform", "translate(10,15)");
    x = d3.scale.ordinal().domain(h.data).rangeBands([0, chartWidth]);
    y = d3.scale.linear().domain([
      0, d3.max(h.data, function(d) {
        return d.preco;
      })
    ]).range([0, 200]);
    rect = chart.selectAll("rect").data(h.data).enter().append("rect").attr("x", function(d, i) {
      return i * (chartWidth / h.data.length) + marginLeft;
    }).attr("y", function(d) {
      return 200;
    }).attr("width", barWidth).attr("class", function(d) {
      return d.loc.toLowerCase();
    });
    chart.selectAll("text").data(h.data).enter().append("svg:text").attr("x", function(d, i) {
      return i * (200 / h.data.length) + marginLeft;
    }).attr("dy", "1em").attr("y", function(d) {
      return 200 - y(d.preco);
    }).text(function(d) {
      return d.loc;
    }).attr("fill", "white").attr("text-anchor", "middle").attr("dx", barWidth / 2);
    chart.selectAll("text.yAxis").data(h.data).enter().append("svg:text").attr("x", function(d, i) {
      return i * (200 / h.data.length) + marginLeft;
    }).attr("y", 220).attr("dx", barWidth / 2).attr("text-anchor", "middle").text(function(d) {
      return "R$ " + d.preco;
    });
    vis = d3.select("#" + wdiv).data(h.data).append("div").attr("class", "left diff");
    divis = h.data[0].preco / h.data[1].preco;
    int = Math.floor(divis);
    rest = divis - int;
    arr = (function() {
      _results = [];
      for (var _j = 0, _ref1 = int - 1; 0 <= _ref1 ? _j <= _ref1 : _j >= _ref1; 0 <= _ref1 ? _j++ : _j--){ _results.push(_j); }
      return _results;
    }).apply(this).map(function(n) {
      return 1;
    });
    arr.push(rest);
    rect.transition().delay(1000 * i).duration(500).attr("height", function(d) {
      return y(d.preco);
    }).attr("y", function(d) {
      return 200 - y(d.preco);
    });
    vis.selectAll("div").data(arr).enter().append("div").attr("class", h.nome).attr("style", function(d) {
      return "width:" + visWidth * d + "px";
    });
  }

}).call(this);
