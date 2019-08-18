export class Quote {
    showDescription: boolean;
    constructor(
    public id: number,
    public name: string,
    public owner:string,
    public completeDate: Date
    ) { 
        this.upvotes =0;
        this.downvotes =0;
        this.showDescription=false;
    }
    
}
