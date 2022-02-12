import Vue from 'vue';

declare class CommandLine {
    rootPath: string | null;
    command: string | null;

    archived: boolean;
    justResult: boolean;

    commandPrefix: string | null;

    static init(rootPath: string): CommandLine;
    static log(text: string): CommandLine;
}

declare class NerdyTerminal extends Vue {
    newLine(): void;
    writeLine(commandLine: CommandLine): void;
}


export { CommandLine }
export default NerdyTerminal;

