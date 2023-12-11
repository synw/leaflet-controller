import L from "leaflet";
import { MarkerController, MarkerControllerParams } from "./interfaces";

/** Create a marker controller */
const useMarkerController = (params: MarkerControllerParams): MarkerController => {
  const name = params.name;
  const type = "marker";
  let _iconOptions = Object.assign({}, params.iconOptions);
  const icon = L.divIcon(params.iconOptions);
  let _markerOptions = params.markerOptions ?? {};
  _markerOptions.icon = icon;
  const marker = L.marker(params.latlng, _markerOptions)
  let _iconSvg = params?.iconSvg ?? '';
  let _svgClass = params?.svgCls ?? '';

  const html = (data: string) => {
    _iconOptions.html = data;
    marker.setIcon(L.divIcon(_iconOptions))
  }

  const cls = (cls: string) => {
    _iconOptions.className = cls;
    marker.setIcon(L.divIcon(_iconOptions))
  }

  const removeCls = (cls: string) => {
    const _li = (_iconOptions.className ?? "").split(" ");
    const _nli = _li.filter(obj => obj !== cls)
    _iconOptions.className = _nli.join(" ");
    marker.setIcon(L.divIcon(_iconOptions))
  }

  const addToCls = (cls: string) => {
    _iconOptions.className += " " + cls;
    marker.setIcon(L.divIcon(_iconOptions))
  }

  const buildSvgIcon = (): L.DivIcon => {
    let svgStr = _iconSvg.replace("<svg ", `<svg class="${_svgClass}" `);
    _iconOptions.html = svgStr;
    return L.divIcon(_iconOptions)
  }

  const svgCls = (cls: string) => {
    _svgClass = cls;
    marker.setIcon(buildSvgIcon())
  }

  const addToSvgCls = (cls: string) => {
    _svgClass += " " + cls;
    marker.setIcon(buildSvgIcon())
  }

  // init
  if (_svgClass.length > 0) {
    marker.setIcon(buildSvgIcon())
  }

  return {
    name,
    type,
    marker,
    get iconOptions(): L.DivIconOptions {
      return _iconOptions
    },
    set iconOptions(options: L.DivIconOptions) {
      _iconOptions = options
    },
    html,
    cls,
    addToCls,
    removeCls,
    svgCls,
    addToSvgCls
  }
}

export default useMarkerController