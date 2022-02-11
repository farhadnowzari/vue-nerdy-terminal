export default class CommandLine {

    constructor(rootPath: string) {
        this.rootPath = rootPath;
    }

    rootPath: string | null = null;
    command: string | null = null;

    archived = false;
    justResult = false;

    get commandPrefix(): string | null {
        if(this.justResult) return null;
        return `${this.rootPath}>`;
    }
    

    static init(rootPath: string): CommandLine {
        return new CommandLine(rootPath);
    }
}