import { IAcessoStrategy } from './iacesso';

export class AcessoSystem {
    public name: string;
    public chosenAccess: IAcessoStrategy;

    constructor(name: string, chosenAccess: IAcessoStrategy) {
        this.name = name;
        this.chosenAccess = chosenAccess;
    }

    begin(): void {
        console.log(`${ this.name } decided to:`);
        this.chosenAccess.letsGo();
    }
}
