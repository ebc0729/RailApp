d3.json("../Rail.json", function(err, data) {
    mapDraw(data);
});
console.log(window.ENV.RailsEnv);
function mapDraw(geojson){
    //mapboxgs トークン
    mapboxgl.accessToken=gon.mapbox_access_key;
    //Setup mapbox-gl map
    var map = new mapboxgl.Map({
        container:'map', // containerid
        style:'mapbox://styles/mapbox/streets-v8',
        // style: 'mapbox://styles/kumakame/cjbkgydwp295s2sqsjrsgejln',
        center:[141.15448379999998, 39.702053],
        zoom: 4
    });
    map.addControl(new mapboxgl.NavigationControl());
    // svg要素をアペンドする
    var container = map.getCanvasContainer();
    var svg = d3.select(container).append("svg");
    //緯度経度->パスジェネレーター関数
    var transform = d3.geo.transform({point: projectPoint});
    var path = d3.geo.path().projection(transform);
    var featureElement = svg.selectAll("path")
        .data(geojson.features)
        .enter()
        .append("path")
		.attr({
            "stroke":"red",
            "fill":"none"
        });
    //path要素のアップデート
    function update(){
        featureElement.attr("d",path);
    }
    map.on("viewreset",update)
    map.on("movestart",function(){
        svg.classed("hidden",true);
    });
    map.on("rotate",function(){
        svg.classed("hidden",true);
    });
    map.on("moveend",function(){
        update()
        svg.classed("hidden",false);
    });
    //初期レンダリング
    update();
    function projectPoint(lon,lat){
        var point = map.project(new mapboxgl.LngLat(lon,lat));
        this.stream.point(point.x,point.y);
    }
}