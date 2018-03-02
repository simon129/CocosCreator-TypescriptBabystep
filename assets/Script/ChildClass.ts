const { ccclass, property } = cc._decorator;

import SuperClass, { Direction, CHARACTER } from "./SuperClass";
//import { Direction } from './SuperClass';

@ccclass
export default class ChildClass extends SuperClass {

    testDir(dir: Direction) {
        cc.log(dir);
    }

    protected async testAsync(): Promise<string> {

        return new Promise<string>((resolve, reject) => {
            setTimeout(() => {
                resolve("Hello, World! From ChildClass!");
            }, 3000);
        });
    }
}


/**
 * public by default
 * export/import, default/named
 * cc.Enum vs typescript enum (using enum in editor)
 * using TYPES (interface/class)
 * cast obj to interface (compilation vs runtime user-defined type guards)
 * 
 * 
 * 怎麼讓plugin 也可以使用ts (還沒找到最佳解)
 *      把ts放在assets 外面, 利用vs code task 編譯之後放到 assets/plugin 下面
 *      //// <reference path="../creator.d.ts" />
 *      declare var GS;
 */


 /*
    --
    **import js**
    import * as DataModal from '../../../data/DataModal';

    or import small module
    import { sendRequest } from '../../../lobby/PhpRequest';

    --
    **import ts, with default class**
    import RankItem from './RankItem';
    import RankItem, { OtherModule1, OtherModule2 } from './RankItem';

    or 
    import * as RankItem from "./room/RankItem";
        RankItem.default
        RankItem.OtherModule1
        RankItem.OtherModule2

    --
    **import ts, without default**
    import * as RankItem from './RankItem';
        RankItem.RankItem
        RankItem.OtherModule1
        RankItem.OtherModule2
    or
    import { RankItem, OtherModule1, OtherModule2 } from './RankItem';    
*/