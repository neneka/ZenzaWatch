import { NicoCommentCss3PlayerView } from "../packages/zenza/src/commentLayer/NicoCommentCss3PlayerView"

export class NicoCommentPlayer {
    constructor(params: {
        filter: {
            enableFilter: boolean,
            fork0: boolean,
            fork1: boolean,
            fork2: boolean,
        },
        showComment: boolean,
        debug: boolean,
        playbackRate?: number,
        commentOpacity?: number,
    })
    _view: NicoCommentCss3PlayerView

    appendTo(node: Node)
    setComment(data: string, options: {format: "json"})
    addChat(text: string, cmd: string, vpos?: number, options?: any)
    currentTime: number
    playbackRate: number
    vpos: number
    setAspectRatio: (ratio: number) => void
}