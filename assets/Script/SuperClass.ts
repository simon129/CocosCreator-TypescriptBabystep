const { ccclass, property, executionOrder } = cc._decorator;

import ChildClass from "./ChildClass";
import Animal from "./Animal";

export interface RoomData {
    roomName: string,
    tai: number,
}

interface RankData {
    rankName: string,
    no: number,
}

export var CHARACTER = cc.Enum({
    A: -1,
    B: -1,
});

export enum Direction {
    Up,
    Down,
    Left,
    Right,
}

@ccclass
@executionOrder(1)
export default class SuperClass extends cc.Component {

    // ts enum 需要用 cc.Enum 包起來當editor 型別用
    @property({ type: cc.Enum(Direction) })
    dir = Direction.Left;

    @property(cc.Label)
    label: cc.Label = null;

    // primitive type 不用宣告
    @property
    str = '';

    // primitive type 不用宣告
    @property
    num = 5;

    async onLoad() {
        // async/await
        this.label.string = await this.testAsync();
        cc.log('delay 之後才會印出來的訊息');

        // 自己建立的項目, 他可以即時型別
        var list1 = [
            {
                roomName: 'room1',
                tai: 1,
                otherProp: 1111111,
            },
            {
                roomName: 'room2',
                tai: 2,
                otherProp: 'aaaaaaa',
            },
        ];
        this.test(list1);

        /*
        // 可以丟any 進去, list2 是any
        var list2 = (window as any).roomList;
        this.test(list2);

        // any 轉強型別, list3 是強型別了, 但是要自己對型別負責
        var list3 = (window as any).roomList as RoomData[];
        list3.forEach(x => cc.log(x.roomName));
        this.test(list3);
        */
    }

    protected async testAsync(): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            setTimeout(() => {
                resolve("Hello, World! Super");
            }, 0)
        })
    }

    test(list: RoomData[]) {
        cc.log(list.pop().roomName)
    }

    // array
    test2(data: RoomData | RoomData[]) {
        if (Array.isArray(data)) {
            cc.log(data.pop().roomName);
        } else {
            cc.log(data.roomName);
        }
    }

    // interface
    test3(data: RoomData | RankData) {
        if (isRoomData(data)) {
            cc.log(data.roomName);
        } else {
            cc.log(data.rankName);
        }
    }

    // class
    test4(x: SuperClass | Animal) {
        if (x instanceof SuperClass) {
            x.test([]);
        } else {
            x.eat();
        }
    }

    // primitive
    test5(x: string | number) {
        if (typeof x === 'string') {
            x.charAt(1)
        } else {
            x.toFixed(1);
        }
    }
}

export function isRoomData(x): x is RoomData {
    return typeof (x.roomName) !== undefined;
}