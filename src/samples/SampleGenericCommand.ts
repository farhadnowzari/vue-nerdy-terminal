import RenderContext from "@/models/RenderContext";
import { CommandLine } from "..";

export default class SampleGenericCommand {
    static sampleHelp(): CommandLine {
        const row = RenderContext.initRow();
        row.content = [];
        for(let  i = 0; i < 2; i++) {
            const col = RenderContext.initColumn();
            col.content = [ RenderContext.initText(`This is a test, I'm a nerd and I hate the company I'm in`) ];
            row.content.push(col);
        }
        const commandLine = CommandLine.withRenderContext(row);
        return commandLine;
    }
}