type TyTooltip = {
    html: string,
    callback: Function,
}
//툴팁은 string으로 html 태그를 받는게 더 유연할 것 같기도?

type TyOptions = {
    opacity: number,
    scale: number,
    color: String,
    src: string,
}

type TyCenterCoordinates = {
    x: number,
    y: number,
    z: number,
}

type TyWdh = {
    width: number,
    depth: number,
    height: number,
}

//객체 위에 띄울 
//애니메이션은 객체에 걸면 따라가는 걸로
type TyLabel = {
    text: string,
    size: number,
    font: string,
    color: string,
    position: object,
}

type TyPlugins = {
    tooltip: TyTooltip,

}

