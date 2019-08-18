export class Quote {
    showDescription: boolean;
    constructor(
    public id: number,
    public name: string,
    public owner:string,
    // public date: Date
    ) { 
        this.showDescription=false;
    }
    
}
