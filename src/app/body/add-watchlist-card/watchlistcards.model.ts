export class WatchlistCard{
    Movie: string;
    User: string;

    constructor({ Movie, User} :
        {Movie:string, User:string}) {
            this.Movie = Movie;
            this.User = User;
        }
}