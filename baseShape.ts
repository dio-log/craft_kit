//3D 여부
//필수 속성을 가장 바깥에 
//부수적인건 option
/*
base를 상속받은 각 클래스는 shape이고
쉐입은 같더라고 객체를 분류할 네이밍이 다를수있음(vesda, 감지기 등)
각 객체는 시퀀스를 가지고 있고 관리되어야함

객체 생성을 하나의 컨스트럭터로만 생성하고 
shape:String = "circle", "square" 등 으로 내부적으로 객체 생성하고 시퀀스를 주어 관리한다
*/

//공통옵션만 가지고 있고 상세옵션은 상속클래스마다 바빌론객체 생성에 맞는 옵션을 가져야함 
//객체마다 설정되는 툴팁도 있고 외부 카테코리마다 설정되는 툴팁도 있다고 하고, 객체 툴팁이 없는 경우 부모를 툴팁을 열게 작성
//즉 중요도는 자식이 우선
class BaseShape{
    protected id: number;
    mainCategory: string;
    subCategory: string;
    centerCoordinates : object; // {x: number, y: number, z: number}; 객체의 중심 좌표
    wdh: object; //{width: number, depth: number, height: number}; 객체의 크기(가로, 세로, 높이)
    label: object; //{title: String, size: number, font: String, color: String};
                    //객체 이름, 부가정보, 폰트, 글자크기,  
    options: object|null; //{opacity: number, scale: number, color: String, src: string} 객체 옵션
                    // 투명도, 배율, 색상, 참조 이미지, 각 객체의 정적 옵션
    pulgins: object; //{tooltip: {} } 
    //애니메이션션

    // optionsBy: object;
    //이건 베이스말고 더 상위에 넣어야할듯?

    constructor(id: number, mainCategory: string, subCategory: string, centerCoordinates: object, coordinates: object, options: object|null, label: object, src: string, pulgins: Object, ){
        this.id = id;
        this.centerCoordinates = centerCoordinates;
        this.wdh = coordinates;
        this.options = options;
        this.label = label;
        this.pulgins = pulgins;
        // this.globalOptions = globalOptions;
        this.mainCategory = mainCategory;
        this.subCategory = subCategory;
    }

}
//sphere, square, polygon, cylinder,
class Square extends BaseShape{
    constructor(id: number, mainCategory: string, subCategory: string, centerCoordinates: object, coordinates: object, options: object, label: object, src: string, pulgins: Object){
        super(id, mainCategory, subCategory, centerCoordinates, coordinates, options, label, src, pulgins);
    }
}

// class Circle extends Base{
//     constructor(coordinate:object, wdh:object, options: object, label: object, src: string){
//         super(coordinate,wdh,options,label, src);

//     }
// }

// class Polygon extends Base{
//     constructor(coordinate:object, wdh:object, options: object, label: object, src: string){
//         super(coordinate,wdh,options,label, src);
//     }
// }

// class Cylinder extends Base{ 

//     constructor(coordinate:object, wdh:object, options: object, label: object, src: string){
//         super(coordinate,wdh,options,label, src);
//     }
// }


class CallBackEvent {
    click(){

    }
    hover(){

    }
    
}