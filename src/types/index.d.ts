import Vue from 'vue';
import CommandLine from '../models/CommandLine';

declare class NerdyTerminal extends Vue {
    newLine(): void;
    writeLine(commandLine: CommandLine): void;
}


export { CommandLine }
export default NerdyTerminal;

