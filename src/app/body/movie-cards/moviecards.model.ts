export class MovieCard{
    title: string;
    company: string;
    imgPath: string;

    constructor({ title, company, imgPath} :
        {title:string, company:string, imgPath: string}) {
            this.imgPath = imgPath;
            this.company = company;
            this.title = title;
        }
}