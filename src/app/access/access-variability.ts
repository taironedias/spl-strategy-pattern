import { IAcessoStrategy } from './iacesso';

export class AccessWithKey implements IAcessoStrategy {
    public letsGo(): void {
        console.log('Acesso via chave realizado com sucesso');
    }
}


export class AccessWithLoginStudant implements IAcessoStrategy {
    public letsGo(): void {
        console.log('Acesso via login aluno realizado com sucesso');
    }
}

export class AccessWithLoginTeacher implements IAcessoStrategy {
    public letsGo(): void {
        console.log('Acesso via login professor realizado com sucesso');
    }
}
