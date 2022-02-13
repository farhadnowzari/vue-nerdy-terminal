import RenderComponentType from '@/enums/RenderComponentType';

export default class RenderContext {
    constructor(type: RenderComponentType) {
        this.type = type;
    }
    type: RenderComponentType;
    content: string | RenderContext[] | null = null;

    static initRow(): RenderContext {
        return new RenderContext(RenderComponentType.row);
    }

    static initColumn(): RenderContext {
        return new RenderContext(RenderComponentType.column);
    }

    static initText(content: string): RenderContext {
        const renderContext = new RenderContext(RenderComponentType.text);
        renderContext.content = content;
        return renderContext;
    }
}