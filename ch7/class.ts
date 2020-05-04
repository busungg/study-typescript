class Flashlight {
  constructor(public lightIntensity: number) {}
}

class Bicycle {
  constructor(public numberOfWheel: number) {}

  getNumberOfWheel(): number {
    return this.numberOfWheel;
  }
}

class MountainBike extends Bicycle {
  flashlight: Flashlight;

  constructor(public numberOfWheel: number, public hasBackSaddle: boolean) {
    super(numberOfWheel);
    this.flashlight = new Flashlight(90);
  }

  getHasBackSaddle(): boolean {
    return this.hasBackSaddle;
  }
}

let hasBackSaddle = true;
let numberOfWheel = 2;
let mountainBike = new MountainBike(numberOfWheel, hasBackSaddle);
console.log(mountainBike);
console.log(mountainBike.getNumberOfWheel());

//생성자 매개변수에 접근 제한자 추가
/**
 * 매개변수 속성이 돼 멤버 변수가 되는 효과가 발생합니다.
 */
class Cube {
  public width: number;
  private length: number;
  protected height: number;

  constructor(pWidth: number, pLength: number, pHeight: number) {
    this.width = pWidth;
    this.length = pLength;
    this.height = pHeight;
  }
}

const cube: Cube = new Cube(1, 2, 3);
console.log(cube);
console.log(cube.width);

class CubeSimple {
  constructor(
    public width: number,
    private length: number,
    protected height: number,
  ) {}

  getVolume(): number {
    return this.width * this.length * this.height;
  }
}

const cubeSimple: CubeSimple = new CubeSimple(1, 2, 3);
console.log(cubeSimple);
console.log(cubeSimple.getVolume());

// 부모 클래스의 멤버 이용하기
/**
 * 1. super 키워드는 부모 클래스의 공개 멤버에만 접근할 수 있습니다.
 * 2. this 키워드는 부모 클래스에서 상속받은 멤버와 현재 클래스의 멤버 모두에 접근할 수 있습니다.
 */

class PC {
  constructor(public hddCapacity: string) {}

  private ram: string = '0G';
  protected set ramCapacity(value: string) {
    this.ram = value;
  }
  protected get ramCapacity() {
    return this.ram;
  }

  protected getHddCapacity() {
    return this.hddCapacity;
  }
}

class Desktop extends PC {
  constructor(hddCapaticy: string) {
    super(hddCapaticy);
  }

  getInfo(): string {
    return `hdd capacity is ${super.getHddCapacity()} and ram capacity is ${
      this.ramCapacity
    }`;
  }
}

const desktop = new Desktop('10G');
console.log(desktop);

// 추상 클래스를 이용한 공통 기능 정의
/**
 * 추상 클래스는 구현 메서드와 추상 메서드가 동시에 존재 할 수 있습니다.
 * 1. 구현 메서드: 실제 구현 내용을 포함한 메서드
 * 2. 추상 메서드: 구현 내용이 없는 메서드
 *
 * 추상 클래스는 구현 내용이 없는 추상 메서드를 포함하기 때문에 불완전한 클래스라서
 * 단독으로 객체를 생성할 수 없고 추상 클래스를 상속하고 구현 내용을 추가하는 자식 클래스를
 * 통해 객체를 생성해야 합니다.
 */
