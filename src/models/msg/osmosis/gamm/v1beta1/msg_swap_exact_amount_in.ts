import { Categories } from '../../../types';

class OsmosisSwapExactAmountIn {
    public category: Categories;
    public type: string;
    public routes: any;
    public sender: string;
    public tokenIn: any;
    public tokenOutMinAmount: string;

    constructor(payload: any) {
        this.category = 'osmosis';
        this.type = payload.type;
        this.routes = payload.routes;
        this.sender = payload.sender;
        this.tokenIn = payload.tokenIn;
        this.tokenOutMinAmount = payload.tokenOutMinAmount;
    }

    static fromJson(json: any) {
        return new OsmosisSwapExactAmountIn({
            type: json['@type'],
            routes: json.routes,
            sender: json.sender,
            tokenIn: json.tokenIn,
            tokenOutMinAmount: json.tokenOutMinAmount
        });
    }
}

export default OsmosisSwapExactAmountIn;
