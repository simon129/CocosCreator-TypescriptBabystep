declare namespace GS {

    /**
     * 用來加Global的EventListener target假如是Component 當Destroy會砍掉 要自行拿掉的話請使用GS.removeCustomEvent
     * @param {string} name
     * @param {Function} callback
     * @param {any} target
     */
    function addListener(name: string, callback: Function, target?: any): void;

    /**
     * 用來傳遞node之間的通知, 請使用this.node.on or off
     * @param {Node} node
     * @param {string} name 名字
     * @param {要傳的物件_obj} value
     */
    function dispatchEvent(node: cc.Node, name: string, value: any): void;

    /**
     * @description 等同舊的cc.eventManager.dispatchCustomEvent
     * @param {string} name 名字
     * @param {any} value 要傳的物件
     */
    function dispatchCustomEvent(name: string, value: any);

    /**
     * 此func用來下載外部圖片 用法跟cc.loader一樣, 只是有些網址是沒有副檔名時可以用這方法取得圖片
     * @param {string} url 外部URL
     * @param {Function} callback
     */
    function loadImg(url, callback): void;

    /** 遊戲大廳編號 */
    const gameLobbyID: number;

    /** 外載資源的路徑 */
    const mediaUrl: string;
}

declare namespace StringUtility {
    function format(format: string, ...parameters: any[]): string;
}

declare namespace CodeUtility {
    /**
     * 讓數字加入逗點
     * @param {number} number 
     * @returns {string} 
     */
    function getCurrencyString(number: number): string;
}

declare interface Math {
    /**
     * Decimal adjustment of a number.
     *
     * @param {number}  value The number.
     * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
     * @returns {Number} The adjusted value.
     */
    ceil10(value: number, exp: Integer): number;
}

declare namespace axios {
    interface AxiosResponse<T = any> {
        data: T;
        status: number;
        statusText: string;
        headers: any;
        config: AxiosRequestConfig;
        request?: any;
    }

    interface AxiosPromise<T = any> extends Promise<AxiosResponse<T>> {
    }

    function get<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>;
}