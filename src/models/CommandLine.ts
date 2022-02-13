import RenderContext from './RenderContext';

export default class CommandLine {

    constructor(rootPath?: string) {
        this.rootPath = rootPath || '';
    }

    rootPath: string | null = null;
    command: string | null = null;
    renderContext: RenderContext | null = null;

    archived = false;
    justResult = false;

    get commandPrefix(): string | null {
        if (this.justResult) return null;
        return `${this.rootPath}>`;
    }

    get onlyRender(): boolean {
        return this.renderContext !== null;
    }

    static init(rootPath: string): CommandLine {
        return new CommandLine(rootPath);
    }

    static log(text: string): CommandLine {
        const _log = new CommandLine();
        _log.command = text;
        _log.justResult = true;
        _log.archived = true;
        return _log;
    }

    static withRenderContext(renderEl: RenderContext): CommandLine {
        const _renderEl = new CommandLine();
        _renderEl.renderContext = renderEl;
        _renderEl.archived = true;
        _renderEl.justResult = true;
        return _renderEl;
    }
}